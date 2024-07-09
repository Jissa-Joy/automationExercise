
RECORDED SCRIPT

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('testaccessibility2024@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await expect(page.getByText('Logged in as jisa')).toBeVisible();
  await expect(page.getByRole('link', { name: ' Delete Account' })).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('testaccessibility2024@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test1`121212');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your email or password is')).toBeVisible();
  await page.getByPlaceholder('Password').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Password').fill('test123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://www.automationexercise.com/delete_account');
  await expect(page.locator('b')).toContainText('Account Deleted!');
  https://www.automationexercise.com/
  await expect(page.locator('b')).toContainText('Account Deleted!');
});