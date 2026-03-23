import { Page } from '@playwright/test';

export function awaitRequest(
  page: Page,
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
) {
  return page.waitForResponse((response) => {
    return (
      response.url().includes(url) &&
      response.status() === 200 &&
      response.request().method() === method
    );
  });
}
