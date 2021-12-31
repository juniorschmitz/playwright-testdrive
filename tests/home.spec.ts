import { test, expect } from '@playwright/test';

test('Loading Parabank Home Page', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveTitle(/ParaBank/);
});