# Tutorial: Demanding a Written Order

**Step-by-step guide to enforcing CPLR §2219(a) and 22 NYCRR §202.48(b)**

---

## Overview

**Objective:** Compel judge to provide written decision with stated grounds for ruling

**Time Required:** 1-2 hours (preparation) + court processing time

**Difficulty:** ⭐⭐ Beginner-Intermediate

**Prerequisites:**
- Oral decision or order without written grounds
- Case in NY state court
- Basic understanding of your case facts

**Outcome:** Formal record of demand, preserved appellate issue, potential written order

---

## When to Use This Tutorial

**Use when:**
- ✅ Judge issued oral ruling without written grounds
- ✅ Order received lacks "statement of the grounds therefor" (CPLR §2219(a))
- ✅ You need written findings for appeal or review
- ✅ You want to preserve procedural error on the record

**Do NOT use when:**
- ❌ Judge already provided written decision with reasoning
- ❌ Federal court (different standard - FRCP 52(a) applies)
- ❌ Written decision exists but you disagree with substance (appeal instead)

---

## Legal Foundation

### CPLR §2219(a)
"Every order shall be in writing and contain a determination of the motion and a statement of the grounds therefor."

### 22 NYCRR §202.48(b)
"All orders and judgments shall state the relief granted or denied..."

### Key Case: *Apfel v. Prudential-Bache*
81 N.Y.2d 470 (1993) - NY Court of Appeals requires written statement of grounds.

---

## Step-by-Step Process

### Step 1: Confirm You Need This

**✓ Checklist:**
- [ ] Did judge issue ruling orally in court?
- [ ] Did you receive "short form" order without reasoning?
- [ ] Has it been less than 30 days since ruling? (preserve appeal rights)
- [ ] Do you have copy of order (if written) or notes from court appearance?

**If all checked, proceed to Step 2.**

---

### Step 2: Gather Information

**Collect:**
1. **Order/Decision** - If written order exists, obtain copy
2. **Transcript** - If oral ruling, request transcript (costs $$ but valuable)
3. **Your Motion Papers** - Original motion that was decided
4. **Opposing Papers** - Adversary's response/opposition
5. **Docket Sheet** - Shows all filings in case

**Where to find:**
- NYSCEF (if e-filed case): https://iapps.courts.state.ny.us/nyscef/
- Court clerk's office (if paper filing)
- Your own records

**Estimated time:** 30-60 minutes

---

### Step 3: Download Template

**Get the template:**
1. Go to: [Procedural Enclosure Template](/templates/procedural_enclosure.md)
2. Save file to your computer
3. Open in text editor or Word processor

**Verify you have:**
- ✅ Header with court name
- ✅ Caption with party names and index number
- ✅ Body with CPLR §2219(a) citation
- ✅ Signature block
- ✅ Proof of service

---

### Step 4: Customize Template

**Replace all `{{placeholders}}` with your information:**

| Placeholder | Your Information | Example |
|-------------|------------------|---------|
| `{{COURT}}` | Full court name | "Supreme Court of the State of New York" |
| `{{COUNTY}}` | County | "New York County" |
| `{{Your Name}}` | Your full legal name | "Jane Smith" |
| `{{Opposing Party}}` | Other party's name | "John Doe" |
| `{{Index No.}}` | Case number | "123456/2024" |
| `{{Date of Order}}` | When ruling issued | "January 10, 2025" |
| `{{Motion Description}}` | What motion was decided | "Defendant's motion to dismiss" |
| `{{Ruling}}` | What court decided | "Granted motion to dismiss" |

**Also customize:**
- Specific facts of your case
- Details of what relief was granted/denied
- Any exhibits referenced

**Estimated time:** 30-45 minutes

---

### Step 5: Validate Document

**Before filing, check:**

**Option A: Automated Validation (Recommended)**
```bash
./scripts/validate.sh your-procedural-enclosure.md
```

**Option B: Manual Checklist**
- [ ] All `{{placeholders}}` filled in
- [ ] No `[BRACKET NOTES]` remaining
- [ ] Citations accurate (CPLR §2219(a), not CPLR 2219)
- [ ] Dates correct
- [ ] Index number matches case
- [ ] Signature included
- [ ] Service list complete (all parties/attorneys)

**Fix any errors before proceeding.**

