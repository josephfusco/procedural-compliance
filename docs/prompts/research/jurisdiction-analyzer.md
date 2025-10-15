# Research: Jurisdiction Analyzer

**Version:** 1.0

## Objective
Analyze whether a court has subject matter jurisdiction, personal jurisdiction, and proper venue.

## Prompt Template
```
You are a jurisdiction and venue expert. Analyze jurisdiction for this situation.

CASE TYPE: {{case_type}}
PARTIES: {{parties_info}}
CLAIMS: {{claims}}
CURRENT COURT: {{court}}
DEFENDANT LOCATION/CONTACTS: {{defendant_info}}

TASK:
Analyze three jurisdictional questions:

1. **SUBJECT MATTER JURISDICTION**
   - Does this court have authority over this type of case?
   - Amount in controversy?
   - Exclusive vs. concurrent jurisdiction?

2. **PERSONAL JURISDICTION**
   - Does court have jurisdiction over defendant?
   - Long-arm statute (CPLR §302)?
   - Minimum contacts?
   - Due process satisfied?

3. **VENUE**
   - Is venue proper in this county? (CPLR Article 5)
   - Where should case be venued?
   - Can defendant move to change venue?

OUTPUT:
## JURISDICTION ANALYSIS

### I. Subject Matter Jurisdiction

**Issue:** Does [Court] have authority over [case type]?

**Analysis:**
- **Court's Jurisdiction:** [Statutory authority]
- **Amount in Controversy:** [If applicable]
- **Exclusive/Concurrent:** [Which courts can hear this]

**Conclusion:** ✓ Yes / ⚠️ Questionable / ✗ No
[If no: where should case be filed?]

### II. Personal Jurisdiction

**Issue:** Does court have jurisdiction over [defendant]?

**Traditional Bases:**
- Domicile in NY: [Yes/No]
- Served in NY: [Yes/No]
- Consent: [Yes/No]

**Long-Arm Jurisdiction (CPLR §302):**
- §302(a)(1) - Transaction of business: [Analysis]
- §302(a)(2) - Tortious act: [Analysis]
- §302(a)(3) - Property: [Analysis]

**Constitutional Analysis:**
- Minimum contacts: [Yes/No - explain]
- Purposeful availment: [Yes/No]
- Fair play and substantial justice: [Analysis]

**Conclusion:** ✓ Yes / ⚠️ Challengeable / ✗ No

### III. Venue

**Issue:** Is venue proper in [County]?

**CPLR Article 5 Analysis:**
- §503 (residence): [Does defendant reside here?]
- §504 (corporate venue): [If corporation]
- §507 (real property actions): [If applicable]
- §508 (special proceedings): [If applicable]

**Proper Venue:** [County/Counties]
**Current Venue Proper?** ✓ Yes / ✗ No

**Motion to Change Venue:**
- Can defendant move? (CPLR §511)
- Likelihood of success: [Assessment]

### IV. Recommendations

**Jurisdictional Issues:**
- [Any problems identified]
- [How to cure or argue]

**Venue Strategy:**
- [Defend current venue / expect motion to change]

**If Jurisdiction Lacking:**
- [Where to refile]
- [Timing considerations]

### Authorities Cited
- [CPLR provisions]
- [Cases on jurisdiction/venue]
```

## Related
- `/personas/procedural-expert.md` - Detailed procedural guidance
