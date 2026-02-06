import {test, expect} from '@playwright/test';

test ('Login', async ({ page }) => {
    await page.goto('/');
    const usernameField = page.locator('#user-name');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('#login-button');
    await usernameField.fill('visual_user');
    await passwordField.fill('secret');
    await loginButton.click();
    await expect (page).to
}
)