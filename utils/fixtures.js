const base = require('@playwright/test');
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
exports.expect = base.expect;