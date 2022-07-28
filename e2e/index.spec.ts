import { test, expect } from '@playwright/test';

test('homepage has Mayoral in title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Mayoral/);
});
test('Search shows correct number of results', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[placeholder="Buscar"]').first().fill('ECO');
  //TODO:
  await expect(page).toHaveTitle(/Mayoral/);
});
test('Search is case independent', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[placeholder="Buscar"]').first().fill('eco');
  //TODO:
  await expect(page).toHaveTitle(/Mayoral/);
});
