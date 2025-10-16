# Jurisdictional Compatibility Matrix

## New York (Primary Focus)

### Applicability: Statewide

**Core Authorities:**
- CPLR (Civil Practice Law and Rules)
- 22 NYCRR (Unified Court System rules)
- Family Court Act (FCA)
- Domestic Relations Law (DRL)
- Rules of Professional Conduct (RPC)

**Templates Verified for NY:**
- All `/templates` directory files
- All `/examples` directory files
- `/prompts` generators citing CPLR/NYCRR

**Local Variations:**
- Commercial Division: Enhanced rules (22 NYCRR §202.70)
- Individual Assignment System (IAS): Motion practice varies by county
- E-filing: Mandatory in most counties (22 NYCRR §202.5-b)
- Part rules: Individual judges may impose additional requirements

**County-Specific Considerations:**

| County | NYSCEF | Commercial Div. | Notes |
|--------|--------|----------------|-------|
| New York (Manhattan) | Yes | Yes | Strict e-filing compliance |
| Kings (Brooklyn) | Yes | No | High volume; delays common |
| Queens | Yes | No | Local rules re: part assignments |
| Bronx | Yes | No | Judge-specific practices vary |
| Richmond (Staten Island) | Yes | No | Smaller docket, faster |
| Nassau | Yes | Yes | Strong local practice culture |
| Suffolk | Yes | Yes | Part rules strictly enforced |
| Westchester | Yes | Yes | Suburban practice norms |
| Erie (Buffalo) | Yes | No | 4th Dept. - see appellate notes |
| Monroe (Rochester) | Yes | No | 4th Dept. |
| Onondaga (Syracuse) | Yes | No | 4th Dept. |
| Albany | Yes | No | 3d Dept.; state capital dynamics |

**Appellate Departments:**

| Department | Counties | Seat | Characteristics |
|------------|----------|------|----------------|
| **First** | Manhattan, Bronx | Manhattan | Commercial focus; high volume |
| **Second** | Brooklyn, Queens, SI, Nassau, Suffolk, Westchester, etc. | Brooklyn | Largest; diverse docket |
| **Third** | Albany, upstate counties | Albany | Government/admin law focus |
| **Fourth** | Buffalo, Rochester, Syracuse, western NY | Rochester | More conservative; slower |

**Key Differences:**
- Standard of review consistency varies by department
- First/Second more likely to enforce technical compliance
- Third/Fourth may show more discretion/flexibility

---

## Federal Courts (FRCP)

### Applicability: All US District Courts

**Core Authorities:**
- Federal Rules of Civil Procedure (FRCP)
- 28 U.S.C. (Jurisdiction and Venue)
- 42 U.S.C. §1983 (Civil rights actions)
- Federal Rules of Evidence (FRE)
- Local rules (vary by district)

**Templates Applicable:**
- `examples/rule65_prelim_injunction_skeleton.md` - FRCP Rule 65
- Article 78 concepts translate to mandamus (28 U.S.C. §1361)
- Discovery: FRCP Rule 26-37 (different from CPLR)

**New York Federal Districts:**

| District | Seat | Judges | Local Rules URL |
|----------|------|--------|-----------------|
| **SDNY** | Manhattan | 28 | https://nysd.uscourts.gov/rules |
| **EDNY** | Brooklyn | 15 | https://nyed.uscourts.gov/rules |
| **NDNY** | Albany | 5 | https://nynd.uscourts.gov/rules |
| **WDNY** | Buffalo | 4 | https://nywd.uscourts.gov/rules |

**Federal vs. NY State Differences:**

| Aspect | NY State (CPLR) | Federal (FRCP) |
|--------|-----------------|----------------|
| **Written orders** | CPLR §2219(a) - mandatory | FRCP 52(a) - findings required in bench trials only |
| **Discovery** | CPLR Art. 31 - demand-based | FRCP 26 - mandatory initial disclosures |
| **Service** | CPLR §308 - personal/substitute | FRCP 4 - broader methods |
| **Motion practice** | CPLR §2214 - notice required | FRCP 7 - similar but different timing |
| **Appeals** | CPLR Art. 55 - 30 days | FRAP 4 - 30 days (60 if US party) |
| **Summary judgment** | CPLR §3212 | FRCP 56 - similar standard |

