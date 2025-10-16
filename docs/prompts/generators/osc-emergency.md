# Generator: Order to Show Cause (Emergency Relief)

**Version:** 1.0
**Document Type:** Emergency Order to Show Cause with TRO

## Objective
Generate emergency OSC for immediate relief (restraining order, stay, preliminary injunction).

## Input Requirements
- `{{movant}}`, `{{respondent}}`, `{{court}}`, `{{case_info}}`
- `{{emergency}}`: Why immediate relief is needed
- `{{irreparable_harm}}`: Specific harm if relief denied
- `{{likelihood_success}}`: Why movant will likely prevail
- `{{relief_requested}}`: Specific relief sought
- `{{tro_requested}}`: Yes/No - temporary restraining order pending hearing

## Prompt
```
Generate emergency Order to Show Cause pursuant to CPLR §2214(d) and relevant rules.

Include:
1. Caption
2. Order portion (for court to sign)
   - Return date and time
   - TRO provisions (if requested)
   - Service requirements
3. Supporting affidavit/affirmation
4. Memorandum of law
   - Emergency standard
   - Irreparable harm
   - Likelihood of success
   - Balance of equities
5. Proposed order

CITE: CPLR §2214(d), §6301, relevant authority for type of relief

Emphasize urgency, irreparable harm, inadequate remedy at law.
```

## Related
- `/templates/notice_judge.md` - Non-emergency approach
- `/generators/article78-mandamus.md` - If OSC is denied
