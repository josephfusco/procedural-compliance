# Generator: Article 78 Mandamus Petition

**Version:** 1.0
**Last Updated:** 2025-10-15
**Document Type:** CPLR Article 78 proceeding to compel performance of ministerial duty

## Objective

Generate a complete Article 78 petition (mandamus) to compel a judge, clerk, or government official to perform a mandatory duty under law, typically used when procedural enclosures have been ignored.

## Use Cases

- Judge refuses to issue written orders despite CPLR §2219(a)
- Clerk refuses to enter orders or provide access to records
- Court refuses to schedule hearings or process motions
- Official refuses to perform non-discretionary duty

## Input Requirements

### Required
- `{{petitioner_name}}`: Your name
- `{{petitioner_role}}`: Pro Se / Attorney for [Party]
- `{{respondent_name}}`: Hon. [Judge] / [Clerk Name] / [Official]
- `{{respondent_title}}`: Justice / Court Clerk / Commissioner / etc.
- `{{court}}`: Supreme Court, [County] (where Art. 78 is filed)
- `{{duty_refused}}`: Specific mandatory duty not performed
- `{{statute_requiring_duty}}`: CPLR §2219(a) / §5017(b) / etc.
- `{{prior_demands}}`: Timeline of requests for compliance
- `{{case_caption}}`: Underlying case information
- `{{relief_sought}}`: Specific action you want court to order

## Prompt Template

```
You are an expert in CPLR Article 78 proceedings. Generate a complete petition
for mandamus relief to compel performance of a ministerial duty.

PETITIONER: {{petitioner_name}}, {{petitioner_role}}
RESPONDENT: {{respondent_name}}, {{respondent_title}}
COURT FOR ARTICLE 78: {{court}}

UNDERLYING CASE: {{case_caption}}

DUTY REFUSED: {{duty_refused}}
STATUTE REQUIRING DUTY: {{statute_requiring_duty}}

PRIOR DEMANDS:
{{prior_demands}}
[List chronologically: dates, what was requested, response received]

RELIEF SOUGHT: {{relief_sought}}

TASK:
Generate a complete CPLR Article 78 petition including:

1. Caption
2. Preliminary Statement
3. Jurisdiction and Venue (CPLR §7804)
4. Parties
5. Factual Background
6. Legal Argument:
   - Article 78 mandamus standard
   - Duty is ministerial and mandatory
   - Clear legal right to performance
   - No adequate alternative remedy
7. Prior Demands and Exhaustion
8. Relief Requested
9. Verification

CITE:
- CPLR Article 78 (§§7801-7806)
- Relevant duty statute
- *Kolisnyk v. County of Monroe*, 34 N.Y.3d 1092 (2020) (mandamus standard)
- *Matter of Holtzman v. Goldman*, 71 N.Y.2d 564 (1988) (ministerial duty)

FORMAT: Legal petition format with numbered paragraphs.
```

## Output Format

