import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    for(let i = 0; i < 10; i++) {
        await page.click('button:has-text("Open dialog")', {timeout:2000});
        await page.click('mat-dialog-container >> button:has-text("Close")', {timeout:2000});
    }
});
