# Web Interface - GitHub Pages Site

**Interactive template catalog for procedural enclosure toolkit**

---

## Overview

This directory contains the static website for the Procedural Enclosure Toolkit, deployed via GitHub Pages. The site provides:

- **Searchable Template Catalog** - Filter by jurisdiction, category, and urgency
- **Comprehensive Guides** - Links to all documentation
- **Citation Database Access** - Direct links to JSON databases
- **Quick Start Guide** - Step-by-step implementation instructions
- **Mobile-Responsive Design** - Accessible on all devices

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with all sections |
| `styles.css` | Professional styling with legal theme |
| `app.js` | Interactive filtering and dynamic content |
| `.nojekyll` | Disables Jekyll processing for GitHub Pages |
| `README.md` | This file (documentation) |

---

## Deployment

### GitHub Pages Setup

**1. Enable GitHub Pages:**
- Repository Settings → Pages
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`
- Save

**2. Access Site:**
- URL format: `https://[username].github.io/[repository-name]/`
- For this repo: `https://joefusco.github.io/procedural-enclosure-toolkit/`

**3. Custom Domain (Optional):**
- Add `CNAME` file to `/docs` with custom domain
- Configure DNS with your domain provider
- Enable HTTPS in repository settings

### Local Development

**Serve locally for testing:**

```bash
# Using Python 3
cd docs/
python3 -m http.server 8000

# Using Node.js
npx http-server docs/

# Open browser to http://localhost:8000
```

---

## Architecture

### Template Database

Templates are defined in `app.js`:

```javascript
const templates = [
    {
        id: 'procedural-enclosure',
        title: 'Procedural Enclosure (Written Orders)',
        jurisdiction: 'ny',
        category: 'procedural-enforcement',
        urgency: 'standard',
        description: '...',
        authorities: '...',
        url: 'https://github.com/...',
        exampleUrl: '...'
    },
    // ... more templates
];
```

**Adding a new template:**
1. Add entry to `templates` array in `app.js`
2. Follow existing structure
3. Test filters work correctly
4. Commit and push

### Filtering System

**Three-dimensional filtering:**
- **Jurisdiction:** New York, Federal, All
- **Category:** Procedural Enforcement, Appeals, Transparency, Oversight, All
- **Urgency:** Emergency (same day), Urgent (1-7 days), Standard (7+ days), All

**Implementation:**
```javascript
currentFilters = {
    jurisdiction: 'all',
    category: 'all',
    urgency: 'all'
};

function filterTemplates() {
    return templates.filter(template => {
        return matchesAllFilters(template);
    });
}
```

### Responsive Design

**Breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

**Mobile optimizations:**
- Hamburger menu for navigation
- Single-column layouts
- Touch-friendly button sizing
- Reduced font sizes

---

## Color Scheme

**Professional Legal Theme:**

```css
--primary-color: #1a365d;      /* Deep blue */
--secondary-color: #2c5282;    /* Medium blue */
--accent-color: #3182ce;       /* Bright blue */
--text-dark: #1a202c;
--text-medium: #4a5568;
--bg-light: #f7fafc;
--bg-white: #ffffff;
```

**Reflects:**
- Trust and authority (blue tones)
- Professional legal environment
- High readability and contrast
- Cornell Law aesthetic

---

## Sections

### 1. Hero
- Call-to-action buttons
- Quick navigation
- Prominent disclaimer

### 2. Template Selector
- Interactive filters
- Dynamic card rendering
- Direct links to GitHub templates

### 3. Guides
- 6 comprehensive guides
- Documentation links
- AI prompt library access

### 4. Citation Database
- JSON database links
- Verification warnings
- Update log access

### 5. Features
- 6 key features highlighted
- Visual icons
- Benefit statements

### 6. Quick Start
- 5-step implementation guide
- Code snippets
- Clear instructions

### 7. Footer
- Resource links
- Legal disclaimers
- Community information

---

## Customization

### Adding New Sections

**1. Update HTML:**
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2>New Section Title</h2>
        <!-- Content -->
    </div>