**Abstention Doctrines (Federal courts may decline jurisdiction):**
- **Younger abstention:** Ongoing state criminal/certain civil proceedings
- **Pullman abstention:** Unclear state law questions
- **Burford abstention:** Complex state regulatory schemes
- **Colorado River abstention:** Parallel state proceedings

**When to Use Federal Court:**
- Constitutional claims (§1983)
- Diversity jurisdiction (>$75K, complete diversity)
- State remedies exhausted
- Need for broader injunctive relief
- Appellate review of state court unavailable

---

## California (Adaptation Guide)

### Core Authorities:
- California Code of Civil Procedure (CCP)
- California Rules of Court (CRC)
- California Evidence Code

**Analogous Provisions:**

| NY (CPLR) | CA (CCP) | Notes |
|-----------|----------|-------|
| §2219(a) - Orders must state grounds | CCP §1003 - Similar | CA requires "statement of decision" in certain cases |
| §3124 - Motion to compel | CCP §2031.310 | CA discovery more detailed |
| §5704(a) - Ex parte review | CCP §1008 - Reconsideration | Different standard |
| Article 78 - Mandamus | CCP §1085 - Writ of mandate | Similar procedure |
| §5515 - Notice of appeal | CRC 8.100 | 60 days (not 30) |

**Key CA Differences:**
- **Statement of decision:** Required in bench trials if requested (CCP §632)
- **Discovery:** More detailed rules; meet-and-confer required
- **Anti-SLAPP:** CCP §425.16 - early dismissal of suits re: protected activity
- **Sanctions:** CCP §128.7 (similar to FRCP 11, stricter than CPLR)

**Adaptation Strategy:**
1. Replace CPLR citations with CCP equivalents
2. Check California Rules of Court for procedural requirements
3. Research CA case law on procedural enforcement
4. Note 60-day appeal period (not 30)
5. Consider anti-SLAPP implications

---

## Texas (Adaptation Guide)

### Core Authorities:
- Texas Rules of Civil Procedure (TRCP)
- Texas Rules of Appellate Procedure (TRAP)
- Texas Government Code

**Analogous Provisions:**

| NY (CPLR) | TX (TRCP) | Notes |
|-----------|-----------|-------|
| §2219(a) - Orders must state grounds | TRCP 306a - Judgment format | Less stringent |
| §3124 - Motion to compel | TRCP 215 - Discovery enforcement | Similar |
| Article 78 - Mandamus | CPRC Ch. 65 - Mandamus | Available; frequently used |
| §5515 - Notice of appeal | TRAP 26.1 - 30 days | Similar timing |

**Key TX Differences:**
- **Findings of fact:** Not always required (unlike CA)
- **Discovery:** More liberal than NY
- **Mandamus:** Broader availability; used for interlocutory relief
- **Summary judgment:** TRCP 166a - similar to CPLR §3212
- **Jury trials:** More common than NY; different procedures

**Adaptation Strategy:**
1. Review Texas Supreme Court opinions on procedural due process
2. Check local district court rules
3. Note mandamus is more accepted remedy
4. TX courts less formal than NY in some respects

---

## Florida (Adaptation Guide)

### Core Authorities:
- Florida Rules of Civil Procedure (Fla. R. Civ. P.)
- Florida Statutes (F.S.)
- Florida Rules of Appellate Procedure (Fla. R. App. P.)

**Analogous Provisions:**

| NY (CPLR) | FL (Fla. R. Civ. P.) | Notes |
|-----------|----------------------|-------|
| §2219(a) - Orders must state grounds | Fla. R. Civ. P. 1.525 - Written orders | Similar requirement |
| §3124 - Motion to compel | Fla. R. Civ. P. 1.380 | Similar |
| Article 78 - Mandamus | Fla. R. App. P. 9.100 | Cert/mandamus |
| §5515 - Notice of appeal | Fla. R. App. P. 9.110 - 30 days | Similar |

