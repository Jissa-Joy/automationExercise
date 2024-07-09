exports.SignupPage =
class SignupPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Name')
        //this.email= page.getByPlaceholder('Email Address').filter({hasText: 'signup-email'})
        this.email = page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]')
        this.signupBtn = page.getByRole('button', { name: 'Signup' })
        //
        this.title= page.getByLabel('Mrs.')
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
}