```markdown
# VERIFIED PETITION FOR ARTICLE 78 MANDAMUS RELIEF

**SUPREME COURT OF THE STATE OF NEW YORK**
**COUNTY OF [COUNTY]**

---

[Petitioner Name],
Petitioner,

-against-

[Respondent Name], [Title],
Respondent.

Index No. [To be assigned]

---

## VERIFIED PETITION

Petitioner [Name], by [pro se / counsel], respectfully alleges:

### PRELIMINARY STATEMENT

1. This is a proceeding pursuant to CPLR Article 78 to compel respondent to perform
a ministerial duty required by law: [specific duty]. Despite multiple demands and
the passage of [X] months, respondent has refused to comply with the statutory mandate.

### JURISDICTION AND VENUE

2. This Court has jurisdiction pursuant to CPLR §7804(b) to compel performance of a
duty enjoined by law upon a public officer.

3. Venue is proper in [County] under CPLR §7804(b) as respondent's principal office
is located in this county.

### PARTIES

4. Petitioner [Name] is [party description] in the underlying proceeding, [Case Caption],
Index No. [Number], currently pending before [Court].

5. Respondent [Name] is [Title], with principal offices at [Address], and has a
ministerial duty under [Statute] to [specific duty].

### FACTUAL BACKGROUND

[Numbered paragraphs detailing:
- Underlying case background
- Procedural history
- Specific actions requiring written orders/compliance
- Timeline of demands for compliance
- Respondent's refusal or failure to act]

### ARGUMENT

#### POINT I: ARTICLE 78 MANDAMUS IS THE APPROPRIATE REMEDY

6. Article 78 mandamus relief is available to compel performance of a ministerial duty
required by law. CPLR §7803(1); *Kolisnyk v. County of Monroe*, 34 N.Y.3d 1092 (2020).

7. Mandamus lies when: (1) petitioner has a clear legal right to the relief sought;
(2) respondent has a ministerial duty to perform; and (3) no adequate alternative
remedy exists. *Matter of Holtzman v. Goldman*, 71 N.Y.2d 564, 572 (1988).

#### POINT II: RESPONDENT HAS A MINISTERIAL DUTY UNDER [STATUTE]

8. [Statute] requires respondent to [duty]. This duty is ministerial, not discretionary.

9. "Ministerial" duties are those "so plainly prescribed as to be free from doubt."
*Id.* at 572. [Statute]'s requirement is mandatory and unambiguous.

10. [Analysis of statute showing mandatory "shall" language and no discretion]

#### POINT III: PETITIONER HAS A CLEAR LEGAL RIGHT

11. Petitioner has a clear statutory right under [Statute] to [specific performance].

12. [Explain why petitioner is entitled to this performance]

#### POINT IV: NO ADEQUATE ALTERNATIVE REMEDY EXISTS

13. Petitioner has exhausted all alternative remedies, including:
[List prior demands, motions, applications]

14. [Explain why other remedies (appeal, motion, etc.) are inadequate or unavailable]

#### POINT V: RESPONDENT'S FAILURE CAUSES IRREPARABLE HARM

15. Respondent's continued refusal [describe harm: prevents appeal, violates due
process, etc.].

16. [Specific prejudice to petitioner]

### PRIOR DEMANDS

17. Petitioner has made the following demands for compliance:
[Detailed chronology with dates, method of demand, and response]

### RELIEF REQUESTED

WHEREFORE, Petitioner respectfully requests that this Court:

A. Issue an order to show cause why a writ of mandamus should not issue;

B. After hearing, issue a writ of mandamus directing respondent to [specific action]
within [X] days;

C. Award costs and attorney's fees pursuant to CPLR §8101 (if applicable);

D. Grant such other and further relief as the Court deems just and proper.

Dated: [Date]

Respectfully submitted,

_________________________
[Name]
[Pro Se / Attorney for Petitioner]
[Address]
[Phone]
[Email]

---

## VERIFICATION

STATE OF NEW YORK )
                  ) ss.:
COUNTY OF [COUNTY] )

[Petitioner Name], being duly sworn, deposes and says:

1. I am the petitioner in the above-captioned proceeding and have personal knowledge
of the facts stated herein.

2. I have read the foregoing Verified Petition and the contents thereof are true to
my knowledge, except as to matters therein stated to be alleged on information and
belief, and as to those matters I believe them to be true.

3. [Additional factual allegations if needed]

_________________________
[Signature]
[Name]

Sworn to before me this
[day] day of [month], [year]

_________________________
Notary Public
```

## Example (Abbreviated)

```
INPUT:
Petitioner: Jane Doe, Pro Se
Respondent: Hon. John Smith, Justice of Supreme Court
Court: Supreme Court, Erie County
Duty Refused: Issuance of written orders pursuant to CPLR §2219(a)
Statute: CPLR §2219(a)
Prior Demands:
- April 15: Letter requesting orders (no response)
- May 1: Omnibus notice (ignored)
- June 1: Procedural enclosure (no compliance)
Relief: Order directing judge to issue written orders within 14 days

OUTPUT: [Complete Article 78 petition as shown above, tailored to facts]
```

## Quality Checklist

- [ ] All facts verified and accurate
- [ ] Exhaustion of remedies clearly shown
- [ ] Duty characterized as "ministerial" with supporting authority
- [ ] Clear legal right established
- [ ] No adequate alternative remedy explained
- [ ] Prior demands documented with dates
- [ ] Relief requested is specific and actionable
- [ ] Verification signed and notarized
- [ ] Proper court and venue identified

## Strategic Notes

- File Article 78 only after procedural enclosures have been ignored
- This is a "nuclear option" - use when cooperation has failed
- Consider political/relational consequences
- Article 78 creates formal legal record of non-compliance
- If successful, establishes precedent for future enforcement

## Related Prompts

- `/generators/enclosure-judge.md` - File before Article 78
- `/personas/litigation-strategist.md` - Strategic timing
- `/validators/procedural-review.md` - Check before filing
