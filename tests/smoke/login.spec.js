import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test ('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.usernameInput.fill('visual_user');
    await loginPage.passwordInput.fill('secret_sauce');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(/inventory.html/);
}
)