#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://proceduralcompliance.org';
const CONTENT_DIR = path.join(__dirname, 'content');
const OUT_DIR = path.join(__dirname, 'docs');

// Shown in the footer. Change it when the content is reviewed, not on every build.
const LAST_REVIEWED = 'November 2026';

function loadPartials() {
    const dir = path.join(__dirname, 'src', 'partials');
    return {
        head: fs.readFileSync(path.join(dir, 'head.html'), 'utf-8'),
        header: fs.readFileSync(path.join(dir, 'header.html'), 'utf-8'),
        footer: fs.readFileSync(path.join(dir, 'footer.html'), 'utf-8')
    };
}

// Text short enough to fit on two lines gets balanced lines; longer text
// keeps full-width lines and only avoids a one-word last line.
function balance(text) {
    return text.replace(/<[^>]+>/g, '').replace(/&\w+;/g, ' ').length <= 160 ? ' pcf-balance' : '';
}

function interpolate(template, vars) {
    return template.replace(/\{\{(\w+)\}\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
}

const PRINCIPLES = [
    'Follow the written rules.',
    'Check each step before the next.',
    'Put every step in writing.',
    'Pick the path that leaves less to choice.',
    'Cite the law for every request.'
];

// =============================================================================
// JURISDICTIONS — one entry per top-level part of the site.
//
// To add a state: add an entry here, put its frontmatter files under
// content/<slug>/, and return its sections from `sections()`. The homepage
// triage group, page tree, and /<slug>/ page are generated from this list.
//
// `who` heads the jurisdiction's group in the homepage triage and `help` lists
// where to find a person. `lede` is the
// one-line "when to use this" shown in the page header. `routes()` returns the
// frontmatter entries the triage links to.
// =============================================================================
// Glossary terms per jurisdiction. A page shows only the terms it uses.
const NY_GLOSSARY = [
        { term: "Appellate Division", body: "The appeals court above Supreme Court. It sits in four departments." },
        { term: "Contempt", body: "Disobeying or disrespecting a court." },
        { term: "Court of Appeals", body: "The highest court in New York State." },
        { term: "CPLR", body: "Civil Practice Law and Rules, the New York statute governing civil procedure." },
        { term: "Jurisdiction", body: "The legal power of a court or official to act in a matter." },
        { term: "Mandamus", body: "A court order that tells an official to carry out a duty." },
        { term: "Notice of petition", body: "The paper that tells the other side about the case and the court date." },
        { term: "Order to show cause", body: "A paper a judge signs that sets a fast court date. It takes the place of a notice of petition when time is short." },
        { term: "Pell deference", body: "The practice, named for the <em>Pell</em> case, of leaving an agency&rsquo;s choice in place unless it is arbitrary and capricious." },
        { term: "Prohibition", body: "A court order that tells a court or official to stop acting without power." },
        { term: "Record", body: "The papers and testimony the agency or court had in front of it when it decided." },
        { term: "Res judicata", body: "The rule that a matter already decided cannot be brought again." },
        { term: "Respondent", body: "The agency, official, or court the case is brought against." },
        { term: "Service", body: "Giving court papers to the other side in the way the law requires." },
        { term: "Stay", body: "A court order that puts a decision or a case on hold." },
        { term: "Substantial evidence", body: "Enough proof that a reasonable person could accept it as support for the decision." },
        { term: "Supreme Court", body: "The main trial court. It is not the highest court." },
        { term: "Triable issue of fact", body: "A real dispute about a fact that matters, which must be decided at a hearing." },
        { term: "Verified petition", body: "The paper that starts the case. It says what happened and what you want. Verified means you swear it is true." },
        { term: "Void", body: "Without legal force from the start." }
];

const FEDERAL_GLOSSARY = [
        { term: "Agency", body: "A part of the government that carries out the law." },
        { term: "Fed. R. App. P.", body: "Federal Rules of Appellate Procedure." },
        { term: "Mandamus", body: "A court order that tells an official or a lower court to carry out a duty." },
        { term: "Petition", body: "The paper that asks the court for the order." },
        { term: "U.S.C.", body: "United States Code." }
];

const JURISDICTIONS = [
    {
        slug: 'new-york',
        name: 'New York State',
        subject: 'CPLR Article 78',
        who: 'A New York State or local agency, official, or court',
        triageExtra: [{ href: '/new-york/problems/', text: 'A clerk or court did not follow the rules in your case.' }],
        help: [
            { text: 'LawHelpNY (lawhelpny.org)', href: 'https://www.lawhelpny.org/' },
            { text: 'New York State court help centers (nycourts.gov)', href: 'https://www.nycourts.gov/help/representing-yourself-court/court-help-centers-community-organizations' }
        ],
        problemsHeading: 'What went wrong?',
        problems() {
            const gaps = loadGaps(path.join(CONTENT_DIR, this.slug, 'gaps'));
            const body = `${renderGapsSection(gaps)}
${renderProseSection({
    id: 'void',
    heading: 'Void orders.',
    paragraphs: [
        'A void order is one the court had no power to make. It has no legal force, and you can attack it at any time. The usual first step is a motion in the court that made the order (CPLR &sect;5015(a)). If a court keeps acting without power, Article 78 prohibition can stop it (&sect;7803(2)).'
    ]
})}`;
            return {
                heading: this.problemsHeading,
                lede: 'Where Article 78 cases often go wrong.',
                sections: `${withGlossary(body, NY_GLOSSARY, renderHelpSection(this.help))}`
            };
        },
        lede: 'Challenge a New York state or local agency, official, or court.',
        description: 'Article 78 procedure for New York State, plainly stated. One proceeding, four grounds under CPLR §7803, the clock, the court, and the appellate-record discipline that survives review. Educational. Not legal advice.',
        routes() { return loadGrounds(path.join(CONTENT_DIR, this.slug, 'grounds')); },
        sections() {
            const grounds = this.routes();
            const body = `${renderGroundsSection({ id: 'grounds', heading: 'What happened?', grounds })}
${renderProseSection({
    id: 'clock',
    heading: 'How long do you have?',
    paragraphs: [
        'Four months from the final decision (CPLR &sect;217). To compel an official to act, four months from the refusal of your written demand.'
    ]
})}
${renderProseSection({
    id: 'threshold',
    heading: 'Can you file yet?',
    paragraphs: [
        'Article 78 only works on a final decision. If the law lets you ask the agency to hear the matter again, you must ask first, or wait until the time to ask has run out. You cannot use Article 78 to attack a ruling made in a civil or criminal case. The one exception is when a court punished someone on the spot for contempt (CPLR &sect;7801).'
    ]
})}
${renderStepsSection({
    id: 'procedure',
    heading: 'What do you do?',
    ordered: true,
    steps: [
        { term: 'Record', body: 'Put every demand, refusal, and objection in writing, with the date and proof of receipt.' },
        { term: 'Filing', body: 'File a notice of petition and a verified petition in Supreme Court, in the county CPLR &sect;506(b) names. If time is short, use an order to show cause. <a class="usa-link" href="https://www.nycourts.gov/forms/">Court forms</a> and <a class="usa-link" href="https://iapps.courts.state.ny.us/nyscef/">e-filing</a> are online.' },
        { term: 'Service', body: 'Serve the other side at least twenty days before the court date (&sect;7804(c)). For a state body or official, also serve the Attorney General, at the office in or nearest that county. For a member of a local body whose term has ended, serve the body (CPLR &sect;311).' }
    ]
})}
${renderStepsSection({
    id: 'next',
    heading: 'What happens next?',
    steps: [
        { term: 'Answer', body: 'The other side files a sworn answer and the certified record (&sect;7804(e)).' },
        { term: 'Transfer', body: 'Substantial-evidence cases (&sect;7803(4)) move to the Appellate Division, after the trial court rules on jurisdiction, the time limit, and res judicata (&sect;7804(g)).' }
    ]
})}
${renderProseSection({
    id: 'stay',
    heading: 'Can the decision be paused?',
    paragraphs: [
        'The court can put the decision on hold while the case goes on. It can set terms, such as paying money as security. If the Appellate Division made the ruling, only that court or the Court of Appeals can put it on hold (CPLR &sect;7805).'
    ]
})}
${renderProseSection({
    id: 'judgment',
    heading: 'What can the court do?',
    paragraphs: [
        'At the end, the court can give you what you asked for or throw the case out. It can cancel the decision, keep it, or change it. It can order the other side to act or to stop. You can get money only when it is tied to the main thing you asked for (CPLR &sect;7806).'
    ]
})}
${renderProseSection({
    id: 'problems',
    heading: 'What went wrong?',
    paragraphs: [
        '<a class="usa-link" href="/new-york/problems/">Where Article 78 cases often go wrong.</a>'
    ]
})}`;
            return `${withGlossary(body, NY_GLOSSARY, renderHelpSection(this.help))}`;
        }
    },
    {
        slug: 'federal',
        name: 'Federal',
        subject: 'Mandamus',
        who: 'A federal agency, official, or court',
        help: [
            { text: 'Find legal aid (lsc.gov)', href: 'https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help' }
        ],
        lede: 'Compel a federal official, agency, or lower court to do its duty.',
        description: 'Mandamus in federal court, plainly stated. Two routes: 28 U.S.C. §1361 against a federal officer or agency, and 28 U.S.C. §1651 with Fed. R. App. P. 21 against a lower court. Educational. Not legal advice.',
        routes() { return loadGrounds(path.join(CONTENT_DIR, this.slug, 'routes')); },
        sections() {
            const routes = this.routes();
            const body = `${renderGroundsSection({
    id: 'routes',
    heading: 'What happened?',
    grounds: routes
})}
`;
            return `${withGlossary(body, FEDERAL_GLOSSARY, renderHelpSection(this.help))}`;
        }
    }
];

// =============================================================================
// SITE CHROME — breadcrumbs and the page tree come from the jurisdiction registry
// =============================================================================
const ABOUT = { href: '/about/', text: 'About' };

function siteTree() {
    return [
        ...JURISDICTIONS.map(j => ({
            href: `/${j.slug}/`,
            text: j.name,
            children: j.problems ? [{ href: `/${j.slug}/problems/`, text: j.problemsHeading }] : []
        })),
        { ...ABOUT, children: [] }
    ];
}

function renderBreadcrumb(crumbs) {
    const items = crumbs.map((c, i) => i < crumbs.length - 1
        ? `            <li class="usa-breadcrumb__list-item"><a href="${c.href}" class="usa-breadcrumb__link"><span>${c.text}</span></a></li>`
        : `            <li class="usa-breadcrumb__list-item usa-current" aria-current="page"><span>${c.text}</span></li>`).join('\n');
    return `        <nav class="usa-breadcrumb" aria-label="Breadcrumbs">
          <ol class="usa-breadcrumb__list">
${items}
          </ol>
        </nav>`;
}

function renderSidenav(current) {
    const link = (p, on) => `<a href="${p.href}"${on ? ' class="usa-current"' : ''}${p.href === current ? ' aria-current="page"' : ''}>${p.text}</a>`;
    const items = siteTree().map(p => {
        const sub = p.children.length ? `
              <ul class="usa-sidenav__sublist">
${p.children.map(c => `                <li class="usa-sidenav__item">${link(c, c.href === current)}</li>`).join('\n')}
              </ul>` : '';
        const on = p.href === current || p.children.some(c => c.href === current);
        return `            <li class="usa-sidenav__item">${link(p, on)}${sub}
            </li>`;
    }).join('\n');
    return `        <nav class="pcf-layout__pages" aria-label="Pages">
          <ul class="usa-sidenav">
${items}
          </ul>
        </nav>`;
}

// An inner page: breadcrumbs across the top, the page tree on the left, the
// content in the middle, and (with `toc`) the page's headings on the right.
function renderLayout({ current, crumbs, toc, heading, lede, sections }) {
    const aside = toc ? `
        <aside class="usa-in-page-nav" data-title-text="On this page" data-title-heading-level="h2" data-heading-elements="h2" data-main-content-selector="#page-sections" data-scroll-offset="0" data-root-margin="0px 0px -50% 0px" data-threshold="1"></aside>` : '';
    return `      <div class="pcf-layout${toc ? ' pcf-layout--toc' : ''}">
${renderBreadcrumb([{ href: '/', text: 'Home' }, ...crumbs])}
${renderSidenav(current)}
        <div id="page-sections" class="pcf-layout__main">
${renderPageHeader({ heading, lede })}
${sections}
        </div>${aside}
      </div>`;
}

function renderPage({ partials, scripts = false, title, subtitle, description, urlPath, main }) {
    const head = interpolate(partials.head, { title, subtitle, description, ogUrl: `${SITE_URL}${urlPath}` });
    const header = partials.header;
    const footer = interpolate(partials.footer, {
        lastReviewed: LAST_REVIEWED,
        scripts: scripts ? '    <script src="/assets/js/uswds.min.js"></script>' : ''
    });
    return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

    <main id="main-content">
${main}
    </main>

${footer}
</body>
</html>`;
}

// =============================================================================
// SECTIONS
// =============================================================================
function renderGroundsSection({ id, heading, grounds, paragraphs = [] }) {
    const items = grounds.map(g => `            <li id="${g.id}" class="pcf-grounds__item">
              <p class="pcf-grounds__desc${balance(g.plain)}">${g.plain}</p>${g.note ? `\n              <p class="pcf-grounds__note${balance(g.note)}">${g.note}</p>` : ''}
              <p class="pcf-grounds__cite">${g.title} &middot; ${g.section}${g.authority.case ? ` &middot; <cite>${g.authority.case}</cite>, ${g.authority.cite}` : ''}</p>
            </li>`).join('\n');
    const ps = paragraphs.map(p => `\n          <p class="pcf-prose pcf-prose--follow">${p}</p>`).join('');
    return `      <section id="${id}" class="pcf-section" aria-labelledby="${id}-heading">
        <div class="grid-container">
          <h2 id="${id}-heading" class="pcf-heading">${heading}</h2>
          <ul class="pcf-grounds" role="list">
${items}
          </ul>${ps}
        </div>
      </section>`;
}

function renderProseSection({ id, heading, paragraphs }) {
    const ps = paragraphs.map((p, i) => `          <p class="pcf-prose${i > 0 ? ' pcf-prose--follow' : ''}${balance(p)}">${p}</p>`).join('\n');
    return `      <section id="${id}" class="pcf-section" aria-labelledby="${id}-heading">
        <div class="grid-container">
          <h2 id="${id}-heading" class="pcf-heading">${heading}</h2>
${ps}
        </div>
      </section>`;
}

function renderStepsSection({ id, heading, steps, modifier, ordered }) {
    // Ordered steps are a numbered list; everything else is a definition list.
    const [list, row, term, def] = ordered ? ['ol', 'li', 'p', 'p'] : ['dl', 'div', 'dt', 'dd'];
    const mod = ordered ? 'ordered' : modifier;
    const items = steps.map(s => `            <${row} class="pcf-steps__row"${s.id ? ` id="${s.id}"` : ''}>
              <${term} class="pcf-steps__term">${s.term}</${term}>
              <${def} class="pcf-steps__def${balance(s.body)}">${s.body}</${def}>
            </${row}>`).join('\n');
    return `      <section id="${id}" class="pcf-section" aria-labelledby="${id}-heading">
        <div class="grid-container">
          <h2 id="${id}-heading" class="pcf-heading">${heading}</h2>
          <${list} class="pcf-steps${mod ? ` pcf-steps--${mod}` : ''}"${ordered ? ' role="list"' : ''}>
${items}
          </${list}>
        </div>
      </section>`;
}

function renderGapsSection(gaps) {
    const items = gaps.map(g => {
        // The governing statute leads the authority list unless already in it.
        const authority = g.authority.some(a => a.source === g.statute) ? g.authority : [{ source: g.statute }, ...g.authority];
        const authorityItems = authority.map(a => {
            if (a.case) {
                return `                <li><cite class="pcf-gap__case">${a.case}</cite>${a.cite ? `, ${a.cite}` : ''}</li>`;
            }
            return `                <li>${a.source || ''}</li>`;
        }).join('\n');
        return `            <li id="${g.id}" class="pcf-gap">
              <h2 class="pcf-gap__name">${g.happened}</h2>
              <p class="pcf-gap__body${balance(g.plain)}">${g.plain}</p>
              <ul class="pcf-gap__authority">
${authorityItems}
              </ul>
            </li>`;
    }).join('\n');
    return `      <section id="gaps" class="pcf-section" aria-labelledby="page-heading">
        <div class="grid-container">
          <ol class="pcf-gaps" role="list">
${items}
          </ol>
        </div>
      </section>`;
}

const termId = term => `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
const termPattern = term => `(?<![A-Za-z])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z])`;

// Running text only: headings, labels, and cite lines stay unlinked.
const TERM_HOSTS = /(<(p|dd) class="(?:pcf-prose[^"]*|pcf-grounds__desc|pcf-grounds__note|pcf-steps__def|pcf-gap__body)(?: pcf-balance)?">)([\s\S]*?)(<\/\2>)/g;

// Links each statute or rule cite in running text to the section it names.
// 22 NYCRR cites stay plain: there is no stable public URL for them.
const SEC = '(?:§|&sect;)';
const SUBS = '(?:\\([0-9a-z]+\\))*';
const CITE = new RegExp(`28 U\\.S\\.C\\. ${SEC}(\\d+)${SUBS}|Fed\\. R\\. App\\. P\\. (\\d+)${SUBS}|(?<!NYCRR )(?:CPLR )?${SEC}(\\d+(?:-[a-z])?)${SUBS}`, 'g');

function linkCites(html) {
    return html.split(/(<a\b[\s\S]*?<\/a>|<[^>]+>)/).map((part, i) => {
        if (i % 2) return part;
        return part.replace(CITE, (m, usc, frap, cplr) => {
            const href = usc ? `https://www.law.cornell.edu/uscode/text/28/${usc}`
                : frap ? `https://www.law.cornell.edu/rules/frap/rule_${frap}`
                : `https://www.nysenate.gov/legislation/laws/CVP/${cplr.toUpperCase()}`;
            return `<a class="pcf-cite" href="${href}">${m}</a>`;
        });
    }).join('');
}

// Appends the glossary of terms the body uses, and links each term's first
// use in running text to its entry. `between` sits ahead of the glossary.
function withGlossary(body, terms, between = '') {
    body = linkCites(body);
    const text = body.replace(/<[^>]+>/g, ' ');
    const used = terms.filter(t => new RegExp(termPattern(t.term), 'i').test(text));
    if (!used.length) return `${body}\n${between}`;
    let linked = body;
    for (const t of used) {
        const re = new RegExp(termPattern(t.term), 'i');
        let done = false;
        linked = linked.replace(TERM_HOSTS, (m, open, tag, inner, close) => {
            if (done) return m;
            const parts = inner.split(/(<a\b[\s\S]*?<\/a>|<[^>]+>)/);
            for (let i = 0; i < parts.length && !done; i += 2) {
                if (re.test(parts[i])) {
                    parts[i] = parts[i].replace(re, w => `<a class="pcf-term" href="#${termId(t.term)}">${w}</a>`);
                    done = true;
                }
            }
            return open + parts.join('') + close;
        });
    }
    const glossary = renderStepsSection({
        id: 'glossary',
        heading: 'Glossary.',
        modifier: 'plain',
        steps: used.map(t => ({ ...t, id: termId(t.term) }))
    });
    return `${linked}\n${between}\n${glossary}`;
}

function renderLinksSection({ id, heading, links }) {
    const items = links.map(l => `            <li><a class="usa-link" href="${l.href}">${l.text}</a></li>`).join('\n');
    return `      <section id="${id}" class="pcf-section" aria-labelledby="${id}-heading">
        <div class="grid-container">
          <h2 id="${id}-heading" class="pcf-heading">${heading}</h2>
          <ul class="pcf-resources">
${items}
          </ul>
        </div>
      </section>`;
}

function renderHelpSection(links) {
    return renderLinksSection({ id: 'help', heading: 'Free legal help.', links });
}

// =============================================================================
// PAGES
// =============================================================================
function renderHomeHero() {
    return `      <section class="pcf-hero" aria-labelledby="hero-heading">
        <div class="grid-container">
          <h1 id="hero-heading" class="pcf-hero__title">How to ask a court to make the government follow the law.</h1>
        </div>
      </section>`;
}

function renderTriageSection() {
    const groups = JURISDICTIONS.map(j => {
        const rows = [
            ...j.routes().map(r => ({ href: `/${j.slug}/#${r.id}`, text: r.happened, example: r.example })),
            ...(j.triageExtra || [])
        ];
        const links = rows.map(r => `              <li><a class="usa-link" href="${r.href}">${r.text}</a>${r.example ? `\n                <p class="pcf-triage__example pcf-balance">Example: ${r.example}</p>` : ''}</li>`).join('\n');
        return `            <h3 class="pcf-triage__who">${j.who}</h3>
            <ul class="pcf-triage__list" role="list">
${links}
            </ul>`;
    }).join('\n');
    return `      <section id="triage" class="pcf-section" aria-labelledby="triage-heading">
        <div class="grid-container">
          <h2 id="triage-heading" class="pcf-heading">What happened?</h2>
          <div class="pcf-triage">
${groups}
          </div>
        </div>
      </section>`;
}

function generateHomepage(partials) {
    return renderPage({
        partials,
        title: 'Procedural Compliance — Court procedure, plainly stated',
        subtitle: 'New York State Article 78 and federal mandamus procedure, plainly stated. Educational. Not legal advice.',
        description: 'Court procedure, plainly stated: Article 78 in New York State and mandamus in federal court. The grounds, the clock, the court, and the record discipline that survives review. Educational. Not legal advice.',
        urlPath: '/',
        main: `${renderHomeHero()}
${renderTriageSection()}
${renderHelpSection(JURISDICTIONS.flatMap(j => j.help))}`
    });
}

function renderPageHeader({ heading, lede }) {
    return `      <section class="pcf-page-header" aria-labelledby="page-heading">
        <div class="grid-container">
          <h1 id="page-heading" class="pcf-page-header__title">${heading}</h1>${lede ? `\n          <p class="pcf-page-header__lede">${lede}</p>` : ''}
        </div>
      </section>`;
}

function generateAboutPage(partials) {
    const lis = PRINCIPLES.map(it => `            <li>${it}</li>`).join('\n');
    return renderPage({
        partials,
        title: 'About — Procedural Compliance',
        subtitle: 'Plain-language court procedure for people without a lawyer.',
        description: 'Plain-language court procedure for people without a lawyer. Free and open source. Educational. Not legal advice.',
        urlPath: ABOUT.href,
        main: renderLayout({
            current: ABOUT.href,
            crumbs: [ABOUT],
            heading: 'About',
            lede: 'Plain-language court procedure for people without a lawyer. Free and open source.',
            sections: `      <section id="principles" class="pcf-section" aria-labelledby="principles-heading">
        <div class="grid-container">
          <h2 id="principles-heading" class="pcf-heading">Principles.</h2>
          <ol class="pcf-list">
${lis}
          </ol>
        </div>
      </section>`
        })
    });
}

function generateProblemsPage(j, partials) {
    const p = j.problems();
    const href = `/${j.slug}/problems/`;
    return renderPage({
        partials,
        scripts: true,
        title: `${j.name}: ${p.heading} — Procedural Compliance`,
        subtitle: `${j.name} ${j.subject}. ${p.lede} Educational. Not legal advice.`,
        description: `${j.name} ${j.subject}. ${p.lede} Educational. Not legal advice.`,
        urlPath: href,
        main: renderLayout({
            current: href,
            crumbs: [{ href: `/${j.slug}/`, text: j.name }, { href, text: p.heading }],
            toc: true,
            heading: p.heading,
            lede: p.lede,
            sections: p.sections
        })
    });
}

function generateJurisdictionPage(j, partials) {
    const href = `/${j.slug}/`;
    return renderPage({
        partials,
        scripts: true,
        title: `${j.name}: ${j.subject} — Procedural Compliance`,
        subtitle: `${j.name} ${j.subject} procedure, plainly stated. Educational. Not legal advice.`,
        description: j.description,
        urlPath: href,
        main: renderLayout({
            current: href,
            crumbs: [{ href, text: j.name }],
            toc: true,
            heading: j.name,
            lede: `<strong>${j.subject}.</strong> ${j.lede}`,
            sections: j.sections()
        })
    });
}

// =============================================================================
// CONTENT LOADERS — frontmatter files under content/<jurisdiction>/
// =============================================================================
function readFrontmatter(dir) {
    const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')) : [];
    return files.map(file => ({ file, fm: matter(fs.readFileSync(path.join(dir, file), 'utf-8')).data }));
}

function loadGrounds(dir) {
    const grounds = [];
    for (const { file, fm } of readFrontmatter(dir)) {
        if (!fm.title || !fm.section || !fm.happened) {
            console.warn(`⚠️  Skipping ${file}: missing title, section, or happened`);
            continue;
        }
        grounds.push({
            id: fm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
            title: fm.title,
            section: fm.section,
            order: fm.order ?? 99,
            happened: fm.happened,
            example: fm.example || '',
            note: fm.note || '',
            plain: fm.plain || '',
            // Federal routes carry their lead case under `progeny`.
            authority: fm.authority || (Array.isArray(fm.progeny) && fm.progeny[0]) || { case: '', cite: '' }
        });
        console.log(`✅ ${fm.section} ${fm.title}`);
    }
    return grounds.sort((a, b) => a.order - b.order);
}

function loadGaps(dir) {
    const gaps = [];
    for (const { file, fm } of readFrontmatter(dir)) {
        if (!fm.name || !fm.statute || !fm.happened) {
            console.warn(`⚠️  Skipping ${file}: missing name, statute, or happened`);
            continue;
        }
        gaps.push({
            order: fm.order ?? 99,
            id: file.replace(/^\d+-|\.md$/g, ''),
            statute: fm.statute,
            name: fm.name,
            happened: fm.happened,
            authority: Array.isArray(fm.authority) ? fm.authority : [],
            plain: fm.plain || ''
        });
        console.log(`✅ ${fm.statute} ${fm.name}`);
    }
    return gaps.sort((a, b) => a.order - b.order);
}

function main() {
    try {
        const partials = loadPartials();

        fs.writeFileSync(path.join(OUT_DIR, 'index.html'), generateHomepage(partials), 'utf-8');
        console.log('✨ / → docs/index.html');

        fs.mkdirSync(path.join(OUT_DIR, 'about'), { recursive: true });
        fs.writeFileSync(path.join(OUT_DIR, 'about', 'index.html'), generateAboutPage(partials), 'utf-8');
        console.log('✨ /about/ → docs/about/index.html');

        for (const j of JURISDICTIONS) {
            console.log(`\n🔨 ${j.name}\n`);
            const dir = path.join(OUT_DIR, j.slug);
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(path.join(dir, 'index.html'), generateJurisdictionPage(j, partials), 'utf-8');
            console.log(`✨ /${j.slug}/ → docs/${j.slug}/index.html`);
            if (j.problems) {
                fs.mkdirSync(path.join(dir, 'problems'), { recursive: true });
                fs.writeFileSync(path.join(dir, 'problems', 'index.html'), generateProblemsPage(j, partials), 'utf-8');
                console.log(`✨ /${j.slug}/problems/ → docs/${j.slug}/problems/index.html`);
            }
        }
        console.log('');
    } catch (err) {
        console.error('❌ Error:', err.message);
        console.error(err.stack);
        process.exit(1);
    }
}

main();
