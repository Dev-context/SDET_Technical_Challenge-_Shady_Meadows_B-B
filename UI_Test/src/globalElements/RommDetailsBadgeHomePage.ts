import { Locator, Page } from '@playwright/test';

export class Loading {
  private readonly page: Page;
  private readonly tvBadge: Locator;
  private readonly radioBadge: Locator;
  private readonly wifiBadge: Locator;
  private readonly safeBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tvBadge = this.page.getByText('TV', { exact: true });
    this.radioBadge = this.page.getByText('Radio', { exact: true });
    this.wifiBadge = this.page.getByText('WiFi', { exact: true });
    this.safeBadge = this.page.getByText('Safe', { exact: true });
  }

  get tv(): Locator {
    return this.tvBadge;
  }

  get radio(): Locator {
    return this.radioBadge;
  }

  get wifi(): Locator {
    return this.wifiBadge;
  }

  get safe(): Locator {
    return this.safeBadge;
  }
}
