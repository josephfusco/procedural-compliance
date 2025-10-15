# Pull Request

## Description

**What does this PR do?**

<!-- Provide a clear and concise description of the changes -->


**Related Issue:**

<!-- Link to related issue: Closes #123, Fixes #456, Related to #789 -->


## Type of Change

<!-- Check all that apply -->

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New template (adds new legal template)
- [ ] Template improvement (enhances existing template)
- [ ] Documentation (updates README, guides, tutorials)
- [ ] Citation update (fixes or updates legal citations)
- [ ] Educational content (tutorials, flowcharts, guides)
- [ ] Web interface (GitHub Pages changes)
- [ ] Script/automation (validation, CI/CD)
- [ ] Other (describe below)

## Jurisdiction

<!-- If template-related, which jurisdiction? -->

- [ ] New York
- [ ] Federal
- [ ] Multi-jurisdiction
- [ ] N/A (not template-related)

## Changes Made

<!-- List specific changes in detail -->

**Files Added:**
-

**Files Modified:**
-

**Files Deleted:**
-

## Verification

### For Template Changes

- [ ] All citations verified against official sources (not AI-generated)
- [ ] Template tested with sample information (all placeholders work)
- [ ] Validation script passes: `./scripts/validate.sh [file]`
- [ ] Citation checker passes: `./scripts/check-citations.sh [file]`
- [ ] Grading script gives acceptable score: `./scripts/grade.sh [file]`
- [ ] Cornell Law precision maintained (succinct, accurate)
- [ ] All legal authorities current as of [date]

### For Documentation Changes

- [ ] Markdown linting passes
- [ ] All internal links verified
- [ ] No TODOs or unresolved notes
- [ ] Spelling and grammar checked
- [ ] Examples anonymized (no PII)

### For Web Interface Changes

- [ ] Tested locally (`python3 -m http.server` in `docs/`)
- [ ] HTML/CSS/JS validated
- [ ] Responsive design verified (mobile + desktop)
- [ ] Accessibility checked (semantic HTML, ARIA labels)
- [ ] No console errors in browser

### For Script Changes

- [ ] Script tested with sample inputs
- [ ] Error handling verified
- [ ] Help/usage documentation updated
- [ ] Executable permissions set (`chmod +x`)

## Testing

**How was this tested?**

<!-- Describe your testing process -->

**Test environment:**
- OS:
- Tools used:
- Results:

## Screenshots (if applicable)

<!-- Add screenshots for web interface changes or visual documentation -->

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own changes
- [ ] I have commented my code where necessary (especially complex logic)
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings in CI/CD
- [ ] I have added tests that prove my fix/feature works (if applicable)
- [ ] New and existing tests pass locally
- [ ] All citations verified against official sources
- [ ] All case-specific information anonymized
- [ ] I have read and agree to the [Code of Conduct](/CODE_OF_CONDUCT.md)
- [ ] I have read the [Contributing Guidelines](/CONTRIBUTING.md)

## Legal Verification

**For template or citation changes:**

**Primary sources consulted:**
<!-- List official sources: NY Senate, Cornell LII, official court websites -->

-

**Citation verification date:**
<!-- When did you verify these citations? -->

**Cases checked for subsequent history?**
- [ ] Yes, all cases checked via Justia/Google Scholar
- [ ] N/A (no case law changes)

**Statutes checked for amendments?**
- [ ] Yes, checked official legislative source
- [ ] N/A (no statutory changes)

## Additional Notes

<!-- Any other information reviewers should know -->

---

## For Reviewers

**Review Focus:**
- [ ] Legal accuracy (citations, procedure, jurisdiction)
- [ ] Template functionality (placeholders, structure)
- [ ] Documentation clarity (Cornell Law precision)
- [ ] Code quality (scripts, web interface)
- [ ] Security (no PII, no vulnerabilities)
- [ ] CI/CD passes (all workflows green)

**Approval Criteria:**
- ✅ All verification checkboxes completed by contributor
- ✅ Changes align with repository goals
- ✅ Cornell Law precision maintained
- ✅ Citations verified independently by reviewer
- ✅ No breaking changes without discussion
- ✅ Tests pass (manual and automated)
