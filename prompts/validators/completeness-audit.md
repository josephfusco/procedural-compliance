# Validator: Completeness Audit

**Version:** 1.0
**Last Updated:** 2025-10-15

## Objective

Audit a legal document to ensure all required sections, facts, and citations are present before filing.

## Prompt Template

```
You are a legal document auditor. Review the following document for completeness.

DOCUMENT TYPE: {{document_type}}
DOCUMENT TO AUDIT:
{{document_text}}

JURISDICTION: {{jurisdiction}}

TASK:
Check for completeness in these categories:

1. REQUIRED SECTIONS
   - Does document include all sections required for this document type?
   - Are sections in logical order?

2. FACTUAL COMPLETENESS
   - Are all relevant dates included?
   - Are all parties identified?
   - Is the relief requested specific and clear?
   - Are all prior proceedings documented?

3. LEGAL AUTHORITY
   - Are all legal claims supported by citations?
   - Are statutes cited with specific subsections?
   - Is case law included where appropriate?

4. PROCEDURAL REQUIREMENTS
   - Is proper court identified?
   - Is venue stated (if required)?
   - Is jurisdiction addressed (if required)?
   - Is service method stated?

5. FORMAL REQUIREMENTS
   - Is caption complete and correct?
   - Is document dated?
   - Is signature block present?
   - Is certificate of service included (if required)?

6. PLACEHOLDERS
   - Are there any unfilled {{placeholders}}?
   - Are there any [bracket notes] that should be removed?
   - Are there any "TK" or "[TO COME]" markers?

OUTPUT FORMAT:
## COMPLETENESS AUDIT REPORT

### Overall Assessment
[Complete / Needs Minor Revisions / Needs Major Revisions / Incomplete]

### Required Sections
- [ ] [Section name]: [Present/Missing/Incomplete]

### Factual Completeness
- [ ] Case caption: [✓/✗]
- [ ] Index number: [✓/✗]
- [ ] Dates: [✓/✗]
- [ ] Parties: [✓/✗]
- [ ] Relief requested: [✓/✗]

### Legal Authority
- [ ] Statutes cited: [✓/✗]
- [ ] Case law cited: [✓/✗]
- [ ] Citations properly formatted: [✓/✗]

### Procedural Requirements
- [ ] Court identified: [✓/✗]
- [ ] Venue (if required): [✓/✗]
- [ ] Jurisdiction (if required): [✓/✗]
- [ ] Service method: [✓/✗]

### Formal Requirements
- [ ] Complete caption: [✓/✗]
- [ ] Date: [✓/✗]
- [ ] Signature block: [✓/✗]
- [ ] Certificate of service: [✓/✗]

### Issues Found
1. [Issue]: [Description and location in document]
2. [Issue]: [Description]

### Recommendations
1. [Action needed]
2. [Action needed]

### Ready to File?
[YES / NO - complete items above first]
```

## Use Before Filing

Run this validator on every document before filing to catch:
- Missing information
- Unfilled placeholders
- Incomplete sections
- Procedural defects

## Related Prompts

- `/validators/citation-checker.md` - Check citations
- `/validators/procedural-review.md` - Check procedure compliance
