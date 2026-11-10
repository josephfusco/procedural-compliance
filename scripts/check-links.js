#!/usr/bin/env node
// Checks that every internal link and anchor in the built site resolves.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'docs');

function pages(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
        if (e.name === 'assets') return [];
        const p = path.join(dir, e.name);
        return e.isDirectory() ? pages(p) : e.name === 'index.html' ? [p] : [];
    });
}

let bad = 0;
for (const page of pages(ROOT)) {
    const html = fs.readFileSync(page, 'utf-8');
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        if (/^(https?:|data:|mailto:)/.test(url)) continue;
        const [file, hash] = url.split('#');
        let target = page;
        if (file) {
            target = path.join(ROOT, file);
            if (file.endsWith('/')) target = path.join(target, 'index.html');
        }
        if (!fs.existsSync(target)) {
            bad++;
            console.log(`❌ ${path.relative(ROOT, page)}: ${url} (missing file)`);
        } else if (hash && !fs.readFileSync(target, 'utf-8').includes(`id="${hash}"`)) {
            bad++;
            console.log(`❌ ${path.relative(ROOT, page)}: ${url} (missing anchor)`);
        }
    }
}

console.log(bad ? `${bad} broken internal links` : '✅ Internal links resolve');
process.exit(bad ? 1 : 0);
