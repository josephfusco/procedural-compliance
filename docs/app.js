// Procedural Enclosure Toolkit - Progressive Enhancement
// Content is fully static in HTML - JavaScript only adds filtering/search

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Get filter elements
    const jurisdictionFilter = document.getElementById('jurisdiction-filter');
    const categoryFilter = document.getElementById('category-filter');
    const urgencyFilter = document.getElementById('urgency-filter');
    const roleFilter = document.getElementById('role-filter');
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
        roleFilter.value = 'all';
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
            const role = row.dataset.role || 'procedural';

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
            card.dataset.role = role;
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
        const role = roleFilter.value;
        let visibleCount = 0;

        if (currentView === 'table') {
            // Filter table rows
            templateRows.forEach(row => {
                const rowJurisdiction = row.dataset.jurisdiction;
                const rowCategory = row.dataset.category;
                const rowUrgency = row.dataset.urgency;
                const rowRole = row.dataset.role;

                const matchesJurisdiction = jurisdiction === 'all' || rowJurisdiction === jurisdiction;
                const matchesCategory = category === 'all' || rowCategory === category;
                const matchesUrgency = urgency === 'all' || rowUrgency === urgency;
                const matchesRole = role === 'all' || rowRole === role;

                if (matchesJurisdiction && matchesCategory && matchesUrgency && matchesRole) {
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
                const cardRole = card.dataset.role;

                const matchesJurisdiction = jurisdiction === 'all' || cardJurisdiction === jurisdiction;
                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesUrgency = urgency === 'all' || cardUrgency === urgency;
                const matchesRole = role === 'all' || cardRole === role;

                if (matchesJurisdiction && matchesCategory && matchesUrgency && matchesRole) {
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
    const templateDownloadBtn = document.getElementById('template-download-btn');

    let currentMarkdownContent = '';
    let currentTemplatePath = '';
    let lastFocusedElement = null;

    // Separate template into jurisdiction, guidance, and legal document sections
    function separateMetadataFromDocument(container) {
        if (!container) return;

        const children = Array.from(container.children);
        let jurisdictionEndIndex = -1;
        let titleIndex = -1;
        let guidanceStartIndex = -1;
        let guidanceEndIndex = -1;

        // Find section boundaries
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            const text = element.textContent;

            // Find jurisdiction section end (first HR after "JURISDICTION:")
            if (jurisdictionEndIndex === -1 && element.tagName === 'HR' && i > 0 &&
                children[i-1]?.textContent.includes('This template applies to')) {
                jurisdictionEndIndex = i;
            }

            // Find template title (H1 after jurisdiction)
            if (jurisdictionEndIndex !== -1 && titleIndex === -1 && element.tagName === 'H1') {
                titleIndex = i;
            }

            // Find guidance section start (h2 with warning emoji)
            if (guidanceStartIndex === -1 && element.tagName === 'H2' &&
                text.includes('⚠️') && text.includes('BEFORE USING THIS TEMPLATE')) {
                guidanceStartIndex = i;
            }

            // Find guidance section end (HR after guidance started)
            if (guidanceStartIndex !== -1 && guidanceEndIndex === -1 &&
                element.tagName === 'HR' && i > guidanceStartIndex) {
                guidanceEndIndex = i;
                break;
            }
        }

        // Build the clean structure from scratch
        const jurisdictionWrapper = document.createElement('div');
        jurisdictionWrapper.className = 'template-jurisdiction-section';

        const titleWrapper = document.createElement('div');
        titleWrapper.className = 'template-title-section';

        const guidanceWrapper = document.createElement('details');
        guidanceWrapper.className = 'template-guidance-section';
        guidanceWrapper.setAttribute('open', '');

        const guidanceSummary = document.createElement('summary');
        guidanceSummary.className = 'template-guidance-summary';
        guidanceSummary.innerHTML = '<span class="warning-icon">⚠️</span> <strong>Before Using This Template</strong>';

        const guidanceContent = document.createElement('div');
        guidanceContent.className = 'template-guidance-content';

        const documentWrapper = document.createElement('div');
        documentWrapper.className = 'template-document-section';

        // Move elements into appropriate sections
        const allChildren = Array.from(container.children);

        for (let i = 0; i < allChildren.length; i++) {
            const element = allChildren[i];

            if (i <= jurisdictionEndIndex) {
                // Jurisdiction section (hide HRs)
                if (element.tagName !== 'HR') {
                    jurisdictionWrapper.appendChild(element.cloneNode(true));
                }
            } else if (i === titleIndex) {
                // Template title
                titleWrapper.appendChild(element.cloneNode(true));
            } else if (i > guidanceStartIndex && i < guidanceEndIndex) {
                // Guidance content (skip the h2 heading)
                if (element.tagName !== 'H2') {
                    guidanceContent.appendChild(element.cloneNode(true));
                }
            } else if (i > guidanceEndIndex) {
                // Legal document content
                documentWrapper.appendChild(element.cloneNode(true));
            }
        }

        // Assemble the final structure
        guidanceWrapper.appendChild(guidanceSummary);
        guidanceWrapper.appendChild(guidanceContent);

        // Clear container and rebuild
        container.innerHTML = '';
        container.appendChild(jurisdictionWrapper);
        container.appendChild(titleWrapper);
        container.appendChild(guidanceWrapper);
        container.appendChild(documentWrapper);
    }

    // Highlight template placeholders with popovers for long ones
    function highlightTemplatePlaceholders(container) {
        if (!container) return;

        const LONG_PLACEHOLDER_THRESHOLD = 40; // characters

        const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT,
            null
        );

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

            // Replace {{...}} with either highlighted span or popover
            tempDiv.innerHTML = node.textContent.replace(
                /\{\{([^}]+)\}\}/g,
                (match, content) => {
                    const fullPlaceholder = match;
                    const trimmedContent = content.trim();

                    if (trimmedContent.length > LONG_PLACEHOLDER_THRESHOLD) {
                        // Long placeholder - create popover trigger
                        const uniqueId = 'popover-' + Math.random().toString(36).substr(2, 9);
                        return `<span class="template-placeholder-with-popover" data-tooltip="${fullPlaceholder.replace(/"/g, '&quot;')}" data-popover-id="${uniqueId}" tabindex="0" role="button" aria-label="Show field details">Field <span class="info-icon">ⓘ</span></span>`;
                    } else {
                        // Short placeholder - normal highlighting
                        return `<span class="template-placeholder">${fullPlaceholder}</span>`;
                    }
                }
            );

            while (tempDiv.firstChild) {
                fragment.appendChild(tempDiv.firstChild);
            }

            node.parentNode.replaceChild(fragment, node);
        });

        // Add event listeners for popovers
        addPopoverEventListeners(container);
    }

    // Add hover and click event listeners for popovers
    function addPopoverEventListeners(container) {
        const triggers = container.querySelectorAll('.template-placeholder-with-popover');

        triggers.forEach(trigger => {
            const tooltipText = trigger.dataset.tooltip;
            const popoverId = trigger.dataset.popoverId;

            // Create popover element
            const popover = document.createElement('div');
            popover.className = 'template-popover hidden';
            popover.id = popoverId;
            popover.textContent = tooltipText;
            popover.setAttribute('role', 'tooltip');

            // Append popover as child of trigger (trigger has position: relative)
            trigger.appendChild(popover);

            // Show on hover (desktop)
            trigger.addEventListener('mouseenter', () => {
                positionPopover(trigger, popover);
                popover.classList.remove('hidden');
            });

            trigger.addEventListener('mouseleave', () => {
                popover.classList.add('hidden');
            });

            // Toggle on click/tap (mobile)
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const isHidden = popover.classList.contains('hidden');

                // Hide all other popovers
                document.querySelectorAll('.template-popover').forEach(p => p.classList.add('hidden'));

                if (isHidden) {
                    positionPopover(trigger, popover);
                    popover.classList.remove('hidden');
                } else {
                    popover.classList.add('hidden');
                }
            });

            // Close on keyboard (Escape)
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    trigger.click();
                } else if (e.key === 'Escape') {
                    popover.classList.add('hidden');
                }
            });
        });

        // Close all popovers when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.template-placeholder-with-popover') && !e.target.closest('.template-popover')) {
                document.querySelectorAll('.template-popover').forEach(p => p.classList.add('hidden'));
            }
        });
    }

    // Position popover relative to trigger
    function positionPopover(trigger, popover) {
        const triggerRect = trigger.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();

        // Position below trigger by default
        popover.style.position = 'absolute';
        popover.style.top = '100%';
        popover.style.left = '0';
        popover.style.marginTop = '0.5rem';

        // Check if popover would go off right edge of screen
        const popoverRight = triggerRect.left + popoverRect.width;
        if (popoverRight > window.innerWidth) {
            popover.style.left = 'auto';
            popover.style.right = '0';
        }
    }

    // Helper function: Convert template path to hash-friendly ID
    // Example: "templates/notice_universal.md" -> "notice-universal"
    function getTemplateIdFromPath(path) {
        if (!path) return '';
        const filename = path.split('/').pop(); // Get filename
        return filename.replace('.md', '').replace(/_/g, '-'); // Remove .md and convert underscores to hyphens
    }

    // Parse YAML frontmatter from markdown
    function parseFrontmatter(markdown) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
        const match = markdown.match(frontmatterRegex);

        if (!match) {
            return { frontmatter: {}, content: markdown };
        }

        // Extract frontmatter and content
        const frontmatterText = match[1];
        const content = markdown.slice(match[0].length);

        // Simple YAML parser for our needs
        const frontmatter = {};
        const lines = frontmatterText.split('\n');

        for (const line of lines) {
            const colonIndex = line.indexOf(':');
            if (colonIndex > -1) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();

                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }

                frontmatter[key] = value;
            }
        }

        return { frontmatter, content };
    }

    // Open template viewer
    async function openTemplateViewer(templatePath, templateTitle, githubUrl) {
        try {
            // Store current focused element to return focus later
            lastFocusedElement = document.activeElement;

            // Show loading state
            if (templateModalProse) {
                templateModalProse.innerHTML = '<div class="text-center py-12"><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div><p class="mt-4 text-muted-foreground">Loading template...</p></div>';
            }
            if (templateModalTitle) {
                templateModalTitle.textContent = templateTitle;
            }
            if (templateModal) {
                templateModal.classList.remove('hidden');
                // Focus the close button for initial focus
                setTimeout(() => {
                    if (templateModalClose) templateModalClose.focus();
                }, 100);
            }

            // Update URL hash for deep linking
            const templateId = getTemplateIdFromPath(templatePath);
            if (templateId) {
                window.location.hash = templateId;
            }

            // Fetch markdown content
            const response = await fetch(templatePath);
            if (!response.ok) throw new Error('Failed to load template');

            const rawMarkdown = await response.text();
            currentMarkdownContent = rawMarkdown;
            currentTemplatePath = templatePath;

            // Parse frontmatter
            const { frontmatter, content } = parseFrontmatter(rawMarkdown);

            // Add jurisdiction badge to title if available
            if (frontmatter.jurisdiction && templateModalTitle) {
                const jurisdiction = frontmatter.jurisdiction.toLowerCase();
                let badgeHTML = '';

                if (jurisdiction === 'ny') {
                    badgeHTML = '<span class="badge badge-ny" style="font-size: 0.625rem; padding: 0.125rem 0.5rem; margin-left: 0.5rem; vertical-align: middle;">NY</span>';
                } else if (jurisdiction === 'federal') {
                    badgeHTML = '<span class="badge badge-federal" style="font-size: 0.625rem; padding: 0.125rem 0.5rem; margin-left: 0.5rem; vertical-align: middle;"><img src="us_flag_small.png" class="badge-flag-img" alt="U.S. flag" loading="lazy"><span>Federal</span></span>';
                }

                templateModalTitle.innerHTML = `${templateTitle} ${badgeHTML}`;
            }

            // Render markdown (without frontmatter)
            if (typeof marked !== 'undefined') {
                const html = marked.parse(content);
                if (templateModalProse) {
                    templateModalProse.innerHTML = html;
                    // Separate metadata from legal document
                    separateMetadataFromDocument(templateModalProse);
                    // Highlight {{placeholders}} with popovers
                    highlightTemplatePlaceholders(templateModalProse);
                }
            } else {
                // Fallback if marked.js doesn't load
                if (templateModalProse) {
                    templateModalProse.innerHTML = `<pre>${content}</pre>`;
                    // Separate metadata from legal document
                    separateMetadataFromDocument(templateModalProse);
                    // Highlight {{placeholders}} in fallback view too
                    highlightTemplatePlaceholders(templateModalProse);
                }
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

        // Return focus to the element that opened the modal
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }

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

    }

    // Focus trap for template modal
    function handleModalFocusTrap(e) {
        if (!templateModal || templateModal.classList.contains('hidden')) return;

        // Only trap Tab key
        if (e.key !== 'Tab') return;

        // Get all focusable elements within the modal
        const focusableElements = templateModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements);
        const firstFocusable = focusableArray[0];
        const lastFocusable = focusableArray[focusableArray.length - 1];

        if (e.shiftKey) {
            // Shift+Tab: moving backwards
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab: moving forwards
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }

    // Attach event listeners for template viewer
    if (templateModalClose) templateModalClose.addEventListener('click', closeTemplateViewer);
    if (templateModalCloseBtn) templateModalCloseBtn.addEventListener('click', closeTemplateViewer);
    if (templateModal) {
        templateModal.addEventListener('click', (e) => {
            if (e.target === templateModal) closeTemplateViewer();
        });
        // Add focus trap listener
        document.addEventListener('keydown', handleModalFocusTrap);
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

    // Attach event listeners
    if (jurisdictionFilter) jurisdictionFilter.addEventListener('change', applyFilters);
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (urgencyFilter) urgencyFilter.addEventListener('change', applyFilters);
    if (roleFilter) roleFilter.addEventListener('change', applyFilters);
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
