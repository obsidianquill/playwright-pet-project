import {test, expect} from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';

test ('Logout from the inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('visual_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goto();
    await inventoryPage.burgerMenuButton.click();
    await inventoryPage.logoutButton.click();
    await expect(page).toHaveURL('/');
    await expect(page).toHaveTitle(/Swag Labs/);
}
)