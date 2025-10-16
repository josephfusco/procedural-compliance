# Community Features Setup

**Guide for enabling and managing GitHub Discussions, Wiki, Issues, and community engagement**

---

## Overview

The Procedural Enclosure Toolkit uses GitHub's community features to foster collaboration, knowledge sharing, and continuous improvement. This guide explains how to enable and use these features.

---

## Enabling Features (Repository Owner)

### 1. GitHub Discussions

**Enable in Repository Settings:**
1. Go to Settings → General
2. Scroll to "Features"
3. Check ☑ "Discussions"
4. Click Save

**Configure Categories:**
- Q&A (for questions - mark best answer)
- General (for general discussion)
- Template Requests (for new template ideas)
- Success Stories (for sharing outcomes)
- Jurisdictions (for state-specific discussions)
- AI Prompts (for prompt engineering tips)

**Pin Important Discussions:**
- Welcome & Community Guidelines
- How to Contribute
- Citation Verification Protocol
- AI Safety Best Practices

### 2. GitHub Wiki

**Enable in Repository Settings:**
1. Go to Settings → General
2. Scroll to "Features"
3. Check ☑ "Wikis"
4. Click Save

**Initial Wiki Pages:**
See `/wiki-templates/` directory for markdown files ready to import.

**Import Process:**
```bash
# Clone wiki repository
git clone https://github.com/joefusco/procedural-compliance.wiki.git

# Copy template files
cp wiki-templates/*.md procedural-compliance.wiki/

# Push to wiki
cd procedural-compliance.wiki
git add .
git commit -m "Initialize wiki with template documentation"
git push
```

### 3. GitHub Issues

**Already enabled by default.**

**Configure Issue Templates:**
- Templates located in `.github/ISSUE_TEMPLATE/`
- Automatically appear when users create new issues
- Categories: Bug Report, Feature Request, Template Request, Citation Update, Documentation

**Labels to Create:**
```
bug - Something isn't working
enhancement - New feature or request
template-request - Request for new template
citation-update - Citation needs verification/update
documentation - Improvements or additions to documentation
good-first-issue - Good for newcomers
help-wanted - Extra attention is needed
question - Further information is requested
web-interface - Related to GitHub Pages site
ci-cd - Related to workflows/automation
educational-content - Tutorials, flowcharts, guides
jurisdiction - Jurisdiction-specific issue
ai-prompts - Related to AI prompt engineering
```

### 4. Pull Request Template

**Automatically used when creating PRs.**

Located at: `.github/pull_request_template.md`

---

## For Community Members

### How to Participate

#### Asking Questions (GitHub Discussions)

**Best practices:**
1. Search existing discussions first
2. Use Q&A category for questions
3. Anonymize your case facts
4. Specify jurisdiction (NY, Federal, other)
5. Mark helpful answers

**Example:**
```
Title: How do I file procedural enclosure if court is closed?

Category: Q&A

Body:
I need to file a procedural enclosure demanding written order (CPLR §2219(a)),
but the courthouse is closed due to holiday. Case is in Supreme Court, Kings County.
What should I do?

[No personally identifying information included]
```

#### Sharing Success Stories

**Use "Success Stories" category:**
1. Anonymize all details (no names, case numbers, dates)
2. Describe situation → action taken → outcome
3. Include lessons learned
4. Link to templates used

**Example:**
```
Title: [Success] Article 78 Compelled Written Decision

Situation: Family Court judge refused to provide written findings after
removing children from my care.

Action: Filed procedural enclosure, waited 14 days, then filed Article 78
mandamus petition using toolkit template.

Outcome: Supreme Court granted Article 78 petition and ordered Family Court
to issue written decision within 30 days. FC complied.

Lessons Learned:
1. Procedural enclosure creates record
2. Wait reasonable time before Article 78
3. Keep all filing confirmations
4. Consider both remedies (appeal + mandamus)

Templates Used:
- Procedural Enclosure (/templates/procedural_enclosure.md)
- Article 78 Mandamus (/templates/article78_mandamus.md)

[All details anonymized]
```

#### Reporting Bugs

**Use Bug Report issue template:**
1. Describe what's wrong
2. Include steps to reproduce
3. Expected vs. actual behavior
4. Screenshots if applicable
5. Environment (OS, browser if web interface)

#### Requesting Features

**Use Feature Request issue template:**
1. Describe desired feature
2. Explain use case
3. Suggest implementation (optional)
4. Note any similar features elsewhere

#### Requesting New Templates

**Use Template Request issue template:**
1. Specify jurisdiction (NY, Federal, other)
2. Describe situation/need
3. Identify legal authorities
4. Explain why existing templates don't fit

#### Contributing Code/Content

**Use Pull Request template:**
1. Fork repository
2. Create feature branch
3. Make changes
4. Test locally
5. Submit PR with description
6. Wait for review

---

## Discussion Guidelines

### Code of Conduct

**All participants must:**
- ✅ Be respectful and professional
- ✅ Assume good faith
- ✅ Provide constructive feedback
- ✅ Anonymize case details
- ✅ Cite sources and verify facts
- ❌ Provide legal advice (educational info only)
- ❌ Share confidential information
- ❌ Harass or discriminate
- ❌ Spam or promote unrelated services

**See:** `/CODE_OF_CONDUCT.md` for full policy

### Privacy and Anonymization

**Always anonymize:**
- Real names (use "Party A," "Respondent," etc.)
- Case numbers (use "Index No. XXXXX/2025")
- Specific dates (use "January 2025" instead of "January 15, 2025")
- Locations beyond county/state
- Children's information
- Any personally identifying details

