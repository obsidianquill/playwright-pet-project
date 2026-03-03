import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test ('IncorrectLogin', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.usernameInput.fill('visual_user');
    await loginPage.passwordInput.fill('secret');
    await loginPage.loginButton.click();
    await expect (loginPage.errorMessage).toBeVisible();
}
)