**Estimated time:** 10-15 minutes

---

### Step 6: Convert to PDF

**Required format:** PDF for court filing

**How to convert:**

**Method 1: Markdown to PDF (Recommended)**
```bash
pandoc procedural-enclosure.md -o procedural-enclosure.pdf
```

**Method 2: Word to PDF**
1. Open document in Microsoft Word
2. File → Save As → PDF
3. Ensure formatting preserved

**Method 3: Google Docs**
1. Upload to Google Docs
2. File → Download → PDF Document

**Verify PDF:**
- ✅ All text visible
- ✅ Formatting correct
- ✅ Page numbers present
- ✅ Signature visible

**Estimated time:** 5-10 minutes

---

### Step 7: File with Court

**NY Counties with Mandatory E-Filing (NYSCEF):**

Manhattan, Brooklyn, Queens, Bronx, Staten Island, Nassau, Suffolk, Westchester, Erie, Monroe, Onondaga

**E-Filing Steps:**
1. Log in to NYSCEF: https://iapps.courts.state.ny.us/nyscef/
2. Select your case (by index number)
3. Click "File a Document"
4. Document Type: "Demand for Written Decision" or "Notice"
5. Upload PDF
6. Pay filing fee (if required - usually waived for pro se)
7. Submit

**Paper Filing (Non-NYSCEF Counties):**
1. Print 3 copies (court, adversary, your file)
2. Bring to court clerk's office
3. Clerk will file-stamp and return copy to you
4. Pay filing fee if required

**Estimated time:** 15-30 minutes

---

### Step 8: Serve on All Parties

**Who to serve:**
- ✅ Opposing party's attorney (or party if pro se)
- ✅ All other parties in case
- ✅ Anyone who appeared in the motion

**Service methods (CPLR §2103):**

**Option 1: Email (if NYSCEF case)**
- NYSCEF automatically serves filed documents
- Verify service confirmation in your email

**Option 2: First Class Mail**
- Mail copy to each party's attorney
- Address from court papers or NYSCEF
- Keep mailing receipt

**Option 3: Personal Service**
- Hand-deliver to attorney's office
- Obtain signed acknowledgment

**Complete Affidavit of Service:**
- Who served
- How served (email, mail, hand delivery)
- When served (date and time)
- To whom served (names and addresses)

**File Affidavit of Service with court within 3 days.**

**Estimated time:** 20-30 minutes

---

### Step 9: Follow Up

**Timeline:**

| Days After Filing | Action |
|-------------------|--------|
| **0-7 days** | Wait for court response. Check NYSCEF daily. |
| **7-14 days** | If no response, send follow-up letter to court. |
| **14-21 days** | If still no response, consider Article 78 (see below). |
| **Within 30 days** | If appealing, file Notice of Appeal to preserve rights. |

**Possible Outcomes:**

**Best case:**
- Court issues written order with grounds
- Appellate record now complete
- Can proceed with appeal if needed

**Common case:**
- Court ignores demand
- Preserved procedural error for appeal
- Strengthened appellate argument

**Worst case:**
- Court refuses to comply
- Proceed to Article 78 mandamus
- Or cite violation in appellate brief

---

### Step 10: Preserve for Appeal

**Regardless of outcome:**

**Document everything:**
1. **Save all filings** - Procedural enclosure, affidavits, orders
2. **Print confirmation** - NYSCEF filing confirmations, email receipts
3. **Create timeline** - Dates of oral ruling, filing, non-compliance
4. **Note in appeal** - If appealing, cite procedural violation

**In Notice of Appeal, include:**
- "Trial court violated CPLR §2219(a) by failing to state grounds for decision"
- "Despite procedural enclosure dated [date], court failed to comply"
- "Appellant was deprived of meaningful appellate review"

**In Appellate Brief:**
- Point I: Procedural Error (CPLR §2219(a) violation)
- Cite: *Apfel*, *Lohnas*, your procedural enclosure
- Argue: Inability to challenge reasoning on appeal

---

## Troubleshooting

### Problem: Court Already Issued Order Before I Filed

**Solution:**
- File procedural enclosure anyway
- Request "amended" or "supplemental" order with grounds
- Still preserves issue for appeal

### Problem: Judge Gets Angry or Hostile

