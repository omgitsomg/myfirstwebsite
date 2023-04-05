// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Weather Forecasting Tool/);
});

test("Testing test Generator", async ({ page }) => {
  await page.getByPlaceholder('Enter a Zipcode').click();
  await page.getByPlaceholder('Enter a Zipcode').fill('23220');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('.css-keo53c')).toBeVisible;
  // await page.locator('.css-keo53c').click();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
