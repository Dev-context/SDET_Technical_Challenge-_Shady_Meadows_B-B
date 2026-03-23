import { test as base } from '@playwright/test';
import LoginPage from '../pages/loginPage/LoginPage';
import { ENV } from '../config/envarioment';

type MyFixtures = {
  authenticatedPage: LoginPage;
};

export const baseTest = base.extend<MyFixtures>({
  authenticatedPage: async ({ browser }, use) => {
    const broserContext = await browser.newContext();
    const page = await broserContext.newPage();

    const login = new LoginPage(page);
    await login.goTo();
    await login.makeLogin(ENV.USER_NAME, ENV.PASSWORD);

    use(login);
  },
});
export { expect } from '@playwright/test';
