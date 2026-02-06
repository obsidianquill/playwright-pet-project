import {test, expect} from '@playwright/test';

test ('Login automatically using username & password from page', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('#login_credentials, .login_credentials');
    await page.waitForSelector('#login_password, .login_password');

    const usernameField = page.locator('#user-name');

    const passwordField = page.locator('#password');

    const loginButton = page.locator('#login-button');

    const bodyText = await page.textContent('body');

    const usernamesText = await page.locator('#login_credentials, .login_credentials').first().innerText();

    const usernames = usernamesText.split(/\r?\n/)
        .map(s => s.trim())
        .filter(s => /^[a-z_]+$/i.test(s));

    const pwdText = await page.locator('#login_password, .login_password').first().innerText();
    const password = (pwdText.match(/:\s*(\S+)/)?.[1]) ?? 'secret_sauce';

    const username = usernames.find(u => u.includes('standard')) ?? usernames[0];

    await usernameField.fill(username);
    await passwordField.fill(password);
    await loginButton.click();

    await expect(page).toHaveURL(/inventory.html/);

    await page.pause()

     //console.log(`✅ Logged in as: ${username}`);
}
)