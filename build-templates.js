#!/usr/bin/env node

/**
 * Build Templates Script
 * Generates static HTML pages from markdown templates
 */

const fs = require('fs');
const path = require('path');

// Import marked for markdown parsing (using dynamic import since marked v11 is ESM)
let marked;

// Template metadata - reduced to 4 core templates
const templateMetadata = {
    'article78_mandamus.md': {
        title: 'Article 78 Mandamus',
        subtitle: 'CPLR §7803(1) - Compel Ministerial Duty',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        role: 'procedural'
    },
    'federal_mandamus.md': {
        title: 'Federal Mandamus',
        subtitle: '28 U.S.C. §1361 - Compel Federal Officer',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        role: 'procedural'
    },
    'notice_of_appeal.md': {
        title: 'Notice of Appeal',
        subtitle: 'CPLR §5515 - Appellate Procedure',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'urgent',
        role: 'procedural'
    },
    'federal_notice_of_appeal.md': {
        title: 'Federal Notice of Appeal',
        subtitle: 'FRAP Rule 3 - Circuit Court Appeal',
        jurisdiction: 'federal',
        category: 'appeals',
        urgency: 'urgent',
        role: 'procedural'
    }
};

// Parse YAML frontmatter
function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = markdown.match(frontmatterRegex);

    if (!match) {
        return { frontmatter: {}, content: markdown };
    }

    const frontmatterText = match[1];
    const content = markdown.slice(match[0].length);

    const frontmatter = {};
    const lines = frontmatterText.split('\n');

    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }

            frontmatter[key] = value;
        }
    }

    return { frontmatter, content };
}

// Post-process HTML - minimal processing only
function enhanceWithUSWDS(html) {
    // No USWDS enhancements - keep template content clean
    return html;
}

// Removed USWDS helper functions - no longer needed

