# Generator: Notice of Non-Compliance for Opposing Counsel

**Version:** 1.0
**Document Type:** Discovery/procedural compliance demand

## Objective
Generate notice of non-compliance demanding compliance with discovery, disclosure, or procedural obligations from opposing counsel.

## Input Requirements
- `{{your_name}}`, `{{opposing_counsel}}`, `{{case_info}}`
- `{{violations}}`: List of non-compliance (discovery, responses, disclosures)
- `{{prior_requests}}`: Timeline of requests for compliance
- `{{deadline}}`: Compliance deadline (typically 10-14 days)

## Prompt
```
Generate notice of non-compliance to opposing counsel pursuant to:
- CPLR Article 31 (discovery)
- RPC 3.3, 3.4, 8.4 (professional conduct)
- 22 NYCRR §130-1.1 (sanctions)

Include:
1. Header (TO/FROM/CASE/SUBJECT)
2. Authority and Duties
   - Discovery obligations
   - Ethical duties (RPC)
   - Sanctions for non-compliance
3. Identified Violations
   - Specific requests unanswered
   - Overdue responses
   - Impropersituations or objections
4. Demand
   - Specific documents/responses required
   - Deadline for compliance
5. Consequences
   - Motion to compel (CPLR §3124)
   - Sanctions (CPLR §3126, 22 NYCRR §130-1.1)
   - Grievance potential (22 NYCRR Part 1240)
6. Preservation notice

Tone: Professional but firm. This is pre-motion demand, not hostile attack.
```

## Related
- `/templates/notice_opposing_counsel.md` - Static template
- `/research/remedy-recommender.md` - If enclosure ignored