**Key FL Differences:**
- **Final judgment:** Must contain "nothing further remains" language
- **Summary judgment:** Fla. R. Civ. P. 1.510 (amended 2021 - now similar to federal)
- **Discovery:** Mandatory disclosure (like federal)
- **Mediation:** Often required before trial

**Adaptation Strategy:**
1. Check if mandatory mediation applies
2. Ensure final judgments have proper language
3. Florida more similar to federal rules than NY rules

---

## General Adaptation Principles

### Step 1: Identify Analogous Authority

**Research sequence:**
1. Search state's civil procedure code for equivalent provision
2. Review state court rules
3. Check treatises (e.g., [State] Practice Series)
4. Review recent case law

### Step 2: Verify Timing Differences

**Common variations:**
- Notice of appeal: 30 days (NY, TX, FL, Fed) vs. 60 days (CA)
- Motion response time: Varies by state
- Discovery deadlines: State-specific
- Statute of limitations: Jurisdiction-specific

### Step 3: Check Local Requirements

**Always verify:**
- E-filing rules (mandatory/optional)
- Format requirements (font, margins, length limits)
- Certificate of service requirements
- Motion practice procedures (conferences, briefing schedules)

### Step 4: Adapt Templates

**Systematic replacement:**

```
Find:    CPLR §2219(a)
Replace: [State Code] §[Section]

Find:    22 NYCRR §202.48(b)
Replace: [State] Rules of Court, Rule [Number]

Find:    NYSCEF
Replace: [State e-filing system name]

Find:    Appellate Division
Replace: [State intermediate appellate court]
```

### Step 5: Verify with Local Counsel

**Recommended for:**
- High-stakes cases
- Unfamiliar jurisdiction
- Novel procedural issues
- Federal court practice

---

## Cross-Jurisdictional Practice Tips

### Multi-State Litigation

**When case involves multiple states:**
1. **Choice of law:** Which state's procedure applies?
2. **Forum selection:** Where to file (venue, jurisdiction)?
3. **Enforcement:** Recognition of sister-state judgments (Full Faith & Credit)
4. **Removal:** Federal removal if diversity/federal question

### Federal-State Parallel Proceedings

**Considerations:**
- Younger abstention (federal court may defer to state)
- Rooker-Feldman doctrine (can't appeal state judgment via federal suit)
- Timing: File state first, then federal if state inadequate

### International Considerations

**If foreign parties involved:**
- Hague Service Convention (service abroad)
- Forum non conveniens (inconvenient forum dismissal)
- Recognition of foreign judgments (varies by state)

---

## Procedural Enforcement Across Jurisdictions

**Universal principles:**
1. **Due process:** Notice and opportunity to be heard (U.S. Const. amend. XIV)
2. **Appellate review:** Meaningful review requires adequate record
3. **Mandamus/extraordinary writs:** Available in all jurisdictions for ministerial duties
4. **Professional conduct:** Lawyers bound by ethical rules in all states

**Jurisdiction-specific enforcement:**
- **NY:** Strong procedural compliance culture; CPLR §2219(a) strictly enforced
- **CA:** Statement of decision practice well-developed
- **TX:** Mandamus more readily available
- **FL:** Procedures more similar to federal than NY
- **Federal:** Less emphasis on written orders (except bench trial findings)

**Strategy by jurisdiction:**
- **NY:** Use notice of non-compliances aggressively
- **CA:** Request statement of decision early
- **TX:** Consider mandamus as primary remedy
- **FL:** Follow federal model more closely
- **Federal:** Focus on constitutional claims; procedural violations less emphasized

---

**Resources:**

**Free Research:**
- **Cornell LII:** https://www.law.cornell.edu/ (all jurisdictions)
- **Justia:** https://law.justia.com/ (state statutes, rules)
- **Court websites:** Most states publish rules online

**Paid Research:**
- Westlaw
- LexisNexis
- Bloomberg Law
- Casetext

**Practice Guides:**
- [State] Practice Series (West/Thomson Reuters)
- Witkin (California)
- Rutter Group (California)
- Moore's Federal Practice (Federal)

---

**Disclaimer:** This guide provides general jurisdictional comparison. Always verify current law in your specific jurisdiction. Local practice may vary significantly. Consult local counsel when practicing outside your home jurisdiction.
