# Generator: Notice of Non-Compliance for Judge (CPLR §2219(a))

**Version:** 1.0
**Last Updated:** 2025-10-15
**Document Type:** Procedural enclosure demanding written orders with findings

## Objective

Generate a complete notice of non-compliance directed at a judge who has failed to issue written orders stating grounds and specifying papers considered, in violation of CPLR §2219(a) and 22 NYCRR §202.48(b).

## Use Cases

- Judge issued oral ruling without written order
- Written order exists but lacks grounds/papers
- Ex parte order issued without findings
- Multiple motions decided without proper documentation
- Judge refuses to provide written decisions despite demands

## Input Requirements

### Required

- `{{your_name}}`: Your name (or "Party Name" if anonymizing)
- `{{your_role}}`: Pro Se Plaintiff / Counsel for Defendant / etc.
- `{{judge_name}}`: Hon. [Name]
- `{{judge_title}}`: Justice of the Supreme Court / Family Court Judge / etc.
- `{{court}}`: Supreme Court, Erie County / Family Court, Kings County / etc.
- `{{case_caption}}`: Full case caption
- `{{index_number}}`: Index No. or Docket No.
- `{{date}}`: Date of this enclosure
- `{{motions_without_orders}}`: List of motions decided without proper written orders
  - For each: Motion ID, subject, date of oral ruling or decision
- `{{response_deadline}}`: Number of business days for compliance (typically 10-14)

### Optional

- `{{prior_requests}}`: Previous attempts to obtain written orders
- `{{procedural_history}}`: Background of case for context
- `{{specific_violations}}`: Detailed analysis of what's missing from orders

## Prompt Template

```
You are an expert in New York civil procedure. Generate a notice of non-compliance
directed at a judge demanding compliance with CPLR §2219(a) and 22 NYCRR §202.48(b).

INPUT INFORMATION:
- Your Name: {{your_name}}
- Your Role: {{your_role}}
- Judge: {{judge_name}}, {{judge_title}}
- Court: {{court}}
- Case: {{case_caption}}
- Index Number: {{index_number}}
- Date: {{date}}
- Response Deadline: {{response_deadline}} business days

MOTIONS WITHOUT PROPER WRITTEN ORDERS:
{{motions_without_orders}}
[For each motion, provide: Motion ID/Seq. No., Subject (e.g., "Motion to Dismiss"),
Date of oral ruling or informal decision]

{{#if prior_requests}}
PRIOR REQUESTS FOR WRITTEN ORDERS:
{{prior_requests}}
{{/if}}

TASK:
Generate a complete notice of non-compliance that:

1. **HEADER SECTION**
   - Professional letterhead format
   - TO/FROM/DATE/CASE/COURT/SUBJECT lines
   - Subject line clearly states purpose

2. **SECTION 1: ROLE AND AUTHORITY**
   - Identify judge's role and binding legal authority
   - Cite CPLR §2219(a), 22 NYCRR §202.48(b), and CPLR §5704(a)

3. **SECTION 2: IDENTIFIED DUTY**
   - State specific statutory duty
   - Document what's missing from the record
   - Include specific dates and motion details

4. **SECTION 3: DEMAND FOR COMPLIANCE**
   - Clear, professional demand
   - Binary choice: comply OR provide written explanation
   - Specific deadline ({{response_deadline}} business days)

5. **SECTION 4: RECORD PRESERVATION**
   - State this is preservation notice
   - Cite appellate review authority (CPLR Article 55)
   - Reference potential administrative review (22 NYCRR Part 1)

6. **SECTION 5: SERVICE AND FILING**
   - State service method
   - Confirm NYSCEF upload or filing method
   - Include date

7. **SERVICE CERTIFICATION**
   - Certification language
   - Signature block

LEGAL AUTHORITIES TO CITE:
- CPLR §2219(a): Orders must state grounds and papers
- 22 NYCRR §202.48(b): Decisions must be in writing
- CPLR §5704(a): Right to move to vacate ex parte orders
- Mayer v. Turbe Eng'g, P.C., 132 A.D.3d 752 (2d Dep't 2015)
- Matter of Lache P., 212 A.D.3d 879 (2d Dep't 2023)

TONE:
- Professional and respectful
- Firm but not adversarial
- Procedurally focused (not accusatory)
- Clear about statutory requirements
- Preservation-focused

FORMAT:
Use markdown with clear section headers, professional spacing, and legal
document formatting conventions.

Generate the complete document now.
```

## Output Format

The AI should generate a complete document following this structure:

