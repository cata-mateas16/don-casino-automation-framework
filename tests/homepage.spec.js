require('dotenv').config({ path: '.env.production' });

import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjectModels/homePage';

test.describe.configure({ mode: 'serial' });

let page;
let homePage;

test.beforeAll(async ({ browser, isMobile }) => {
  page = await browser.newPage(isMobile);
  homePage = new HomePage(page, isMobile);
  await page.goto('https://don.ro/ro/');
  await page.context().clearCookies();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('user NOT logged in', () => {
  test('verify that casino title is visible and correct based on Casino', async ({ isMobile }) => {
    const expectedTitle = await homePage.checkCasinoTitle();
    await expect(page).toHaveTitle(expectedTitle);
  });
  
})
