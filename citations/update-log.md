# Citation Database Update Log

**Purpose:** Track amendments, updates, and changes to statutes, rules, and case law used in this toolkit.

**Last Updated:** 2025-01-15

---

## Overview

This log tracks:
- **Statutory Amendments** - Changes to CPLR, 22 NYCRR, U.S.C., federal rules
- **Rule Changes** - Updates to court rules (local and statewide)
- **Case Law Updates** - Overruled, distinguished, or limited decisions
- **New Authority** - Recently published cases or enacted statutes
- **Deprecated Citations** - Removed or replaced authorities

---

## How to Use This Log

**Before filing any document:**
1. Check this log for recent changes to citations you're using
2. Verify statutes have not been amended since last update
3. Confirm case law is still good law
4. Review official sources for any updates not yet reflected here

**Contributors:**
- If you discover an amendment or case law change, submit a pull request updating:
  - Relevant JSON file (`statutes.json`, `cases.json`, `rules.json`)
  - This update log with date and description

---

## 2025 Updates

### January 2025

#### 2025-01-15 - Initial Database Creation
**Action:** Created comprehensive citation database
**Files:** `statutes.json`, `cases.json`, `rules.json`, `update-log.md`
**Verification Status:** All citations verified as current as of this date

**Statutes Verified:**
- CPLR (all sections in database)
- 22 NYCRR Parts 100, 202, 205, 216, 1200, 1240
- 28 U.S.C. §§1331, 1332, 1343, 1361, 1391
- 42 U.S.C. §1983
- FRCP, FRAP, FRE (current as of December 1, 2023 amendments)

**Case Law Verified:**
- All NY Court of Appeals cases checked via Justia
- All U.S. Supreme Court cases checked via Justia
- Second Circuit cases verified
- No overruling or limiting decisions found

**Next Review Due:** 2025-07-15 (6-month cycle recommended)

---

## Pending Verification

**Items requiring periodic re-verification:**

| Citation | Type | Last Verified | Next Review | Notes |
|----------|------|--------------|-------------|-------|
| FRCP amendments | Rules | 2025-01-15 | 2025-12-01 | Check annually for amendments |
| FRAP amendments | Rules | 2025-01-15 | 2025-12-01 | Check annually for amendments |
| 22 NYCRR Part 202 | Rules | 2025-01-15 | 2025-07-15 | Trial court rules - check semi-annually |
| Local federal rules | Rules | 2025-01-15 | 2025-07-15 | SDNY/EDNY/NDNY/WDNY local rules |

---

## Known Issues / Monitoring

**Developments to Monitor:**

### New York

**1. CPLR §2219(a) Case Law**
- **Status:** Stable
- **Monitoring:** Watch for new appellate decisions interpreting written order requirement
- **Last Major Decision:** *Apfel v. Prudential-Bache*, 81 N.Y.2d 470 (1993) - still good law

**2. 22 NYCRR §202.48(b) Amendments**
- **Status:** No pending amendments known
- **Monitoring:** Check Chief Administrative Judge memoranda for procedural changes
- **Source:** https://ww2.nycourts.gov/rules

**3. E-Filing Expansion**
- **Status:** NYSCEF mandatory in most counties
- **Monitoring:** New counties may be added to mandatory e-filing
- **Source:** 22 NYCRR §202.5-b

### Federal

**1. Federal Rules Amendments**
- **Status:** FRCP/FRAP amended December 1, 2023
- **Next Potential Amendment:** December 1, 2025
- **Monitoring:** https://www.uscourts.gov/rules-policies/pending-rules-and-forms-amendments

**2. Second Circuit Local Rules**
- **Status:** Stable
- **Monitoring:** Check https://www.ca2.uscourts.gov/ for updates

**3. Supreme Court Decisions Affecting §1983**
- **Status:** Qualified immunity doctrine under scrutiny
- **Monitoring:** Watch for potential changes to *Harlow* standard
- **Key Cases to Track:** Any Supreme Court §1983 or qualified immunity decisions

