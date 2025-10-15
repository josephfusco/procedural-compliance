# Citation Database

**Machine-readable legal authority database for procedural enforcement**

---

## Purpose

This directory contains structured JSON databases of:
- **Statutes** - CPLR, 22 NYCRR, U.S.C., federal rules
- **Case Law** - Key precedents with verified holdings
- **Court Rules** - Local rules by jurisdiction and court
- **Update Log** - Amendment tracking and verification schedule

---

## Files

| File | Purpose | Format |
|------|---------|--------|
| `statutes.json` | Legislative authorities (CPLR, USC, etc.) | JSON |
| `cases.json` | Key precedential case law | JSON |
| `rules.json` | Court rules and procedures | JSON |
| `update-log.md` | Amendment tracking and maintenance | Markdown |

---

## How to Use

### For Template Customization

**1. Find Relevant Authority**

Search JSON files for applicable citations:

```bash
# Search for CPLR provision
grep "2219" statutes.json

# Find case law on written orders
grep -i "written order" cases.json

# Locate local rules for SDNY
grep -i "southern district" rules.json
```

**2. Extract Citation Details**

Each entry includes:
- Exact citation format
- Statutory/rule text
- Effective date
- Related authorities
- Usage notes
- Verification links

**3. Verify Before Use**

**CRITICAL:** AI-generated citations must be manually verified.

```json
"verification": {
  "warning": "AI-GENERATED CITATIONS MUST BE MANUALLY VERIFIED",
  "instructions": "Cross-reference against official sources before filing"
}
```

### For AI Prompt Engineering

**Provide context from database:**

```
CONTEXT:
From statutes.json, CPLR §2219(a) states: "Every order shall be in writing
and contain a determination of the motion and a statement of the grounds therefor."

TASK:
Generate procedural enclosure citing this authority...
```

**Reference case law:**

```
LEGAL AUTHORITY:
Apfel v. Prudential-Bache Securities Inc., 81 N.Y.2d 470 (1993) holds that
CPLR §2219(a) requires written statement of grounds. Oral decisions insufficient.

TASK:
Draft motion citing Apfel for proposition that...
```

### For Developers

**Parse JSON programmatically:**

```python
import json

# Load statutes database
with open('citations/statutes.json') as f:
    statutes = json.load(f)

# Access CPLR §2219(a)
cplr_2219 = statutes['new_york']['cplr']['sections']['2219']
print(cplr_2219['text'])
print(f"Usage: {cplr_2219['usage']}")
```

**Extract all citations for jurisdiction:**

```python
# Get all NY CPLR sections
cplr_sections = statutes['new_york']['cplr']['sections']
for section, data in cplr_sections.items():
    print(f"{data['citation']}: {data['title']}")
```

---

## Database Structure

### statutes.json

```json
{
  "metadata": { ... },
  "new_york": {
    "cplr": {
      "sections": {
        "2219": {
          "citation": "CPLR §2219(a)",
          "title": "Form and content of order",
          "text": "Every order shall be...",
          "effective_date": "1963-09-01",
          "usage": "Core authority for procedural enclosure",
          "related_rules": ["22 NYCRR §202.48(b)"],
          "key_cases": ["Apfel v. Prudential-Bache..."]
        }
      }
    }
  },
  "federal": { ... }
}
```

### cases.json

```json
{
  "new_york": {
    "written_orders": {
      "cases": [
        {
          "name": "Apfel v. Prudential-Bache Securities Inc.",
          "citation": "81 N.Y.2d 470",
          "year": 1993,
          "holding": "CPLR §2219(a) requires written statement...",
          "relevance": "Core authority for procedural enclosure",
          "url_courtlistener": "https://...",
          "subsequent_history": "Good law as of 2025"
        }
      ]
    }
  }
}
```

### rules.json

```json
{
  "federal": {
    "districts": {
      "sdny": {
        "name": "U.S. District Court for SDNY",
        "url": "https://nysd.uscourts.gov/",
        "local_rules_url": "https://...",
        "key_local_rules": { ... },
        "e_filing": {
          "system": "CM/ECF",
          "url": "https://ecf.nysd.uscourts.gov/"
        }
      }
    }
  }
}
```

---

## Verification Requirements

### Before Filing Any Document

**1. Statute Verification**

| Check | How | Why |
|-------|-----|-----|
| Text accuracy | Compare to official source | Ensure no amendments |
| Effective date | Confirm in legislative history | Verify applicability |
| Subsection | Double-check (a) vs (b) vs (c) | Avoid misattribution |

**Official NY Sources:**
- CPLR: https://www.nysenate.gov/legislation/laws/CVP
- 22 NYCRR: https://ww2.nycourts.gov/rules

**Official Federal Sources:**
- U.S.C.: https://www.law.cornell.edu/uscode/
- FRCP/FRAP: https://www.uscourts.gov/rules-policies/current-rules-practice-procedure

**2. Case Law Verification**

