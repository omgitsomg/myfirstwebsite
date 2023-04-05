// @ts-check
const { test, expect } = require('@playwright/test');
// All tests regarding the homepage

// Note: the tests will continue to run code after it reaches an expect statement

// Before each test
// Go to the website's url
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});


// Test: the website has the title of "Weather Forecasting Tool"
test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Weather Forecasting Tool/);
});


// After submitting the zip code through the Enter Keypress, the simplegrid is visible
test("SimpleGrid Appears Enter", async ({ page }) => {
  const zipcode = "23220"
  await page.getByPlaceholder('Enter a Zipcode').click();
  await page.getByPlaceholder('Enter a Zipcode').fill(zipcode);
  await page.getByPlaceholder('Enter a Zipcode').press('Enter');
  await expect(page.locator('.css-keo53c')).toBeVisible;
})


// Test: After submitting the zip code through the submit button, the simplegrid is visible
test("SimpleGrid appears Button", async ({ page }) => {
  const zipcode = "23220"
  await page.getByPlaceholder('Enter a Zipcode').click();
  await page.getByPlaceholder('Enter a Zipcode').fill(zipcode);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('.css-keo53c')).toBeVisible; // The simplegrid should be visisble
});


// Test: Check if the zip code in the text is the same as the one inputted in the input
test("Text Zip Code", async ({ page }) => {
  const zipcode = "23220"
  await page.getByPlaceholder('Enter a Zipcode').click();
  await page.getByPlaceholder('Enter a Zipcode').fill(zipcode);
  await page.getByPlaceholder("Enter a Zipcode").press("Enter");
  await expect(page.getByRole('heading', { name: 'Zipcode: 23220' })).toHaveText("Zipcode: " + zipcode);

  // await page.goto('http://localhost:3000/');
  // await page.getByPlaceholder('Enter a Zipcode').click();
  // await page.getByPlaceholder('Enter a Zipcode').fill('23220');
  // await page.getByPlaceholder('Enter a Zipcode').press('Enter');
  // await page.getByRole('heading', { name: 'Zipcode: 23220' }).click();
})


// Test: Clicking the about 
test("about page", async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL("http://localhost:3000/about")
})


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
