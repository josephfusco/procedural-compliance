# About Procedural Compliance Framework (PCF)

## Mission

The Procedural Compliance Framework (PCF) defines an open, citation-based standard for verifying adherence to court procedure and professional ethics — transforming due process from assumption into verifiable record.

---

## What is PCF?

**Procedural Compliance Framework (PCF)** — A neutral specification and template set that documents required procedural duties under statute and rule, compels performance or written justification, and creates a verifiable record of compliance or omission.

PCF is a documentation framework, not a pleading recognized by the CPLR.

---

## How It Works

1. **Select an actor** (judge, clerk, counsel, AFC)
2. **Generate a statute-linked notice**
3. **Serve and archive** to create a verifiable record

---

## Project Ethos

The PCF operates as an open procedural specification for documenting compliance with governing statutes, rules of court, and professional obligations. It does not evaluate motives, outcomes, or individuals. It verifies whether required procedural steps occurred, in writing, within statutory timeframes.

**Design Principle:** Each template maps to an objectively verifiable rule (e.g., CPLR, DRL, NYCRR) and generates reproducible records.

**Scope:** Applicable across courts and agencies; jurisdiction-tagged modules (NY, Federal) clarify use.

**Governance:** Open-source under MIT. Changes follow a public changelog and review process modeled on RFCs.

**Objective:** Define a transparent, repeatable standard for procedural accountability so due process can be demonstrated, not debated.

---

## Why PCF Exists

Courts run on procedure. When steps are skipped, people lose rights. PCF turns those rules into structured, machine-readable templates that anyone can use to:

- **Document compliance** with procedural duties
- **Request written determinations** instead of oral rulings
- **Preserve evidence** for appellate review
- **Create accountability records** without accusation

---

## Who PCF Serves

### Pro Se Litigants
Navigate complex procedural requirements with citation-linked templates.

### Attorneys
Document compliance failures and preserve issues for appeal with neutral, judge-proof language.

### Court Observers
Verify procedural accountability in public interest cases.

### Researchers
Access machine-readable legal citations and procedural templates for analysis.

---

## What PCF Is Not

PCF is **not**:
- A substitute for legal representation
- A recognized pleading under CPLR or FRCP
- A guarantee of favorable outcomes
- Legal advice or attorney-client communication
- An advocacy tool or political statement

---

## Template Categories

### Procedural Enforcement
- **Notices of Non-Compliance**: Demand written compliance from judges, clerks, counsel
- **Universal Templates**: Adaptable to any role or violation

### Appeals
- **Notice of Appeal**: CPLR §5515, FRAP Rule 3
- **Emergency Stays**: CPLR §5519, FRAP Rule 8

### Oversight
- **Judicial Conduct Complaints**: 22 NYCRR Part 100
- **Attorney Grievance**: 22 NYCRR Part 1200

### Transparency
- **FOIL Requests**: Public Officers Law §87
- **FOIA Requests**: 5 U.S.C. §552

---

## Jurisdictions Supported

### New York
- **Courts**: Supreme Court, Family Court, Appellate Division
- **Governing Law**: CPLR, DRL, FCA, 22 NYCRR
- **Templates**: 13 NY-specific templates

### Federal
- **Courts**: United States District Courts, Circuit Courts of Appeals
- **Governing Law**: FRCP, FRAP, USC
- **Templates**: 8 Federal templates

---

## Technical Features

### Machine-Readable Metadata
All templates include YAML front matter with:
- Title
- Jurisdiction (NY/Federal)
- Role (judge/clerk/counsel/etc.)
- Statutes
- Version

### Citation Database
Verified citations in JSON format:
- `statutes.json`: CPLR, NYCRR, USC, FRCP, FRAP
- `cases.json`: Key precedents with holdings
- `rules.json`: Local court rules

### Jurisdiction Banners
Clear visual indicators for NY vs. Federal templates.

---

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on:
- Citations and legal accuracy
- Jurisdiction adaptations
- Neutral, judge-proof language improvements
- Example filled outputs

All contributions must include:
- Statute/rule citations
- Jurisdiction tags
- Neutral tone (no accusatory language)

---

## License

MIT License. See [LICENSE](../LICENSE) for full text.

---

## Disclaimer

**Educational civic-tech resource. Not legal advice.** Use jurisdiction-specific templates with local rules. Remove personal/child PII before sharing.

This toolkit provides legal procedure templates for informational purposes. It does not constitute legal advice. Consult qualified counsel regarding your specific circumstances and jurisdiction.

---

## Resources

- **Website:** [proceduralcompliance.org](https://josephfusco.github.io/procedural-compliance/)
- **GitHub:** [josephfusco/procedural-compliance](https://github.com/josephfusco/procedural-compliance)
- **CHANGELOG:** [CHANGELOG.md](../CHANGELOG.md)
- **Specification:** [docs/spec/definition.md](spec/definition.md)

---

## Contact

**Issues and Feedback:** [GitHub Issues](https://github.com/josephfusco/procedural-compliance/issues)

**Contributing:** Pull requests welcome! See [CONTRIBUTING.md](../CONTRIBUTING.md).

---

*PCF transforms procedural requirements from abstract rules into actionable, verifiable documentation — ensuring due process can be demonstrated, not debated.*