---

## Amendment Notification Process

**When a statute or rule is amended:**

1. **Immediate Actions:**
   - Create GitHub issue flagging the amendment
   - Label as "citation-update" and "urgent"
   - Identify which templates are affected

2. **Update Process:**
   - Update relevant JSON file with new text and effective date
   - Add entry to this update log
   - Update affected templates with new citations
   - Create pull request with descriptive commit message

3. **User Notification:**
   - If amendment affects core authorities (CPLR §2219(a), §1983, etc.):
     - Add notice to main README.md
     - Consider creating GitHub Discussion post
     - Tag issue as "breaking-change"

---

## Deprecated Citations

**Citations removed from database or marked obsolete:**

| Citation | Deprecated Date | Reason | Replacement |
|----------|----------------|--------|-------------|
| *(None as of initial release)* | - | - | - |

---

## Case Law Overruling Log

**Cases in database that have been overruled, limited, or distinguished:**

| Case | Status | Date | Details | Action Taken |
|------|--------|------|---------|--------------|
| *(None as of initial release)* | - | - | - | - |

---

## Verification Sources

**Official Sources for Verification:**

### New York
- **Statutes:** https://www.nysenate.gov/legislation/laws
- **Court Rules:** https://ww2.nycourts.gov/rules
- **Case Law:** https://www.nycourts.gov/reporter/
- **Appellate Division Decisions:** Department-specific reporters
- **Administrative Orders:** https://ww2.nycourts.gov/admin/index.shtml

### Federal
- **Statutes:** https://www.law.cornell.edu/uscode/
- **Court Rules:** https://www.uscourts.gov/rules-policies/current-rules-practice-procedure
- **Supreme Court:** https://www.supremecourt.gov/opinions/opinions.aspx
- **Second Circuit:** https://www.ca2.uscourts.gov/decisions
- **District Courts:** Check individual court websites

### Free Case Law Research
- Justia: https://law.justia.com/
- Google Scholar: https://scholar.google.com/
- Cornell LII: https://www.law.cornell.edu/

---

## Maintenance Schedule

**Recommended Review Intervals:**

| Authority Type | Review Frequency | Responsible Party |
|----------------|-----------------|-------------------|
| FRCP/FRAP | Annually (December) | Maintainers |
| NY Statutes (CPLR) | Semi-annually | Maintainers |
| NY Court Rules | Semi-annually | Maintainers |
| Local Rules | Annually | Maintainers |
| Case Law (Major) | Annually | Maintainers |
| Case Law (All) | As needed | Community |

**Community Contributions:**
- Users who discover amendments should submit pull requests
- Include source verification in PR description
- Update both JSON files and this log

---

## Contact for Citation Updates

**To report a citation error or amendment:**
1. Open GitHub issue with "citation-update" label
2. Include:
   - Citation in question
   - Nature of change (amendment, overruling, etc.)
   - Official source link
   - Effective date
   - Recommended template updates

**Urgent Updates:**
- If amendment affects core procedural rights or deadlines, label issue as "urgent"
- Maintainers will prioritize review and update

---

## Version History

| Version | Date | Changes | Contributor |
|---------|------|---------|-------------|
| 1.0.0 | 2025-01-15 | Initial citation database creation | Repository initialization |

---

## Next Scheduled Review

**Date:** 2025-07-15

**Scope:**
- Verify all CPLR citations current
- Check for 22 NYCRR amendments
- Review case law for subsequent history
- Update federal rules if December 2024 amendments enacted
- Verify local rules for all districts

**Process:**
1. Review official sources listed above
2. Update JSON files with any changes
3. Log changes in this file
4. Update affected templates
5. Create comprehensive update commit

---

**Disclaimer:**

This update log is maintained on a best-effort basis. Users are solely responsible for verifying all citations before filing. The toolkit maintainers do not guarantee real-time updates for all legal changes. **Always verify citations independently against official sources.**
