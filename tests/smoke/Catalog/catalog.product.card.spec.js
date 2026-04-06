import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';

test('Product card is visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('visual_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goto();
    await expect(page).toHaveURL(/inventory\.html$/);

    const itemCards = page.locator('.inventory_item');
    await expect(itemCards).not.toHaveCount(0);

    const count = await itemCards.count();
    for (let i = 0; i < count; i++) {
        const card = itemCards.nth(i);
        await expect(card.locator('.inventory_item_name')).toBeVisible();
        await expect(card.locator('.inventory_item_price')).toBeVisible();
        await expect(card.getByRole('button', { name: /add to cart/i })).toBeVisible();
    }

    await page.locator('[data-test="item-0-title-link"]').click();
    await expect(page).toHaveURL(/inventory-item\.html\?id=0$/);

    await expect(page.locator('.inventory_details_name')).toBeVisible();
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    await expect(
        page.locator('button[data-test^="add-to-cart"]')
    ).toBeVisible();
});
