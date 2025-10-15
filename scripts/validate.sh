#!/usr/bin/env bash
#
# validate.sh - Check document for unfilled placeholders and common errors
#
# Usage: ./scripts/validate.sh <file>
# Example: ./scripts/validate.sh templates/enclosure_judge.md
#

set -e

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

file="$1"

if [ -z "$file" ]; then
    echo "Error: File path required"
    echo ""
    echo "Usage: $0 <file>"
    echo ""
    echo "Example:"
    echo "  $0 templates/enclosure_judge.md"
    exit 1
fi

if [ ! -f "$file" ]; then
    echo "Error: File not found: $file"
    exit 1
fi

echo "===================="
echo "VALIDATION REPORT"
echo "===================="
echo "File: $file"
echo "Date: $(date)"
echo "===================="
echo ""

errors=0
warnings=0

# Check for unfilled {{placeholders}}
echo "[1/6] Checking for unfilled {{placeholders}}..."
placeholders=$(grep -o '{{[^}]*}}' "$file" 2>/dev/null || true)
if [ -n "$placeholders" ]; then
    count=$(echo "$placeholders" | wc -l | tr -d ' ')
    echo -e "${RED}✗ FAIL${NC}: Found $count unfilled placeholder(s):"
    echo "$placeholders" | sed 's/^/  - /'
    errors=$((errors + count))
else
    echo -e "${GREEN}✓ PASS${NC}: No unfilled placeholders"
fi
echo ""

# Check for [bracket notes] that should be removed
echo "[2/6] Checking for [bracket notes]..."
brackets=$(grep -o '\[TO[^]]*\]' "$file" 2>/dev/null || true)
brackets+=$(grep -o '\[TK[^]]*\]' "$file" 2>/dev/null || true)
if [ -n "$brackets" ]; then
    count=$(echo "$brackets" | grep -c '\[' || echo "0")
    echo -e "${YELLOW}⚠ WARN${NC}: Found $count [bracket note(s)] - remove before filing:"
    echo "$brackets" | sed 's/^/  - /'
    warnings=$((warnings + count))
else
    echo -e "${GREEN}✓ PASS${NC}: No bracket notes"
fi
echo ""

# Check for common placeholder patterns that may be missed
echo "[3/6] Checking for common incomplete patterns..."
incomplete=0
if grep -q 'Index No\. $' "$file" 2>/dev/null; then
    echo -e "${RED}✗ FAIL${NC}: 'Index No.' without number"
    incomplete=$((incomplete + 1))
fi
if grep -q 'Hon\. $' "$file" 2>/dev/null; then
    echo -e "${RED}✗ FAIL${NC}: 'Hon.' without judge name"
    incomplete=$((incomplete + 1))
fi
if grep -q 'DATE:$' "$file" 2>/dev/null; then
    echo -e "${RED}✗ FAIL${NC}: 'DATE:' field empty"
    incomplete=$((incomplete + 1))
fi
if [ "$incomplete" -eq 0 ]; then
    echo -e "${GREEN}✓ PASS${NC}: No incomplete patterns detected"
else
    errors=$((errors + incomplete))
fi
echo ""

# Check for proper citation format (basic check)
echo "[4/6] Checking citation format..."
bad_cites=0
# Check for "CPLR §" format (should have section symbol)
if grep -q 'CPLR [0-9]' "$file" 2>/dev/null | grep -v '§'; then
    echo -e "${YELLOW}⚠ WARN${NC}: Found 'CPLR [number]' without § symbol"
    bad_cites=$((bad_cites + 1))
fi
# Check for missing spaces after citations
if grep -qE 'CPLR§[0-9]' "$file" 2>/dev/null; then
    echo -e "${YELLOW}⚠ WARN${NC}: Found 'CPLR§' without space"
    bad_cites=$((bad_cites + 1))
fi
if [ "$bad_cites" -eq 0 ]; then
    echo -e "${GREEN}✓ PASS${NC}: Citation format appears correct"
else
    warnings=$((warnings + bad_cites))
fi
echo ""

# Check for common typos
echo "[5/6] Checking for common typos..."
typos=0
if grep -qi 'plainti[^f]f' "$file" 2>/dev/null; then
    echo -e "${YELLOW}⚠ WARN${NC}: Possible typo: 'plaintif' (missing f?)"
    typos=$((typos + 1))
fi
if grep -qi 'defenda[^n]t' "$file" 2>/dev/null; then
    echo -e "${YELLOW}⚠ WARN${NC}: Possible typo in 'defendant'"
    typos=$((typos + 1))
fi
if grep -qi 'judgement' "$file" 2>/dev/null; then
    echo -e "${YELLOW}⚠ WARN${NC}: Use 'judgment' (not 'judgement') in legal writing"
    typos=$((typos + 1))
fi
if [ "$typos" -eq 0 ]; then
    echo -e "${GREEN}✓ PASS${NC}: No common typos detected"
else
    warnings=$((warnings + typos))
fi
echo ""

# Check file size (warn if very large)
echo "[6/6] Checking file size..."
size=$(wc -c < "$file" | tr -d ' ')
if [ "$size" -gt 100000 ]; then
    echo -e "${YELLOW}⚠ WARN${NC}: Large file (>100KB) - consider splitting"
    warnings=$((warnings + 1))
else
    echo -e "${GREEN}✓ PASS${NC}: File size acceptable"
fi
echo ""

# Summary
echo "===================="
echo "SUMMARY"
echo "===================="
if [ "$errors" -eq 0 ] && [ "$warnings" -eq 0 ]; then
    echo -e "${GREEN}✓ VALIDATION PASSED${NC}"
    echo "Document appears ready to file."
    exit 0
elif [ "$errors" -eq 0 ]; then
    echo -e "${YELLOW}⚠ VALIDATION PASSED WITH WARNINGS${NC}"
    echo "Errors: $errors"
    echo "Warnings: $warnings"
    echo ""
    echo "Review warnings before filing."
    exit 0
else
    echo -e "${RED}✗ VALIDATION FAILED${NC}"
    echo "Errors: $errors"
    echo "Warnings: $warnings"
    echo ""
    echo "Fix errors before filing."
    exit 1
fi