| Check | How | Why |
|-------|-----|-----|
| Citation accuracy | Cross-reference reporter | Ensure correct volume/page |
| Holding accuracy | Read full opinion | Avoid misrepresentation |
| Subsequent history | Shepardize or KeyCite | Ensure not overruled |
| Distinguishing cases | Research citing decisions | Check for limitations |

**Free Verification Tools:**
- CourtListener: https://www.courtlistener.com/
- Google Scholar: https://scholar.google.com/
- Cornell LII: https://www.law.cornell.edu/

**3. Court Rules Verification**

| Check | How | Why |
|-------|-----|-----|
| Current rules | Visit court website | Rules change periodically |
| Local rules | Check district-specific | Vary by court |
| E-filing procedures | Review court CM/ECF site | Technical requirements |

---

## Maintenance

### Update Schedule

**Semi-Annual Review (January & July):**
- Verify all statutes current
- Check for rule amendments
- Review case law for subsequent history
- Update `update-log.md`

### Contributing Updates

**Found an amendment or error?**

1. **Verify the change**
   - Confirm against official source
   - Document effective date
   - Note affected templates

2. **Update JSON file**
   - Edit relevant section
   - Add amendment note
   - Update `last_updated` date

3. **Log the change**
   - Add entry to `update-log.md`
   - Include source link
   - List affected templates

4. **Submit pull request**
   - Descriptive commit message
   - Reference official source
   - Tag as "citation-update"

---

## Common Authorities Quick Reference

### NY Procedural Enforcement

| Authority | Citation | Use Case |
|-----------|----------|----------|
| Written orders | CPLR §2219(a) | Demand written decision |
| Written orders | 22 NYCRR §202.48(b) | Same (court rule) |
| Mandamus | CPLR §7803(1) | Compel ministerial duty |
| Notice of appeal | CPLR §5515 | File appeal |
| Stay pending appeal | CPLR §5519 | Emergency relief |
| FOIL | Public Officers Law §87 | Records requests |

### Federal Enforcement

| Authority | Citation | Use Case |
|-----------|----------|----------|
| Civil rights | 42 U.S.C. §1983 | Constitutional violations |
| Federal question | 28 U.S.C. §1331 | Jurisdiction |
| Mandamus | 28 U.S.C. §1361 | Compel federal officer |
| Written findings | FRCP 52(a) | Bench trial findings |
| Injunction | FRCP 65 | Emergency relief |
| Notice of appeal | FRAP 3, 4 | File federal appeal |

---

## AI Usage with Citations

### Safety Protocol

**NEVER rely solely on AI for citations. ALWAYS verify manually.**

**Why:**
- AI models hallucinate case names
- AI may cite overruled decisions
- AI cannot access current amendments
- AI may misquote statutory text

**Safe AI Workflow:**

1. **Use AI for drafting:**
   ```
   Draft motion citing CPLR §2219(a) for written order requirement
   ```

2. **Extract AI-generated citations:**
   - List all statutes cited
   - List all cases cited
   - List all rules cited

3. **Verify each citation manually:**
   - Compare text to official source
   - Check case law is good law
   - Confirm no amendments

4. **Correct errors:**
   - Replace hallucinated citations
   - Update outdated authorities
   - Fix misquoted text

5. **Re-verify final document:**
   - Use `scripts/check-citations.sh`
   - Manual review of all citations
   - Cross-reference against this database

---

## Integration with Toolkit

### With Templates

Templates reference authorities in `{{citation}}` format:

```markdown
Pursuant to CPLR §2219(a), every order must state its grounds.
*Apfel v. Prudential-Bache*, 81 N.Y.2d 470 (1993).
```

**Before filing:**
1. Locate citation in `statutes.json` or `cases.json`
2. Verify text accuracy
3. Check subsequent history
4. Confirm still good law

### With AI Prompts

AI prompts in `/prompts` can reference this database:

```markdown
INSTRUCTIONS:
Use only authorities verified in /citations/statutes.json.
Cross-reference all generated citations against database.
Flag any citation not found in database for manual verification.
```

### With Validation Scripts

`scripts/check-citations.sh` can be enhanced to:
- Parse JSON database
- Cross-reference document citations
- Flag unverified authorities
- Link to verification sources

---

## Future Enhancements

**Planned additions:**
- Citation graph (visual authority relationships)
- Automated amendment monitoring
- API for programmatic access
- Integration with citation validators
- Jurisdiction expansion (CA, TX, FL)

**Community contributions welcome.**

---

## Disclaimer

**This database is reference only. Not legal advice.**

**User responsibilities:**
1. Verify all citations independently
2. Check for amendments and updates
3. Confirm applicability to your case
4. Consult counsel for complex matters

**Maintainer limitations:**
- Cannot guarantee real-time updates
- Cannot verify user-specific applicability
- Cannot provide legal advice
- Not responsible for filing errors

**By using this database, you acknowledge sole responsibility for citation verification and accuracy.**
