import { Locator, Page } from '@playwright/test';
import { ENV } from '../../config/envarioment';

export default class RoomPage {
  private readonly page: Page;
  private readonly roomList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomList = this.page.getByTestId('roomlisting');
  }

  async goTo() {
    await this.page.goto(`/${ENV.ROLE}/rooms`);
  }

  async findRoomByNumber(index: number) {
    const row = this.roomList.nth(index);
    const room = {
      type: row.locator('p[id^="type"]'),
      price: row.locator('p[id^="roomPrice"]'),
      details: row.locator('p[id^="details"]'),
    };

    return room;
  }
}
