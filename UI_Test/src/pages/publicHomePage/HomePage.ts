import { Locator, Page } from '@playwright/test';

export default class HomePage {
  private readonly page: Page;
  private readonly roomCards: Locator;
  private readonly contactForm: Locator;
  private readonly cardButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomCards = this.page.locator('.room-card');
    this.contactForm = this.page.locator('#contact form');
    this.cardButton = this.page
      .locator('#rooms')
      .getByRole('link', { name: 'Book now' });
  }

  async goTo() {
    await this.page.goto('');
  }

  async getRoomCardsButton() {
    const request = this.page.waitForResponse((response) => {
      return (
        response.url().includes('api/room') &&
        response.status() === 200 &&
        response.request().method() === 'GET'
      );
    });

    await request;

    await this.cardButton.first().waitFor();
    return this.cardButton.all();
  }

  get getContactForm(): Locator {
    return this.contactForm;
  }
}
