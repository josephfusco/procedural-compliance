# Validator: Citation Checker

**Version:** 1.0
**Last Updated:** 2025-10-15

## Objective

Validate all legal citations in a document for accuracy, currency, and proper formatting.

## Use Cases

- Check AI-generated documents for "hallucinated" citations
- Verify Bluebook citation format
- Confirm statutes haven't been amended
- Ensure case law is still good law
- Pre-filing review of any legal document

## Prompt Template

```
You are a legal citation validator. Review the following document and check all
legal citations for accuracy and currency.

DOCUMENT TO VALIDATE:
{{document_text}}

JURISDICTION: {{jurisdiction}}
CURRENT DATE: {{current_date}}

TASK:
For each citation found, verify:

1. EXISTENCE: Does this citation actually exist?
2. ACCURACY: Is it cited correctly (case name, volume, page)?
3. CURRENCY: Is it still good law as of {{current_date}}?
4. FORMAT: Is it properly formatted (Bluebook 21st ed.)?
5. RELEVANCE: Does it support the proposition for which it's cited?

OUTPUT FORMAT:
## CITATION VALIDATION REPORT

### Summary
- Total citations found: [X]
- Valid citations: [X]
- Invalid/questionable citations: [X]
- Formatting errors: [X]

### Detailed Analysis

#### Citation 1: [Full citation as written]
- **Status:** ✓ Valid / ⚠️ Questionable / ✗ Invalid
- **Existence:** [Confirmed / Not found / Unable to verify]
- **Currency:** [Current as of [date] / Superseded / Amended]
- **Format:** [Correct / Error: [description]]
- **Relevance:** [Supports proposition / May not support / Cannot assess]
- **Recommendation:** [Keep / Revise / Remove / Verify with official source]
- **Notes:** [Any additional context]

[Repeat for each citation]

### Recommended Actions
- [List any citations that must be verified in official sources]
- [List any citations to remove or replace]
- [Note any missing citations for key propositions]

### ⚠️ Disclaimer
AI cannot access real-time legal databases. ALL citations should be verified in
official sources (Westlaw, Lexis, official reporters) before filing.
```

## Quality Check

Use this validator on:
- All AI-generated documents
- Documents before filing
- After making significant edits
- When citing older cases/statutes

## Related Prompts

- `/personas/citation-librarian.md` - Find supporting authority
- `/research/precedent-finder.md` - Locate cases
