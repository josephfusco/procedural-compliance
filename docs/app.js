// Procedural Enclosure Toolkit - Interactive Web Interface

// Template Database
const templates = [
    {
        id: 'procedural-enclosure',
        title: 'Procedural Enclosure (Written Orders)',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        description: 'Formal demand for written decision pursuant to CPLR §2219(a) and 22 NYCRR §202.48(b). Core template for compelling judicial compliance.',
        authorities: 'CPLR §2219(a), 22 NYCRR §202.48(b), Apfel v. Prudential-Bache',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/procedural_enclosure.md',
        exampleUrl: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/examples/procedural_enclosure_example.md'
    },
    {
        id: 'article-78',
        title: 'Article 78 Mandamus Petition',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'CPLR Article 78 petition to compel performance of ministerial duty. Use when court refuses to comply with procedural requirements.',
        authorities: 'CPLR §7803(1), §7804(b), Kolisnyk v. County of Monroe',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/article78_mandamus.md',
        exampleUrl: null
    },
    {
        id: 'notice-of-appeal',
        title: 'Notice of Appeal',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'urgent',
        description: 'CPLR Article 55 notice of appeal to Appellate Division. Must be filed within 30 days of notice of entry of judgment/order.',
        authorities: 'CPLR §5515, §5513',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/notice_of_appeal.md',
        exampleUrl: null
    },
    {
        id: 'emergency-stay',
        title: 'Emergency Stay Pending Appeal',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'emergency',
        description: 'CPLR §5519 motion for stay of enforcement pending appeal. Emergency relief to prevent irreparable harm.',
        authorities: 'CPLR §5519, William Karl Realty, Doe v. Axelrod',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/emergency_stay.md',
        exampleUrl: null
    },
    {
        id: 'foil-request',
        title: 'FOIL Request',
        jurisdiction: 'ny',
        category: 'transparency',
        urgency: 'standard',
        description: 'Freedom of Information Law request for court records and government documents. 5-business-day response required.',
        authorities: 'Public Officers Law §87, §89, 22 NYCRR §216.1',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/foil_request.md',
        exampleUrl: null
    },
    {
        id: 'judicial-conduct',
        title: 'Judicial Conduct Complaint',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        description: 'Complaint to NY State Commission on Judicial Conduct for violations of judicial ethics and procedural law.',
        authorities: 'Judiciary Law §44, 22 NYCRR Part 100',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/judicial_conduct_complaint.md',
        exampleUrl: null
    },
    {
        id: 'attorney-grievance',
        title: 'Attorney Grievance Complaint',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        description: 'Complaint to Attorney Grievance Committee for violations of Rules of Professional Conduct.',
        authorities: '22 NYCRR Part 1200, Part 1240',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/attorney_grievance.md',
        exampleUrl: null
    },
    {
        id: 'recusal-motion',
        title: 'Motion for Recusal',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Motion for judicial disqualification based on bias, conflict, or appearance of impropriety.',
        authorities: 'CPLR §4110-4115, 22 NYCRR §100.3(E)',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/recusal_motion.md',
        exampleUrl: null
    },
    {
        id: 'summary-judgment',
        title: 'Summary Judgment Opposition',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Opposition to motion for summary judgment with focus on preserving procedural record for appeal.',
        authorities: 'CPLR §3212',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/templates/summary_judgment_opposition.md',
        exampleUrl: null
    },
    {
        id: 'federal-1983',
        title: '§1983 Civil Rights Complaint',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'standard',
        description: 'Federal civil rights action for constitutional violations by state courts/officials under 42 U.S.C. §1983.',
        authorities: '42 U.S.C. §1983, 28 U.S.C. §1343, Monroe v. Pape',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/examples/rule65_prelim_injunction_skeleton.md',
        exampleUrl: null
    },
    {
        id: 'federal-mandamus',
        title: 'Federal Mandamus Petition',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Petition for writ of mandamus in federal court or court of appeals to compel ministerial duty.',
        authorities: '28 U.S.C. §1361, FRAP 21, Cheney v. U.S. Dist. Ct.',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/jurisdictions/federal/README.md',
        exampleUrl: null
    },
    {
        id: 'federal-appeal',
        title: 'Federal Notice of Appeal',
        jurisdiction: 'federal',
        category: 'appeals',
        urgency: 'urgent',
        description: 'Notice of appeal to U.S. Court of Appeals. 30 days from entry of judgment (60 if U.S. is party).',
        authorities: 'FRAP 3, FRAP 4',
        url: 'https://github.com/joefusco/procedural-enclosure-toolkit/blob/main/jurisdictions/federal/README.md',
        exampleUrl: null
    }
];

