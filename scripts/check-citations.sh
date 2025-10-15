#!/usr/bin/env bash
#
# check-citations.sh - Extract and verify legal citations
#
# Usage: ./scripts/check-citations.sh <file>
#

set -e

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

file="$1"

if [ -z "$file" ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

if [ ! -f "$file" ]; then
    echo "Error: File not found: $file"
    exit 1
fi

echo "========================"
echo "CITATION EXTRACTION"
echo "========================"
echo "File: $file"
echo "========================"
echo ""

# Extract CPLR citations
echo "[1/5] CPLR Citations:"
cplr=$(grep -oE 'CPLR §[0-9]+[a-z]*(\([0-9]+\))?' "$file" 2>/dev/null | sort -u || true)
if [ -n "$cplr" ]; then
    echo "$cplr" | while read cite; do
        echo -e "  ${BLUE}→${NC} $cite"
        echo "     Verify: https://www.nysenate.gov/legislation/laws/CVP"
    done
else
    echo "  (none found)"
fi
echo ""

# Extract 22 NYCRR citations
echo "[2/5] 22 NYCRR Citations:"
nycrr=$(grep -oE '22 NYCRR §[0-9]+\.[0-9]+[a-z]*(\([a-z0-9]+\))?' "$file" 2>/dev/null | sort -u || true)
if [ -n "$nycrr" ]; then
    echo "$nycrr" | while read cite; do
        echo -e "  ${BLUE}→${NC} $cite"
        echo "     Verify: https://ww2.nycourts.gov/rules"
    done
else
    echo "  (none found)"
fi
echo ""

# Extract case citations (basic pattern)
echo "[3/5] Case Law Citations:"
cases=$(grep -oE '[A-Z][a-z]+ v\. [A-Z][a-z]+' "$file" 2>/dev/null | sort -u || true)
if [ -n "$cases" ]; then
    echo "$cases" | while read cite; do
        echo -e "  ${BLUE}→${NC} $cite"
        echo "     Verify: https://scholar.google.com/"
    done
else
    echo "  (none found)"
fi
echo ""

# Extract federal citations
echo "[4/5] Federal Citations:"
fed=$(grep -oE '(28|42) U\.S\.C\. §[0-9]+' "$file" 2>/dev/null | sort -u || true)
if [ -n "$fed" ]; then
    echo "$fed" | while read cite; do
        echo -e "  ${BLUE}→${NC} $cite"
        echo "     Verify: https://www.law.cornell.edu/uscode/"
    done
else
    echo "  (none found)"
fi
echo ""

# Check for suspicious patterns (possible fake citations)
echo "[5/5] Citation Quality Check:"
suspicious=0

# Check for citations without proper format
if grep -qE 'CPLR [0-9]' "$file" 2>/dev/null | grep -v '§'; then
    echo -e "  ${YELLOW}⚠${NC} Missing § symbol in some CPLR citations"
    suspicious=$((suspicious + 1))
fi

# Check for very long case names (may be fake)
long_cases=$(grep -oE '[A-Z][a-z]+ v\. [A-Z][a-z]+( [A-Z][a-z]+){4,}' "$file" 2>/dev/null || true)
if [ -n "$long_cases" ]; then
    echo -e "  ${YELLOW}⚠${NC} Unusually long case name (verify existence):"
    echo "$long_cases" | sed 's/^/     /'
    suspicious=$((suspicious + 1))
fi

if [ "$suspicious" -eq 0 ]; then
    echo -e "  ${GREEN}✓${NC} No suspicious patterns detected"
fi
echo ""

echo "========================"
echo "VERIFICATION REQUIRED"
echo "========================"
echo -e "${YELLOW}⚠ IMPORTANT${NC}: This script EXTRACTS citations but cannot verify them."
echo ""
echo "You MUST manually verify EACH citation in official sources:"
echo "  • CPLR: https://www.nysenate.gov/legislation/laws/CVP"
echo "  • 22 NYCRR: https://ww2.nycourts.gov/rules"
echo "  • Cases: Westlaw, Lexis, or Google Scholar"
echo ""
echo "AI-generated citations are often fake. Never file without verification."
echo "========================"
