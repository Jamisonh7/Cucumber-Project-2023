const { expect } = require("chai");

class Homepage {

// Locators of webElements on Homepage
loginEmailFieldLocator = ('#email');
loginPasswordFieldLocator = ('#pass');
loginBtnLocator = ('button[data-testid=royal_login_button]'); // //button[@data-testid="royal_login_button"]
createAccountBtn = ('a[data-testid=open-registration-form-button]'); //a[@data-testid="open-registration-form-button"]





// Functions to interact with webElements on Homepage
async loginEmailFieldEnabled() {
    await $(this.loginEmailFieldLocator).isEnabled();
}

async loginPasswordFieldEnabled() {
    await $(this.loginPasswordFieldLocator).isEnabled();
}

async loginBtnEnabled() {
    const isLoginBtnEnabled = await $(this.loginBtnLocator).isEnabled();
    expect(isLoginBtnEnabled, 'Login Button is NOT enabled').to.be.true;
}

async clickCreateAccountBtn() {
    await $(this.createAccountBtn).click();
}




}
module.exports = Homepage;
