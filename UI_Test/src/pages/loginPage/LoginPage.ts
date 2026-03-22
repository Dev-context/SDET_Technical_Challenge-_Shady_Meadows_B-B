import { Locator, Page } from '@playwright/test';
import { waitElementDesapear } from '../../helpers/Loading';
import { Loading } from '../../globalElements/Loading';
import { ENV } from '../../config/envarioment';

export default class LoginPage {
  private readonly page: Page;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  private readonly Loading: Loading;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByPlaceholder('Enter username');
    this.password = this.page.getByPlaceholder('Password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.Loading = new Loading(this.page);
  }

  async goTo() {
    const targetUrl = ENV.ROLE ? `/${ENV.ROLE}` : '/admin';
    await this.page.goto(targetUrl);
    await this.page.goto(targetUrl, { waitUntil: 'networkidle' });
  }

  async makeLogin(userName: string, password: string) {
    await this.userName.waitFor({ state: 'visible', timeout: 15000 });
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    await waitElementDesapear(this.Loading.loadingElement);
  }
}
