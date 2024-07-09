const { test, expect, chromium } = require('@playwright/test');
const {SignupPage} = require('../pages/SignupPage')

test.describe('Home page test',() =>
{
    let browser;
    let page;
    let homePage;

    test.beforeAll(async ()=>
        {
        browser = await chromium.launch();
        page = await browser.newPage();
        homePage = new SignupPage(page);

    });

    test.afterAll(async()=> {

        await page.close();
        await browser.close();

    })


test.only('TC1',async({page}) =>
{
const Signup = new SignupPage(page)
await Signup.gotoSignUpPage()
await Signup.signup('jisaj','jissa.joy@kjr.com.au')
});

})