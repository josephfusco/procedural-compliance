// Procedural Enclosure Toolkit - Interactive Interface
// With ShadCN UI, Command Palette, and Table View

// Template Database
const templates = [
    {
        id: 'procedural-enclosure',
        title: 'Procedural Enclosure',
        subtitle: 'CPLR §2219(a) - Written Order Requirement',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        description: 'Formal demand for written decision with stated grounds.',
        authorities: 'CPLR §2219(a), 22 NYCRR §202.48(b), Apfel v. Prudential-Bache',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/procedural_enclosure.md',
        exampleUrl: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/examples/procedural_enclosure_example.md'
    },
    {
        id: 'article-78',
        title: 'Article 78 Mandamus',
        subtitle: 'CPLR §7803(1) - Compel Ministerial Duty',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Petition to compel performance of duty required by law.',
        authorities: 'CPLR §7803(1), §7804(b), Kolisnyk v. County of Monroe',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/article78_mandamus.md',
        exampleUrl: null
    },
    {
        id: 'notice-of-appeal',
        title: 'Notice of Appeal',
        subtitle: 'CPLR §5515 - Appellate Procedure',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'urgent',
        description: 'Notice of appeal to Appellate Division. Must be filed within 30 days.',
        authorities: 'CPLR §5515, §5513',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/notice_of_appeal.md',
        exampleUrl: null
    },
    {
        id: 'emergency-stay',
        title: 'Emergency Stay',
        subtitle: 'CPLR §5519 - Stay Pending Appeal',
        jurisdiction: 'ny',
        category: 'appeals',
        urgency: 'emergency',
        description: 'Motion for stay of enforcement pending appeal. Emergency relief.',
        authorities: 'CPLR §5519, William Karl Realty, Doe v. Axelrod',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/emergency_stay.md',
        exampleUrl: null
    },
    {
        id: 'foil-request',
        title: 'FOIL Request',
        subtitle: 'Public Officers Law §87 - Records Request',
        jurisdiction: 'ny',
        category: 'transparency',
        urgency: 'standard',
        description: 'Freedom of Information Law request for records. 5-day response required.',
        authorities: 'Public Officers Law §87, §89, 22 NYCRR §216.1',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/foil_request.md',
        exampleUrl: null
    },
    {
        id: 'judicial-conduct',
        title: 'Judicial Conduct Complaint',
        subtitle: '22 NYCRR Part 100 - Judicial Ethics',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        description: 'Complaint to NY Commission on Judicial Conduct.',
        authorities: 'Judiciary Law §44, 22 NYCRR Part 100',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/judicial_conduct_complaint.md',
        exampleUrl: null
    },
    {
        id: 'attorney-grievance',
        title: 'Attorney Grievance',
        subtitle: '22 NYCRR Part 1200 - Professional Conduct',
        jurisdiction: 'ny',
        category: 'oversight',
        urgency: 'standard',
        description: 'Complaint to Attorney Grievance Committee.',
        authorities: '22 NYCRR Part 1200, Part 1240',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/attorney_grievance.md',
        exampleUrl: null
    },
    {
        id: 'recusal-motion',
        title: 'Motion for Recusal',
        subtitle: 'CPLR §4110-4115 - Judicial Disqualification',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Motion for judicial disqualification based on bias or conflict.',
        authorities: 'CPLR §4110-4115, 22 NYCRR §100.3(E)',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/recusal_motion.md',
        exampleUrl: null
    },
    {
        id: 'summary-judgment',
        title: 'Summary Judgment Opposition',
        subtitle: 'CPLR §3212 - Summary Judgment Standard',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Opposition to summary judgment motion.',
        authorities: 'CPLR §3212',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/templates/summary_judgment_opposition.md',
        exampleUrl: null
    },
    {
        id: 'federal-1983',
        title: '§1983 Civil Rights Action',
        subtitle: '42 U.S.C. §1983 - Constitutional Violations',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'standard',
        description: 'Federal civil rights action for constitutional violations.',
        authorities: '42 U.S.C. §1983, 28 U.S.C. §1343, Monroe v. Pape',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/examples/rule65_prelim_injunction_skeleton.md',
        exampleUrl: null
    },
    {
        id: 'federal-mandamus',
        title: 'Federal Mandamus',
        subtitle: '28 U.S.C. §1361 - Federal Mandamus',
        jurisdiction: 'federal',
        category: 'procedural-enforcement',
        urgency: 'urgent',
        description: 'Writ of mandamus in federal court to compel duty.',
        authorities: '28 U.S.C. §1361, FRAP 21, Cheney v. U.S. Dist. Ct.',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/jurisdictions/federal/README.md',
        exampleUrl: null
    },
    {
        id: 'federal-appeal',
        title: 'Federal Notice of Appeal',
        subtitle: 'FRAP 3, 4 - Federal Appellate Procedure',
        jurisdiction: 'federal',
        category: 'appeals',
        urgency: 'urgent',
        description: 'Notice of appeal to Court of Appeals. 30-day deadline.',
        authorities: 'FRAP 3, FRAP 4',
        url: 'https://github.com/josephfusco/procedural-enclosure-toolkit/blob/main/jurisdictions/federal/README.md',
        exampleUrl: null
    }
];

// State Management
let currentFilters = {
    jurisdiction: 'all',
    category: 'all',
    urgency: 'all'
};

let currentView = 'table'; // 'table' or 'card'