</section>
```

**2. Add Styles:**
```css
.new-section {
    padding: var(--spacing-xxl) 0;
    background-color: var(--bg-light);
}
```

**3. Update Navigation:**
```html
<li><a href="#new-section">New Section</a></li>
```

### Changing Color Scheme

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

### Modifying Templates

Edit `templates` array in `app.js`:
- Add new templates
- Update URLs
- Modify categorization
- Change metadata

---

## Performance

### Optimization Techniques

**1. Minimal Dependencies:**
- No frameworks (pure HTML/CSS/JS)
- No external libraries
- Zero build process

**2. Asset Optimization:**
- CSS minification for production (optional)
- Image compression (when images added)
- Font subsetting (system fonts used)

**3. Lazy Loading:**
- Templates rendered on demand
- Filters applied client-side
- No server requests

### Load Time

- **HTML:** ~10KB
- **CSS:** ~15KB
- **JavaScript:** ~8KB
- **Total:** ~33KB
- **Load Time:** < 1 second on 3G

---

## Accessibility

### WCAG 2.1 AA Compliance

**Features:**
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios (4.5:1 minimum)
- Focus indicators
- Screen reader compatibility

**Testing:**
```bash
# Test with screen reader
# Test keyboard-only navigation
# Validate HTML: https://validator.w3.org/
# Check contrast: https://webaim.org/resources/contrastchecker/
```

---

## Browser Support

**Tested and supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Fallbacks:**
- CSS Grid with flexbox fallback
- Modern JavaScript (ES6+)
- Progressive enhancement

---

## Analytics (Optional)

**To add Google Analytics:**

1. Create GA4 property
2. Add tracking code to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Privacy considerations:**
- Add privacy policy
- Cookie consent banner
- Anonymize IPs
- GDPR compliance

---

## SEO

### Current Optimizations

**Meta Tags:**
```html
<meta name="description" content="...">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Semantic HTML:**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive link text

**Additional Improvements:**
- Add Open Graph tags for social sharing
- Create `sitemap.xml`
- Add `robots.txt`
- Implement structured data (JSON-LD)

---

## Maintenance

### Regular Updates

**Monthly:**
- Verify all GitHub links work
- Update template database if new templates added
- Check for broken links

**Quarterly:**
- Review design for accessibility improvements
- Update browser compatibility information
- Performance audit

**Annually:**
- Major design refresh (if needed)
- User feedback implementation
- Analytics review

---

## Future Enhancements

**Planned features:**
- [ ] Template preview modal (without leaving page)
- [ ] Bookmark/favorites system (localStorage)
- [ ] Print-friendly CSS
- [ ] Dark mode toggle
- [ ] Advanced search with keywords
- [ ] Template comparison tool
- [ ] Interactive citation validator
- [ ] Embedded PDF viewer
- [ ] Multi-language support (Spanish initially)

**Community contributions welcome.**

---

## Troubleshooting

### Common Issues

**1. GitHub Pages not deploying:**
- Check repository settings → Pages is enabled
- Verify branch is `main` and folder is `/docs`
- Wait 5-10 minutes for propagation
- Check GitHub Actions for build errors

**2. Styles not loading:**
- Verify `styles.css` is in `/docs` directory
- Check browser console for 404 errors
- Clear browser cache
- Verify relative paths in HTML

**3. Filters not working:**
- Check browser console for JavaScript errors
- Verify `app.js` is loaded
- Test in different browser
- Check for syntax errors in template database

**4. Mobile menu not toggling:**
- Inspect `.mobile-menu-toggle` element
- Verify JavaScript event listener attached
- Check CSS for `.nav-links.active` styles

---

## Contributing

**To contribute to web interface:**

1. Fork repository
2. Make changes to `/docs` files
3. Test locally with `python3 -m http.server`
4. Submit pull request with description
5. Tag as "web-interface" or "documentation"

**Guidelines:**
- Maintain Cornell Law precision in copy
- Follow existing code style
- Test on mobile and desktop
- Verify accessibility
- Keep dependencies minimal

---

## Contact

**For web interface issues:**
- Open GitHub issue with "web-interface" label
- Describe problem, browser, and steps to reproduce
- Include screenshots if applicable

---

**License:** MIT License (same as main repository)

**Disclaimer:** Not legal advice. Educational purposes only. Verify all information independently.
