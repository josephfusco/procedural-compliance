# Automation Scripts

Validation and automation utilities for procedural documents.

## Scripts

### `validate.sh` - Document Validator

**Purpose:** Pre-filing validation. Checks for unfilled placeholders, bracket notes, incomplete patterns.

**Usage:**
```bash
./scripts/validate.sh templates/enclosure_judge.md
./scripts/validate.sh my-completed-document.md
```

**Checks:**
1. **Unfilled placeholders:** `{{variable}}` patterns
2. **Bracket notes:** `[TK]`, `[TO COME]` markers
3. **Incomplete patterns:** Empty fields (Index No., Hon., DATE)
4. **Citation format:** Basic CPLR/NYCRR format verification
5. **Common typos:** plaintiff, defendant, judgment
6. **File size:** Warns if >100KB

**Exit codes:**
- `0` = Pass (ready to file)
- `1` = Fail (errors found - fix before filing)

**Output:**
- ✓ PASS (green) = check passed
- ⚠ WARN (yellow) = warning (review but not blocking)
- ✗ FAIL (red) = error (must fix)

---

### `check-citations.sh` - Citation Extractor

**Purpose:** Extract all legal citations for manual verification. Cannot verify citations (AI risk).

**Usage:**
```bash
./scripts/check-citations.sh templates/enclosure_judge.md
```

**Extracts:**
1. **CPLR citations:** `CPLR §2219(a)`
2. **22 NYCRR citations:** `22 NYCRR §202.48(b)`
3. **Case law:** Pattern matching for `Party v. Party`
4. **Federal citations:** `28 U.S.C. §1983`, `42 U.S.C. §1983`
5. **Quality check:** Suspicious patterns (malformed citations, unusually long names)

**Provides verification links:**
- CPLR: https://www.nysenate.gov/legislation/laws/CVP
- 22 NYCRR: https://ww2.nycourts.gov/rules
- Cases: https://scholar.google.com/

**⚠️ CRITICAL:**
This script EXTRACTS but does NOT verify. You MUST manually verify EVERY citation in official sources. AI-generated citations are often fake.

---

### `grade.sh` - Quality Scorer

**Purpose:** Score document completeness and quality (0-100 scale).

**Usage:**
```bash
./scripts/grade.sh templates/enclosure_judge.md
```

**Scoring categories:**

| Category | Points | Checks |
|----------|--------|--------|
| **Completeness** | 30 | Placeholders filled, no TK markers |
| **Citation Quality** | 25 | CPLR/NYCRR citations, case law |
| **Professional Format** | 20 | Headers, structure, length |
| **Procedural Elements** | 15 | Service cert, signature, date |
| **Language Quality** | 10 | Professional tone, no all-caps |

**Grades:**
- **A (90-100):** Excellent - ready to file
- **B (80-89):** Good - minor improvements
- **C (70-79):** Acceptable - review issues
- **D (60-69):** Needs work
- **F (<60):** Major revisions required

**Output:** Score, grade, recommendations for improvement.

---

## Workflow

### Pre-Filing Checklist

**1. Complete document:**
```bash
# Fill in all {{placeholders}} manually or via AI prompts
```

**2. Validate:**
```bash
./scripts/validate.sh my-document.md
# Fix any errors or warnings
```

**3. Extract and verify citations:**
```bash
./scripts/check-citations.sh my-document.md
# Manually verify EACH citation in official sources
```

**4. Grade document:**
```bash
./scripts/grade.sh my-document.md
# Aim for B+ or higher before filing
```

**5. Final review:**
- Proofread
- Check local rules
- Verify service method
- Convert to PDF
- File via NYSCEF or appropriate method

---

## Advanced Usage

### Batch Validation

Validate all templates:
```bash
for file in templates/*.md; do
    echo "Checking $file..."
    ./scripts/validate.sh "$file" || echo "⚠ $file has issues"
done
```

### CI/CD Integration

Use in GitHub Actions (see `.github/workflows/validate.yml`):
```yaml
- name: Validate templates
  run: |
    for file in templates/*.md examples/*.md; do
      ./scripts/validate.sh "$file"
    done
```

### Pre-Commit Hook

Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
for file in $(git diff --cached --name-only --diff-filter=ACM | grep '\.md$'); do
    ./scripts/validate.sh "$file" || exit 1
done
```

---

## Limitations

### What Scripts CAN Do
- ✅ Detect unfilled placeholders
- ✅ Find formatting errors
- ✅ Extract citations for review
- ✅ Score document completeness
- ✅ Catch common typos

### What Scripts CANNOT Do
- ❌ Verify citations are real (must check manually)
- ❌ Check if law is correct for your case
- ❌ Provide legal advice
- ❌ Guarantee court will accept document
- ❌ Check for substantive legal errors
- ❌ Predict outcomes

**User responsibility:**
- Verify all citations manually
- Review for legal accuracy
- Ensure case-specific customization
- Check local court rules
- Proofread final document

---

## Troubleshooting

### Script won't run
```bash
# Make executable
chmod +x scripts/*.sh

# Run with bash if needed
bash scripts/validate.sh file.md
```

### Permission denied
```bash
# Check file permissions
ls -l scripts/

# Fix if needed
chmod 755 scripts/*.sh
```

### Script not found
```bash
# Run from repository root
cd /path/to/procedural-compliance
./scripts/validate.sh templates/file.md
```

### False positives
Scripts use pattern matching. May flag legitimate content. Use judgment.

---

## Future Enhancements

Planned additions:
- `export.sh` - Convert markdown → PDF/DOCX
- `ai-generate.sh` - CLI wrapper for AI prompts
- `deadline.sh` - Calculate CPLR §2104 deadlines
- `serve.sh` - Generate service certificates

---

## Contributing

Improve scripts:
1. Fork repository
2. Enhance script (add checks, fix bugs)
3. Test thoroughly
4. Submit PR with before/after examples

Guidelines:
- Maintain POSIX sh compatibility
- Add usage examples
- Document all checks
- Use color coding (green/yellow/red)
- Exit codes: 0=pass, 1=fail

---

## Support

**Issues:** https://github.com/josephfusco/procedural-compliance/issues

**Documentation:** See `/guides` for comprehensive guidance

**Validation only - not legal advice.**
