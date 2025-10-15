# Flowchart: Appeal vs. Mandamus

**Decision tree for choosing between CPLR Article 55 (appeal) and CPLR Article 78 (mandamus)**

---

## Critical Decision

When a court makes an unfavorable ruling, you face a fundamental choice:

**Appeal:** Challenge the decision's correctness (CPLR Article 55)

**Mandamus:** Compel compliance with procedural requirement (CPLR Article 78)

**Both:** Sometimes you can and should do both simultaneously.

---

## Quick Decision Matrix

| Factor | Appeal | Mandamus |
|--------|--------|----------|
| **Timeline** | 30 days from notice of entry | No strict deadline (but don't delay) |
| **Standard** | Was decision correct? | Is duty ministerial? |
| **Court** | Appellate Division | Supreme Court (trial level) |
| **Relief** | Reverse/modify decision | Compel specific action |
| **Cost** | Higher (appellate filing fees, record) | Lower (trial court fees) |
| **Speed** | Slower (months to years) | Faster (weeks to months) |
| **Discretionary?** | Reviews discretionary + ministerial | Only ministerial duties |

---

## Decision Flowchart

```
┌──────────────────────────────────────────┐
│  Has court issued final decision/order?  │
└──────────────┬───────────────────────────┘
               │
               ▼
        ┌──────┴───────┐
        │              │
       YES            NO
        │              │
        ▼              ▼
┌─────────────┐   Still pending.
│ Within      │   File procedural
│ 30 days?    │   enclosure.
└──────┬──────┘   Monitor docket.
       │
   ┌───┴────┐
  YES      NO
   │        │
   │        ▼
   │    May be too late
   │    to appeal.
   │    Consult CPLR
   │    §5015 (vacate).
   │
   ▼
┌──────────────────────────────────────────┐
│  What is your primary complaint?         │
└──────────────┬───────────────────────────┘
               │
     ┌─────────┴─────────┬──────────────┐
     │                   │              │
     ▼                   ▼              ▼
┌─────────┐      ┌────────────┐   ┌────────────┐
│Decision │      │Procedural  │   │Court won't │
│is wrong │      │error in    │   │do something│
│(substan-│      │how decided │   │required by │
│tively)  │      │            │   │law         │
└────┬────┘      └─────┬──────┘   └─────┬──────┘
     │                 │                │
     ▼                 ▼                ▼
   [A1]              [A2]             [B]
```

---

## Path A1: Substantive Error (Wrong Decision)

**You selected:** "Decision is substantively wrong"

```
┌──────────────────────────────────────────┐
│ Examples:                                 │
│ - Judge got law wrong                    │
│ - Judge misapplied facts                 │
│ - Evidence insufficient                  │
│ - Abuse of discretion                    │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│  ✅ PRIMARY REMEDY: APPEAL                │
│                                          │
│ Template: Notice of Appeal               │
│ (/templates/notice_of_appeal.md)        │
│                                          │
│ File within 30 days with:                │
│ - Trial court (where case is)            │
│ - Appellate Division (jurisdiction)      │
│                                          │
│ Then: Perfect appeal per court schedule  │
│       (brief, appendix, record)          │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│  Do you also need emergency relief       │
│  pending appeal?                         │
└──────────────┬───────────────────────────┘
               │
           ┌───┴────┐
          YES      NO
           │        │
           ▼        ▼
┌─────────────────┐  Proceed with
│ ✅ ALSO FILE:    │  appeal only.
│ Emergency Stay  │
│ (/templates/    │  Monitor for
│ emergency_      │  scheduling.
│ stay.md)        │
│                 │
│ File same time  │
│ as Notice of    │
│ Appeal or soon  │
│ after.          │
│                 │
│ CPLR §5519      │
└─────────────────┘
```

**Recommended:** [Notice of Appeal](/templates/notice_of_appeal.md)

**Tutorial:** [Appealing a Decision](/educational/tutorials/appealing-decision.md)

---

## Path A2: Procedural Error in How Decided

**You selected:** "Procedural error in how decision was made"

```
┌──────────────────────────────────────────┐
│ Examples:                                 │
│ - No written findings (CPLR §2219(a))    │
│ - No hearing held (due process)          │
│ - Evidence excluded improperly (FRE/CPL) │
│ - Bias/recusal issue (22 NYCRR §100.3)   │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│  Can the procedural error be fixed       │
│  without reversing the decision?         │
└──────────────┬───────────────────────────┘
               │
           ┌───┴────┐
          YES      NO
           │        │
           ▼        ▼
┌──────────────────────┐  ┌─────────────────┐
│ Procedural error is  │  │ Procedural error│
│ MINISTERIAL (can be  │  │ is DISCRETIONARY│
│ fixed independently) │  │ (requires       │
│                      │  │ reversing       │
│ Examples:            │  │ decision)       │
│ - Issue written      │  │                 │
│   findings           │  │ Examples:       │
│ - Provide hearing    │  │ - Evidence      │
│ - Complete record    │  │   wrongly       │
│ - Sign order         │  │   excluded      │
│                      │  │ - Improper      │
│         │            │  │   standard used │
│         ▼            │  │                 │
│  ┌──────────────┐   │  │       │         │
│  │ ✅ PRIMARY:   │   │  │       ▼         │
│  │ Article 78   │   │  │  Appeal is      │
│  │ Mandamus     │   │  │  better remedy  │
│  │ (/templates/ │   │  │  (go to Path A1)│
│  │ article78_   │   │  └─────────────────┘
│  │ mandamus.md) │   │
│  │              │   │
│  │ Compels:     │   │
│  │ - Court to   │   │
│  │   perform    │   │
│  │   specific   │   │
│  │   duty       │   │
│  │              │   │
│  │ Fast, cheap, │   │
│  │ effective    │   │
│  └──────┬───────┘   │
│         │           │
│         ▼           │
│  ┌──────────────────────────┐
│  │ Should you ALSO appeal?  │
│  └──────┬───────────────────┘
│         │
│     ┌───┴────┐
│    YES      NO
│     │        │
│     ▼        ▼
│  ┌──────┐  Mandamus
│  │ BOTH │  only.
│  │      │
│  │File: │  If denied,
│  │1.Art.│  then
│  │  78  │  appeal.
│  │2.Not.│
│  │  of  │
│  │  App.│
│  │      │
│  │Belt +│
│  │Suspen│
│  │ders  │
│  └──────┘
└────────────────────────┘
```

**Recommended:**
- [Article 78 Mandamus](/templates/article78_mandamus.md) (if ministerial)
- [Notice of Appeal](/templates/notice_of_appeal.md) (if discretionary or belt-and-suspenders)

---

## Path B: Court Won't Do Something Required by Law

**You selected:** "Court refuses to perform duty required by law"

```
┌──────────────────────────────────────────┐
│ Examples:                                 │
│ - Won't issue written order (CPLR §2219) │
│ - Won't hold hearing (due process)       │
│ - Won't sign settlement (CPLR §2104)     │
│ - Won't rule on motion (unreasonable     │
│   delay)                                 │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│  Is the duty MINISTERIAL or              │
│  DISCRETIONARY?                          │
└──────────────┬───────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
  MINISTERIAL     DISCRETIONARY
       │                │
       ▼                ▼
┌────────────────┐  ┌─────────────────────┐
│ Duty is clear, │  │ Duty involves       │
│ non-discret-   │  │ judgment/decision-  │
│ ionary, and    │  │ making by judge.    │
│ mandatory.     │  │                     │
│                │  │ Examples:           │
│ Examples:      │  │ - Decide motion on  │
│ - Issue written│  │   merits            │
│   order with   │  │ - Grant or deny     │
│   grounds      │  │   relief            │
│   (CPLR §2219) │  │                     │
│ - Sign agreed  │  │ Mandamus WON'T work │
│   stipulation  │  │ for discretionary   │
│   (CPLR §2104) │  │ acts.               │
│ - Provide      │  │                     │
│   hearing when │  │       │             │
│   required     │  │       ▼             │
│                │  │  File procedural    │
│       │        │  │  enclosure, then    │
│       ▼        │  │  appeal if denied.  │
│ ┌────────────────────────┐               │
│ │ ✅ PRIMARY REMEDY:      │               │
│ │ Article 78 Mandamus    │               │
│ │ (/templates/           │               │
│ │ article78_mandamus.md) │               │
│ │                        │               │
│ │ Requirements:          │               │
│ │ 1. Clear legal right   │               │
│ │ 2. Ministerial duty    │               │
│ │ 3. No adequate remedy  │               │
│ │                        │               │
│ │ File in Supreme Court  │               │
│ │ (trial level)          │               │
│ │                        │               │
│ │ Outcome: Court order   │               │
│ │ compelling specific    │               │
│ │ action.                │               │
│ └────────────────────────┘               │
└──────────────────────────────────────────┘
```

**Recommended:** [Article 78 Mandamus](/templates/article78_mandamus.md)

**Tutorial:** [Filing Article 78](/educational/tutorials/filing-article-78.md)

---

## Key Distinctions

### Ministerial vs. Discretionary Duty

| Ministerial | Discretionary |
|-------------|---------------|
| **Definition:** Duty prescribed by law with no room for judgment | **Definition:** Duty requiring judgment or decision-making |
| **Examples:** | **Examples:** |
| - Issue written order (CPLR §2219(a)) | - Grant or deny summary judgment |
| - Hold hearing when required by statute | - Decide which evidence to admit |
| - Sign stipulation of settlement | - Determine credibility of witnesses |
| - Provide notice as required by law | - Set visitation schedule |
| **Remedy:** Mandamus (Article 78) | **Remedy:** Appeal (Article 55) |
| **Standard:** "Did they do it?" | **Standard:** "Was it right?" |

---

## Strategic Considerations

### When to File Both (Belt-and-Suspenders)

**File Article 78 AND Notice of Appeal when:**
1. ✅ Ministerial duty not performed (e.g., no written findings)
2. ✅ Substantive decision also wrong
3. ✅ Want fast relief (Article 78) plus full review (appeal)
4. ✅ Building record for multiple forums

**Example scenario:**
- Judge denies your motion via oral ruling (no written decision)
- Substantively, you believe denial was wrong
- **Action:** File both Article 78 (compel written decision) AND Notice of Appeal (challenge denial on merits)

**Outcome possibilities:**
- Article 78 granted → Court issues written decision → Strengthens appeal
- Article 78 denied → Still have appeal pending
- Appeal succeeds first → Article 78 becomes moot
- Both fail → At least you tried every remedy

---

### Timing Strategy

```
┌────────────────────────────────────┐
│ Day 0: Unfavorable order issued    │
└────────────┬───────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│ Day 1-7: File procedural enclosure │
│ (demand written decision)          │
└────────────┬───────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│ Day 7-14: If no response,          │
│ consider Article 78                │
└────────────┬───────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│ Day 28-30: If appealing, MUST      │
│ file Notice of Appeal by day 30    │
└────────────┬───────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│ Day 30+: Perfect appeal per        │
│ Appellate Division schedule        │
│ (usually 9-12 months)              │
└────────────────────────────────────┘
```

**Key deadline:** 30 days from notice of entry for Notice of Appeal. Miss this = lose appeal rights (absent extension).

---

## Common Scenarios

### Scenario 1: Judge Won't Issue Written Decision

**Facts:**
- Judge ruled orally in court
- You requested written decision
- Judge refuses or ignores request

**Analysis:**
- Duty to issue written decision is **ministerial** (CPLR §2219(a))
- Clear legal requirement with no discretion
- Adequate remedy: Article 78 mandamus

**Recommended Path:**
1. File procedural enclosure first (give judge chance to comply)
2. If ignored after 7-14 days, file Article 78
3. If you also disagree with ruling, file Notice of Appeal simultaneously

**Templates:**
- [Procedural Enclosure](/templates/procedural_enclosure.md)
- [Article 78 Mandamus](/templates/article78_mandamus.md)
- [Notice of Appeal](/templates/notice_of_appeal.md)

---

### Scenario 2: Judge Denied Motion You Disagree With

**Facts:**
- Judge denied your motion
- You believe decision is legally wrong
- Judge did provide written decision with grounds

**Analysis:**
- Challenge is to **substance** of decision (discretionary)
- Not a ministerial duty issue
- Adequate remedy: Appeal

**Recommended Path:**
- File Notice of Appeal within 30 days
- If need emergency relief pending appeal, also file Emergency Stay motion

**Templates:**
- [Notice of Appeal](/templates/notice_of_appeal.md)
- [Emergency Stay](/templates/emergency_stay.md) (if urgent)

---

### Scenario 3: Judge Won't Hold Required Hearing

**Facts:**
- Statute requires hearing before decision
- Judge skipped hearing and issued decision
- Decision is also substantively wrong

**Analysis:**
- Duty to hold hearing is **ministerial** (if statutorily required)
- Also procedural due process violation
- Substantive disagreement exists too

**Recommended Path:**
- File Article 78 (compel hearing as ministerial duty)
- File Notice of Appeal (challenge decision on merits)
- Consider Federal §1983 if due process pattern (see Federal guide)

**Templates:**
- [Article 78 Mandamus](/templates/article78_mandamus.md)
- [Notice of Appeal](/templates/notice_of_appeal.md)
- [Rule 65 Preliminary Injunction](/examples/rule65_prelim_injunction_skeleton.md) (federal)

---

## Decision Tree Summary

```
Question 1: Has decision been issued?
    ├─ No → Wait, or file procedural enclosure to expedite
    └─ Yes → Continue

Question 2: Within 30 days?
    ├─ No → May be too late (consult CPLR §5015)
    └─ Yes → Continue

Question 3: What is wrong?
    ├─ Substance → APPEAL
    ├─ Procedure (ministerial) → ARTICLE 78
    ├─ Procedure (discretionary) → APPEAL
    └─ Both → BOTH

Question 4: Do you need emergency relief?
    ├─ Yes (with pending appeal) → Emergency Stay
    ├─ Yes (no appeal yet) → Article 78 or TRO
    └─ No → Proceed with primary remedy

Question 5: Did you try procedural enclosure first?
    ├─ No → File procedural enclosure before Article 78
    └─ Yes → Proceed with Article 78 or appeal
```

---

## Verification Checklist

**Before deciding:**
- [ ] Identified whether duty is ministerial or discretionary
- [ ] Confirmed you're within 30-day appeal window (if appealing)
- [ ] Determined if emergency relief needed
- [ ] Reviewed procedural requirements for chosen remedy
- [ ] Consulted case law for similar situations
- [ ] Considered filing both (belt-and-suspenders)

---

## Additional Resources

**Related Flowcharts:**
- [Template Selector](/educational/flowcharts/template-selector.md)
- [Urgency Timeline](/educational/flowcharts/urgency-timeline.md)
- [Federal vs. State](/educational/flowcharts/federal-vs-state.md)

**Related Templates:**
- [Procedural Enclosure](/templates/procedural_enclosure.md)
- [Article 78 Mandamus](/templates/article78_mandamus.md)
- [Notice of Appeal](/templates/notice_of_appeal.md)
- [Emergency Stay](/templates/emergency_stay.md)

**Related Guides:**
- [FAQ](/guides/FAQ.md) - Q: "Appeal or Article 78?"
- [JURISDICTIONS](/guides/JURISDICTIONS.md) - Court-specific procedures
- [GLOSSARY](/guides/GLOSSARY.md) - Define "ministerial," "mandamus," etc.

---

## Disclaimer

**This flowchart provides general guidance only. Not legal advice.**

- Ministerial vs. discretionary distinction can be nuanced
- Case law evolves
- Strategic considerations vary by case
- Consult licensed attorney for case-specific advice

**By using this flowchart, you acknowledge:**
- Responsibility for verifying applicability to your case
- Understanding that outcomes vary
- Need for independent legal research
- Consulting counsel for complex decisions

---

## Feedback

**Improve this flowchart:**
- Open GitHub issue with "flowchart-improvement" label
- Describe confusing decision points
- Suggest additional scenarios
- Report errors in legal analysis

**Your input helps others make better strategic decisions.**

---

**Navigation:**
- [Back to Flowcharts](/educational/flowcharts/)
- [Back to Educational Resources](/educational/README.md)
- [View All Templates](/#templates)
