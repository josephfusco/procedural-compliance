#!/usr/bin/env bash
#
# new.sh - Create a new procedural enclosure template
#
# Usage: ./scripts/new.sh <template-name>
#
# Example: ./scripts/new.sh my-custom-enclosure
#

set -e

name="$1"

# Check if name argument is provided
if [ -z "$name" ]; then
    echo "Error: Template name is required"
    echo ""
    echo "Usage: $0 <template-name>"
    echo ""
    echo "Example:"
    echo "  $0 my-custom-enclosure"
    echo ""
    echo "This will create: templates/my-custom-enclosure.md"
    exit 1
fi

# Check if templates directory exists
if [ ! -d "templates" ]; then
    echo "Error: templates/ directory not found"
    echo "Make sure you're running this script from the repository root"
    exit 1
fi

# Check if universal template exists
if [ ! -f "templates/notice_universal.md" ]; then
    echo "Error: templates/notice_universal.md not found"
    echo "The universal template is required as the basis for new templates"
    exit 1
fi

# Create the new template
target="templates/${name}.md"

if [ -f "$target" ]; then
    echo "Error: Template already exists at $target"
    echo "Choose a different name or remove the existing file first"
    exit 1
fi

# Copy universal template to new file
cp templates/notice_universal.md "$target"

echo "✓ Created $target"
echo ""
echo "Next steps:"
echo "  1. Edit $target to customize for your use case"
echo "  2. Replace {{placeholders}} with case-specific information"
echo "  3. Add jurisdiction tags like [NY][CPLR] or [Fed] as appropriate"
echo ""
