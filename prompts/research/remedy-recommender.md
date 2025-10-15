# Research: Remedy Recommender

**Version:** 1.0
**Last Updated:** 2025-10-15

## Objective

Analyze a procedural problem and recommend the best remedy or combination of remedies.

## Use Cases

- Deciding between appeal, motion to reargue, Article 78, etc.
- Determining whether to pursue state or federal remedies
- Planning multi-step enforcement strategy
- Evaluating risk/benefit of different options

## Prompt Template

```
You are a civil procedure strategist. Analyze the following situation and recommend
the optimal remedy or combination of remedies.

SITUATION:
{{problem_description}}

PROCEDURAL HISTORY:
{{history}}

OBJECTIVES:
{{desired_outcomes}}

CONSTRAINTS:
{{constraints}}
[e.g., time limits, financial resources, need for immediate relief, etc.]

TASK:
Evaluate available remedies and recommend best course of action.

REMEDIES TO CONSIDER:
- Motion to reargue (CPLR §2221)
- Motion to vacate (CPLR §5015)
- Appeal (CPLR Article 55)
- Article 78 proceeding
- Federal court (28 U.S.C. §1983, Rule 65)
- Procedural enclosure
- Judicial conduct complaint
- Attorney grievance
- Other

FOR EACH VIABLE REMEDY:
1. Legal basis and requirements
2. Likelihood of success
3. Time required
4. Cost/complexity
5. Risks
6. Benefits
7. Prerequisites

OUTPUT FORMAT:
## REMEDY ANALYSIS

### Situation Summary
[Brief recap of problem and objectives]

### Available Remedies

#### Option 1: [Remedy Name]
- **Legal Basis:** [CPLR/statute]
- **Requirements:** [What must be shown]
- **Likelihood of Success:** [High/Medium/Low] - [%]
- **Timeline:** [How long]
- **Cost/Complexity:** [Low/Medium/High]
- **Risks:** [Potential downsides]
- **Benefits:** [Potential upsides]
- **Prerequisites:** [What must be done first]
- **Recommended?** [Yes/No/Maybe]

[Repeat for each option]

### Recommended Strategy

**PRIMARY RECOMMENDATION:** [Option X]

**Reasoning:** [Why this is the best option given objectives and constraints]

**Implementation Plan:**
1. [Step 1 - with timeline]
2. [Step 2]
3. [Step 3]

**Backup Plan:** If [primary option] fails, pursue [secondary option]

**Things to Avoid:** [What not to do and why]

### Risk Assessment

**Best Case:** [Outcome]
**Likely Case:** [Outcome]
**Worst Case:** [Outcome]

**Risk Mitigation:**
- [How to minimize downside risk]

### Authorities Cited
- [Statutes, rules, cases supporting analysis]
```

## Example Usage

```
INPUT:
Situation: Judge refuses to issue written orders despite CPLR §2219(a). Procedural
enclosures sent 3 times over 6 months, all ignored.

Objectives: Get written orders, preserve for appeal, establish judicial accountability

Constraints: Pro se litigant, limited funds, need resolution within 6 months

OUTPUT: [Analysis comparing motion to reargue, Article 78, appeal, with recommendation
for Article 78 as most likely to compel compliance]
```

## Related Prompts

- `/personas/litigation-strategist.md` - Overall strategy
- `/personas/appellate-advisor.md` - Appeal-specific guidance
- `/research/procedural-violation-analyzer.md` - Identify violations first
