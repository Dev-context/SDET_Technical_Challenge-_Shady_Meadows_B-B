import { Locator, Page } from '@playwright/test';

export class Loading {
  private readonly page: Page;
  private readonly loading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loading = this.page.getByRole('status');
  }

  public get loadingElement(): Locator {
    return this.loading;
  }
}
