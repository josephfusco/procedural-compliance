# AI Prompt Library for Legal Document Generation

This directory contains AI prompts engineered for procedural legal document generation. These prompts work with large language models (LLMs) like GPT-4, Claude, or similar systems to generate, validate, and refine legal documents.

## 🎯 Purpose

Transform static templates into dynamic, AI-powered document generation:
- **Input:** Facts, jurisdiction, procedural issue
- **Process:** AI applies legal reasoning and formatting
- **Output:** Complete, citation-verified procedural document

## 📁 Directory Structure

```
prompts/
├── README.md (this file)
├── personas/           # AI role definitions
├── generators/         # Document creation prompts
├── validators/         # Quality assurance prompts
└── research/          # Legal research prompts
```

## 🚀 Quick Start

### Basic Usage

1. **Choose a prompt** based on your need (e.g., `generators/enclosure-judge.md`)
2. **Fill in the variables** marked with `{{double braces}}`
3. **Submit to your AI** (GPT-4, Claude, etc.)
4. **Review and validate** using validation prompts

### Example Workflow

```bash
# 1. Generate document
Use: prompts/generators/enclosure-judge.md
Input: Your case facts + jurisdiction

# 2. Validate citations
Use: prompts/validators/citation-checker.md
Input: Generated document

# 3. Strategic review
Use: prompts/research/procedural-analyzer.md
Input: Document + court response (if any)
```

## 🧠 Prompt Engineering Principles

All prompts in this library follow these standards:

### 1. Clear Role Definition (Persona Pattern)
```
You are an expert [specific role] specializing in [specific area].
```

### 2. Structured Input Requirements
```
Required information:
- Jurisdiction: {{jurisdiction}}
- Court: {{court}}
- Facts: {{facts}}
- Date: {{date}}
```

### 3. Explicit Output Format
```
Generate a [document type] with:
1. [Section 1]
2. [Section 2]
Format as: [markdown/legal pleading/etc.]
```

### 4. Legal Authority Constraints
```
Use ONLY these verified authorities:
- CPLR §2219(a) (current as of 2025)
- 22 NYCRR §202.48(b) (current as of 2025)
```

### 5. Quality Validation Checklist
```
Ensure:
✓ All placeholders filled
✓ Citations current and accurate
✓ Procedurally sound arguments
✓ Proper service certification
```

## 🔒 Privacy & Ethics

### ⚠️ CRITICAL: Never Input Confidential Information

**DO NOT** paste into public AI systems:
- Real client names or identifying information
- Privileged communications
- Social Security numbers, addresses, or PII
- Sealed court records
- Attorney work product

**DO** use:
- Anonymized facts ("Party A" instead of real names)
- Hypothetical scenarios
- Redacted documents
- Generic procedural patterns

### Recommended Practice

1. **Use enterprise AI** with data protection agreements when possible
2. **Anonymize all facts** before inputting to AI
3. **Review AI output** for accuracy—AI can hallucinate citations
4. **Verify all legal authorities** before filing
5. **Consult qualified counsel** for case-specific advice

## 📚 Prompt Categories

### Personas (`/personas`)
AI role definitions for specialized legal tasks:
- `litigation-strategist.md` - Overall case strategy
- `procedural-expert.md` - Court procedure analysis
- `citation-librarian.md` - Legal research specialist
- `appellate-advisor.md` - Appeals and preservation

### Generators (`/generators`)
Create complete legal documents:
- `enclosure-judge.md` - Judge enclosures (CPLR §2219(a))
- `enclosure-afc.md` - Attorney for Child enclosures
- `enclosure-counsel.md` - Opposing counsel enclosures
- `article78-mandamus.md` - CPLR Article 78 petitions
- `notice-of-appeal.md` - Appellate notices
- `osc-emergency.md` - Emergency orders to show cause

### Validators (`/validators`)
Quality assurance checks:
- `citation-checker.md` - Verify legal authorities
- `procedural-review.md` - Check compliance with court rules
- `completeness-audit.md` - Ensure all sections present
- `service-validator.md` - Confirm proper service method

### Research (`/research`)
Legal analysis prompts:
- `procedural-violation-analyzer.md` - Identify court errors
- `remedy-recommender.md` - Suggest next steps
- `precedent-finder.md` - Locate supporting case law
- `statute-interpreter.md` - Explain legal provisions

## 🎓 Prompt Engineering Tips

### For Best Results

**Be Specific:**
```
❌ "Write a motion to the judge"
✅ "Generate a procedural enclosure pursuant to CPLR §2219(a)
   demanding written orders for Motion No. 5 decided orally on
   March 15, 2025 in Supreme Court, Erie County, Index No. 12345/2025"
```

**Provide Context:**
```
Include:
- Full procedural history
- Relevant dates and deadlines
- Specific statutes violated
- Desired outcome
```

**Request Reasoning:**
```
"Explain your reasoning for each legal conclusion and cite
specific statutory authority."
```

**Iterate and Refine:**
```
First pass: Generate document
Second pass: "Review for [specific issue]"
Third pass: "Strengthen argument on [point]"
```

## 🔄 Version Control

Prompts are versioned to track changes in:
- Legal authorities (statute amendments)
- Court rule updates
- Prompt effectiveness improvements

Format: `[prompt-name]_v[X.Y].md`
- X = Major version (substantive legal changes)
- Y = Minor version (prompt engineering improvements)

## 📖 Additional Resources

- **Legal Authority Database:** See `/citations` for verified statutes/rules
- **Traditional Templates:** See `/templates` for non-AI templates
- **Examples:** See `/examples` for sample outputs
- **Documentation:** See `/guides` for comprehensive usage guides

## ⚖️ Disclaimer

These prompts generate legal documents for informational purposes. They do not constitute legal advice. AI can make errors, including:
- Hallucinating non-existent cases or statutes
- Misapplying legal principles
- Generating procedurally incorrect documents

**Always:**
- Verify all AI-generated citations
- Review documents for accuracy
- Consult qualified legal counsel
- Understand the risks of pro se litigation

## 🤝 Contributing

To contribute new prompts:
1. Follow the prompt structure template (see below)
2. Test with multiple AI systems
3. Include example outputs
4. Document prompt engineering decisions
5. Submit PR with clear before/after comparison

### Prompt Structure Template

```markdown
# [Prompt Name]

**Version:** 1.0
**Last Updated:** YYYY-MM-DD
**Verified Citations:** [Date]

## Objective
[Clear statement of what this prompt accomplishes]

## Use Cases
- [Use case 1]
- [Use case 2]

## Input Requirements

### Required
- `{{variable1}}`: [Description]
- `{{variable2}}`: [Description]

### Optional
- `{{variable3}}`: [Description]

## Prompt Template

\`\`\`
[Full prompt text with clear instructions to AI]
\`\`\`

## Output Format
[Description of expected output structure]

## Quality Checklist
- [ ] [Check 1]
- [ ] [Check 2]

## Example Usage

### Input
\`\`\`
[Sample input]
\`\`\`

### Output
\`\`\`
[Sample output]
\`\`\`

## Notes
[Additional context, limitations, or tips]
```

## 📞 Support

For questions about using these prompts:
- Open an issue on GitHub
- Review the `/guides/FAQ.md`
- Consult the `/guides/USAGE_GUIDE.md`

---

**Remember:** AI is a tool to assist legal document preparation, not a replacement for legal judgment or qualified counsel.
