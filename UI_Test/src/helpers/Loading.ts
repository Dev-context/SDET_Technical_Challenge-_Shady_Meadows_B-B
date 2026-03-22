import { Locator } from '@playwright/test';

export async function waitElementDesapear(element: Locator, timeout = 3000) {
  await element.waitFor({ state: 'hidden', timeout });
}
