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
  // eslint-disable-next-line no-unused-vars
  test('verify that casino title is visible and correct based on Casino', async ({ isMobile }) => {
    const expectedTitle = await homePage.checkCasinoTitle();
    await expect(page).toHaveTitle(expectedTitle);
  });

  // eslint-disable-next-line no-unused-vars
  test('verify that change language button is displayed', async ({isMobile}) => {
    await expect(homePage.switchLanguageModal).toBeVisible();
  });
  
  // eslint-disable-next-line no-unused-vars
  test('verify that chat button is displayed and its elements are visible', async ({isMobile}) => {
    await expect(homePage.chatModal).toBeVisible();

    await homePage.openChatModal();

    await expect(homePage.chatModalTitle).toBeVisible;
    await expect(homePage.welcomeMessage).toBeVisible;
    await expect(homePage.nameLabel).toBeVisible;
    await expect(homePage.emailLabel).toBeVisible;
    await expect(homePage.messageLabel).toBeVisible;
    await expect(homePage.startConversationButton).toBeVisible;
    await expect(homePage.nameTextBox).toBeVisible;
    await expect(homePage.emailTextBox).toBeVisible;
    await expect(homePage.messageTextBox).toBeVisible;
    await expect(homePage.closeChatModuleButton).toBeVisible;
  });

})
