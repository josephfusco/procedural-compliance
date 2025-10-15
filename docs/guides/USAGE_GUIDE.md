# Usage Guide: Step-by-Step Instructions

## Table of Contents
1. [Quick Start](#quick-start)
2. [Traditional Template Method](#traditional-template-method)
3. [AI Prompt Method](#ai-prompt-method)
4. [Filing and Service](#filing-and-service)
5. [Follow-Up Actions](#follow-up-actions)
6. [Complete Workflow Examples](#complete-workflow-examples)

---

## Quick Start

**5-Minute Overview:**

1. **Identify the problem:** What procedural requirement was violated?
2. **Choose a template:** `/templates` (traditional) or `/prompts` (AI-powered)
3. **Fill in the details:** Replace `{{placeholders}}` with your case information
4. **Verify citations:** Check that all CPLR/rule citations are current
5. **File and serve:** Upload to NYSCEF or serve via appropriate method
6. **Document everything:** Keep proof of service and track responses

**Most Common Use Case:** Judge issued oral ruling without written order

→ Use: `templates/enclosure_judge.md` or `prompts/generators/enclosure-judge.md`

---

## Traditional Template Method

###Step 1: Select Template

**Navigate to** `/templates` **directory:**

```
templates/
├─ procedural_enclosure_universal.md    # Generic template
├─ enclosure_judge.md                    # For judges
├─ enclosure_afc.md                      # For Attorney for Child
├─ enclosure_assigned_counsel.md         # For your own attorney
├─ enclosure_clerk.md                    # For court clerks
└─ enclosure_opposing_counsel.md         # For opposing party's attorney
```

**Choose based on who violated the procedure.**

### Step 2: Copy Template

**Option A: Download from GitHub**
1. Go to https://github.com/josephfusco/procedural-enclosure-toolkit
2. Navigate to `templates/` folder
3. Click on the template file
4. Click "Raw" button
5. Copy all text (Ctrl+A, Ctrl+C)

**Option B: Clone Repository**
```bash
git clone https://github.com/josephfusco/procedural-enclosure-toolkit.git
cd procedural-enclosure-toolkit/templates
```

### Step 3: Open in Editor

**Recommended editors:**
- **Microsoft Word:** File → Open → Select `.md` file
- **Google Docs:** Upload file, then open
- **Text Editor:** Notepad++, VSCode, Sublime Text
- **Markdown Editor:** Typora, Mark Text (preserves formatting)

### Step 4: Replace All {{Placeholders}}

**Find each `{{placeholder}}` and replace with your information:**

**Example:**
```markdown
BEFORE (template):
**TO:** {{Judge Name}}, {{Judge Title}}
**FROM:** {{Your Name}}, {{Your Role}}
**DATE:** {{Date}}
**CASE:** {{Case Caption}} | Index No. {{Index Number}}

AFTER (filled in):
**TO:** Hon. Jane Smith, Justice of the Supreme Court
**FROM:** John Doe, Pro Se Plaintiff
**DATE:** October 15, 2025
**CASE:** Doe v. Roe | Index No. 12345/2025
```

**Common placeholders:**
- `{{Your Name}}`: Your full legal name
- `{{Your Role}}`: Pro Se Plaintiff / Counsel for Defendant / etc.
- `{{Judge Name}}`: Hon. [First] [Last]
- `{{Judge Title}}`: Justice of the Supreme Court / Family Court Judge
- `{{Court}}`: Supreme Court, Erie County / Family Court, Kings County
- `{{Case Caption}}`: Plaintiff v. Defendant (full caption)
- `{{Index Number}}`: Index No. 12345/2025 or Docket No. F-12345-25
- `{{Date}}`: October 15, 2025 (spell out month)
- `{{X}}`: Number of business days for response (typically 10-14)

### Step 5: Customize for Your Facts

**Add specific details:**

**Example - Motions Without Orders:**
```markdown
TEMPLATE:
1. **Motion No. {{ID}}** — {{Subject}} — {{Date}}

YOUR VERSION:
1. **Motion No. 3** — Motion for Summary Judgment — Oral ruling March 5, 2025 (granted)
2. **Motion No. 5** — Motion to Compel Discovery — Informal decision March 20, 2025 (denied)
```

**Tips:**
- Be specific: Include motion sequence numbers, dates, and outcomes
- Include NYSCEF document numbers if available
- Reference docket entries: "See Docket Entry No. 47"
- Attach prior correspondence as exhibits if relevant

### Step 6: Verify Legal Citations

**Check each citation:**

✅ **CPLR §2219(a)** - Verify: https://www.nysenate.gov/legislation/laws/CVP/2219
✅ **22 NYCRR §202.48(b)** - Verify: https://ww2.nycourts.gov/rules/trialcourts/202.shtml
✅ **Case law** - Verify: https://scholar.google.com/ or Westlaw/Lexis

**Red flags:**
- Can't find statute in official source
- Case citation looks unusual
- Rule number doesn't match description

**If citation is wrong:**
- Research correct citation
- Update template
- Consider submitting correction via GitHub

### Step 7: Proofread

**Checklist:**
- [ ] All `{{placeholders}}` replaced
- [ ] No [bracket notes] left in document
- [ ] Dates are correct and consistent
- [ ] Names spelled correctly (check court orders)
- [ ] Case caption matches court records
- [ ] Index number matches
- [ ] Professional tone (no emotional language)
- [ ] Spell check completed
- [ ] Grammar check completed

### Step 8: Convert to PDF

**Methods:**
- **Word:** File → Save As → PDF
- **Google Docs:** File → Download → PDF
- **Online:** Upload .md file to markdown-to-pdf converter
- **Command line:** `pandoc input.md -o output.pdf`

**PDF naming convention:**
```
[DocumentType]_[Date]_[Case]_[IndexNo].pdf

Examples:
Procedural_Enclosure_20251015_DoeVRoe_12345-2025.pdf
Article78_Petition_20251101_Smith_V_Judge_67890-2025.pdf
```

---

## AI Prompt Method

**Benefits:**
- Faster document generation
- Automatically fills placeholders
- Can customize on the fly
- Generates multiple drafts

**Risks:**
- AI may hallucinate citations
- Privacy concerns (don't input confidential info)
- Requires verification

### Step 1: Choose AI System

**Options:**
- **ChatGPT** (OpenAI) - GPT-4 or GPT-4 Turbo
- **Claude** (Anthropic) - Claude 3.5 Sonnet or better
- **Gemini** (Google) - Gemini Advanced
- **Enterprise AI** (if available - safest for sensitive info)

**Privacy tiers:**
1. **Most Private:** Enterprise AI with data protection agreement
2. **Moderate:** Consumer AI with anonymized facts
3. **Least Private:** Public AI with real names/details (DON'T DO THIS)

### Step 2: Select Prompt from `/prompts` Library

**Navigate to** `/prompts` **directory:**

```
prompts/
├─ README.md                     # Start here
├─ personas/                     # AI role definitions
├─ generators/                   # Document creation ← YOU WANT THIS
├─ validators/                   # Quality checks
└─ research/                     # Legal research
```

**Most used generators:**
- `generators/enclosure-judge.md`
- `generators/article78-mandamus.md`
- `generators/notice-of-appeal.md`
- `generators/motion-to-compel.md`

### Step 3: Prepare Your Information

**Anonymize first:**

❌ **WRONG (identifies real people):**
```
Judge: Hon. Jane Smith
My name: John Doe
My address: 123 Main St, Buffalo, NY
My child: Emma Doe (DOB 1/15/2015)
```

✅ **RIGHT (anonymized):**
```
Judge: Hon. [Judge Name] or "the judge" or "Hon. J.S."
My name: Petitioner / Party A / Jane Doe (use pseudonym)
My address: [City], New York
My child: "minor child" or "J.D." (initials only)
```

**Organize your facts:**
1. **Parties:** Your role, opponent's role, judge
2. **Court:** Which court, which county
3. **Case info:** Caption (anonymized), index number (OK to include)
4. **Procedural history:** Timeline of relevant events
5. **Violation:** Specific rule/statute violated
6. **Relief sought:** What you want

### Step 4: Open Prompt File

**Read the entire prompt template first.** It includes:
- **Objective:** What this prompt creates
- **Input Requirements:** What information you need
- **Prompt Template:** The actual prompt to give AI
- **Example:** Before/after to guide you

### Step 5: Fill in Prompt Template

**Copy the "Prompt Template" section.** It looks like this:

```
You are an expert in New York civil procedure. Generate a procedural enclosure...

INPUT INFORMATION:
- Your Name: {{your_name}}
- Your Role: {{your_role}}
[etc.]

TASK:
Generate a complete procedural enclosure that:
1. [Requirement 1]
2. [Requirement 2]
[etc.]
```

**Replace `{{variables}}` with your info:**

```
You are an expert in New York civil procedure. Generate a procedural enclosure...

INPUT INFORMATION:
- Your Name: John Doe (use pseudonym)
- Your Role: Pro Se Plaintiff
- Judge: Hon. [Judge Name]
- Court: Supreme Court, Erie County
[etc.]
```

### Step 6: Submit to AI

1. **Open AI chat interface**
2. **Paste filled-in prompt** (entire block, including "You are an expert...")
3. **Submit** (Enter/Send)
4. **Wait** for AI to generate document (10-60 seconds)

### Step 7: Review AI Output

**CRITICAL: AI can make mistakes. Review carefully:**

**Check for:**
- [ ] All placeholders filled correctly
- [ ] Case information accurate
- [ ] Citations exist (verify each one)
- [ ] Format is professional
- [ ] Tone is appropriate
- [ ] No hallucinated facts (AI added things you didn't say)
- [ ] Logic makes sense

**Common AI errors:**
- Invents case citations (always verify)
- Misunderstands your facts
- Uses wrong legal standard
- Includes irrelevant sections
- Too verbose or too terse

### Step 8: Validate with Validator Prompts

**Use validators from** `/prompts/validators`:

1. **Citation Check:**
   - Use `validators/citation-checker.md`
   - Input: Generated document
   - Output: List of citations with verification status

2. **Completeness Audit:**
   - Use `validators/completeness-audit.md`
   - Input: Generated document
   - Output: Checklist of required sections

3. **Procedural Review:**
   - Use `validators/procedural-review.md`
   - Input: Generated document
   - Output: Compliance check

**Iterate if needed:**
- If validator finds issues, regenerate with corrections
- Or manually edit the AI output

### Step 9: Verify Citations Manually

**DO NOT TRUST AI CITATIONS.**

For each citation in document:
1. Search official source (NYCourts.gov, NY Legislature, Google Scholar)
2. Confirm case/statute exists
3. Confirm citation format is correct
4. Confirm it says what AI claims it says
5. Check if it's still good law (not overruled/amended)

**If citation is fake:**
- Remove it
- Find correct citation yourself
- Use `/prompts/personas/citation-librarian.md` to research

### Step 10: Customize and Finalize

**AI output is a DRAFT, not final document.**

**Customize:**
- Add case-specific nuances
- Adjust tone if needed
- Add or remove sections
- Strengthen weakest arguments
- Polish language

**Then follow Steps 7-8 from Traditional Method:**
- Proofread
- Convert to PDF
- Prepare for filing

---

## Filing and Service

### Method 1: NYSCEF E-Filing (Most NY Counties)

**Step 1: Log into NYSCEF**
- Go to: https://iapps.courts.state.ny.us/nyscef/
- Enter credentials

**Step 2: Navigate to Your Case**
- Search by index number or party name
- Click "File New Document"

**Step 3: Upload Document**
- Document Type: Select appropriate (e.g., "Notice," "Motion," "Letter")
- Upload your PDF
- Fill in description: "Procedural Enclosure Pursuant to CPLR §2219(a)"

**Step 4: Review and Submit**
- Review filing
- Click "Submit"
- Print confirmation page (proof of service)

**Step 5: Serve on All Parties**
- NYSCEF auto-serves parties who have appeared
- If pro se parties or non-appearing parties: must serve separately (mail/personal service)

**Filing fees:**
- Motions: Usually $45 (varies by county)
- Notices/Letters: Usually no fee
- Poor person relief: May waive fees (apply via court)

### Method 2: Paper Filing (Non-NYSCEF Counties)

**Step 1: Print Copies**
- Original for court
- Copy for each party
- Copy for your records

**Step 2: Deliver to Court Clerk**
- In person: Hand to clerk at courthouse
- By mail: Certified mail, return receipt requested
   - Address: County Clerk, [County] County Courthouse, [Address]

**Step 3: Serve on All Parties**
- Personal service (hand delivery by non-party over 18)
- Certified mail, return receipt
- As permitted by CPLR Article 3

**Step 4: File Proof of Service**
- Complete affidavit of service
- File with court within reasonable time
- Keep copy for your records

### Service Methods Summary

| Method | When Used | CPLR Authority |
|--------|-----------|----------------|
| **NYSCEF** | E-filed cases, parties who appeared | 22 NYCRR §202.5-b |
| **Personal** | Summons, some motions | CPLR §308 |
| **Certified Mail** | Follow-up service, notices | CPLR §312-a |
| **Regular Mail** | Some post-filing notices | As specified in rules |

**Always check local rules for county-specific requirements.**

---

## Follow-Up Actions

### Scenario 1: Court Complies (Success!)

**What happens:**
- Judge issues written orders
- Clerk provides access to records
- Attorney complies with discovery

**Your response:**
1. **Acknowledge receipt** (optional courtesy)
2. **Review for adequacy:**
   - Does order state grounds? (CPLR §2219(a))
   - Does order specify papers?
   - Is reasoning sufficient for appeal?
3. **If adequate:** Proceed with case
4. **If inadequate:** Send follow-up enclosure specifying deficiencies

**Example follow-up:**
```
Thank you for issuing the written order dated [date]. However, the order does not
specify which papers were considered, as required by CPLR §2219(a). Please issue
an amended order listing the papers considered.
```

### Scenario 2: Court Partially Complies

**What happens:**
- Court issues order for 2 of 3 motions
- Court provides some records but not all

**Your response:**
1. **Acknowledge compliance** for items provided
2. **Send follow-up enclosure** for remaining items
3. **Reference prior enclosure:** "This is a follow-up to the procedural enclosure
   served [date] regarding [remaining issues]."

### Scenario 3: Court Ignores (No Response)

**Timeline:**

**Days 1-14:** Wait for compliance deadline

**Days 15-16:** Grace period for mail delay

**Day 17:** Send second enclosure

**Second Enclosure Should:**
- Reference first enclosure ("This is the second request...")
- State deadline passed without compliance
- Escalate tone slightly (still professional)
- Warn of next steps: "Continued non-compliance will necessitate motion practice or Article 78 proceeding."

**Day 28 (if still no response):** Choose escalation:

**Option A: Motion to Reargue** (CPLR §2221)
- If order already exists but is defective
- Argue court overlooked CPLR §2219(a) requirement
- Attach prior enclosures as exhibits

**Option B: Article 78 Mandamus** (CPLR Article 78)
- If duty is ministerial and mandatory
- Show exhaustion (prior enclosures)
- Seek writ compelling compliance
- See: `/templates/article78_mandamus.md` or `/prompts/generators/article78-mandamus.md`

**Option C: Appeal** (CPLR Article 55)
- If final order and appeal period hasn't expired
- Raise procedural violation as appellate issue
- May seek expedited review if appropriate

**Option D: Federal Court** (42 U.S.C. §1983)
- If constitutional due process violated
- If state remedies exhausted
- Seek preliminary injunction (Fed. R. Civ. P. 65)

### Scenario 4: Court Denies or Gives Hostile Response

**What happens:**
- Court issues order denying your request
- Judge makes adverse comments in writing or on record
- Judge threatens sanctions

**Your response:**

**1. Don't panic.** Courts don't always like being corrected. But:
- You have a right to enforce procedural rules
- Documentation strengthens your appellate record
- Retaliation can become additional issue

**2. Document retaliation:**
- If judge makes hostile statements: Request transcript
- If sanctions threatened: Object and preserve for appeal
- If bias shown: May support recusal motion (CPLR §§4110-4115)

**3. Escalate strategically:**
- **If denial has reasoning:** Include in appellate record
- **If denial is improper:** Article 78 or appeal
- **If retaliation is severe:** Federal court (due process violation)

**4. Consider:**
- Motion for recusal if judge shows bias
- Federal preliminary injunction if due process violated
- Judicial conduct complaint if pattern of misconduct

### Scenario 5: Emergency Situations

**If you need immediate relief:**

**Don't use enclosure—use Order to Show Cause (OSC):**
- **Template:** `/templates/osc_emergency.md`
- **Prompt:** `/prompts/generators/osc-emergency.md`
- **Requirements:**
   - Show irreparable harm
   - Show likelihood of success
   - Request temporary restraining order (TRO)
   - Explain why notice to adverse party is impossible/impractical

**Federal emergency:**
- Preliminary injunction (Fed. R. Civ. P. 65)
- Temporary restraining order
- Must show same factors: irreparable harm, likelihood of success, balance of equities

---

## Complete Workflow Examples

### Example 1: Judge Won't Issue Written Orders

**Situation:**
- 3 motions decided orally without written orders
- Need written orders to appeal effectively

**Workflow:**

**Week 1 (Day 1-7):**
1. Use template: `templates/enclosure_judge.md`
2. List all 3 motions without orders
3. Cite CPLR §2219(a), 22 NYCRR §202.48(b)
4. Request written orders within 14 days
5. File via NYSCEF as "Notice"
6. Keep proof of service

**Week 2-3 (Day 8-21):**
- Wait for response
- Check NYSCEF daily for orders

**Week 4 (Day 22-28):**
- No response received
- Send second enclosure
- Escalate language: "This is the second request. Continued non-compliance will necessitate Article 78 proceeding."

**Week 6 (Day 35-42):**
- Still no orders
- File Article 78 petition
- Attach both enclosures as exhibits
- Show exhaustion of remedies
- Request writ of mandamus compelling issuance of orders

**Result:** Court issues orders OR Appellate Division compels compliance

### Example 2: Opposing Counsel Won't Respond to Discovery

**Situation:**
- Document requests served 60 days ago
- No response, no objections
- Need documents for upcoming motion

**Workflow:**

**Day 1-3:**
1. Send procedural enclosure to opposing counsel
2. Use template: `templates/enclosure_opposing_counsel.md`
3. List specific discovery requests unanswered
4. Cite CPLR §§3124, 3126 (sanctions)
5. Give 10 days to respond

**Day 11-17:**
- No response
- Send second enclosure
- Warn of motion to compel

**Day 18-25:**
- Draft motion to compel (CPLR §3124)
- Use prompt: `prompts/generators/motion-to-compel.md`
- Attach both enclosures showing good faith efforts
- Request sanctions under CPLR §3126

**Day 26-30:**
- File motion to compel
- Include attorney fees request
- May request preclusion of evidence

**Result:** Court orders production OR sanctions opponent

### Example 3: Need to Appeal Defective Order

**Situation:**
- Case dismissed
- Order states no grounds, no papers considered
- Want to appeal but can't without knowing why you lost

**Workflow:**

**Day 1-3:**
1. File procedural enclosure demanding written order with grounds
2. File omnibus notice (22 NYCRR §202.48(b)) submitting proposed order
3. File motion to reargue (CPLR §2221) citing procedural defect

**Day 15-25:**
- Court denies motion to reargue without issuing compliant order
- Calculate appeal deadline (30 days from service of notice of entry)

**Day 26-30:**
- File notice of appeal (CPLR §5515)
- Raise procedural violation as appellate issue
- Argue: "Failure to state grounds prevents meaningful review" (cite *Mayer v. Turbe Eng'g*)

**Appellate Division:**
- Brief emphasizes CPLR §2219(a) is mandatory
- Seek remand for proper findings
- Even if affirmed on merits, may get new order with reasoning

**Result:** Remand for findings OR reversal for procedural error

---

**Next Steps:**
- Review `guides/FAQ.md` for common questions
- Check `guides/JURISDICTIONS.md` for state-specific variations
- Read `guides/ETHICS.md` for legal/ethical boundaries
- See `guides/GLOSSARY.md` for legal term definitions

**Need Help?**
- Open issue: https://github.com/josephfusco/procedural-enclosure-toolkit/issues
- Review examples: `/examples` directory
- Try AI prompts: `/prompts` directory
