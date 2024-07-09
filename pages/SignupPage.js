const { expect } = require("@playwright/test");

exports.SignupPage =
class SignupPage {

    constructor(page) {
        this.page = page;
        //Login to account locators
        this.emailLogin = page.locator('input[data-qa="login-email"]')
        this.loginPassword = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.newuserSignUpText = page.getByText("New User Signup!");
        
        //New user signup locators
        this.signupName = page.locator('input[data-qa="signup-name"][placeholder="Name"]')
         this.signupEmail = page.locator('input[data-qa="signup-email"]')
       
        //this.email = page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]')    this works too
        this.signupBtn = page.getByRole('button', { name: 'Signup' })
        this.logintoaccountText = page.getByText("Login to your account")
    }


    async gotoSignUpPage() {
        await this.page.goto('https://www.automationexercise.com/login');
        }
   
      
    async signup(name,email){
   // await this.newuserSignUpText.tobeVisible()
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupBtn.click();
 }

 async Login(email1,pwd){
   // await this.logintoaccountText.tobeVisible();
    await this.emailLogin.fill(email1);
    await this.loginPassword.fill(pwd);
    await this.loginBtn.click();
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