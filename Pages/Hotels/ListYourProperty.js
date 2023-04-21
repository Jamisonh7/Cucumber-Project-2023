const { expect } = require("chai");
const moment = require("moment");

class ListYourPropertyPage {

// Locators
whatWouldYouLikeToListLocator = 'p=What would you like to list?';
lodgingLocator = '#classification_lodging';
privateResidenceLocator = '#classification_privateResidence';
step1of3Locator = 'div=Step 1 of 3';
seeHowMuchHeaderLocator = 'h1=See how much you could earn!';
increaseBedroomLocator = '//button[@aria-label="Increase bedrooms"]';
increaseBathroomLocator = '//button[@aria-label="Increase bathrooms"]';
nextBtnLocator = '#propertyInfoNextBtn';
step2of3Locator = '//div[text()="Step 2 of 3"]';
propertyLocationHeader = 'h1=Where is your property located?';
propertyAddressLocationLocator = '#locationTypeAhead';
addressSuggestionLocator = '//ul[@class="typeahead-prediction-list fds-field-select"]';
mapLocator = '//div[@aria-label="Map"]';
pinLocator = '//div[contains(@style, "cursor: pointer; touch")]';
movePinTextLocator = '//span[text()="Move the pin to adjust the location of your property."]';







// Functions
async listingHeaderDisplayed() {
    await $(this.whatWouldYouLikeToListLocator).waitForDisplayed();
    return await $(this.whatWouldYouLikeToListLocator).isDisplayed();
}

async isLodgingDisplayed() {
    return await $(this.lodgingLocator).isDisplayed();
}

async isPrivateResidenceDisplayed() {
    return await $(this.privateResidenceLocator).isDisplayed();
}

async clickPrivateResidence() {
    await $(this.privateResidenceLocator).click();
}

async isStep1of3Displayed() {
    await $(this.step1of3Locator).waitForDisplayed()
    return await $(this.step1of3Locator).isDisplayed()
}

async isSeeHowMuchHeaderDisplayed() {
    return await $(this.seeHowMuchHeaderLocator).isDisplayed()
}

async clickIncreaseBedroom() {
    await $(this.increaseBedroomLocator).click();
}

async clickIncreaseBathroom() {
    await $(this.increaseBathroomLocator).click();
}

async clickNext() {
    await $(this.nextBtnLocator).click();
}

async isStep2of3Displayed() {
    await $(this.step2of3Locator).waitForDisplayed();
    return await $(this.step2of3Locator).isDisplayed();
}

async isPropertyLocationHeaderDisplayed() {
    return await $(this.propertyLocationHeader).isDisplayed();
}

async enterAddress(address) {
    await $(this.propertyAddressLocationLocator).setValue(address);
}

async selectSuggestion() {
    await $(this.addressSuggestionLocator).waitForDisplayed()
    const allSuggestions = await $$(this.addressSuggestionLocator);

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getText();
            if(text.includes('New York')) {
                await suggestion.click();
                break;
            }
        }
}

async isMapDisplayed() {
    await $(this.mapLocator).scrollIntoView(false)
    await $(this.mapLocator).waitForDisplayed();
    return await $(this.mapLocator).isDisplayed();
}

async isPinDisplayed() {
    return await $(this.pinLocator).isDisplayed();
}

async isMovePinHeaderDisplayed() {
    await $(this.movePinTextLocator).scrollIntoView(false);
    return await $(this.movePinTextLocator).isDisplayed();
}

}
module.exports = ListYourPropertyPage;