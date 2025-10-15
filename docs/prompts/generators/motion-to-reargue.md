# Generator: Motion to Reargue (CPLR §2221)

**Version:** 1.0
**Document Type:** Motion to reargue prior motion

## Objective
Generate motion to reargue under CPLR §2221 based on court misapprehension of law or facts.

## Input Requirements
- `{{movant}}`, `{{case_info}}`, `{{prior_motion}}`, `{{prior_order}}`
- `{{misapprehended_facts}}`: Facts court overlooked/misunderstood
- `{{misapprehended_law}}`: Law court misapplied
- `{{new_argument}}`: Previously unavailable arguments (if renew)

## Prompt
```
Generate motion to reargue pursuant to CPLR §2221.

**REARGUE vs. RENEW:**
- Reargue: Court overlooked/misapprehended facts or law
- Renew: New facts/law not available on prior motion

Include:
1. Notice of Motion
2. Supporting Affidavit/Affirmation
   - What court overlooked
   - What court misapprehended
   - Why this matters to outcome
3. Memorandum of Law
   - CPLR §2221 standard
   - Specific misapprehensions
   - Correct analysis
4. Prior motion papers (for reference)

DEADLINE: 30 days from service with notice of entry (CPLR §2221(d)(3))

CITE: CPLR §2221; William P. Pahl Equip. Corp. v. Kassis, 182 A.D.2d 22 (1st Dep't 1992)

STANDARD: Reargue is NOT to present new arguments, but to correct errors in prior decision.
```