```markdown
# NOTICE OF NON-COMPLIANCE — JUDGE

**[NY][CPLR] Demand for Written Decision with Findings**

---

**TO:** Hon. [Judge Name], [Title]
**FROM:** [Your Name], [Role]
**DATE:** [Date]
**CASE:** [Caption] | Index No. [Number]
**COURT:** [Court Name and County]
**SUBJECT:** Demand for Written Order Stating Grounds and Papers Considered

---

## Legal Authority

You are bound by:

- **CPLR §2219(a):** "An order shall state the grounds on which it is based and shall specify the papers on which it was made."
- **22 NYCRR §202.48(b):** Decisions on motions "shall be in writing or on the record."
- **CPLR §5704(a):** Party may move to vacate or modify ex parte orders.
- **Due Process:** Right to notice, hearing, and written findings before deprivation of liberty or property interests.

## Record Status

As of [date], the following motions or applications have been decided orally or without written orders entered in the record:

1. **Motion No. [ID]** — [Subject] — [Oral ruling date or docket entry]
2. **Motion No. [ID]** — [Subject] — [Oral ruling date or docket entry]
[Additional motions as applicable]

No written orders stating grounds or papers considered appear in the NYSCEF docket or court file.

## Demand

Pursuant to the above statutory provisions, you are demanded to:

1. **Enter written orders** for each motion or application listed above, stating:
   - Grounds for the decision
   - Papers and evidence considered
   - Findings of fact (if applicable)
   - Conclusions of law

2. **Provide these orders within [X] business days** of service of this notice.

## Preservation and Record Notice

This notice preserves the record for appellate review and administrative complaint under:

- CPLR Article 55 (appeals)
- 22 NYCRR Part 1 (judicial conduct)
- Applicable federal civil rights statutes (42 U.S.C. §1983)

## Service

Served via [NYSCEF upload / hand delivery / certified mail] on [date].

---

**Certification of Service**

I certify that this Notice of Non-Compliance was served upon Hon. [Judge Name] via [method] on [date].

[Your Signature]
[Your Name]
[Address]
[Phone]
[Email]
```

## Quality Checklist

After AI generation, verify:

- [ ] All {{placeholders}} filled with actual information
- [ ] Judge's name and title are correct
- [ ] All motion IDs and dates are accurate
- [ ] Citations to CPLR and NYCRR are correct
- [ ] Response deadline is reasonable (10-14 business days typical)
- [ ] Service method is appropriate for the jurisdiction
- [ ] Tone is professional and respectful (not adversarial)
- [ ] Preservation language is included
- [ ] No inflammatory or accusatory language
- [ ] Format is clean and professional

## Example Usage

### Input

```
Your Name: Jane Doe
Your Role: Pro Se Plaintiff
Judge: Hon. John Smith, Justice of the Supreme Court
Court: Supreme Court, Erie County
Case: Doe v. Roe
Index Number: 12345/2025
Date: October 15, 2025
Response Deadline: 14 business days

Motions Without Orders:
1. Motion No. 3 - Motion for Summary Judgment - Oral ruling March 5, 2025 (granted)
2. Motion No. 5 - Motion to Compel Discovery - Informal decision March 20, 2025 (denied)
3. Motion No. 7 - Motion for Sanctions - No decision on record, argued April 10, 2025

Prior Requests:
- April 15, 2025: Letter to court requesting written orders (no response)
- May 1, 2025: Filed omnibus notice pursuant to 22 NYCRR §202.48(b) (no response)
```

### Output (AI-Generated)

