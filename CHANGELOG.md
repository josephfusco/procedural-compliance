# Changelog

All notable changes to the Procedural Compliance Framework (PCF) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-15

### 🎉 Initial Release

First stable release of the Procedural Compliance Framework (PCF), transitioning from "Procedural Enclosure Toolkit" to a formal, neutral specification for documenting procedural compliance in courts.

### Added

#### Core Framework
- **PCF Definition**: Formal specification defining PCF as "a neutral specification and template set that documents required procedural duties under statute and rule, compels performance or written justification, and creates a verifiable record of compliance or omission"
- **Mission Statement**: "Transforming due process from assumption into verifiable record"
- **Project Ethos**: Neutral, judge-proof framework for procedural accountability

#### Templates (21 Total)
**New York Templates (13):**
- Procedural Enclosure (Universal)
- Article 78 Mandamus
- Notice of Appeal
- Emergency Stay
- FOIL Request
- Judicial Conduct Complaint
- Attorney Grievance
- Procedural Enclosure - Judge
- Procedural Enclosure - Attorney for Child (AFC)
- Procedural Enclosure - Assigned Counsel
- Procedural Enclosure - Court Clerk
- Procedural Enclosure - Opposing Counsel
- NYSCEF E-Filing Violations

**Federal Templates (8):**
- Procedural Enclosure (Universal - Federal)
- Federal Mandamus
- Federal Notice of Appeal
- Federal Emergency Stay
- FOIA Request
- Procedural Enclosure - Federal Judge
- Procedural Enclosure - Federal Clerk
- Procedural Enclosure - Federal Opposing Counsel

#### Template Features
- **YAML Front Matter**: All templates include machine-readable metadata
  - `title`: Template name
  - `jurisdiction`: "NY" or "Federal"
  - `role`: Actor type (judge, clerk, counsel, afc, oversight, procedural, universal)
  - `statutes`: Array of governing statutes and rules
  - `version`: Semantic version number
- **Jurisdiction Banners**: Visual indicators distinguishing NY vs. Federal templates
  - NY: References CPLR, DRL, FCA, 22 NYCRR
  - Federal: References FRCP, FRAP, FRE
- **Neutral Tone**: Judge-proof, institutional language throughout
- **Citation-Linked**: All templates reference specific statutes and rules

#### Documentation
- **docs/spec/definition.md**: Technical specification of PCF framework
  - Design principles (neutrality, verifiability, openness)
  - Template structure and metadata schema
  - Governance model and versioning policy
- **docs/about.md**: Project overview and mission
  - What PCF is/is not
  - How it works (3-step process)
  - Who it serves
  - Template categories and jurisdiction support
- **docs/guides/filing-windows.md**: Filing deadline reference
  - NY and Federal court deadlines
  - Deadline calculation methods
  - Common pitfalls and verification checklist
- **docs/guides/redaction.md**: Privacy protection guide
  - PII redaction requirements (FRCP 5.2, 22 NYCRR §216.1)
  - Proper redaction methods
  - Verification procedures

#### Website
- Rebranded landing page at proceduralcompliance.org
- Updated meta tags, OpenGraph data, and JSON-LD structured data
- Enhanced hero section with PCF mission and "How It Works"
- Updated footer copyright and about section

#### Repository
- **README.md**: Complete rewrite with PCF branding
  - Mission statement, definition, and project ethos
  - Quick start guide
  - Directory structure
  - Contribution requirements
  - Enhanced disclaimer
- **CONTRIBUTING.md**: Existing contribution guidelines (retained)
- **LICENSE**: MIT License (retained)

### Changed

#### Branding
- **Name**: "Procedural Enclosure Toolkit" → "Procedural Compliance Framework (PCF)"
- **Tagline**: "Open specification for procedural compliance • Not legal advice"
- **Terminology**: Templates described as "documentation framework" not "toolkit"

#### Tone
- Shifted from advocacy-oriented language to neutral, institutional tone
- Emphasized procedural compliance documentation over enforcement
- Added judge-proof language emphasizing PCF as specification, not pleading

### Technical

#### Metadata Schema
All templates follow standardized YAML structure:
```yaml
---
title: "Template Name"
jurisdiction: "NY" | "Federal"
role: "judge" | "clerk" | "counsel" | "afc" | "oversight" | "procedural" | "universal"
statutes: ["Statute 1", "Statute 2"]
version: "1.0.0"
---
```

#### Governance Model
- **Versioning**: Semantic versioning (MAJOR.MINOR.PATCH)
- **Changes**: Tracked in CHANGELOG.md
- **Review**: Public review process modeled on IETF RFCs
- **Contributions**: Require citations, jurisdiction tags, neutral tone

#### Citation Database
Machine-readable citations in `/docs/citations/`:
- `statutes.json`: CPLR, NYCRR, USC, FRCP, FRAP
- `cases.json`: Key precedents with holdings
- `rules.json`: Local court rules

### Deprecated

- None (initial release)

### Removed

- Advocacy-oriented language
- Accusatory terminology

### Fixed

- None (initial release)

### Security

- Enhanced redaction guidance (docs/guides/redaction.md)
- Privacy protection requirements documented
- PII handling procedures established

---

## Governance Notes

### Versioning Policy

PCF follows [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.x.x): Incompatible changes to template structure or metadata schema
- **MINOR** (x.1.x): Backward-compatible functionality additions (new templates, features)
- **PATCH** (x.x.1): Backward-compatible bug fixes and citation updates

### Change Review Process

1. **Proposal**: Submit via GitHub issue or pull request
2. **Review**: Public comment period (minimum 7 days for minor changes, 30 days for major changes)
3. **Decision**: Maintainer decision based on:
   - Legal accuracy (citations verified)
   - Neutral tone (judge-proof language)
   - Template consistency
   - Community feedback
4. **Implementation**: Merged to main branch
5. **Documentation**: Changelog updated, version bumped

### Contributing Requirements

All contributions must include:
- **Citations**: Statute/rule citations with verified text
- **Jurisdiction Tags**: Clear NY vs. Federal designation
- **Neutral Tone**: No accusatory language
- **Examples**: Filled template examples (for new templates)
- **Testing**: Verification that YAML parses correctly

### Maintainer Responsibilities

Maintainers commit to:
- **Citation Verification**: Annual review of all citations against official sources
- **Rule Updates**: Update templates when underlying statutes/rules change
- **Neutral Review**: Ensure all language remains judge-proof and institutional
- **Accessibility**: Maintain WCAG AA compliance for website
- **Community**: Respond to issues and PRs within 14 days

### Deprecation Policy

Templates may be deprecated when:
- Underlying statute/rule is repealed or superseded
- Template is superseded by improved version
- Template is jurisdiction-specific and jurisdiction changes rules

Deprecated templates:
- Moved to `/deprecated/` directory
- Marked with deprecation notice and explanation
- Retained for historical reference
- Not listed on main website

### License

All PCF content is released under MIT License. Contributions are accepted under the same license.

---

## Links

- **Repository**: [josephfusco/procedural-compliance](https://github.com/josephfusco/procedural-compliance)
- **Website**: [proceduralcompliance.org](https://josephfusco.github.io/procedural-compliance/)
- **Issues**: [GitHub Issues](https://github.com/josephfusco/procedural-compliance/issues)
- **Specification**: [docs/spec/definition.md](docs/spec/definition.md)

---

## Version History

- [1.0.0] - 2025-01-15 - Initial stable release with 21 templates, YAML metadata, and comprehensive documentation

---

*Note: This changelog will be updated with each release. For unreleased changes, see the [main branch](https://github.com/josephfusco/procedural-compliance).*
