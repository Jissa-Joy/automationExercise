
/*RECORDED SCRIPT*/

import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify("./testdata.json"))

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  //page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]')  //input[@placeholder='Name']
  //await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();//*[@id="form"]/div/div/div[3]/div/form/input[2]
  await page.getByPlaceholder('Name').fill(testdata.name)
  await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('testaccessibility2024@gmail.com')
  await page.getByRole('button', { name: 'Signup' }).click()

  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  //await page.getByRole('textbox', {name:password}).fill('test123')
  await page.locator('//*[@id="password"]').fill(testdata.password)
 
 // await expect(page.getByText('Logged in as jisa')).toBeVisible();
await page.locator('#days').selectOption({label:'2'})
await page.locator('#months').selectOption({value:'8'})
await page.locator('#years').selectOption({label:'1984'})
await page.locator('#newsletter').check();
await page.locator('#optin').check()
await page.locator('#first_name').fill('joy')
await page.locator('#last_name').fill('j')
 await page.locator('#address1').fill('collins street')
 await page.locator('#address2').fill('docklands')
 await page.locator('#country').selectOption({label:"Australia"})
 await page.locator('#state').fill('victoria')
 await page.locator('#city').fill('melb')
 await page.locator('#zipcode').fill('3000')
 await page.locator('#mobile_number').fill('0400000000')
 await page.getByRole('button',{name:'Create Account'}).click();
 await expect(page.getByText('Account Created!')).toBeVisible();
 
  await page.getByRole('link', { name: 'Continue' }).click();
  //await page.frameLocator('iframe[name="aswift_1"]').getByLabel('Close ad').click();
  await expect(page.getByText('Logged in as jj')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();





});