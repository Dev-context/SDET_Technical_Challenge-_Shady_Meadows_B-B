import { Locator, Page } from '@playwright/test';

export default class NavBarAdminPage {
  private readonly page: Page;
  private readonly logoutLink: Locator;
  private readonly frontPageLink: Locator;
  private readonly messagesLink: Locator;
  private readonly navbarToggler: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = this.page.getByRole('button', { name: 'Logout' });
    this.frontPageLink = this.page.getByRole('link', { name: 'Front Page' });
    this.messagesLink = this.page.getByRole('link', { name: 'Messages ' });
    this.navbarToggler = this.page.locator('.navbar-toggler');
  }

  async navigateToRoomsLink() {
    await this.logoutLink.click();
  }
  async navigateToBookingLink() {
    await this.frontPageLink.click();
  }

  async navigateToAmenitiesLink() {
    await this.messagesLink.click();
  }

  async navigateToLocationLink() {
    await this.navbarToggler.click();
  }

  async clickMobileMenuIfVisible() {
    if (await this.navbarToggler.isVisible()) {
      await this.navbarToggler.click();
    }
  }

  get logoutButton() {
    return this.logoutLink;
  }
}
