#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const URL = process.env.SCREENSHOT_URL || 'http://localhost:8080/';
const OUT_DIR = path.join(__dirname, '..', 'screenshots');

const VIEWPORTS = [
    { name: 'wide', width: 1920, height: 1080 },
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'tablet', width: 800, height: 1100 },
    { name: 'mobile', width: 390, height: 844 }
];

async function main() {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const browser = await chromium.launch();

    for (const vp of VIEWPORTS) {
        const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
        const page = await ctx.newPage();
        await page.goto(URL, { waitUntil: 'networkidle' });

        const fullPath = path.join(OUT_DIR, `${vp.name}-full.png`);
        await page.screenshot({ path: fullPath, fullPage: true });
        console.log(`✅ ${vp.name} full → ${path.relative(process.cwd(), fullPath)}`);

        const sectionIds = await page.$$eval('main section[id]', els => els.map(el => el.id));

        for (const id of sectionIds) {
            const handle = await page.$(`#${id}`);
            if (!handle) continue;
            const safe = id.replace(/[^a-z0-9-]/gi, '_');
            const p = path.join(OUT_DIR, `${vp.name}-${safe}.png`);
            await handle.screenshot({ path: p });
            console.log(`   ↳ ${safe} → ${path.relative(process.cwd(), p)}`);
        }

        for (const sel of ['footer.usa-footer', '.usa-identifier', 'header.usa-header']) {
            const handle = await page.$(sel);
            if (!handle) continue;
            const safe = sel.replace(/[^a-z0-9-]/gi, '_');
            const p = path.join(OUT_DIR, `${vp.name}-chrome-${safe}.png`);
            await handle.screenshot({ path: p });
            console.log(`   ↳ ${safe} → ${path.relative(process.cwd(), p)}`);
        }

        await ctx.close();
    }

    await browser.close();
    console.log(`\n📸 ${VIEWPORTS.length} viewports captured in ${path.relative(process.cwd(), OUT_DIR)}/`);
}

main().catch(err => { console.error(err); process.exit(1); });