**Solution:**
- Remain professional and respectful
- Cite legal authority only: "Your Honor, CPLR §2219(a) requires..."
- Document any retaliation for potential judicial conduct complaint

### Problem: Opposing Counsel Objects

**Solution:**
- Procedural enclosure is not adversarial
- You have absolute right to written decision
- No consent needed from adversary

### Problem: Unclear if Order is "Final" or "Interlocutory"

**Solution:**
- File procedural enclosure for ANY order
- Doesn't matter if final or interlocutory
- CPLR §2219(a) applies to all orders

---

## Next Steps Based on Outcome

### If Court Provides Written Decision
**✓ Success!**
- Review written decision carefully
- Decide whether to appeal substantive ruling
- Proceed with case or appeal

### If Court Ignores Demand
**Options:**
1. **Appeal** - Cite procedural violation in appellate brief
2. **Article 78** - Mandamus to compel written order
   - See: [Filing Article 78 Tutorial](/educational/tutorials/filing-article-78.md)
3. **Judicial Conduct Complaint** - Pattern of non-compliance
   - See: [Judicial Conduct Template](/templates/judicial_conduct_complaint.md)

### If Court Denies Demand
**Rare but possible:**
- Court issues order denying your demand for written order
- Ironically, this is a written order you can appeal
- Proceed with appeal citing procedural violation

---

## Real-World Example

**Anonymized Scenario:**

**Situation:**
- Family Court judge orally ordered visitation restrictions
- No written findings or explanation
- Parent filed procedural enclosure

**Outcome:**
- Judge ignored procedural enclosure
- Parent appealed citing CPLR §2219(a) violation
- Appellate Division reversed: "Without written findings, we cannot review whether decision was proper. Matter remanded for written decision."

**Result:** Case remanded, second chance at trial court.

**Lesson:** Even if trial court ignores demand, appellate court may vindicate procedural rights.

---

## Additional Resources

**Related Templates:**
- [Procedural Enclosure Template](/templates/procedural_enclosure.md)
- [Article 78 Mandamus](/templates/article78_mandamus.md)
- [Notice of Appeal](/templates/notice_of_appeal.md)

**Related Guides:**
- [FAQ](/guides/FAQ.md) - Q: "What if court ignores procedural enclosure?"
- [JURISDICTIONS](/guides/JURISDICTIONS.md) - Court-specific information
- [GLOSSARY](/guides/GLOSSARY.md) - Legal terms defined

**Flowcharts:**
- [Urgency Timeline](/educational/flowcharts/urgency-timeline.md)
- [Appeal vs. Mandamus](/educational/flowcharts/appeal-vs-mandamus.md)

---

## Estimated Total Time

| Task | Time |
|------|------|
| Information gathering | 30-60 min |
| Template customization | 30-45 min |
| Validation | 10-15 min |
| PDF conversion | 5-10 min |
| Filing | 15-30 min |
| Service | 20-30 min |
| **Total** | **2-3 hours** |

**Plus:** Ongoing monitoring (5-10 min/day for 30 days)

---

## Success Metrics

**Immediate:**
- ✅ Procedural enclosure filed and served
- ✅ Proof of service in court file
- ✅ Issue preserved for appeal

**Short-term (1-30 days):**
- ✅ Court issues written decision, OR
- ✅ Non-compliance documented for appeal

**Long-term (appeal):**
- ✅ Appellate court reverses for procedural violation
- ✅ Case remanded for proper decision
- ✅ Precedent established for future cases

---

## Disclaimer

**This tutorial is educational only. Not legal advice.**

- Every case is different
- Court practices vary by county and judge
- Consult licensed attorney for case-specific guidance
- No guarantee of specific outcome

**By using this tutorial, you acknowledge:**
- Sole responsibility for filing accuracy
- Independent verification of citations and procedures
- Understanding that outcomes vary

---

## Feedback

**Improve this tutorial:**
- Open GitHub issue with "tutorial-improvement" label
- Describe what was confusing or missing
- Suggest additional examples or explanations

**Success story?**
- Share anonymized outcome (no identifying info)
- Help others learn from your experience
- Submit as pull request to `/educational/scenarios`

---

**You're now ready to demand a written order. Good luck!**

Next: [Filing Article 78 Mandamus Tutorial](/educational/tutorials/filing-article-78.md)
