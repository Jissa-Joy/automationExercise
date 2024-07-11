import { expect } from '@playwright/test';
//import { test } from '../utils/fixtures.js'
const {SignupPage} = require('../pages/SignupPage')

const testdata = require('../testdata.json');  
const { LoginPage } = require('../pages/LoginPage');
//const { SignupPage } = require('../pages/SignupPage.js');

//import testdata from '../testdata.json' --- latest format

/*test.describe('Home page test',() =>
{
    let browser;
    let page;
    let homePage;

    test.beforeAll(async ()=>
        {
        browser = await chromium.launch();
        page = await browser.newPage();
        homePage = new SignupPage(page);

    });*/
   test.beforeEach(async ({page}) =>            
    {
        await page.goto('https://automationexercise.com/login')
    })

      /*  test.beforeEach(async ({ signupPage, loginpage }) => {
            await signupPage.gotoSignUpPage();
            await loginpage.Login();
          });*/


    test.afterAll(async()=> {

        await page.close();
        await browser.close();

    })


test('TC1',async({page}) =>
{
const Signup = new SignupPage(page)
//await Signup.gotoSignUpPage();
await Signup.isReady();
await Signup.newUser();
await Signup.signup(testdata.name,testdata.email[1]);
//await page.waitForTimeout(3000);
//await Signup.enterDetails();
//await Signup.accCreated();
//await Signup.isDeleted();  -maybe put wait



});

test.only('LoginTest TC2',async({page}) =>
{
  const Loginuser = new LoginPage(page)
  //await Loginuser.gotoLoginPage();
  await Loginuser.Login(testdata.email[1],testdata.password)
  //console.log(testdata.password)
 // await Loginuser.newAccTextvisible();
 await Loginuser.verifyErrorMessage()
})


})