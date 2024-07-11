/*const base = require('@playwright/test');
const {SignupPage} = require('../pages/SignupPage')
const {LoginPage} = require('../pages/LoginPage');

exports.test = base.test.extend({
    signupPage: async ({page},use)=>{
        await use(new SignupPage(page));
    },
    loginPage: async ({page},use)=>{
        await use(new LoginPage(page));
    },
})
exports.expect = base.expect;*/


import { test as baseTest } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage'
import { LoginPage } from '../pages/LoginPage'

export const test = baseTest.extend<{ signupPage: SignupPage, loginpage: LoginPage }>({
signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});