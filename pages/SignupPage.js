exports.SignupPage =
class SignupPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Name')
        //this.email= page.getByPlaceholder('Email Address').filter({hasText: 'signup-email'})
        this.email = page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]')
        this.signupBtn = page.getByRole('button', { name: 'Signup' })


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