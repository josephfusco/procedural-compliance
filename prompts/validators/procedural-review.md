# Validator: Procedural Compliance Review

**Version:** 1.0

## Objective
Check whether a document complies with all applicable procedural rules before filing.

## Prompt Template
```
You are a procedural compliance auditor. Review this document for compliance with
{{jurisdiction}} procedural rules.

DOCUMENT TYPE: {{document_type}}
JURISDICTION: {{jurisdiction}}
DOCUMENT:
{{document_text}}

CHECK:
1. **Timing Compliance**
   - Deadlines met?
   - Time computations correct (CPLR §2104)?
   - Statute of limitations satisfied?

2. **Service Requirements**
   - Proper service method identified?
   - All parties served?
   - Proof of service included?

3. **Form Requirements**
   - Caption complete?
   - Required sections present?
   - Signature/verification (if required)?
   - Certificate of service?

4. **Substantive Requirements**
   - Proper legal standard cited?
   - Required showings made (e.g., good cause, irreparable harm)?
   - Supporting evidence attached?

5. **Citation Compliance**
   - All claims supported by authority?
   - Citations accurate?

6. **Local Rules**
   - Font/spacing requirements?
   - Page limits?
   - Filing format (e-filing vs. paper)?

OUTPUT:
##PROCEDURAL COMPLIANCE REPORT

**COMPLIANCE STATUS:** ✓ Compliant / ⚠️ Minor Issues / ✗ Major Issues

### Issues Identified
1. [Issue]: [Severity: Critical/Important/Minor]
2. [Issue]: [Severity]

### Recommendations
- [Fix before filing]

### Ready to File?
[YES/NO + explanation]
```

## Related
- `/validators/citation-checker.md`
- `/validators/completeness-audit.md`
