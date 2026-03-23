import { test, expect } from '@playwright/test';
import HomePage from '../pages/publicHomePage/HomePage';
import NavBarPublicHomePage from '../globalElements/NavbarPublicHomePage';
import LoginPage from '../pages/loginPage/LoginPage';
import { ENV } from '../config/envarioment';
import RoomPage from '../pages/room/RoomPage';

let publicHomePage: HomePage;
let navBarPublicHomePage: NavBarPublicHomePage;
let login: LoginPage;
let roomAdminPage: RoomPage;

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    publicHomePage = new HomePage(page);
    navBarPublicHomePage = new NavBarPublicHomePage(page);
    login = new LoginPage(page);
    roomAdminPage = new RoomPage(page);
    await publicHomePage.goTo();
  });

  test(
    'E2E Validate rooms Home page to Admin Page',
    { tag: '@E2E' },
    async () => {
      const rooms = await publicHomePage.avaliableRooms();

      await navBarPublicHomePage.navigateToAdminLink();
      await login.makeLogin(ENV.USER_NAME, ENV.PASSWORD);

      for (let i = 0; i < rooms.length; i++) {
        await test.step(`Validating Room: ${rooms[i].type}`, async () => {
          const adminRooms = roomAdminPage.findRoomByNumber(i);
          await expect((await adminRooms).type).toHaveText(rooms[i].type);
          await expect((await adminRooms).price).toContainText(rooms[i].price);
          await expect((await adminRooms).details).toContainText(
            rooms[i].details,
          );
        });
      }
    },
  );
});
