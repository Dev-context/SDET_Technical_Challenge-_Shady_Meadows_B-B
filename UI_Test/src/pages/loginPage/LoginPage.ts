import { Locator, Page } from '@playwright/test';
import { waitElementDesapear } from '../../helpers/Loading';
import { Loading } from '../../globalElements/loading';
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
    await this.page.goto(`/${ENV.ROLE}`);
  }

  async makeLogin(userName: string, password: string) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    await waitElementDesapear(this.Loading.loadingElement);
  }
}
