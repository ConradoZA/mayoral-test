import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('La página carga', () => {
  test('y tiene como título Mayoral', async ({ page }) => {
    await expect(page).toHaveTitle('Mayoral');
  });
  test('y muestra los 10 artículos existentes', async ({ page }) => {
    await expect([page, '.cards']).toHaveCount(10);
  });
});

test.describe('Sección de búsqueda', () => {
  test('muestra los resultados adecuados', async ({ page }) => {
    await page.locator('[placeholder="Buscar"]').first().fill('ECO');
    //Necesario porque "fill" no desencadena el evento "key up"
    await page.locator('[placeholder="Buscar"]').first().press('F');
    await expect(page.$$('.cards')).toHaveCount(7);
  });
  test('es independiente de mayúsculas', async ({ page }) => {
    await page.locator('[placeholder="Buscar"]').first().fill('eco');
    //Necesario porque "fill" no desencadena el evento "key up"
    await page.locator('[placeholder="Buscar"]').first().press('F');
    await expect([page, '.cards']).toHaveCount(7);
  });
});

test.describe('Botones - y +', () => {
  test('al inicio se muestra la cantidad mínima por fila', async ({ page }) => {
    await expect(page.$('#less')).toBeDisabled();
    await expect(page.$('#more')).toBeEnabled();
  });
  test('al hacer click en +, se vuelve disponible -', async ({ page }) => {
    await page.locator('#more').first().click();
    await expect(page.$('#less')).toBeEnabled();
    await expect(page.$('#more')).toBeDisabled();
  });
});