// Generate HTML page for a template
function generateTemplatePage(templateFile, metadata, markdownContent) {
    const { frontmatter, content } = parseFrontmatter(markdownContent);
    let htmlContent = marked.parse(content);

    // Enhance with USWDS components
    htmlContent = enhanceWithUSWDS(htmlContent);

    const filename = path.basename(templateFile, '.md');
    const dirName = filename.replace(/_/g, '-'); // Clean directory name
    const githubUrl = `https://github.com/josephfusco/procedural-compliance/blob/main/templates/${templateFile}`;
    const githubRawUrl = `https://raw.githubusercontent.com/josephfusco/procedural-compliance/main/templates/${templateFile}`;

    const jurisdiction = frontmatter.jurisdiction?.toLowerCase() || metadata.jurisdiction;
    const title = frontmatter.title || metadata.title;

    // Jurisdiction badge
    const jurisdictionBadge = jurisdiction === 'ny'
        ? '<span class="jurisdiction-badge jurisdiction-ny">NY</span>'
        : '<span class="jurisdiction-badge jurisdiction-federal">Federal</span>';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${metadata.subtitle} - ${title}">
    <title>${title} | Procedural Compliance Framework</title>

    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚖️</text></svg>">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Social Preview Meta Tags -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metadata.subtitle}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://proceduralcompliance.org/${dirName}/">

    <link rel="stylesheet" href="/styles.css">
</head>
<body class="bg-white">
    <!-- Skip Navigation Link -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2">
        Skip to main content
    </a>

    <!-- Government Banner -->
    <div class="gov-banner">
        <div class="container mx-auto px-4">
            <div class="flex items-center gap-2">
                <img src="/us_flag_small.png" class="gov-banner-flag" alt="U.S. flag">
                <span>An open framework for documenting procedural compliance · Not legal advice</span>
            </div>
        </div>
    </div>

    <!-- Header / Navigation -->
    <header class="border-b border-gray-200 bg-white">
        <div class="max-w-5xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center gap-3">
                    <span class="text-2xl">⚖️</span>
                    <h1 class="text-xl font-semibold">
                        <a href="/" class="hover:text-gov-blue transition-colors">Procedural Compliance Framework</a>
                    </h1>
                </div>

                <!-- Navigation -->
                <nav class="hidden md:flex items-center gap-6">
                    <a href="/#templates" class="text-gray-700 hover:text-gray-900 transition-colors">Templates</a>
                    <a href="https://github.com/josephfusco/procedural-compliance" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-gray-900 transition-colors">GitHub</a>
                </nav>

            </div>
        </div>
    </header>


    <main id="main-content" role="main">
        <!-- Template Header -->
        <div class="border-b border-gray-200 bg-gray-50">
            <div class="max-w-5xl mx-auto px-4 py-8">
                <div class="flex items-center gap-3 mb-3">
                    ${jurisdictionBadge}
                    <h1 class="text-3xl font-semibold text-gray-900">${title}</h1>
                </div>
                <p class="text-base text-gray-600">${metadata.subtitle}</p>
            </div>
        </div>

        <!-- Template Content -->
        <div class="max-w-5xl mx-auto px-4 py-12">
            <div class="prose max-w-none" id="template-content">
                ${htmlContent}
            </div>
        </div>
    </main>

    <!-- Minimal Footer -->
    <footer class="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        <p>Open source under MIT License · <a href="https://github.com/josephfusco/procedural-compliance" class="hover:text-gray-900 transition-colors">View on GitHub</a></p>
    </footer>
</body>
</html>`;
}

// Generate homepage with template list
function generateHomepage() {
    // Sort templates: ny first, then federal; appeals before mandamus
    const sortedTemplates = Object.entries(templateMetadata)
        .sort((a, b) => {
            // First by jurisdiction: ny before federal
            if (a[1].jurisdiction !== b[1].jurisdiction) {
                return a[1].jurisdiction === 'ny' ? -1 : 1;
            }
            // Then by category: appeals before procedural-enforcement
            return a[1].category === 'appeals' ? -1 : 1;
        });

    // Generate template list HTML
    const templateListHTML = sortedTemplates.map(([filename, metadata]) => {
        const slug = filename.replace(/_/g, '-').replace('.md', '');
        const isNY = metadata.jurisdiction === 'ny';

        const badge = isNY
            ? `<span class="jurisdiction-badge jurisdiction-ny ml-4">NY</span>`
            : `<span class="jurisdiction-badge jurisdiction-federal ml-4">
                <img src="/us_flag_small.png" class="w-4 h-3 mr-1" alt="">
                Federal
            </span>`;

        return `                    <!-- ${metadata.title} -->
                    <a href="/${slug}/" class="block px-4 py-4 rounded-md hover:bg-gray-50 transition-colors">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold mb-1 text-gray-900">${metadata.title}</h3>
                                <p class="text-sm text-gray-600">${metadata.subtitle}</p>
                            </div>
                            ${badge}
                        </div>
                    </a>`;
    }).join('\n\n');

    // Read current homepage template
    const homepagePath = path.join(__dirname, 'docs', 'index.html');
    let homepage = fs.readFileSync(homepagePath, 'utf-8');

    // Replace template list section
    const templateListStart = homepage.indexOf('<!-- Template List -->');
    const templateListEnd = homepage.indexOf('</div>\n            </div>\n        </section>\n\n        <!-- Footer Spacer -->');

    if (templateListStart === -1 || templateListEnd === -1) {
        console.warn('⚠️  Could not find template list markers in index.html');
        return;
    }

    const before = homepage.substring(0, templateListStart);
    const after = homepage.substring(templateListEnd);

    const newHomepage = before +
        `<!-- Template List -->
                <div class="space-y-1">
${templateListHTML}
                </div>` +
        after;

    fs.writeFileSync(homepagePath, newHomepage, 'utf-8');
    console.log('✅ Generated homepage with sorted template list');
}

// Main execution
async function main() {
    try {
        // Dynamic import of marked (ESM module)
        const markedModule = await import('marked');
        marked = markedModule.marked;

        const templatesDir = path.join(__dirname, 'docs', 'templates');
        const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));

        console.log(`\n🔨 Building ${files.length} template pages...\n`);

        for (const file of files) {
            const metadata = templateMetadata[file];
            if (!metadata) {
                console.warn(`⚠️  No metadata for ${file}, skipping...`);
                continue;
            }

            const markdownPath = path.join(templatesDir, file);
            const markdownContent = fs.readFileSync(markdownPath, 'utf-8');

            const htmlContent = generateTemplatePage(file, metadata, markdownContent);

            // Create clean directory structure: docs/[template-name]/index.html
            const dirName = file.replace(/_/g, '-').replace('.md', '');
            const outputDir = path.join(__dirname, 'docs', dirName);
            const htmlPath = path.join(outputDir, 'index.html');

            // Create directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
            console.log(`✅ Generated: ${dirName}/index.html`);
        }

        console.log(`\n✨ Done! Generated ${files.length} HTML pages.\n`);

        // Generate homepage with sorted template list
        console.log('🏠 Generating homepage...\n');
        generateHomepage();
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

main();
