import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginPage/LoginPage";

import { ENV } from "../config/envarioment";

export const baseTest = base.extend<{ page: LoginPage }>({
  page: async ({ browser }, use) => {
    const broserContext = await browser.newContext();
    const page = await broserContext.newPage();

    const login = new LoginPage(page);
    await login.makeLogin(ENV.USER_NAME, ENV.PASSWORD);

    use(page);
  },
});