**Example:**
```
❌ BAD:
"My case is Jane Smith v. John Doe, Index No. 123456/2024 in Kings County
Supreme Court. Judge Susan Johnson ruled against me on June 15, 2024..."

✅ GOOD:
"In a custody case in Kings County Supreme Court, the judge ruled against
movant in mid-2024 without providing written findings as required by
CPLR §2219(a)..."
```

### Legal Disclaimers

**Every discussion should include:**
- "Not legal advice. Educational purposes only."
- "Consult licensed attorney for case-specific guidance."
- "Every case is different. Outcomes vary."

**Moderators may add disclaimers to discussions if needed.**

---

## Wiki Structure

### Planned Pages

**Home**
- Welcome to the Wiki
- Quick links to main resources
- Recent updates

**Getting Started**
- First time? Start here
- Choosing the right template
- Understanding your jurisdiction

**Templates by Jurisdiction**
- New York Templates
- Federal Templates
- State-Specific Adaptations

**Case Studies**
- Anonymized real-world examples
- Outcomes and lessons learned
- Strategic decision-making

**AI Prompt Engineering**
- Best practices for AI use
- Prompt templates
- Citation verification workflows
- Privacy and confidentiality

**Citation Database**
- How to use citation database
- Verification procedures
- Update process
- Amendment tracking

**Court Procedures**
- E-filing (NYSCEF, CM/ECF)
- Service requirements
- Motion practice
- Appeals process

**FAQ**
- Link to main FAQ
- Community Q&A highlights
- Common mistakes to avoid

**Contributing**
- How to contribute
- Style guide
- Review process
- Recognition

---

## Issue Management

### Triage Process

**Weekly review:**
1. New issues → Label appropriately
2. Duplicate → Close with link to original
3. Needs info → Request clarification
4. Good first issue → Tag for new contributors
5. Ready → Assign to milestone if applicable

### Labels Usage

| Label | When to Use |
|-------|-------------|
| `bug` | Template error, broken link, script failure |
| `enhancement` | New feature, improved workflow |
| `template-request` | Need new template for specific situation |
| `citation-update` | Citation outdated or incorrect |
| `documentation` | README, guides, tutorials need improvement |
| `good-first-issue` | Easy for new contributors (typo fix, simple docs) |
| `help-wanted` | Need community input or expertise |
| `question` | Needs answer, may become discussion |
| `web-interface` | GitHub Pages site issue |
| `ci-cd` | Workflow or automation problem |
| `educational-content` | Tutorial, flowchart, guide needed |
| `jurisdiction` | State-specific issue (CA, TX, FL) |
| `ai-prompts` | Prompt engineering improvement |

### Milestones

**Create milestones for:**
- Version releases (v1.1, v1.2, etc.)
- Major features (e.g., "California Expansion")
- Documentation sprints
- Citation verification cycles

---

## Recognition

### Contributors

**Acknowledge contributions:**
- Add to `CONTRIBUTORS.md` file
- Mention in release notes
- "Thanks @username for..." in merged PRs

### Community Stars

**Recognize helpful community members:**
- Most helpful answers in Discussions
- Quality template contributions
- Documentation improvements
- Bug reports with clear reproductions

**Consider GitHub Sponsors for:**
- Ongoing maintenance
- Citation verification services
- Legal research support

---

## Moderation

### Moderator Responsibilities

**Moderators should:**
- Enforce Code of Conduct
- Remove spam and off-topic content
- Lock contentious discussions if needed
- Guide users to appropriate channels
- Ensure privacy (remove PII if posted)

### Escalation

**For serious violations:**
1. Warn user (first offense)
2. Temporary block (repeated violations)
3. Permanent block (severe or continued violations)
4. Report to GitHub (if ToS violation)

---

## Community Metrics

### Track Engagement

**Monthly review:**
- Discussions: Number of topics, responses, resolved questions
- Issues: Opened vs. closed, average time to resolution
- PRs: Submitted, merged, average review time
- Wiki: Page views, edits, new pages
- Contributors: New vs. returning

**Tools:**
- GitHub Insights (built-in analytics)
- Community health checks
- Contribution graphs

---

## Resources

### For Community Members

**Where to go for:**
- Questions → GitHub Discussions (Q&A)
- Bug reports → GitHub Issues (Bug Report template)
- Feature ideas → GitHub Discussions (General) or Issues (Feature Request)
- Template requests → GitHub Issues (Template Request template)
- Success stories → GitHub Discussions (Success Stories)

### For Maintainers

**Resources:**
- [GitHub Discussions Guide](https://docs.github.com/en/discussions)
- [Managing Issues](https://docs.github.com/en/issues)
- [Community Management Best Practices](https://opensource.guide/building-community/)

---

## Next Steps

**To activate community features:**
1. Enable Discussions in repository settings
2. Enable Wiki in repository settings
3. Create discussion categories (see above)
4. Import wiki templates from `/wiki-templates`
5. Create issue labels (see above)
6. Pin welcome discussion
7. Announce features in README.md

**Community launch checklist:**
- [ ] Discussions enabled with categories
- [ ] Wiki enabled with initial pages
- [ ] Issue templates configured
- [ ] PR template in place
- [ ] Labels created
- [ ] Welcome discussion pinned
- [ ] README updated with community links
- [ ] Code of Conduct visible

---

**License:** MIT (same as main repository)

**Contact:** Open GitHub Discussion or Issue for community feature questions
