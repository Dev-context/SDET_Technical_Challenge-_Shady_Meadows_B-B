import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage/LoginPage";
import { ENV } from "../config/envarioment";

let login: LoginPage;

test.describe("Login Test suite", () => {
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goTo();
  });
  test("User Admin LoggedIn with success", async ({ page }) => {
    await login.makeLogin(ENV.USER_NAME, ENV.PASSWORD);
    expect(page.url()).toContain("Dashboard/Inboxes");
  });
});
