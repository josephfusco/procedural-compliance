# Multi-Jurisdiction Support

## Overview

This directory provides jurisdiction-specific implementations of procedural enforcement templates. **Primary focus: New York and Federal courts.** Structure is expandable for additional jurisdictions.

## Directory Structure

```
jurisdictions/
├── README.md (this file)
├── new-york/          # NY-specific templates (primary)
├── federal/           # Federal court templates (primary)
├── california/        # Framework for CA expansion
├── texas/             # Framework for TX expansion
└── florida/           # Framework for FL expansion
```

## Implemented Jurisdictions

### New York (Complete)

**Location:** Main repository (`/templates`, `/examples`)

**Coverage:**
- CPLR (Civil Practice Law and Rules)
- 22 NYCRR (Unified Court System rules)
- FCA (Family Court Act)
- NY RPC (Rules of Professional Conduct)
- All four Appellate Departments

**Templates:** All templates in `/templates` and `/examples` are NY-compliant.

**Documentation:** See `/guides/JURISDICTIONS.md` for NY-specific guidance.

### Federal (Complete)

**Location:** `/jurisdictions/federal`

**Coverage:**
- Federal Rules of Civil Procedure (FRCP)
- 28 U.S.C. (Jurisdiction and venue)
- 42 U.S.C. §1983 (Civil rights actions)
- Federal appellate procedure (FRAP)

**Templates:** See `/jurisdictions/federal` directory.

---

## Expanding to Additional Jurisdictions

### Framework for New Jurisdictions

Each jurisdiction requires:

#### 1. Core Authority Mapping

| NY (CPLR) | Jurisdiction Equivalent |
|-----------|------------------------|
| CPLR §2219(a) - Orders must state grounds | [State code] §[X] |
| CPLR Article 78 - Mandamus | [State code] - Writ procedure |
| 22 NYCRR §202.48(b) - Written decisions | [State rules] Rule [X] |
| CPLR §5515 - Notice of appeal | [State appellate rules] |

#### 2. Timing Differences

- Notice of appeal: 30 days (NY) vs. [X days] (State)
- Motion response time
- Discovery deadlines
- Statute of limitations

#### 3. Local Variations

- E-filing systems (NYSCEF vs. state equivalent)
- Service methods
- Court structure (trial → appellate)
- Motion practice norms

### Template Adaptation Process

**Step 1:** Copy relevant NY template
**Step 2:** Replace citations:
- `CPLR §` → `[State Code] §`
- `22 NYCRR §` → `[State Rules]`
- NY case law → State case law

**Step 3:** Adjust procedures:
- Timing requirements
- Service methods
- Filing procedures

**Step 4:** Verify with local counsel or bar resources

---

## Contributing Jurisdiction-Specific Templates

### Guidelines

**For new jurisdiction:**
1. Create directory: `jurisdictions/[state-name]/`
2. Include `README.md` with:
   - Core authority citations
   - Key differences from NY
   - Local resources
3. Adapt templates from NY versions
4. Verify all citations are current
5. Submit PR with documentation

**Quality standards:**
- Cornell Law precision
- Verified citations (2025 current)
- Clear adaptation notes
- Local practice considerations

### Priority Jurisdictions for Expansion

Based on legal systems and pro se populations:
1. ✅ **New York** - Complete
2. ✅ **Federal** - Complete
3. 🔲 **California** - Framework provided
4. 🔲 **Texas** - Framework provided
5. 🔲 **Florida** - Framework provided
6. 🔲 Other states - Community contributions welcome

---

## Jurisdiction Comparison Matrix

| Feature | NY | Federal | CA | TX | FL |
|---------|----|---------|----|----|----|
| **Written orders required** | CPLR §2219(a) | FRCP 52(a)* | CCP §1003 | TRCP 306a | Fla. R. Civ. P. 1.525 |
| **Appeal deadline** | 30 days | 30 days | 60 days | 30 days | 30 days |
| **Mandamus** | Article 78 | 28 U.S.C. §1361 | CCP §1085 | CPRC Ch. 65 | Fla. R. App. P. 9.100 |
| **E-filing** | NYSCEF | CM/ECF | Variable | Variable | Portal |

*FRCP 52(a) - findings required in bench trials only; less stringent than NY

---

## Resources by Jurisdiction

### New York
- Official statutes: https://www.nysenate.gov/legislation/laws/CVP
- Court rules: https://ww2.nycourts.gov/rules
- Case law: https://www.nycourts.gov/reporter/
- Forms: https://ww2.nycourts.gov/forms/index.shtml

### Federal
- FRCP: https://www.uscourts.gov/rules-policies/current-rules-practice-procedure
- U.S. Code: https://www.law.cornell.edu/uscode/
- Federal courts: https://www.uscourts.gov/
- Local rules: Check district court website

### California
- CCP: https://leginfo.legislature.ca.gov/faces/codes.xhtml
- Rules of Court: https://www.courts.ca.gov/rules.htm
- Judicial Council forms: https://www.courts.ca.gov/forms.htm

### Texas
- TRCP: https://www.txcourts.gov/rules-forms/rules/
- Statutes: https://statutes.capitol.texas.gov/
- State bar: https://www.texasbar.com/

### Florida
- Rules: https://www.flcourts.org/Publications-Statistics/Rules
- Statutes: http://www.leg.state.fl.us/statutes/
- Supreme Court: https://www.floridasupremecourt.org/

---

## Quick Reference: When to Use Which Jurisdiction

### Use NY Templates When:
- Case is in NY state court
- CPLR governs procedure
- All templates in main `/templates` directory apply

### Use Federal Templates When:
- Case is in U.S. District Court
- Diversity or federal question jurisdiction
- Federal Rules of Civil Procedure apply
- Civil rights actions (§1983)

### Adapt for Other States When:
- Case is in state court outside NY
- State-specific procedure codes apply
- Follow adaptation guide above

---

## Disclaimer

**Primary support: New York and Federal only.**

Other jurisdictions provided as framework for community expansion. Users must:
- Verify citations are current in their jurisdiction
- Consult local rules
- Adapt procedures appropriately
- Consider local counsel for jurisdiction-specific guidance

**Not legal advice.** Jurisdictional analysis varies by case. This framework assists adaptation but does not replace jurisdiction-specific legal research.

---

## Future Development

**Planned enhancements:**
- Additional federal district-specific templates
- Second Circuit-specific appellate guidance
- Expansion to additional states based on community contributions
- Jurisdiction-specific prompt libraries

**Community contributions welcome.** See `/CONTRIBUTING.md` for guidelines.
