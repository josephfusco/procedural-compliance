# Generator: Motion to Compel Discovery (CPLR §3124)

**Version:** 1.0
**Document Type:** Motion to compel discovery responses

## Objective
Generate motion to compel under CPLR §3124 when opposing party fails to respond to discovery.

## Input Requirements
- `{{movant}}`, `{{respondent}}`, `{{case_info}}`
- `{{discovery_requests}}`: What was requested (interrogatories, documents, depositions)
- `{{responses_timeline}}`: When requested, when due, current status
- `{{deficiencies}}`: No response / insufficient response / improper objections
- `{{good_faith_efforts}}`: Pre-motion conference, demands, extensions given

## Prompt
```
Generate motion to compel discovery pursuant to CPLR §3124.

Include:
1. Notice of Motion
2. Attorney Affirmation
   - Discovery requests served
   - Responses due/overdue
   - Good faith efforts to resolve (REQUIRED)
   - Specific deficiencies
3. Memorandum of Law
   - CPLR §3124 standard
   - Relevance of discovery sought
   - No privilege applies
   - Improper objections (if any)
4. Relief:
   - Compel responses within X days
   - Deem matters admitted (if appropriate under §3123)
   - Sanctions under CPLR §3126 (if warranted)
   - Costs and attorney's fees

PREREQUISITE: Good faith attempt to resolve (22 NYCRR §202.7)

CITE: CPLR §§3124, 3126; 22 NYCRR §202.7

SANCTIONS: May request preclusion, dismissal, or other sanctions under §3126 for willful failure.
```
