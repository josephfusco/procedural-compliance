# Generator: Attorney Grievance Complaint

**Version:** 1.0
**Document Type:** Complaint to Attorney Grievance Committee

## Objective
Generate formal ethics complaint against attorney for RPC violations.

## Input Requirements
- `{{complainant}}`, `{{attorney}}`, `{{case_info}}`
- `{{violations}}`: Specific RPC violations
- `{{facts}}`: Detailed factual basis
- `{{harm}}`: Impact on client/case
- `{{prior_attempts}}`: Efforts to resolve

## Prompt
```
Generate attorney grievance complaint pursuant to 22 NYCRR Part 1240 (Attorney Discipline).

Include:
1. Complainant/case information
2. Attorney information
3. Rules of Professional Conduct violated:
   - RPC 1.1 (competence)
   - RPC 1.3 (diligence)
   - RPC 1.4 (communication)
   - RPC 3.3 (candor to tribunal)
   - RPC 3.4 (fairness)
   - RPC 8.4 (misconduct)
4. Detailed factual chronology
5. Supporting documentation
6. Prior attempts to resolve

TONE: Professional, factual. Focus on professional conduct, not personal criticism.

CITE: NY Rules of Professional Conduct; 22 NYCRR Part 1240
```
