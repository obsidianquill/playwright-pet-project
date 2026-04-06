import { expect } from '@playwright/test';

export class InventoryPage {
    constructor(page) {
        this.page = page;

        // ===== Locators =====
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addBikeLightButton = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.addBoltTShirtButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.addFleeceJacketButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.addOnesieButton = page.locator('#add-to-cart-sauce-labs-onesie');
        this.addRedTShirtButton = page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)');
        this.itemPrice = page.locator('inventory_item_price');
        this.itemName = page.locator('inventory_item_name');
        this.allItemsList = page.locator('inventory_list');
        this.addItemToCartButton = page.locator('.btn_primary.btn_inventory');
    }

     // ===== Navigation =====
  async goto() {
    await this.page.goto('/inventory.html');
  }
}