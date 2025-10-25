#!/usr/bin/env node

/**
 * Build Templates Script
 * Generates static HTML pages from markdown templates
 */

const fs = require('fs');
const path = require('path');

// Import marked for markdown parsing (using dynamic import since marked v11 is ESM)
let marked;

// Template metadata from index.html
const templateMetadata = {
    'notice_universal.md': {
        title: 'Notice of Non-Compliance (Universal)',
        subtitle: 'CPLR §2219(a) - Written Order Requirement',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'universal'
    },
    'article78_mandamus.md': {
        title: 'Article 78 Mandamus',
        subtitle: 'CPLR §7803(1) - Compel Ministerial Duty',
        jurisdiction: 'ny',
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
    'emergency_stay.md': {
        title: 'Emergency Stay',
        subtitle: 'CPLR §5519 - Stay Pending Appeal',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'emergency',
        role: 'procedural'
    },
    'foil_request.md': {
        title: 'FOIL Request',
        subtitle: 'Public Officers Law §87 - Records Request',
        jurisdiction: 'ny',
        category: 'transparency',
        urgency: 'standard',
        role: 'procedural'
    },
    'judicial_conduct_complaint.md': {
        title: 'Judicial Conduct Complaint',
        subtitle: '22 NYCRR Part 100 - Judicial Ethics',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        role: 'procedural'
    },
    'attorney_grievance.md': {
        title: 'Attorney Grievance',
        subtitle: '22 NYCRR Part 1200 - Professional Conduct',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        role: 'procedural'
    },
    'notice_judge.md': {
        title: 'Notice of Non-Compliance - Judge',
        subtitle: 'CPLR §2219(a) - Judicial Compliance',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        role: 'judge'
    },
    'notice_afc.md': {
        title: 'Notice of Non-Compliance - Attorney for Child',
        subtitle: 'FCA §§241-249 - AFC Duties',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'afc'
    },
    'notice_assigned_counsel.md': {
        title: 'Notice of Non-Compliance - Assigned Counsel',
        subtitle: 'RPC 1.2-1.4 - Attorney Duties',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'counsel'
    },
    'notice_clerk.md': {
        title: 'Notice of Non-Compliance - Court Clerk',
        subtitle: 'CPLR §5017(b) - Clerk Duties',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'clerk'
    },
    'notice_opposing_counsel.md': {
        title: 'Notice of Non-Compliance - Opposing Counsel',
        subtitle: 'RPC 3.3-3.4 - Ethical Obligations',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'opposing-counsel'
    },
    'ny_nyscef_violations.md': {
        title: 'NYSCEF E-Filing Violations',
        subtitle: 'Uniform Rule 202.5-bb - Mandatory E-Filing',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'procedural'
    },
    'federal_notice_universal.md': {
        title: 'Notice of Non-Compliance (Universal - Federal)',
        subtitle: 'FRCP 52(a), 79 - Federal Compliance',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'universal'
    },
    'federal_mandamus.md': {
        title: 'Federal Mandamus',
        subtitle: '28 U.S.C. §1361 - Compel Federal Officer',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
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
    },
    'federal_emergency_stay.md': {
        title: 'Federal Emergency Stay',
        subtitle: 'FRAP Rule 8 - Stay Pending Appeal',
        jurisdiction: 'federal',
        category: 'appeals',
        urgency: 'emergency',
        role: 'procedural'
    },
    'federal_foia_request.md': {
        title: 'FOIA Request',
        subtitle: '5 U.S.C. §552 - Freedom of Information Act',
        jurisdiction: 'federal',
        category: 'transparency',
        urgency: 'standard',
        role: 'procedural'
    },
    'federal_notice_judge.md': {
        title: 'Notice of Non-Compliance - Federal Judge',
        subtitle: 'FRCP 52(a) - Written Findings Required',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        role: 'judge'
    },
    'federal_notice_clerk.md': {
        title: 'Notice of Non-Compliance - Federal Clerk',
        subtitle: 'FRCP 58, 79 - Clerk Duties',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'clerk'
    },
    'federal_notice_opposing_counsel.md': {
        title: 'Notice of Non-Compliance - Federal Opposing Counsel',
        subtitle: 'Model Rules 3.3-3.4 - Professional Conduct',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'standard',
        role: 'opposing-counsel'
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

// Post-process HTML to add USWDS components
function enhanceWithUSWDS(html) {
    // Add USWDS table classes
    html = html.replace(/<table>/g, '<table class="usa-table usa-table--striped">');

    // Wrap sections with specific patterns in USWDS alerts
    html = wrapSectionInAlert(html, /⚠️\s*BEFORE USING THIS TEMPLATE/, 'warning', '⚠️', 'Before Using This Template');
    html = wrapSectionInAlert(html, /Important Legal Context/, 'info', 'ℹ️', 'Important Legal Context');

    // Wrap role modules in cards
    html = wrapRoleModulesInCards(html);

    // Make long sections collapsible
    html = makeUsageGuidanceCollapsible(html);

    return html;
}

// Wrap a section (h2/h3 + following content until next same-level heading) in a USWDS alert
function wrapSectionInAlert(html, headingPattern, alertType, icon, heading) {
    const headingRegex = new RegExp(`<h([23])>.*?${headingPattern.source}.*?</h\\1>([\\s\\S]*?)(?=<h[123]|$)`, 'i');
    const match = html.match(headingRegex);

    if (!match) return html;

    const [fullMatch, level, content] = match;

    const alert = `
<div class="usa-alert usa-alert--${alertType}">
    <div class="usa-alert__body">
        <h3 class="usa-alert__heading">
            <span class="usa-alert__icon">${icon}</span>
            ${heading}
        </h3>
        <div class="usa-alert__text">
            ${content}
        </div>
    </div>
</div>`;

    return html.replace(fullMatch, alert);
}

// Wrap each role module (Judge, AFC, etc.) in a USWDS card
function wrapRoleModulesInCards(html) {
    // Match h3 headings followed by content until the next h2/h3
    const rolePattern = /<h3>(Judge|Attorney for the Child \(AFC\)|Assigned Counsel|Court Clerk|Opposing Counsel)<\/h3>([\s\S]*?)(?=<h[23]|$)/g;

    return html.replace(rolePattern, (match, roleName, content) => {
        return `
<div class="usa-card usa-card--accent">
    <div class="usa-card__header">
        <h3 class="usa-card__heading">${roleName}</h3>
    </div>
    <div class="usa-card__body">
        ${content}
    </div>
</div>`;
    });
}

// Make long usage guidance sections collapsible with accordions
function makeUsageGuidanceCollapsible(html) {
    // Match "When to Use" sections and wrap in accordion
    const usagePattern = /<h3>(When to Use.*?|Try These Steps First|Resource Requirements.*?)<\/h3>([\s\S]*?)(?=<h[23]|<div class="usa-|$)/g;

    let accordionId = 0;
    return html.replace(usagePattern, (match, heading, content) => {
        const id = `accordion-${accordionId++}`;
        const isOpen = accordionId === 1; // First accordion open by default

        return `
<div class="usa-accordion">
    <div class="usa-accordion__item">
        <button
            class="usa-accordion__button"
            aria-expanded="${isOpen}"
            aria-controls="${id}"
            onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'); document.getElementById('${id}').setAttribute('aria-hidden', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');"
        >
            ${heading}
        </button>
        <div
            id="${id}"
            class="usa-accordion__content"
            aria-hidden="${!isOpen}"
        >
            <div class="usa-accordion__content-inner">
                ${content}
            </div>
        </div>
    </div>
</div>`;
    });
}

// Generate HTML page for a template
function generateTemplatePage(templateFile, metadata, markdownContent) {
    const { frontmatter, content } = parseFrontmatter(markdownContent);
    let htmlContent = marked.parse(content);

    // Enhance with USWDS components
    htmlContent = enhanceWithUSWDS(htmlContent);

    const filename = path.basename(templateFile, '.md');
    const htmlFilename = filename.replace(/_/g, '-') + '.html';
    const githubUrl = `https://github.com/josephfusco/procedural-compliance/blob/main/templates/${templateFile}`;

    const jurisdiction = frontmatter.jurisdiction?.toLowerCase() || metadata.jurisdiction;
    const title = frontmatter.title || metadata.title;

    // Jurisdiction badge
    const jurisdictionBadge = jurisdiction === 'ny'
        ? '<span class="badge badge-ny">NY</span>'
        : '<span class="badge badge-federal"><img src="../us_flag_small.png" class="badge-flag-img" alt="U.S. flag" loading="lazy"><span>Federal</span></span>';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${metadata.subtitle} - ${title}">
    <title>${title} | Procedural Compliance Framework</title>

    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚖️</text></svg>">

    <!-- USWDS Public Sans Font -->
    <link rel="preload" href="../fonts/public-sans/PublicSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="../fonts/public-sans/PublicSans-SemiBold.woff2" as="font" type="font/woff2" crossorigin>

    <!-- Social Preview Meta Tags -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metadata.subtitle}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://proceduralcompliance.org/templates/${htmlFilename}">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Custom Tailwind Config -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                container: {
                    center: true,
                    padding: '1rem',
                    screens: {
                        sm: '1100px',
                        md: '1100px',
                        lg: '1100px',
                        xl: '1100px',
                        '2xl': '1100px'
                    }
                },
                extend: {
                    colors: {
                        border: '#dfe1e2',
                        input: '#dfe1e2',
                        ring: '#005EA2',
                        background: '#ffffff',
                        foreground: '#1b1b1b',
                        primary: {
                            DEFAULT: '#005EA2',
                            foreground: '#ffffff'
                        },
                        secondary: {
                            DEFAULT: '#f9fafb',
                            foreground: '#1a1a1a'
                        },
                        muted: {
                            DEFAULT: '#f9fafb',
                            foreground: '#6b7280'
                        },
                        accent: {
                            DEFAULT: '#b8860b',
                            foreground: '#ffffff'
                        }
                    },
                    fontFamily: {
                        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
                        sans: ['Public Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                        mono: ['Monaco', 'Courier New', 'monospace']
                    }
                }
            }
        }
    </script>

    <link rel="stylesheet" href="../styles.css">
</head>
<body class="bg-background text-foreground font-sans antialiased">
    <!-- Skip Navigation Link -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2">
        Skip to main content
    </a>

    <!-- US Government-Style Banner -->
    <section class="gov-banner" role="region" aria-label="Official government-style notice">
        <div class="container mx-auto px-4 py-2">
            <div class="flex items-center gap-2">
                <img src="../us_flag_small.png" class="gov-banner-flag" alt="U.S. flag" loading="eager">
                <p class="gov-banner-text">An open framework for documenting procedural compliance · Not legal advice</p>
            </div>
        </div>
    </section>

    <!-- Header -->
    <header class="w-full border-b border-border bg-background" role="banner">
        <div class="container mx-auto px-4 py-3">
            <div class="flex flex-col md:flex-row md:h-14 md:items-center md:justify-between gap-3 md:gap-0">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span class="text-xl" role="img" aria-label="Scales of justice">⚖️</span>
                        <h1 class="text-lg font-sans font-semibold">
                            <a href="../index.html" class="hover:text-primary transition-colors">Procedural Compliance Framework</a>
                        </h1>
                    </div>
                    <nav class="hidden md:flex items-center space-x-6 text-sm ml-8">
                        <a href="../index.html#templates" class="text-foreground/80 hover:text-foreground transition-colors">Templates</a>
                        <a href="https://github.com/josephfusco/procedural-compliance" target="_blank" rel="noopener noreferrer" class="text-foreground/80 hover:text-foreground transition-colors">GitHub</a>
                    </nav>
                </div>
                <div class="flex items-center gap-2">
                    <button id="theme-toggle" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded border-2 border-border hover:bg-muted transition-colors focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2" aria-label="Light mode. Click to toggle" role="switch" aria-checked="false">
                        <span id="theme-label">Light</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Breadcrumb Navigation -->
    <nav class="border-b border-border bg-muted/30" aria-label="Breadcrumb">
        <div class="container mx-auto px-4 py-3">
            <ol class="flex items-center space-x-2 text-sm">
                <li><a href="../index.html" class="text-foreground/60 hover:text-foreground transition-colors">Home</a></li>
                <li class="text-foreground/40">/</li>
                <li><a href="../index.html#templates" class="text-foreground/60 hover:text-foreground transition-colors">Templates</a></li>
                <li class="text-foreground/40">/</li>
                <li class="text-foreground font-medium" aria-current="page">${title}</li>
            </ol>
        </div>
    </nav>

    <main id="main-content" role="main">
        <!-- Template Header -->
        <div class="border-b border-border bg-muted/30">
            <div class="container mx-auto px-4 py-8">
                <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-3">
                            ${jurisdictionBadge}
                            <h1 class="text-3xl font-sans font-semibold text-foreground">${title}</h1>
                        </div>
                        <p class="text-base text-muted-foreground">${metadata.subtitle}</p>
                    </div>
                    <div class="flex gap-2">
                        <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-sm font-medium text-foreground bg-transparent rounded border-2 border-border hover:bg-muted transition-colors focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2">
                            Edit on GitHub
                        </a>
                        <a href="../templates/${templateFile}" download class="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded border-2 border-primary hover:bg-primary/90 transition-colors focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Template Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="prose prose-slate mx-auto" id="template-content">
                ${htmlContent}
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="border-t-2 border-border bg-muted/30 py-12 mt-8" role="contentinfo">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
                <div>
                    <h3 class="text-lg font-sans font-semibold mb-4 text-foreground">Open Collaboration</h3>
                    <p class="helpful-text text-sm mb-3 leading-relaxed">An open specification for verifying adherence to statutory procedure in state and federal courts. Contributions welcome.</p>
                    <p class="helpful-text text-sm font-medium"><strong>Not legal advice.</strong> Educational purposes only.</p>
                </div>

                <div>
                    <h3 class="text-lg font-sans font-semibold mb-4 text-foreground">Resources</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="https://github.com/josephfusco/procedural-compliance" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">GitHub Repository</a></li>
                        <li><a href="https://github.com/josephfusco/procedural-compliance/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">Contributing Guide</a></li>
                        <li><a href="https://github.com/josephfusco/procedural-compliance/issues" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">Report Issue</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-sans font-semibold mb-4 text-foreground">Legal</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="https://github.com/josephfusco/procedural-compliance/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">MIT License</a></li>
                    </ul>
                </div>

                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="badge badge-ny">NY</span>
                        <h3 class="text-lg font-sans font-semibold text-foreground">NY Court Resources</h3>
                    </div>
                    <ul class="space-y-3 text-sm">
                        <li><a href="https://www.nycourts.gov/efile/rules.shtml" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">NYSCEF E-Filing Rules</a></li>
                        <li><a href="https://ww2.nycourts.gov/courts/index.shtml" target="_blank" rel="noopener noreferrer" class="footer-link text-foreground/80 hover:text-foreground transition-colors underline decoration-1 underline-offset-2">NY Court Directory</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t-2 border-border pt-8 text-center">
                <p class="text-sm text-foreground/70 font-medium">&copy; 2025 Procedural Compliance Framework (PCF)</p>
                <p class="text-sm text-foreground/70 mt-2">Released under MIT License • Open Source Legal Framework</p>
                <p class="text-xs text-foreground/60 mt-3">Accessibility: WCAG 2.1 AA • ADA Title II § 35.160 • Section 508 Standards</p>
            </div>
        </div>
    </footer>

    <!-- Theme Toggle Script -->
    <script>
        (function() {
            const THEMES = { LIGHT: 'light', DARK: 'dark' };
            const LABELS = { light: 'Light', dark: 'Dark' };
            const ARIA_LABELS = {
                light: 'Light mode. Click to switch to dark mode',
                dark: 'Dark mode. Click to switch to light mode'
            };

            const themeToggle = document.getElementById('theme-toggle');
            const themeLabel = document.getElementById('theme-label');
            const html = document.documentElement;

            function getSavedTheme() {
                return localStorage.getItem('theme') || THEMES.LIGHT;
            }

            function applyTheme(theme) {
                html.setAttribute('data-theme', theme);
                themeLabel.textContent = LABELS[theme];
                themeToggle.setAttribute('aria-checked', theme === THEMES.DARK ? 'true' : 'false');
                themeToggle.setAttribute('aria-label', ARIA_LABELS[theme]);
            }

            function toggleTheme() {
                const currentTheme = getSavedTheme();
                const nextTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                localStorage.setItem('theme', nextTheme);
                applyTheme(nextTheme);
            }

            applyTheme(getSavedTheme());
            themeToggle.addEventListener('click', toggleTheme);
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
        })();
    </script>

    <!-- Template Content Enhancements -->
    <script>
        // Separate metadata from document
        const content = document.getElementById('template-content');
        if (content) {
            // Highlight placeholders
            const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);
            const nodesToReplace = [];
            while (walker.nextNode()) {
                const node = walker.currentNode;
                if (node.textContent.includes('{{') && node.textContent.includes('}}')) {
                    nodesToReplace.push(node);
                }
            }

            nodesToReplace.forEach(node => {
                const fragment = document.createDocumentFragment();
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = node.textContent.replace(
                    /\\{\\{([^}]+)\\}\\}/g,
                    '<span class="template-placeholder">{{$1}}</span>'
                );
                while (tempDiv.firstChild) {
                    fragment.appendChild(tempDiv.firstChild);
                }
                node.parentNode.replaceChild(fragment, node);
            });
        }
    </script>
</body>
</html>`;
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

            const htmlFilename = file.replace(/_/g, '-').replace('.md', '.html');
            const htmlPath = path.join(templatesDir, htmlFilename);

            fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
            console.log(`✅ Generated: ${htmlFilename}`);
        }

        console.log(`\n✨ Done! Generated ${files.length} HTML pages.\n`);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

main();
