import { Locator, Page } from '@playwright/test';

export default class NavBarPublicHomePage {
  private readonly page: Page;
  private readonly roomsLink: Locator;
  private readonly bookLink: Locator;
  private readonly amenitiesLink: Locator;
  private readonly locationLink: Locator;
  private readonly contactLink: Locator;
  private readonly adminLink: Locator;
  private readonly navbarToggler: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomsLink = this.page
      .locator('.nav-link')
      .getByRole('link', { name: 'Rooms' })
      .first();
    this.bookLink = this.page.getByRole('link', { name: 'Booking' }).first();
    this.amenitiesLink = this.page
      .getByRole('link', { name: 'Amenities' })
      .first();
    this.locationLink = this.page
      .getByRole('link', { name: 'Location' })
      .first();
    this.contactLink = this.page
      .locator('.nav-link')
      .getByRole('link', { name: 'Contact' })
      .first();

    this.adminLink = this.page.getByRole('link', { name: 'Admin' }).first();
    this.navbarToggler = this.page
      .getByRole('button')
      .filter({ has: this.page.locator('.navbar-toggler-icon') })
      .first();
  }

  async navigateToRoomsLink() {
    await this.roomsLink.click();
  }
  async navigateToBookingLink() {
    await this.bookLink.click();
  }

  async navigateToAmenitiesLink() {
    await this.amenitiesLink.click();
  }

  async navigateToLocationLink() {
    await this.locationLink.click();
  }

  async navigateToContactLink() {
    await this.contactLink.click();
  }

  async navigateToAdminLink() {
    await this.adminLink.click();
  }
}
