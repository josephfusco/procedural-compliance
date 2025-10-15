#!/usr/bin/env bash
#
# grade.sh - Score document completeness and quality
#
# Usage: ./scripts/grade.sh <file>
#

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
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
echo "DOCUMENT QUALITY SCORE"
echo "========================"
echo "File: $file"
echo "========================"
echo ""

score=0
max_score=100

# Category 1: Completeness (30 points)
echo "[1/5] COMPLETENESS (30 pts max)"
completeness=30

# Check for placeholders
if grep -q '{{' "$file" 2>/dev/null; then
    count=$(grep -o '{{' "$file" 2>/dev/null | wc -l | tr -d ' ')
    deduct=$((count * 2))
    if [ "$deduct" -gt 15 ]; then deduct=15; fi
    completeness=$((completeness - deduct))
    echo -e "  ${YELLOW}-${deduct} pts${NC}: $count unfilled placeholders"
fi

# Check for bracket notes
if grep -qE '\[T[KO]' "$file" 2>/dev/null; then
    completeness=$((completeness - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: Contains [TK] or [TO COME] markers"
fi

echo -e "  Score: ${BLUE}$completeness/30${NC}"
score=$((score + completeness))
echo ""

# Category 2: Citation Quality (25 points)
echo "[2/5] CITATION QUALITY (25 pts max)"
citations=25

# Check for citations
cplr_count=$(grep -c 'CPLR §' "$file" 2>/dev/null || echo "0")
nycrr_count=$(grep -c 'NYCRR §' "$file" 2>/dev/null || echo "0")
case_count=$(grep -c ' v\. ' "$file" 2>/dev/null || echo "0")

if [ "$cplr_count" -eq 0 ] && [ "$nycrr_count" -eq 0 ]; then
    citations=$((citations - 15))
    echo -e "  ${RED}-15 pts${NC}: No statutory citations found"
elif [ "$cplr_count" -lt 2 ]; then
    citations=$((citations - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: Few statutory citations"
fi

# Check for case law
if [ "$case_count" -eq 0 ]; then
    citations=$((citations - 10))
    echo -e "  ${YELLOW}-10 pts${NC}: No case law citations"
fi

echo -e "  Score: ${BLUE}$citations/25${NC}"
score=$((score + citations))
echo ""

# Category 3: Professional Format (20 points)
echo "[3/5] PROFESSIONAL FORMAT (20 pts max)"
format=20

# Check for proper header structure
if ! grep -q '^#.*' "$file" 2>/dev/null; then
    format=$((format - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: Missing markdown headers"
fi

# Check for section markers
if ! grep -q '^##' "$file" 2>/dev/null; then
    format=$((format - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: No section breaks"
fi

# Check length (too short may be incomplete)
lines=$(wc -l < "$file" | tr -d ' ')
if [ "$lines" -lt 50 ]; then
    format=$((format - 10))
    echo -e "  ${RED}-10 pts${NC}: Document very short ($lines lines)"
elif [ "$lines" -lt 100 ]; then
    format=$((format - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: Document short ($lines lines)"
fi

echo -e "  Score: ${BLUE}$format/20${NC}"
score=$((score + format))
echo ""

# Category 4: Procedural Elements (15 points)
echo "[4/5] PROCEDURAL ELEMENTS (15 pts max)"
procedure=15

# Check for service certification
if ! grep -qi 'certif' "$file" 2>/dev/null; then
    procedure=$((procedure - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: No service certification"
fi

# Check for signature block
if ! grep -qi 'signature' "$file" 2>/dev/null && ! grep -q '^__' "$file" 2>/dev/null; then
    procedure=$((procedure - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: No signature block"
fi

# Check for date
if ! grep -qi 'date' "$file" 2>/dev/null; then
    procedure=$((procedure - 5))
    echo -e "  ${YELLOW}-5 pts${NC}: No date field"
fi

echo -e "  Score: ${BLUE}$procedure/15${NC}"
score=$((score + procedure))
echo ""

# Category 5: Language Quality (10 points)
echo "[5/5] LANGUAGE QUALITY (10 pts max)"
language=10

# Check for inflammatory language (basic check)
if grep -qiE '(corrupt|bias|liar|fraud|incompetent|dishonest)' "$file" 2>/dev/null; then
    language=$((language - 5))
    echo -e "  ${RED}-5 pts${NC}: Contains potentially inflammatory language"
fi

# Check for excessive caps
caps_count=$(grep -o '[A-Z]\{5,\}' "$file" 2>/dev/null | wc -l | tr -d ' ')
if [ "$caps_count" -gt 3 ]; then
    language=$((language - 3))
    echo -e "  ${YELLOW}-3 pts${NC}: Excessive all-caps words"
fi

echo -e "  Score: ${BLUE}$language/10${NC}"
score=$((score + language))
echo ""

# Final Score
echo "========================"
echo "FINAL SCORE"
echo "========================"

percentage=$((score * 100 / max_score))

if [ "$score" -ge 90 ]; then
    grade="A"
    color=$GREEN
    message="Excellent - ready to file"
elif [ "$score" -ge 80 ]; then
    grade="B"
    color=$GREEN
    message="Good - minor improvements suggested"
elif [ "$score" -ge 70 ]; then
    grade="C"
    color=$YELLOW
    message="Acceptable - review issues before filing"
elif [ "$score" -ge 60 ]; then
    grade="D"
    color=$YELLOW
    message="Needs work - address deficiencies"
else
    grade="F"
    color=$RED
    message="Not ready - major revisions required"
fi

echo -e "${color}$score / $max_score ($percentage%)${NC}"
echo -e "Grade: ${color}$grade${NC}"
echo "$message"
echo ""

if [ "$score" -lt 80 ]; then
    echo "Recommendations:"
    [ "$completeness" -lt 25 ] && echo "  • Fill in all placeholders"
    [ "$citations" -lt 20 ] && echo "  • Add more legal authorities"
    [ "$format" -lt 15 ] && echo "  • Improve document structure"
    [ "$procedure" -lt 12 ] && echo "  • Include all procedural elements"
    [ "$language" -lt 8 ] && echo "  • Review language for professionalism"
fi

echo "========================"
exit 0
