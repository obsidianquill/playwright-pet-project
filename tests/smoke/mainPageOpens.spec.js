import { test, expect } from '@playwright/test';

test ('The main page opens', async ({ page }) => {
    await page.goto('/');
    await expect (page).toHaveTitle(/Swag Labs/);
});