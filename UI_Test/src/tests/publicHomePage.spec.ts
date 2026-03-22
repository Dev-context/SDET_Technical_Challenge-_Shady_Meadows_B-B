import { test, expect } from "@playwright/test";
import HomePage from "../pages/publicHomePage/HomePage";
let publicHomePage: HomePage;

test.describe("Public Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    publicHomePage = new HomePage(page);
    await publicHomePage.goTo();
  });

  test("HomePage Test", { tag: "@Sanity" }, async () => {
    const cardsButtons = await publicHomePage.getRoomCardsButton();

    for (const cardButton of cardsButtons) {
      await expect(cardButton).toBeVisible();
    }
    await expect(publicHomePage.getContactForm).toBeVisible();
  });
});
