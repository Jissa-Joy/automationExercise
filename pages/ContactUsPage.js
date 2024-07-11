const {expect} = require('@playwright/test');
exports.ContactUsPage=
 class ContactUsPage {

constructor(page)
{
    this.page = page;
    this.contactButton = page.locator('.fa.fa-envelope')
    this.getinTouchMessage = page.locator('h2:has-text("Get In Touch")')
    this.contactName = page.locator('input[data-qa="name"]')
    this.contactEmail = page.locator('input[data-qa="email")')
    this.contactSubject  =page.locator('input[name="subject"]')
    this.contactMessage = page.locator('#message')
    this.chooseFile = page.locator('input[type="file"]')
     this.submitButton = page.locator('input[name="submit"]')
     //alert - OK INSIDE ALERT  WRITE HERE

     this.successMessage = page.locator('.status.alert.alert-success')

}
}