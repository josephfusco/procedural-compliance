# Procedural Compliance Framework (PCF)

An open, citation-based standard for verifying adherence to court procedure and professional ethics.

## What is PCF?

**Procedural Compliance Framework (PCF)** — A neutral specification and template set that documents required procedural duties under statute and rule, compels performance or written justification, and creates a verifiable record of compliance or omission. PCF is a documentation framework, not a pleading recognized by the CPLR.

## Mission

The Procedural Compliance Framework (PCF) defines an open, citation-based standard for verifying adherence to court procedure and professional ethics — transforming due process from assumption into verifiable record.

## How It Works

1. **Select an actor** (judge, clerk, counsel, AFC)
2. **Generate a statute-linked notice**
3. **Serve and archive** to create a verifiable record

## Project Ethos & Specification

The PCF operates as an open procedural specification for documenting compliance with governing statutes, rules of court, and professional obligations. It does not evaluate motives, outcomes, or individuals. It verifies whether required procedural steps occurred, in writing, within statutory timeframes.

**Design Principle:** Each template maps to an objectively verifiable rule (e.g., CPLR, DRL, NYCRR) and generates reproducible records.

**Scope:** Applicable across courts and agencies; jurisdiction-tagged modules (NY, Federal) clarify use.

**Governance:** Open-source under MIT. Changes follow a public changelog and review process modeled on RFCs.

**Objective:** Define a transparent, repeatable standard for procedural accountability so due process can be demonstrated, not debated.

## Quick Start

1. Browse templates at [proceduralcompliance.org](https://josephfusco.github.io/procedural-compliance/)
2. Select jurisdiction-specific template (NY or Federal)
3. Replace `{{placeholders}}` with case-specific information
4. File via e-filing and serve according to local rules

## Directory Structure

```
procedural-compliance-framework/
├─ docs/
│  ├─ templates/       # Jurisdiction-specific templates (NY, Federal)
│  ├─ guides/          # Filing procedures and redaction guides
│  ├─ spec/            # PCF definition and technical specification
│  └─ citations/       # Machine-readable legal authorities
├─ README.md
├─ CHANGELOG.md
└─ CONTRIBUTING.md
```

## Jurisdictions

- **New York:** CPLR, NYCRR, DRL templates
- **Federal:** FRCP, FRAP, USC templates

All templates include YAML metadata with jurisdiction tags, role identifiers, and statutory references.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — PRs welcome for:
- Citations and legal accuracy
- Jurisdiction adaptations
- Neutral, judge-proof language improvements
- Example filled outputs

All contributions must include:
- Statute/rule citations
- Jurisdiction tags
- Neutral tone (no accusatory language)

## Resources

- **Website:** [proceduralcompliance.org](https://josephfusco.github.io/procedural-compliance/)
- **GitHub:** [josephfusco/procedural-compliance](https://github.com/josephfusco/procedural-compliance)
- **CHANGELOG:** [CHANGELOG.md](CHANGELOG.md)
- **Specification:** [docs/spec/definition.md](docs/spec/definition.md)

## License

MIT License. See [LICENSE](LICENSE) for full text.

## Disclaimer

**Educational civic-tech resource. Not legal advice.** Use jurisdiction-specific templates with local rules. Remove personal/child PII before sharing.

This toolkit provides legal procedure templates for informational purposes. It does not constitute legal advice. Consult qualified counsel regarding your specific circumstances and jurisdiction.