// State Management
let currentFilters = {
    jurisdiction: 'all',
    category: 'all',
    urgency: 'all'
};

// DOM Elements
const jurisdictionFilter = document.getElementById('jurisdiction-filter');
const categoryFilter = document.getElementById('category-filter');
const urgencyFilter = document.getElementById('urgency-filter');
const resetButton = document.getElementById('reset-filters');
const templateResults = document.getElementById('template-results');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTemplates();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    jurisdictionFilter.addEventListener('change', handleFilterChange);
    categoryFilter.addEventListener('change', handleFilterChange);
    urgencyFilter.addEventListener('change', handleFilterChange);
    resetButton.addEventListener('click', resetFilters);

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            }
        });
    });
}

// Filter Change Handler
function handleFilterChange(event) {
    const filterType = event.target.id.replace('-filter', '');
    currentFilters[filterType] = event.target.value;
    renderTemplates();
}

// Reset Filters
function resetFilters() {
    currentFilters = {
        jurisdiction: 'all',
        category: 'all',
        urgency: 'all'
    };
    jurisdictionFilter.value = 'all';
    categoryFilter.value = 'all';
    urgencyFilter.value = 'all';
    renderTemplates();
}

// Filter Templates
function filterTemplates() {
    return templates.filter(template => {
        const matchesJurisdiction = currentFilters.jurisdiction === 'all' ||
                                   template.jurisdiction === currentFilters.jurisdiction;
        const matchesCategory = currentFilters.category === 'all' ||
                               template.category === currentFilters.category;
        const matchesUrgency = currentFilters.urgency === 'all' ||
                              template.urgency === currentFilters.urgency;

        return matchesJurisdiction && matchesCategory && matchesUrgency;
    });
}

// Render Templates
function renderTemplates() {
    const filtered = filterTemplates();

    if (filtered.length === 0) {
        templateResults.innerHTML = `
            <div class="no-results">
                <p style="text-align: center; color: var(--text-medium); padding: 2rem;">
                    No templates match your filters. Try adjusting your criteria or
                    <button onclick="resetFilters()" class="btn btn-small btn-outline">reset filters</button>.
                </p>
            </div>
        `;
        return;
    }

    templateResults.innerHTML = filtered.map(template => createTemplateCard(template)).join('');
}

// Create Template Card HTML
function createTemplateCard(template) {
    const jurisdictionLabel = template.jurisdiction === 'ny' ? 'New York' : 'Federal';
    const urgencyClass = `tag-urgency-${template.urgency}`;
    const urgencyLabel = template.urgency.charAt(0).toUpperCase() + template.urgency.slice(1);

    return `
        <div class="template-card" data-id="${template.id}">
            <h3>${template.title}</h3>

            <div class="template-meta">
                <span class="template-tag tag-jurisdiction">${jurisdictionLabel}</span>
                <span class="template-tag ${urgencyClass}">${urgencyLabel}</span>
            </div>

            <p class="template-description">${template.description}</p>

            <p class="template-authorities"><strong>Authorities:</strong> ${template.authorities}</p>

            <div class="template-actions">
                <a href="${template.url}" class="btn btn-small btn-primary" target="_blank">View Template</a>
                ${template.exampleUrl ? `<a href="${template.exampleUrl}" class="btn btn-small btn-outline" target="_blank">See Example</a>` : ''}
            </div>
        </div>
    `;
}

// Expose functions globally for inline event handlers
window.resetFilters = resetFilters;
