# Generator: Legal Brief/Memorandum of Law

**Version:** 1.0
**Document Type:** Memorandum of Law in support of motion or opposition

## Objective
Generate persuasive legal brief with proper structure, citations, and argument.

## Input Requirements
- `{{document_type}}`: Motion brief / Opposition / Reply / Appellate brief
- `{{your_position}}`: Movant / Opponent / Appellant / Appellee
- `{{relief_sought}}`: What you're asking court to do
- `{{legal_issues}}`: Issues to be decided
- `{{facts}}`: Relevant procedural and factual background
- `{{legal_arguments}}`: Arguments with supporting authority
- `{{standard}}`: Legal standard that applies (summary judgment, abuse of discretion, etc.)
- `{{opposing_arguments}}`: Counterarguments to address

## Prompt Template
```
You are an expert legal brief writer. Generate a persuasive {{document_type}}.

POSITION: {{your_position}}
RELIEF SOUGHT: {{relief_sought}}

FACTS:
{{facts}}

LEGAL ISSUES:
{{legal_issues}}

ARGUMENTS TO MAKE:
{{legal_arguments}}
[Include supporting statutes, rules, cases]

APPLICABLE STANDARD: {{standard}}

OPPOSING ARGUMENTS TO ADDRESS:
{{opposing_arguments}}

TASK:
Generate complete memorandum of law with:

1. **PRELIMINARY STATEMENT**
   - Who you are, what you seek
   - Why you're entitled to relief
   - One paragraph overview

2. **STATEMENT OF FACTS**
   - Procedural history
   - Relevant factual background
   - Citations to record

3. **ARGUMENT**

   **POINT I: [FIRST LEGAL ARGUMENT]**

   A. Standard
      - State applicable legal standard
      - Cite authority

   B. Application
      - Apply law to facts
      - Use authorities persuasively
      - Explain why you win under this standard

   C. Distinguish Opposing Authority
      - Address counterarguments
      - Distinguish adverse cases

   [POINT II, III, etc. as needed]

4. **CONCLUSION**
   - Restate relief requested
   - One paragraph summary

WRITING STYLE:
- Persuasive but professional
- Lead with strongest argument
- Use headings effectively
- Cite authorities properly (Bluebook)
- Address weaknesses head-on
- Use active voice
- Be concise

CITE AUTHORITIES:
- Primary binding authority first
- Then persuasive authority
- Distinguish adverse authority
- Proper Bluebook format

OUTPUT FORMAT: Professional legal memorandum, Times New Roman 12pt equivalent formatting.
```

## Example Structure

```markdown
# MEMORANDUM OF LAW IN SUPPORT OF MOTION

## PRELIMINARY STATEMENT

[Movant] moves pursuant to [statute/rule] for an order [relief sought]. The
motion should be granted because [one-sentence reason with legal authority].

## STATEMENT OF FACTS

### Procedural History

1. On [date], [event]. (Exhibit A.)
2. On [date], [event]. (Docket Entry No. X.)
[Continue chronologically]

### Relevant Background

[Factual narrative relevant to legal issues]

## ARGUMENT

### POINT I
## THE COURT MUST [ACTION] BECAUSE [LEGAL REASON]

#### A. The Applicable Legal Standard

The standard for [type of motion] is [describe standard]. [Case Citation];
[Statute Citation]. [Explain standard in detail with supporting authority.]

#### B. Movant Satisfies the Standard

Movant has demonstrated [element 1] because [facts + analysis]. [Supporting
authority].

[Element 2]: [Analysis]

[Element 3]: [Analysis]

#### C. Respondent's Arguments Lack Merit

Respondent argues [counterargument]. This argument fails because [rebuttal
with authority]. Moreover, [additional rebuttal].

The case cited by respondent, [Case], is distinguishable because [distinction].

### POINT II
## [SECOND ARGUMENT IF APPLICABLE]

[Same structure]

## CONCLUSION

For the foregoing reasons, [movant] respectfully requests that this Court grant
the motion and [specific relief requested].

Dated: [Date]

Respectfully submitted,

[Signature block]
```

## Quality Checklist

- [ ] Clear statement of relief sought
- [ ] Facts supported by record citations
- [ ] Legal standard clearly stated and cited
- [ ] Arguments organized from strongest to weakest
- [ ] All claims supported by authority
- [ ] Adverse authority addressed
- [ ] Proper Bluebook citations
- [ ] Professional, persuasive tone
- [ ] Conclusion restates relief

## Related Prompts

- `/personas/citation-librarian.md` - Find supporting authority
- `/validators/citation-checker.md` - Verify citations
- `/research/precedent-finder.md` - Locate cases
