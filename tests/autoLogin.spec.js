import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('Login automatically using username & password from page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/');

    await page.waitForSelector('#login_credentials, .login_credentials');
    await page.waitForSelector('#login_password, .login_password');

    const usernamesText = await page.locator('#login_credentials, .login_credentials').first().innerText();

    const usernames = usernamesText.split(/\r?\n/)
        .map(s => s.trim())
        .filter(s => /^[a-z_]+$/i.test(s));

    const pwdText = await page.locator('#login_password, .login_password').first().innerText();
    const password = (pwdText.match(/:\s*(\S+)/)?.[1]) ?? 'secret_sauce';

    const username = usernames.find(u => u.includes('standard')) ?? usernames[0];

    await loginPage.usernameInput.fill(username);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();

    await expect(page).toHaveURL(/inventory.html/);

    await page.pause()

     //console.log(`✅ Logged in as: ${username}`);
}
)