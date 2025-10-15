# Contributing Guidelines

Thank you for contributing to the Procedural Enclosure Toolkit. This project helps litigants enforce procedural rights through clear, reusable templates.

## Contribution Principles

1. **Keep tone procedural and neutral**
   Templates must remain jurisdiction-agnostic where possible and avoid argumentative language.

2. **Use `{{placeholders}}`**
   All case-specific information must use double-brace placeholder syntax: `{{Case Caption}}`, `{{Index No.}}`, `{{Court Name}}`, etc.

3. **Add jurisdiction tags**
   Label templates and examples with jurisdiction identifiers:
   - `[NY][CPLR]` — New York CPLR provisions
   - `[WDNY][Fed]` — Federal court (Western District of New York)
   - `[Universal]` — Jurisdiction-agnostic templates

4. **One change per pull request**
   Submit focused PRs with a clear before/after diff. Include:
   - Summary of the change
   - Reason for the change (e.g., clarity, new citation, coverage of new jurisdiction)
   - Test case or example usage (if applicable)

## What We Accept

- **Clarity improvements**: Simplifying language, fixing typos, improving structure
- **New citations**: Adding statutory or case law support for existing templates
- **New jurisdictions**: Adapting templates for other states or federal circuits
- **New templates**: Additional role-specific or motion-specific enclosures
- **Bug fixes**: Correcting incorrect legal citations or procedural errors

## What We Don't Accept

- Templates for offensive litigation (harassment, frivolous claims)
- Overly argumentative or inflammatory language
- Templates lacking proper legal citations
- Contributions that ignore placeholder conventions

## Submission Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-template-name`
3. Make your changes with clear commit messages
4. Test the template by filling in placeholders
5. Submit a pull request with a description of changes

## Questions?

Open an issue for discussion before submitting large changes.
