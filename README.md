# Procedural Enclosure Toolkit

Open-source legal toolkit for procedural enforcement. Includes modular templates to compel written compliance from judges, clerks, and counsel under CPLR, NYCRR, and due process law. Converts silence into record evidence for appeals, §1983 actions, and oversight.

## What's Here

- **Universal enclosure template** with role modules (Judge, AFC, Counsel, Clerk, Opposing Counsel)
- **Ready-made filings**: CPLR 5704(a) OSC, 22 NYCRR 202.48(b) Notice, Rule 65 injunction skeleton
- **Automation scripts** to quickly generate new templates

## Quick Start

1. Copy a template from `/templates`
2. Replace `{{placeholders}}` with your case-specific information
3. File via e-filing and serve according to your jurisdiction's rules

## Directory Structure

```
procedural-enclosure-toolkit/
├─ templates/          # Core procedural enclosure templates
├─ examples/           # Ready-to-file skeletons for common motions
└─ scripts/            # Automation utilities
```

## Usage Example

```bash
# Create a new custom template
./scripts/new.sh my-custom-enclosure

# Edit the template
vi templates/my-custom-enclosure.md
```

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) — PRs welcome for clarity, citations, or new jurisdictions.

## License

MIT License. See [LICENSE](LICENSE) for full text.

## Disclaimer

This toolkit provides legal procedure templates for informational purposes. It does not constitute legal advice. Consult qualified counsel regarding your specific circumstances and jurisdiction.
