import { Locator, Page } from "@playwright/test";
import { ENV } from "../../config/envarioment";

export default class Rooms {
  private readonly page: Page;
  private readonly roomList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomList = this.page.getByTestId("roomlisting");
  }

  async goTo() {
    await this.page.goto(`/${ENV.ROLE}/rooms`);
  }

  async getRooms() {
    for (const room of await this.roomList.all()) {
    }
  }
}
