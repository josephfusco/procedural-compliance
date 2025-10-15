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

    // Get all template rows from static HTML
    const templateRows = document.querySelectorAll('#template-results tbody tr');

    // Filter function - shows/hides rows based on data attributes
    function applyFilters() {
        const jurisdiction = jurisdictionFilter.value;
        const category = categoryFilter.value;
        const urgency = urgencyFilter.value;

        let visibleCount = 0;

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

        // Update counts
        const countElement = document.querySelector('#template-results .text-muted-foreground');
        if (countElement) {
            countElement.textContent = `Showing ${visibleCount} template${visibleCount !== 1 ? 's' : ''}`;
        }

        // Update info bar count
        const infoBarCount = document.getElementById('template-count');
        if (infoBarCount) {
            infoBarCount.textContent = `${visibleCount} template${visibleCount !== 1 ? 's' : ''} available`;
        }
    }

    // Reset filters
    function resetFilters() {
        jurisdictionFilter.value = 'all';
        categoryFilter.value = 'all';
        urgencyFilter.value = 'all';
        applyFilters();
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

            return `
                <a href="${link}" target="_blank" class="block px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <div class="font-medium text-sm">${title}</div>
                            <div class="text-xs text-muted-foreground">${subtitle}</div>
                        </div>
                        <span class="badge badge-${jurisdiction} ml-2">${jurisdiction === 'ny' ? 'NY' : 'Federal'}</span>
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
    });

    // Attach event listeners
    if (jurisdictionFilter) jurisdictionFilter.addEventListener('change', applyFilters);
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (urgencyFilter) urgencyFilter.addEventListener('change', applyFilters);
    if (resetButton) resetButton.addEventListener('click', resetFilters);
    if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }
    if (searchInput) searchInput.addEventListener('input', handleSearch);

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.toggle('active');
        });
    }

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
});
