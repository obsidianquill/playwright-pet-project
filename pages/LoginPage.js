import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        // ===== Locators =====
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container.error > h3');
    }

     // ===== Navigation =====
  async goto() {
    await this.page.goto('/');
  }
}

