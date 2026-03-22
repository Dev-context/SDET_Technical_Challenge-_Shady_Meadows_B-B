import { Locator, Page } from "@playwright/test";

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
    this.roomsLink = this.page.getByRole("link", { name: "Rooms" });
    this.bookLink = this.page.getByRole("link", { name: "Booking" });
    this.amenitiesLink = this.page.getByRole("link", { name: "Amenities" });
    this.locationLink = this.page.getByRole("link", { name: "Location" });
    this.contactLink = this.page.getByRole("link", { name: "Contact" });

    this.adminLink = this.page.getByRole("link", { name: "Contact" });
    this.navbarToggler = this.page
      .getByRole("button")
      .filter({ has: this.page.locator(".navbar-toggler-icon") });
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
