const { expect } = require("chai");
const moment = require("moment");

class TermsAndConditionsPage {
// Locators
termsOfServiceHeaderLocator = '#_TERMS_OF_SERVICE';
lastRevisedDateLocator = 'span*=Last revised';
privacyStatementLocator = '//a[text()="Privacy Statement "]';
privacyStatementSummerHeaderLocator = '//h2[text()="Privacy Statement Summary"]';
lastUpdatedDateLocator = 'p*=Last Updated';


// Functions

async termsOfServiceHeaderDisplayed() {
    const termsHeader = await $(this.termsOfServiceHeaderLocator).isDisplayed();
    expect(termsHeader, 'Terms of service Header is not displayed').to.be.true;
}

async lastRevisedDate() {
    const dateText = await $(this.lastRevisedDateLocator).getText();
    const updatedText = dateText.substr(13).trim()
    console.log(`Date after substring method -> ${updatedText}`);
    return updatedText

    
}

async clickPrivacyStatment() {
    await $(this.privacyStatementLocator).click();
    await $(this.privacyStatementSummerHeaderLocator).waitForDisplayed()
}

async lastUpdatedDate() {
    const lastUpdatedText = await $(this.lastUpdatedDateLocator).getText();
    const updatedLastUpdatedText = lastUpdatedText.substr(13).trim()
    console.log(`Updated Date on privacy page -> ${updatedLastUpdatedText}`);
    return updatedLastUpdatedText
}



}
module.exports = TermsAndConditionsPage;