```markdown
# NOTICE OF NON-COMPLIANCE — JUDGE

**[NY][CPLR] Demand for Written Decision with Findings**

---

**TO:** Hon. John Smith, Justice of the Supreme Court
**FROM:** Jane Doe, Pro Se Plaintiff
**DATE:** October 15, 2025
**CASE:** Doe v. Roe | Index No. 12345/2025
**COURT:** Supreme Court, Erie County
**SUBJECT:** Demand for Written Order Stating Grounds and Papers Considered

---

## Legal Authority

You are bound by:

- **CPLR §2219(a):** "An order shall state the grounds on which it is based and shall specify the papers on which it was made."
- **22 NYCRR §202.48(b):** Decisions on motions "shall be in writing or on the record."
- **CPLR §5704(a):** Party may move to vacate or modify ex parte orders.
- **Due Process:** Right to notice, hearing, and written findings before deprivation of liberty or property interests (U.S. Const. amend. XIV).

**Supporting Case Law:**
- *Mayer v. Turbe Engineering, P.C.*, 132 A.D.3d 752, 753 (2d Dep't 2015): Failure to specify papers considered prevents meaningful appellate review and violates CPLR §2219(a).
- *Brown v. City of Syracuse*, 89 A.D.2d 273 (4th Dep't 1982): Requirement of CPLR §2219(a) is mandatory, not discretionary.

## Record Status

As of October 15, 2025, the following motions have been decided orally or informally without written orders entered in the NYSCEF record or court file:

1. **Motion No. 3** — Motion for Summary Judgment — Oral ruling from bench on March 5, 2025 (granted)
   - No written order stating grounds for granting summary judgment
   - No specification of which papers or evidence were considered

2. **Motion No. 5** — Motion to Compel Discovery — Informal decision communicated March 20, 2025 (denied)
   - No written order entered in record
   - No grounds stated for denial

3. **Motion No. 7** — Motion for Sanctions — Oral argument held April 10, 2025
   - No decision (oral or written) entered in record as of this date
   - Motion remains pending without resolution

Despite plaintiff's prior requests for written orders (letter dated April 15, 2025 and omnibus notice filed May 1, 2025 pursuant to 22 NYCRR §202.48(b)), no compliant orders have been issued.

## Demand

Pursuant to CPLR §2219(a) and 22 NYCRR §202.48(b), you are demanded to:

1. **Enter written orders** for each motion listed above, including:
   - **Specific grounds** for the decision (e.g., which CPLR provision or legal standard applied)
   - **Papers and evidence considered** (list all submissions, affidavits, exhibits, and oral argument by date)
   - **Findings of fact** supporting the decision (if applicable)
   - **Conclusions of law** (if applicable)

2. **Provide these orders within 14 business days** of service of this notice (on or before November 5, 2025).

Alternatively, if you decline to issue compliant orders, provide **written authority** explaining the legal basis for non-compliance, including statutory or case law justification.

## Preservation and Record Notice

This document serves as:

- **Formal notice** of non-compliance with CPLR §2219(a) and 22 NYCRR §202.48(b) for purposes of appellate and administrative review
- **Preservation notice** under CPLR Article 55 (appeals to the Appellate Division, Fourth Department)
- **Record notice** for potential administrative complaint pursuant to 22 NYCRR Part 1 (Rules of the Chief Administrator - Judicial Conduct)
- **Preservation of federal claims** under 42 U.S.C. §1983 for deprivation of due process rights

Failure to comply with statutory duties may form the basis for:
- Motion to vacate orders under CPLR §5015(a)(1)
- Appeal citing abuse of discretion and procedural error (CPLR Article 55)
- Article 78 proceeding to compel compliance (CPLR Article 78)
- Federal court intervention if state remedies are exhausted

## Service

This Notice of Non-Compliance is served via NYSCEF upload and filed in the official case record on October 15, 2025.

---

**Certification of Service**

I certify that this Notice of Non-Compliance was served upon Hon. John Smith, Justice of the Supreme Court, via NYSCEF electronic filing on October 15, 2025, and that all parties to this action were served via NYSCEF on the same date.

Dated: October 15, 2025

________________________
Jane Doe
Pro Se Plaintiff
[Address]
[Phone]
[Email]
```

## Post-Generation Steps

After generating the document:

1. **Review for accuracy:** Verify all facts, dates, and case details
2. **Verify citations:** Confirm CPLR and NYCRR sections are current (2025)
3. **Check tone:** Ensure professional and respectful (not adversarial)
4. **Customize if needed:** Add case-specific facts or additional legal authority
5. **Proofread:** Check spelling, grammar, formatting
6. **Prepare for filing:** Convert to PDF if required by local rules
7. **Serve properly:** Follow NYSCEF procedures or local service rules
8. **Document service:** Keep proof of service for the record

## Strategic Notes

**Timing Considerations:**
- File this enclosure BEFORE filing motions for more aggressive relief (e.g., Article 78)
- Gives judge opportunity to comply voluntarily
- Creates clean record if escalation is needed

**Follow-Up Actions:**
- If no response within deadline: File CPLR §5704(a) motion or Article 78 petition
- If partial compliance: Send follow-up enclosure for remaining items
- If adverse response: Preserve for appeal and consider federal court

**Tone Is Critical:**
- This is a professional demand, not an accusation
- Maintains judicial respect while asserting rights
- Focuses on procedure, not personal criticism
- Builds record without burning bridges

## Limitations

This generator creates a notice of non-compliance for **post-decision** demands. For other scenarios, use:
- **Pre-decision preservation:** Different template (objection/motion)
- **Ex parte orders:** Use CPLR §5704(a) OSC template instead
- **Federal court:** Use Fed. R. Civ. P. 65 preliminary injunction template

## Related Prompts

- `/examples/omnibus_notice_202048b.md` - Omnibus notice template
- `/examples/cplr5704a_osc_skeleton.md` - For ex parte order challenges
- `/generators/article78-mandamus.md` - If enclosure is ignored
- `/validators/procedural-review.md` - Check generated document
- `/personas/litigation-strategist.md` - For follow-up strategy

---

**⚠️ LEGAL DISCLAIMER:**
This AI-generated document is for informational purposes only and does not
constitute legal advice. Always verify:
- Accuracy of all factual information
- Currency of legal citations (statutes may be amended)
- Appropriateness for your specific jurisdiction and case
- Compliance with local court rules

Consult qualified legal counsel for case-specific guidance.
