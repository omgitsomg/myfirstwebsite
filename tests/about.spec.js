const { test, expect } = require('@playwright/test');
// All tests regarding the about page


// Before each test
// Go to the website's url
// Click on the about link in the navbar
test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
});


// Test: Clicking on the about page will have the bio appear
test("about page", async ({ page }) => {
    await page.locator('div').filter({ hasText: 'Hey everyone, I\'m Kevin Ly.I am a senior at VCU majoring in Computer Science wit' }).nth(2).click();
    await expect(page.locator('div').filter({ hasText: 'Hey everyone, I\'m Kevin Ly.I am a senior at VCU majoring in Computer Science wit' })).toBeVisible;
})

// Test: The link redirects the user to Kevin Ly's LinkedIn page
test("linkedin hyperlink", async ({ page }) => {
    await page.getByRole('link', { name: 'LinkedIn' }).first().click();
    await expect(page).toHaveURL(new RegExp("https://www.linkedin.com/in/kevin-ly-7446941a2/")) // RegExp because linkedin requires a login which causes the URL to be different
})

// Test: The link redirects the user to Kevin Ly's github page
test("github hyperlink", async ({ page }) => {
    await page.getByRole('link', { name: 'Github' }).first().click();
    await expect(page).toHaveURL("https://github.com/omgitsomg") // No RegExp because github doesn't require a login so the URL should be the same
})