//TC2 Login with correct email and password
const { expect, default: test } = require("@playwright/test");
const testdata = require('../testdata.json')
exports.LoginPage =
class LoginPage {


    constructor(page) {
        this.page = page;
        this.emailLogin = page.locator('input[data-qa="login-email"]')
        this.loginPassword = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.homeLabel = page.getByRole('link', { name: ' Home' })
        //  this.homeLabel = page.locator('.fa.fa-home')
        this.logintoaccountText = page.getByText("Login to your account");
       this.deletedText = page.getByText("Account Deleted!")
        this.errorMessage = page.locator("//p[normalize-space()='Your email or password is incorrect!']")

    }

    async gotoLoginPage() {
        await this.page.goto('https://www.automationexercise.com/login');

    }

    async Login(email1, pwd) {
        // await this.logintoaccountText.tobeVisible();
        await this.emailLogin.fill(email1);
        await this.loginPassword.fill(pwd);
        await this.loginBtn.click();
    }
    
    async isReady()
 {
  return expect(this.deletedLabel).toBeVisible();
 }
   /* async newAccTextvisible()
    {
     await expect(this.logintoaccountText).toBeVisible();
    }*/
     async verifyErrorMessage(){
        await expect(this.errorMessage).toBeVisible();
    }

}