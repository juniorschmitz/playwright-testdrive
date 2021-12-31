import { test, expect } from '@playwright/test';

test('Loading Parabank Home Page', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'the_user');
  await page.fill('input[name="password"]', 'the_password');
  await page.click('text=Log In');

  await expect(page.locator('text=Welcome')).toBeVisible();
});