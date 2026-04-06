import {test, expect} from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test ('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('visual_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
}
)