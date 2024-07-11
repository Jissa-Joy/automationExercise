const { expect, default: test } = require("@playwright/test");
const testdata = require('../testdata.json')
const dddata = require('../dropdowndata.json')

exports.SignupPage =
  class SignupPage {

    constructor(page) {
      this.page = page;
      //Login to account locators and label locators

      this.homeLabel = page.locator('.fa.fa-home');
      this.newUserLabel = page.locator("//h2[normalize-space()='New User Signup!']")
      this.emailLogin = page.locator('input[data-qa="login-email"]')
      this.loginPassword = page.locator('input[data-qa="login-password"]');
      this.loginBtn = page.getByRole('button', { name: 'Login' })


      //New user signup locators
      this.signupName = page.locator('input[data-qa="signup-name"][placeholder="Name"]')
      this.signupEmail = page.locator('input[data-qa="signup-email"]')
      this.signupBtn = page.getByRole('button', { name: 'Signup' })
      //this.enterDetailsLabel = page.locator('h2:has-text("Enter Account Information")')
      this.enterDetailsLabel = page.locator('//h2[contains(text(), "Enter Account Information")]')


      this.regPassword = page.locator('#password')
      this.day = page.locator('#days')
      this.month = page.locator('#months')
      this.year = page.locator('#years')
      this.newsLetter = page.locator('#newsletter')
      this.specialOffer = page.locator('#optin')
      this.fname = page.locator('#first_name')
      this.lname = page.locator('#last_name')
      this.address1 = page.locator('#address1')
      this.address2 = page.locator('#address2')
      this.country = page.locator('#country')
      this.state = page.locator('#state')
      this.city = page.locator('#city')
      this.zip = page.locator('#zipcode')
      this.mob = page.locator('#mobile_number')
      this.createAccountBtn = page.getByRole('button', { name: 'Create Account' })
      this.accountCreatedLabel = page.locator('h2[data-qa="account-created"]')
      this.continueBtn = page.getByRole('link', { name: 'Continue' })
      this.deleteBtn = page.getByRole('link', { name: ' Delete Account' })
      this.deletedLabel = page.locator('h2[data-qa="account-deleted"]')
      this.loggedUser = page.locator('.fa.fa-user')
      //xpath
      //p[normalize-space()='Your email or password is incorrect!']

      this.delContinueBtn = page.locator("//a[@class='btn btn-primary']")
    }
   /* async gotoSignUpPage() {
      await this.page.goto('https://www.automationexercise.com/login');
    }*/


    async signup(name, email) {
      // await this.newuserSignUpText.tobeVisible()
      await this.signupName.fill(name);
      await this.signupEmail.fill(email);
      await this.signupBtn.click();
      await this.regPassword.fill(testdata.password);
      // await this.day.fill(testdata.day)
 //await this.month.fill(dddata.)
      //await this.day.selectOption({label:'2'})
      // await this.month.fill(testdata.month[2])
      await this.fname.fill(testdata.fname)
      await this.lname.fill(testdata.lname)
      await this.address1.fill(testdata.address.street)
     //   await this.country.fill(testdata.address.country[3])
      await this.state.fill(testdata.address.state[2])
      await this.city.fill(testdata.address.city[0])
      await this.zip.fill(testdata.address.zip[1])
      await this.mob.fill(testdata.mobile)
      await this.createAccountBtn.click();
      await this.continueBtn.click();
      await this.deleteBtn.click();
      await this.delContinueBtn.click();
    }
    //verify homepage is visible
    async isReady() {
      await expect(this.homeLabel).toBeVisible();
     // return expect(this.homeLabel).toBeVisible();
    }
    //verify newUser signup visible
    async newUser() {
      
      await expect(this.newUserLabel).toBeVisible()
    }

    async enterDetails() {
       await expect(this.enterDetailsLabel).toBeVisible();
   
    }
    /* async accCreated() {
       await expect(this.accountCreatedLabel).toBeVisible();
      //return expect(this.accountCreatedLabel).toBeVisible()
     }*/

    /* async verifyNewuser()
     {
       //await expect(this.newuserSignUpText).toBeVisible();
       return expect(this.newuserSignUpText).toBeVisible();
     }*/
    async verifyLoggeduser() {
      // await expect(this.newuserSignUpText).toBeVisible();
 await expect(this.loggedUser).toBeVisible();
    }

    async isDeleted() {
      await expect(this.deletedLabel).toBeVisible();
      //return expect(this.deletedLabel).toBeVisible();
    }

  }

/* this.title= page.getByLabel('Mrs.')
 this.password = page.getByLabel('Password *')
 this.day = page.locator('#days')
 this.month= page.locator('#months')
 //page.locator('#form form div').filter({ hasText: 'Year 2021 2020 2019 2018 2017' }).nth(2)
    this.year = 

   this.newsletterLabel = page.getByLabel('Sign up for our newsletter!')
   this.specialOfferLable = page.getByLabel('Receive special offers from')
   this.firstName = page.getByLabel('First name *')
   this.lastName = page.getByLabel('Last name *')
   this.address1 =page.getByLabel('Address * (Street address, P.')
   this.address2= page.getByLabel('Address 2')
   this.country = 
   this.state = page.getByLabel('State *')
   this.city= page.getByLabel('City *')
   this.zip=page.locator('#zipcode')
   this.mob = page.getByLabel('Mobile Number *')

}

async gotoSignUpPage()
{
await this.page.goto('https://www.automationexercise.com/login');

}
async signup(uname,emailID)
{

await this.username.fill(uname)
await this.email.fill(emailID)
await this.signupBtn.click();
}
}*/