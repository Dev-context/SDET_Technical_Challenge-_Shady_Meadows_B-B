import { Locator, Page } from '@playwright/test';
import { awaitRequest } from '../../helpers/request';

interface RoomData {
  type: string;
  details: string;
  price: string;
}
export default class HomePage {
  private readonly page: Page;
  private readonly roomCards: Locator;
  private readonly contactFormElement: Locator;
  private readonly cardButton: Locator;
  private readonly cardTitle: Locator;
  private readonly cardPrice: Locator;
  private readonly cardDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomCards = this.page.locator('.room-card');
    this.contactFormElement = this.page.locator('#contact form');
    this.cardButton = this.page
      .locator('#rooms')
      .getByRole('link', { name: 'Book now' });
    this.cardTitle = this.page.locator('.card-title');
    this.cardDetails = this.page.locator('.card-text span');
    this.cardPrice = this.page
      .locator('.card-footer')
      .filter({ hasText: /\d+/i });
  }

  async goTo() {
    await this.page.goto('/');
    const req = awaitRequest(this.page, 'api/room', 'GET');
    await req;
  }

  async getRoomCardsButton() {
    await this.cardButton.first().waitFor();
    return this.cardButton.all();
  }

  get contactForm(): Locator {
    return this.contactFormElement;
  }

  async avaliableRooms() {
    const room: RoomData[] = [];

    for (let i = 0; i < (await this.roomCards.count()); i++) {
      const card = this.roomCards.nth(i);
      room.push({
        type: (await card.locator(this.cardTitle).textContent()) as string,
        details: (await card.locator(this.cardDetails).allInnerTexts())
          .join(',')
          .trim(),
        price:
          (await card.locator(this.cardPrice).textContent())?.replace(
            /\D/g,
            '',
          ) || '',
      });
    }
    return room;
  }
}
