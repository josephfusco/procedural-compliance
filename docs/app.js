// Procedural Enclosure Toolkit - Progressive Enhancement
// Content is fully static in HTML - JavaScript only adds filtering/search

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Get filter elements
    const jurisdictionFilter = document.getElementById('jurisdiction-filter');
    const categoryFilter = document.getElementById('category-filter');
    const urgencyFilter = document.getElementById('urgency-filter');
    const resetButton = document.getElementById('reset-filters');
    const searchTrigger = document.getElementById('search-trigger');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const viewToggle = document.getElementById('view-toggle');
    const viewToggleText = document.getElementById('view-toggle-text');

    // Get all template rows from static HTML
    const templateRows = document.querySelectorAll('#template-results tbody tr');

    // Track current view state
    let currentView = 'table'; // 'table' or 'card'

    // Filter function - wrapper for unified filtering
    function applyFilters() {
        applyFiltersToView();
    }

    // Reset filters
    function resetFilters() {
        jurisdictionFilter.value = 'all';
        categoryFilter.value = 'all';
        urgencyFilter.value = 'all';
        applyFilters();
    }

    // Render card view
    function renderCardView() {
        const resultsContainer = document.getElementById('template-results');

        // Create card grid
        const cardGrid = document.createElement('div');
        cardGrid.className = 'card-grid view-transition';
        cardGrid.id = 'card-view';

        // Generate cards from table rows
        templateRows.forEach(row => {
            const linkElement = row.querySelector('a');
            const title = row.querySelector('.font-medium')?.textContent || '';
            const subtitle = row.querySelector('.text-muted-foreground')?.textContent || '';
            const link = linkElement?.getAttribute('href') || '';
            const templateTitle = linkElement?.dataset.templateTitle || title;
            const githubUrl = linkElement?.dataset.githubUrl || '';
            const jurisdiction = row.dataset.jurisdiction || 'ny';
            const category = row.dataset.category || '';
            const urgency = row.dataset.urgency || 'standard';

            // Determine jurisdiction badge - NY is text-only, Federal uses US flag image
            const jurisdictionBadge = jurisdiction === 'ny'
                ? '<span class="badge badge-ny">NY</span>'
                : '<span class="badge badge-federal"><img src="us_flag_small.png" class="badge-flag-img" alt="U.S. flag" loading="lazy"><span>Federal</span></span>';

            // Determine urgency badge
            let urgencyBadge = '<span class="badge badge-standard">STANDARD</span>';
            if (urgency === 'emergency') {
                urgencyBadge = '<span class="badge badge-emergency">EMERGENCY</span>';
            } else if (urgency === 'urgent') {
                urgencyBadge = '<span class="badge badge-urgent">URGENT</span>';
            }

            // Create card element as a link
            const card = document.createElement('a');
            card.href = link;
            card.className = 'template-card template-link';
            card.dataset.jurisdiction = jurisdiction;
            card.dataset.category = category;
            card.dataset.urgency = urgency;
            card.dataset.templateTitle = templateTitle;
            card.dataset.githubUrl = githubUrl;

            card.innerHTML = `
                <div class="template-card-header">
                    <div class="template-card-title">${title}</div>
                    <div class="template-card-subtitle">${subtitle}</div>
                </div>
                <div class="template-card-badges">
                    ${jurisdictionBadge}
                    ${urgencyBadge}
                </div>
            `;

            cardGrid.appendChild(card);
        });

        // Hide table, show cards
        const tableView = resultsContainer.querySelector('.border');
        const countElement = resultsContainer.querySelector('.text-sm.text-muted-foreground');

        if (tableView) tableView.style.display = 'none';

        // Remove existing card view if any
        const existingCardView = document.getElementById('card-view');
        if (existingCardView) {
            existingCardView.remove();
        }

        // Insert card grid before count element
        if (countElement) {
            resultsContainer.insertBefore(cardGrid, countElement);
        } else {
            resultsContainer.appendChild(cardGrid);
        }

        // Apply current filters to cards
        applyFiltersToView();
    }

    // Render table view
    function renderTableView() {
        const resultsContainer = document.getElementById('template-results');
        const tableView = resultsContainer.querySelector('.border');
        const cardView = document.getElementById('card-view');

        // Show table, hide cards
        if (tableView) tableView.style.display = 'block';
        if (cardView) cardView.remove();

        // Apply current filters to table
        applyFiltersToView();
    }

    // Toggle between table and card views
    function toggleView() {
        currentView = currentView === 'table' ? 'card' : 'table';

        if (currentView === 'card') {
            renderCardView();
            viewToggleText.textContent = 'Table View';
        } else {
            renderTableView();
            viewToggleText.textContent = 'Card View';
        }
    }

    // Apply filters to current view (unified function)
    function applyFiltersToView() {
        const jurisdiction = jurisdictionFilter.value;
        const category = categoryFilter.value;
        const urgency = urgencyFilter.value;
        let visibleCount = 0;

        if (currentView === 'table') {
            // Filter table rows
            templateRows.forEach(row => {
                const rowJurisdiction = row.dataset.jurisdiction;
                const rowCategory = row.dataset.category;
                const rowUrgency = row.dataset.urgency;

                const matchesJurisdiction = jurisdiction === 'all' || rowJurisdiction === jurisdiction;
                const matchesCategory = category === 'all' || rowCategory === category;
                const matchesUrgency = urgency === 'all' || rowUrgency === urgency;

                if (matchesJurisdiction && matchesCategory && matchesUrgency) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
        } else {
            // Filter cards
            const cards = document.querySelectorAll('.template-card');
            cards.forEach(card => {
                const cardJurisdiction = card.dataset.jurisdiction;
                const cardCategory = card.dataset.category;
                const cardUrgency = card.dataset.urgency;

                const matchesJurisdiction = jurisdiction === 'all' || cardJurisdiction === jurisdiction;
                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesUrgency = urgency === 'all' || cardUrgency === urgency;

                if (matchesJurisdiction && matchesCategory && matchesUrgency) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Update counts
        const countElement = document.querySelector('#template-results .text-muted-foreground');
        if (countElement) {
            countElement.textContent = `Showing ${visibleCount} template${visibleCount !== 1 ? 's' : ''}`;
        }
    }

    // Search functionality
    function openSearch() {
        if (searchModal) {
            searchModal.classList.remove('hidden');
            searchInput?.focus();
            renderSearchResults(Array.from(templateRows));
        }
    }

    function closeSearch() {
        if (searchModal) {
            searchModal.classList.add('hidden');
            if (searchInput) searchInput.value = '';
        }
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        const searchResults = document.getElementById('search-results');

        if (!searchResults) return;

        if (query === '') {
            renderSearchResults(Array.from(templateRows));
            return;
        }

        const results = Array.from(templateRows).filter(row => {
            const text = row.textContent.toLowerCase();
            return text.includes(query);
        });

        renderSearchResults(results);
    }

    function renderSearchResults(rows) {
        const searchResults = document.getElementById('search-results');
        if (!searchResults) return;

        if (rows.length === 0) {
            searchResults.innerHTML = '<div class="empty-state">No templates found</div>';
            return;
        }

        searchResults.innerHTML = rows.map(row => {
            const title = row.querySelector('.font-medium')?.textContent || '';
            const subtitle = row.querySelector('.text-muted-foreground')?.textContent || '';
            const link = row.querySelector('a')?.href || '';
            const jurisdiction = row.dataset.jurisdiction || 'ny';

            // NY is text-only badge, Federal includes US flag image
            const badgeContent = jurisdiction === 'ny'
                ? 'NY'
                : '<img src="us_flag_small.png" class="badge-flag-img" alt="U.S. flag" loading="lazy"><span>Federal</span>';

            return `
                <a href="${link}" target="_blank" class="block px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <div class="font-medium text-sm">${title}</div>
                            <div class="text-xs text-muted-foreground">${subtitle}</div>
                        </div>
                        <span class="badge badge-${jurisdiction} ml-2">${badgeContent}</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Open search with / or Ctrl+K
        if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && searchModal && !searchModal.classList.contains('hidden') === false) {
            e.preventDefault();
            openSearch();
        }

        // Close search with Escape
        if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
            closeSearch();
        }

        // Close template viewer with Escape
        const templateModal = document.getElementById('template-modal');
        if (e.key === 'Escape' && templateModal && !templateModal.classList.contains('hidden')) {
            closeTemplateViewer();
        }
    });

    // Template Viewer Functionality
    const templateModal = document.getElementById('template-modal');
    const templateModalTitle = document.getElementById('template-modal-title');
    const templateModalContent = document.getElementById('template-modal-content');
    const templateModalProse = document.getElementById('template-modal-prose');
    const templateModalClose = document.getElementById('template-modal-close');
    const templateModalCloseBtn = document.getElementById('template-modal-close-btn');
    const templateCopyBtn = document.getElementById('template-copy-btn');
    const templateGithubLink = document.getElementById('template-github-link');

    let currentMarkdownContent = '';
    let currentTemplatePath = '';

    // Helper function: Convert template path to hash-friendly ID
    // Example: "templates/procedural_enclosure_universal.md" -> "procedural-enclosure-universal"
    function getTemplateIdFromPath(path) {
        if (!path) return '';
        const filename = path.split('/').pop(); // Get filename
        return filename.replace('.md', '').replace(/_/g, '-'); // Remove .md and convert underscores to hyphens
    }

    // Open template viewer
    async function openTemplateViewer(templatePath, templateTitle, githubUrl) {
        try {
            // Show loading state
            if (templateModalProse) {
                templateModalProse.innerHTML = '<div class="text-center py-12"><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div><p class="mt-4 text-muted-foreground">Loading template...</p></div>';
            }
            if (templateModalTitle) {
                templateModalTitle.textContent = templateTitle;
            }
            if (templateModal) {
                templateModal.classList.remove('hidden');
            }

            // Update URL hash for deep linking
            const templateId = getTemplateIdFromPath(templatePath);
            if (templateId) {
                window.location.hash = templateId;
            }

            // Fetch markdown content
            const response = await fetch(templatePath);
            if (!response.ok) throw new Error('Failed to load template');

            currentMarkdownContent = await response.text();
            currentTemplatePath = templatePath;

            // Render markdown
            if (typeof marked !== 'undefined') {
                const html = marked.parse(currentMarkdownContent);
                if (templateModalProse) {
                    templateModalProse.innerHTML = html;
                }
            } else {
                // Fallback if marked.js doesn't load
                if (templateModalProse) {
                    templateModalProse.innerHTML = `<pre>${currentMarkdownContent}</pre>`;
                }
            }

            // Update GitHub link
            if (templateGithubLink) {
                templateGithubLink.href = githubUrl;
            }
        } catch (error) {
            console.error('Error loading template:', error);
            if (templateModalProse) {
                templateModalProse.innerHTML = '<div class="text-center py-12"><p class="text-red-600">Failed to load template. Please try again.</p></div>';
            }
        }
    }

    // Close template viewer
    function closeTemplateViewer() {
        if (templateModal) {
            templateModal.classList.add('hidden');
        }
        currentMarkdownContent = '';
        currentTemplatePath = '';

        // Clear URL hash without adding to browser history
        if (window.location.hash) {
            history.replaceState(null, null, ' ');
        }
    }

    // Handle URL hash changes for deep linking
    function handleHashChange() {
        const hash = window.location.hash.substring(1); // Remove # prefix
        if (!hash) return;

        // Find template link with matching ID
        const templateLinks = document.querySelectorAll('.template-link');
        for (const link of templateLinks) {
            const linkPath = link.getAttribute('href');
            const linkId = getTemplateIdFromPath(linkPath);

            if (linkId === hash) {
                const templateTitle = link.dataset.templateTitle || 'Template';
                const githubUrl = link.dataset.githubUrl || '';
                openTemplateViewer(linkPath, templateTitle, githubUrl);
                break;
            }
        }

        // Also check guide links
        const guideLinks = document.querySelectorAll('.guide-link');
        for (const link of guideLinks) {
            const linkPath = link.getAttribute('href');
            const linkId = getTemplateIdFromPath(linkPath);

            if (linkId === hash) {
                const guideTitle = link.dataset.guideTitle || 'Guide';
                const githubUrl = link.dataset.githubUrl || '';
                openTemplateViewer(linkPath, guideTitle, githubUrl);
                break;
            }
        }
    }

    // Copy markdown to clipboard
    async function copyMarkdownToClipboard() {
        try {
            await navigator.clipboard.writeText(currentMarkdownContent);
            // Show success feedback
            if (templateCopyBtn) {
                const originalText = templateCopyBtn.innerHTML;
                templateCopyBtn.innerHTML = `
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Copied!</span>
                `;
                setTimeout(() => {
                    templateCopyBtn.innerHTML = originalText;
                }, 2000);
            }
        } catch (error) {
            console.error('Failed to copy:', error);
            alert('Failed to copy to clipboard. Please try again.');
        }
    }

    // Attach event listeners for template viewer
    if (templateModalClose) templateModalClose.addEventListener('click', closeTemplateViewer);
    if (templateModalCloseBtn) templateModalCloseBtn.addEventListener('click', closeTemplateViewer);
    if (templateCopyBtn) templateCopyBtn.addEventListener('click', copyMarkdownToClipboard);
    if (templateModal) {
        templateModal.addEventListener('click', (e) => {
            if (e.target === templateModal) closeTemplateViewer();
        });
    }

    // Intercept template link clicks (for both table and card views)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.template-link');
        if (link) {
            e.preventDefault();
            const templatePath = link.getAttribute('href');
            const templateTitle = link.dataset.templateTitle || 'Template';
            const githubUrl = link.dataset.githubUrl || '';
            openTemplateViewer(templatePath, templateTitle, githubUrl);
        }
    });

    // Intercept guide link clicks (guides are also markdown, use same viewer)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.guide-link');
        if (link) {
            e.preventDefault();
            const guidePath = link.getAttribute('href');
            const guideTitle = link.dataset.guideTitle || 'Guide';
            const githubUrl = link.dataset.githubUrl || '';
            openTemplateViewer(guidePath, guideTitle, githubUrl);
        }
    });

    // Intercept citation link clicks (JSON files)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.citation-link');
        if (link) {
            e.preventDefault();
            const citationPath = link.getAttribute('href');
            const citationTitle = link.dataset.citationTitle || 'Citation';
            const githubUrl = link.dataset.githubUrl || '';
            openCitationViewer(citationPath, citationTitle, githubUrl);
        }
    });

    // Open citation viewer for JSON files
    async function openCitationViewer(citationPath, citationTitle, githubUrl) {
        try {
            // Show loading state
            if (templateModalProse) {
                templateModalProse.innerHTML = '<div class="text-center py-12"><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div><p class="mt-4 text-muted-foreground">Loading citation database...</p></div>';
            }
            if (templateModalTitle) {
                templateModalTitle.textContent = citationTitle;
            }
            if (templateModal) {
                templateModal.classList.remove('hidden');
            }

            // Fetch JSON content
            const response = await fetch(citationPath);
            if (!response.ok) throw new Error('Failed to load citation');

            const jsonData = await response.json();
            currentMarkdownContent = JSON.stringify(jsonData, null, 2);
            currentTemplatePath = citationPath;

            // Format JSON as readable HTML
            let html = '<div class="citation-viewer"><pre class="language-json"><code>';
            html += escapeHtml(JSON.stringify(jsonData, null, 2));
            html += '</code></pre></div>';

            if (templateModalProse) {
                templateModalProse.innerHTML = html;
            }

            // Update GitHub link
            if (templateGithubLink) {
                templateGithubLink.href = githubUrl;
            }
        } catch (error) {
            console.error('Error loading citation:', error);
            if (templateModalProse) {
                templateModalProse.innerHTML = '<div class="text-center py-12"><p class="text-red-600">Failed to load citation. Please try again.</p></div>';
            }
        }
    }

    // Helper function to escape HTML
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Attach event listeners
    if (jurisdictionFilter) jurisdictionFilter.addEventListener('change', applyFilters);
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (urgencyFilter) urgencyFilter.addEventListener('change', applyFilters);
    if (resetButton) resetButton.addEventListener('click', resetFilters);
    if (viewToggle) viewToggle.addEventListener('click', toggleView);
    if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }
    if (searchInput) searchInput.addEventListener('input', handleSearch);

    // Smooth scrolling for anchor links
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

    // Handle hash-based deep linking on page load
    handleHashChange();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            handleHashChange();
        } else {
            // Hash was cleared, close modal if open
            if (templateModal && !templateModal.classList.contains('hidden')) {
                closeTemplateViewer();
            }
        }
    });
});
