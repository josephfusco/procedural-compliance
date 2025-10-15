# Generator: Notice of Appeal (CPLR Article 55)

**Version:** 1.0
**Last Updated:** 2025-10-15
**Document Type:** Notice of Appeal to Appellate Division

## Objective

Generate a complete Notice of Appeal to the Appellate Division from a final or appealable interlocutory order.

## Input Requirements

### Required
- `{{appellant_name}}`: Your name
- `{{appellant_role}}`: Plaintiff / Defendant / Petitioner / etc.
- `{{case_caption}}`: Full case caption
- `{{index_number}}`: Index No. or Docket No.
- `{{trial_court}}`: Supreme Court, Erie County / Family Court, Kings County / etc.
- `{{appellate_division}}`: First / Second / Third / Fourth Department
- `{{order_appealed}}`: Description of order/judgment being appealed
- `{{order_date}}`: Date order was entered
- `{{notice_of_entry_date}}`: Date notice of entry was served (if applicable)
- `{{issues_on_appeal}}`: Brief list of issues to be raised

### Optional
- `{{stay_requested}}`: Whether seeking stay pending appeal (yes/no)
- `{{poor_person_relief}}`: Seeking permission to appeal as poor person (yes/no)

## Prompt Template

```
Generate a Notice of Appeal pursuant to CPLR §5515.

APPELLANT: {{appellant_name}}, {{appellant_role}}
CASE: {{case_caption}} | Index No. {{index_number}}
TRIAL COURT: {{trial_court}}
APPELLATE DIVISION: {{appellate_division}} Department

ORDER APPEALED FROM:
{{order_appealed}} dated {{order_date}}
Notice of Entry Served: {{notice_of_entry_date}}

ISSUES ON APPEAL:
{{issues_on_appeal}}

{{#if stay_requested}}
STAY REQUESTED: Yes
{{/if}}

{{#if poor_person_relief}}
POOR PERSON RELIEF: Yes
{{/if}}

Generate complete Notice of Appeal with:
1. Caption
2. Notice statement (CPLR §5515)
3. Identification of order/judgment appealed
4. Issues to be raised
5. Signature block
6. Certificate of Service

CITE: CPLR §§5515, 5519, 5701
```

## Output Format

```markdown
# NOTICE OF APPEAL

**[TRIAL COURT NAME]**
**COUNTY OF [COUNTY]**

---

[Appellant Name],
[Role in Trial Court],

-against-

[Appellee Name],
[Role in Trial Court],

Index No. [Number]

---

## NOTICE OF APPEAL

PLEASE TAKE NOTICE that [Appellant Name], [role], hereby appeals to the Appellate
Division, [Department] Department, from the [order/judgment] of this Court [Judge Name, if applicable], dated [Date of Order] and entered [Date of Entry] in the Office of the Clerk of [County] County, which [describe what order did: dismissed the complaint / granted summary judgment / etc.].

The Notice of Entry of the [order/judgment] was served on [Appellant Name] on [Date].

PLEASE TAKE FURTHER NOTICE that the issues to be raised on appeal include, but are
not limited to:

1. [Issue 1: e.g., Whether the trial court erred in granting defendant's motion to
   dismiss for failure to state a claim]
2. [Issue 2: e.g., Whether the trial court violated CPLR §2219(a) by failing to state
   grounds for the decision]
3. [Issue 3: etc.]
4. [Such other issues as may appear from the record]

{{#if stay_requested}}
PLEASE TAKE FURTHER NOTICE that appellant intends to move for a stay of enforcement
of the [order/judgment] pending determination of this appeal.
{{/if}}

{{#if poor_person_relief}}
PLEASE TAKE FURTHER NOTICE that appellant intends to move for leave to proceed as a
poor person pursuant to CPLR §1101.
{{/if}}

Dated: [Date]

Respectfully submitted,

_________________________
[Name]
[Pro Se / Attorney for Appellant]
[Address]
[Phone]
[Email]

---

## CERTIFICATE OF SERVICE

I hereby certify that on [Date], I served a true and correct copy of the foregoing
Notice of Appeal upon:

[Name of Opposing Party/Counsel]
[Address]

by [method of service: NYSCEF electronic filing / first-class mail / personal service].

_________________________
[Name]

**TO:**
[Opposing Counsel/Party Name]
[Address]

**AND TO:**
Clerk of the Appellate Division
[Department] Department
[Address]
```

## Example

```
INPUT:
Appellant: Jane Doe, Pro Se Plaintiff
Case: Doe v. Roe | Index No. 12345/2025
Trial Court: Supreme Court, Erie County
Appellate Division: Fourth Department
Order Appealed: Order granting defendant's motion to dismiss, dated March 15, 2025
Notice of Entry: March 30, 2025
Issues: (1) Error in dismissing complaint; (2) CPLR §2219(a) violation (no written findings)

OUTPUT: [Complete Notice of Appeal as formatted above]
```

## Filing Requirements

After generation:
1. File with County Clerk (original court)
2. Serve on all parties
3. Serve on Appellate Division Clerk
4. Pay filing fee (or seek poor person relief)
5. Calendar deadline to perfect appeal (typically 9 months)

## Quality Checklist

- [ ] Correct appellate division identified
- [ ] Order date accurate
- [ ] Notice of entry date accurate (starts 30-day clock)
- [ ] All parties served
- [ ] Issues clearly stated
- [ ] Filed within 30 days of service of notice of entry (CPLR §5513)

## Related Prompts

- `/personas/appellate-advisor.md` - Appeal strategy
- `/generators/emergency-stay.md` - If stay needed
- `/validators/procedural-review.md` - Pre-filing check
