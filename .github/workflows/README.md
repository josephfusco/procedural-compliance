# GitHub Actions Workflows

**Automated quality assurance and deployment checks**

---

## Overview

This directory contains GitHub Actions workflows that automatically test, validate, and verify the integrity of the Procedural Enclosure Toolkit on every push and pull request.

---

## Workflows

### 1. Quality Assurance (`quality-assurance.yml`)

**Triggers:**
- Every push to `main` branch
- Every pull request to `main` branch
- Monthly schedule (1st of month at 00:00 UTC)

**Jobs:**

#### a. Validate Templates
- Checks for `{{placeholders}}` (expected in templates)
- Verifies no incomplete `[TODO]` or `[FIXME]` notes in documentation
- Confirms all required files exist

#### b. Validate JSON
- Syntax validation for all JSON files
- Structural validation of citation databases
- Ensures required keys present (metadata, new_york, federal)

#### c. Markdown Linting
- Lints all `.md` files for consistency
- Ignores long lines (legal documents have citations)
- Allows HTML (for tables and formatting)

#### d. Link Checker
- Validates internal relative links
- Checks file and directory references
- Warns on broken links (doesn't fail build)

#### e. Script Tests
- Makes scripts executable
- Tests validation script with sample file
- Tests citation checker
- Tests grading script

#### f. Security Scan
- Scans for Social Security Numbers
- Checks for real email addresses (should be anonymized)
- Looks for phone numbers
- Warns if sensitive patterns found

#### g. Accessibility Check
- Verifies heading hierarchy (no skipped levels)
- Ensures proper semantic structure

#### h. Citation Reminder (Monthly)
- Checks age of citation database
- Warns if citations over 6 months old
- Recommends review per update-log.md

---

### 2. Pages Deployment Check (`pages-deployment.yml`)

**Triggers:**
- Push to `main` affecting `docs/` directory
- Pull request to `main` affecting `docs/` directory

**Jobs:**

#### a. Validate Web Interface
- Verifies all required files exist
- Checks HTML structure and meta tags
- Validates CSS syntax and variables
- Verifies JavaScript structure
- Checks template database populated
- Validates GitHub URLs

#### b. Performance Check
- Measures file sizes (HTML, CSS, JS)
- Warns if files exceed size thresholds
- Checks for external dependencies
- Ensures fast loading (<200KB total)

#### c. SEO Check
- Validates title tag
- Checks meta description
- Ensures proper heading hierarchy (one H1)
- Verifies canonical URL (optional)

#### d. Deployment Simulation
- Confirms `.nojekyll` file exists
- Verifies file structure correct for GitHub Pages
- Tests local serving with Python HTTP server
- Validates all assets load correctly

---

## Status Badges

**Add to README.md:**

```markdown
![Quality Assurance](https://github.com/joefusco/procedural-enclosure-toolkit/workflows/Quality%20Assurance/badge.svg)
![Pages Deployment](https://github.com/joefusco/procedural-enclosure-toolkit/workflows/GitHub%20Pages%20Deployment%20Check/badge.svg)
```

---

## Local Testing

**Before pushing, test locally:**

### Test Scripts
```bash
chmod +x scripts/*.sh
./scripts/validate.sh templates/procedural_enclosure.md
./scripts/check-citations.sh templates/procedural_enclosure.md
./scripts/grade.sh templates/procedural_enclosure.md
```

### Test JSON
```bash
jq empty citations/statutes.json
jq empty citations/cases.json
jq empty citations/rules.json
```

### Test Web Interface
```bash
cd docs/
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

---

## Workflow Configuration

### Customization

**Adjust check severity:**

Edit workflow files to change from warnings to errors:

```yaml
# Change this (warning):
if [ $ERRORS -gt 0 ]; then
  echo "⚠️ Found issues"
  # Don't fail, just warn
fi

# To this (error):
if [ $ERRORS -gt 0 ]; then
  echo "❌ Found issues"
  exit 1  # Fail build
fi
```

**Add new checks:**

1. Add job to appropriate workflow
2. Follow existing patterns
3. Test locally first
4. Update this README with description

---

## Failure Handling

### What to Do When Checks Fail

**1. Template Validation Failure:**
- Review error output in Actions tab
- Check for unfilled placeholders in docs
- Fix issues in relevant files
- Re-push

**2. JSON Validation Failure:**
- Run `jq empty citations/*.json` locally
- Fix JSON syntax errors
- Verify structure with `jq` queries
- Re-push

**3. Markdown Linting Failure:**
- Review markdownlint output
- Fix formatting issues
- Consider adjusting config if rule doesn't apply
- Re-push

**4. Link Checker Warnings:**
- Review broken link report
- Fix relative paths
- Update moved/renamed files
- Re-push

**5. Script Test Failure:**
- Run script locally to reproduce
- Fix script logic
- Test with sample files
- Re-push

**6. Web Interface Validation Failure:**
- Check HTML/CSS/JS syntax
- Test local serving
- Verify all required files present
- Re-push

---

## Best Practices

### Before Committing

**Checklist:**
- [ ] Run `./scripts/validate.sh` on any changed templates
- [ ] Run `jq empty` on any changed JSON files
- [ ] Test web interface locally if changed `docs/`
- [ ] Review markdown formatting
- [ ] Verify all links work

### Pull Request Workflow

**For contributors:**
1. Fork repository
2. Create feature branch
3. Make changes
4. Test locally (see "Local Testing" above)
5. Push to your fork
6. Create pull request
7. Wait for automated checks to pass
8. Address any failures
9. Request review

---

## Scheduled Workflows

### Monthly Checks

**Citation Reminder (1st of month):**
- Automatically checks citation age
- Warns if over 6 months old
- Recommends verification process

**To manually trigger:**
```bash
# Via GitHub UI:
# 1. Go to Actions tab
# 2. Select workflow
# 3. Click "Run workflow"
# 4. Select branch
# 5. Click "Run workflow" button
```

---

## Secrets and Environment Variables

**Current workflows use no secrets.**

**If adding sensitive checks:**
1. Add secret in repository Settings → Secrets
2. Reference in workflow: `${{ secrets.SECRET_NAME }}`
3. Never hardcode secrets in workflow files

---

## Monitoring

### GitHub Actions Limits

**Free tier:**
- 2,000 minutes/month for private repos
- Unlimited for public repos

**Current usage:**
- Quality Assurance: ~5-10 minutes per run
- Pages Deployment: ~3-5 minutes per run
- Scheduled (monthly): ~2 minutes

**Estimated monthly usage:** <100 minutes (well under limits)

### Notifications

**Configure in GitHub Settings → Notifications:**
- Email on workflow failure
- Slack/Discord integration (optional)
- GitHub mobile app notifications

---

## Troubleshooting

### Workflow Won't Trigger

**Possible causes:**
- Branch name doesn't match trigger
- Path filter excludes your files
- Workflow disabled in Settings
- `.github/workflows/` not in repo root

**Fix:**
- Verify branch name is `main`
- Check path filters in `on:` section
- Enable workflow in Actions tab
- Ensure correct directory structure

### Workflow Stuck or Slow

**Possible causes:**
- Large file processing
- Network issues (external link checking)
- GitHub Actions queue congestion

**Fix:**
- Optimize checks (reduce file reads)
- Skip non-critical checks temporarily
- Retry after delay

### False Positives

**If check incorrectly fails:**
1. Review check logic in workflow file
2. Determine if issue is real or false positive
3. If false positive:
   - Adjust check logic, OR
   - Add exception for specific case, OR
   - Change to warning instead of error
4. Update workflow
5. Document change in this README

---

## Future Enhancements

**Planned additions:**
- [ ] Automated spell checking (legal terminology dictionary)
- [ ] Citation verification against official sources (API integration)
- [ ] Template versioning checks
- [ ] Automated changelog generation
- [ ] Performance benchmarking (load time tracking)
- [ ] Visual regression testing for web interface
- [ ] Automated PR labeling (bug, enhancement, documentation)

---

## Contributing Workflow Improvements

**To propose new checks:**
1. Open GitHub issue with "ci-cd" label
2. Describe check purpose and value
3. Provide sample implementation (optional)
4. Discuss trade-offs (time, reliability, value)
5. Submit pull request if approved

**Guidelines:**
- Keep checks fast (<5 minutes per job)
- Fail fast (error early if critical issue)
- Provide clear error messages
- Document in this README

---

## Resources

**GitHub Actions Documentation:**
- https://docs.github.com/en/actions

**Workflow Syntax:**
- https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions

**Marketplace (Actions):**
- https://github.com/marketplace?type=actions

**Example Workflows:**
- https://github.com/actions/starter-workflows

---

## Maintenance

**Regular tasks:**
- Monthly: Review citation reminder output
- Quarterly: Update action versions (`@v4` → `@v5`)
- Annually: Review and optimize workflows

**Version updates:**
```yaml
# Keep actions up-to-date
- uses: actions/checkout@v4  # Check for @v5
- uses: actions/setup-node@v4  # Check for newer
```

---

## Contact

**For workflow issues:**
- Open GitHub issue with "ci-cd" label
- Describe problem and attach workflow run link
- Include error output if available

---

**License:** MIT (same as main repository)

**Last Updated:** 2025-01-15