// DOM Elements
const jurisdictionFilter = document.getElementById('jurisdiction-filter');
const categoryFilter = document.getElementById('category-filter');
const urgencyFilter = document.getElementById('urgency-filter');
const resetButton = document.getElementById('reset-filters');
const viewToggle = document.getElementById('view-toggle');
const viewToggleText = document.getElementById('view-toggle-text');
const templateResults = document.getElementById('template-results');
const searchTrigger = document.getElementById('search-trigger');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchClose = document.getElementById('search-close');
const searchResults = document.getElementById('search-results');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTemplates();
    attachEventListeners();
    setupKeyboardShortcuts();
});

// Event Listeners
function attachEventListeners() {
    jurisdictionFilter.addEventListener('change', handleFilterChange);
    categoryFilter.addEventListener('change', handleFilterChange);
    urgencyFilter.addEventListener('change', handleFilterChange);
    resetButton.addEventListener('click', resetFilters);
    viewToggle.addEventListener('click', toggleView);

    // Search modal
    searchTrigger.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });
    searchInput.addEventListener('input', handleSearch);

    // Mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scrolling
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
                }
            }
        });
    });
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Open search with / or Ctrl+K
        if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !searchModal.classList.contains('hidden')) {
            e.preventDefault();
            openSearch();
        }

        // Close search with Escape
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            closeSearch();
        }
    });
}

// Search Functions
function openSearch() {
    searchModal.classList.remove('hidden');
    searchInput.focus();
    renderSearchResults(templates);
}

function closeSearch() {
    searchModal.classList.add('hidden');
    searchInput.value = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        renderSearchResults(templates);
        return;
    }

    const results = templates.filter(template => {
        return (
            template.title.toLowerCase().includes(query) ||
            template.subtitle.toLowerCase().includes(query) ||
            template.description.toLowerCase().includes(query) ||
            template.authorities.toLowerCase().includes(query)
        );
    });

    renderSearchResults(results);
}

function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="empty-state">No templates found</div>';
        return;
    }

    searchResults.innerHTML = results.map(template => `
        <a href="${template.url}" target="_blank" class="block px-3 py-2 rounded-md hover:bg-muted transition-colors">
            <div class="flex items-center justify-between">
                <div class="flex-1">
                    <div class="font-medium text-sm">${template.title}</div>
                    <div class="text-xs text-muted-foreground">${template.subtitle}</div>
                </div>
                <span class="badge badge-${template.jurisdiction} ml-2">${template.jurisdiction === 'ny' ? 'NY' : 'Federal'}</span>
            </div>
        </a>
    `).join('');
}

// Filter Functions
function handleFilterChange(event) {
    const filterType = event.target.id.replace('-filter', '');
    currentFilters[filterType] = event.target.value;
    renderTemplates();
}

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

// View Toggle
function toggleView() {
    currentView = currentView === 'table' ? 'card' : 'table';
    viewToggleText.textContent = currentView === 'table' ? 'Card View' : 'Table View';
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
        templateResults.innerHTML = '<div class="empty-state">No templates match your filters. Try adjusting your criteria or <button onclick="resetFilters()" class="text-primary hover:underline">reset filters</button>.</div>';
        return;
    }

    if (currentView === 'table') {
        renderTableView(filtered);
    } else {
        renderCardView(filtered);
    }
}

// Table View Rendering
function renderTableView(templates) {
    templateResults.innerHTML = `
        <div class="border border-border rounded-md overflow-hidden">
            <table class="table-dense">
                <thead>
                    <tr>
                        <th>Template</th>
                        <th class="hidden md:table-cell">Jurisdiction</th>
                        <th class="hidden lg:table-cell">Urgency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${templates.map(template => `
                        <tr>
                            <td>
                                <div class="font-medium text-sm">${template.title}</div>
                                <div class="text-xs text-muted-foreground mt-0.5">${template.subtitle}</div>
                            </td>
                            <td class="hidden md:table-cell">
                                <span class="badge badge-${template.jurisdiction}">${template.jurisdiction === 'ny' ? 'NY' : 'Federal'}</span>
                            </td>
                            <td class="hidden lg:table-cell">
                                <span class="badge badge-${template.urgency}">${capitalizeFirst(template.urgency)}</span>
                            </td>
                            <td>
                                <div class="flex items-center space-x-2">
                                    <a href="${template.url}" target="_blank" class="text-sm text-primary hover:underline">View</a>
                                    ${template.exampleUrl ? `<a href="${template.exampleUrl}" target="_blank" class="text-sm text-muted-foreground hover:text-foreground">Example</a>` : ''}
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="mt-4 text-sm text-muted-foreground">
            Showing ${templates.length} template${templates.length !== 1 ? 's' : ''}
        </div>
    `;
}

// Card View Rendering
function renderCardView(templates) {
    templateResults.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${templates.map(template => `
                <div class="border border-border rounded-md p-4 hover:bg-muted transition-colors">
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="font-medium">${template.title}</h3>
                        <span class="badge badge-${template.jurisdiction} ml-2">${template.jurisdiction === 'ny' ? 'NY' : 'Federal'}</span>
                    </div>
                    <p class="text-sm text-muted-foreground mb-3">${template.description}</p>
                    <div class="text-xs text-muted-foreground mb-3">
                        <strong>Authorities:</strong> ${template.authorities}
                    </div>
                    <div class="flex items-center space-x-2">
                        <a href="${template.url}" target="_blank" class="text-sm px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                            View Template
                        </a>
                        ${template.exampleUrl ? `<a href="${template.exampleUrl}" target="_blank" class="text-sm text-muted-foreground hover:text-foreground">Example</a>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="mt-4 text-sm text-muted-foreground">
            Showing ${templates.length} template${templates.length !== 1 ? 's' : ''}
        </div>
    `;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Expose functions globally for inline handlers
window.resetFilters = resetFilters;
window.toggleView = toggleView;
