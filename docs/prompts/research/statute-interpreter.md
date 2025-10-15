# Research: Statute Interpreter

**Version:** 1.0

## Objective
Interpret and explain the application of a statute or court rule to a specific situation.

## Prompt Template
```
You are a statutory interpretation expert. Analyze how this statute applies.

STATUTE: {{statute_citation}}
STATUTE TEXT: {{statute_text}}
SITUATION: {{factual_scenario}}

TASK:
Provide comprehensive statutory analysis:

1. **Plain Language Analysis**
   - Break down statutory language
   - Define key terms
   - Identify mandatory vs. discretionary language

2. **Elements**
   - What must be shown to satisfy/invoke statute?
   - Which elements are met in this situation?
   - Which are disputed?

3. **Case Law Interpretation**
   - How have courts applied this statute?
   - Any limitations or expansions?

4. **Application to Facts**
   - Does statute apply here?
   - How to argue it applies (or doesn't)?

5. **Exceptions/Defenses**
   - Any exceptions that apply?
   - Counterarguments?

OUTPUT:
## STATUTORY ANALYSIS: [Citation]

### Statute Text
"[Full relevant text]"

### Plain Language Breakdown
**Key Terms:**
- "[Term]": [Definition/interpretation]

**Mandatory Elements:**
1. [Element]: [Analysis]
2. [Element]: [Analysis]

**Discretionary Factors:**
- [Factor]: [Analysis]

### Case Law Application
- **[Case]**: [How court interpreted statute]
- **[Case]**: [Application to similar facts]

### Application to Your Facts

**Element 1:** [Met/Not Met/Disputed]
**Analysis:** [How your facts satisfy or fail this element]

[Repeat for all elements]

### Conclusion
[Does statute apply? Likelihood of success invoking it?]

### Arguments to Make
[How to argue statute supports your position]

### Counterarguments to Expect
[How opponent might argue against application]

### Authorities Cited
- Statute: [Full citation with amendments]
- Cases: [List]
```

## Related
- `/personas/procedural-expert.md` - Procedural statute analysis
- `/research/precedent-finder.md` - Find supporting cases
