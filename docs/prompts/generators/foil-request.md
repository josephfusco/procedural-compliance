# Generator: FOIL Request (Freedom of Information Law)

**Version:** 1.0
**Document Type:** New York FOIL request for court records

## Objective
Generate FOIL request for court records, transcripts, or administrative documents.

## Input Requirements
- `{{requester}}`, `{{records_officer}}`, `{{agency}}` (court/agency)
- `{{records_requested}}`: Specific description of records
- `{{date_range}}`: Time period of records
- `{{case_info}}`: Related case information (if applicable)
- `{{fee_waiver}}`: Request fee waiver? (yes/no)

## Prompt
```
Generate FOIL request pursuant to NYS Public Officers Law §87 (FOIL).

Include:
1. Formal request letter
2. Specific description of records
3. Time period
4. Format requested (copies, electronic, inspection)
5. Fee waiver request (if applicable)
6. Legal basis (FOIL, court rules)
7. Timeline for response (5 business days acknowledgment, 20 days response)

CITE: Public Officers Law §87, §89; 22 NYCRR §202.5 (court records access)

Format: Professional letter with clear record description.
```
