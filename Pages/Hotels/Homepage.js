const { expect } = require("chai");
const moment = require("moment");

class HotelsHomePage {

// Locators
signInBtnLocator = '//button[text()="Sign in"]';
signInBtnOnSignInLocator = 'a[data-stid=link-header-account-signin]'
save50PercentHeaderLocator = 'h2*=15%';
signUpBtnLocator = '//a[@data-stid="link-header-account-signup"]';
feedbackBtnLocator = '//a[text()="Feedback"]';
travelersLocator = '//button[@data-stid="open-room-picker"]';
addAdultsLocator = '//*[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
addChildLocator = '//*[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
child1AgeLocator = '#age-traveler_selector_children_age_selector-0-0';
child2AgeLocator = '#age-traveler_selector_children_age_selector-0-1';
child3AgeLocator = '#age-traveler_selector_children_age_selector-0-2';
travelersDoneBtnLocator = '#traveler_selector_done_button';
totalChildDropdownsLocator = 'select[name*=child-traveler_selector_children_age_selector-0-]';
minusChildLocator = '//*[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
signInOrCreateAccountHeaderLocator = 'h1=Sign in or create an account';
loginEmailLocator = '#loginFormEmailInput';
loginContinueBtnLocator = '#loginFormSubmitButton';
signInErrorLocator = '#loginFormEmailInput-error';
languageLocator = 'button[data-stid=button-type-picker-trigger]';
languageSelectorLocator = '#language-selector';
displaySettingsLocator = 'h2[class=uitk-toolbar-title-content]';
displaySettingsEspanolLocator = 'h2=Configuración de país y moneda'
saveBtnLocator = 'button=Save';
saveBtnEspanolLocator = 'button=Guardar';
espanolOnHomepageDisplayed = 'div=Español';
englishOnHomepageDisplayed = 'div=English';
listYourPropertyLocator = '#listYourProperty';



// Functions
async clickSignInBtn() {
    await $(this.signInBtnLocator).click();
}

async clickSignInOnSignInBtn() {
    await $(this.save50PercentHeaderLocator).waitForDisplayed()
    await $(this.signInBtnOnSignInLocator).click()
}

async clickSignUpBtn() {
    await $(this.signUpBtnLocator).click();
}

async clickFeedbackBtn() {
    await $(this.feedbackBtnLocator).click();
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://pay.https://www.directword.io/survey/domain=www.hotels.com/locale=en_US?metadata=%7B%22url%22%3A%22https%3A%2F%2Fwww.hotels.com%2F%3Fpos%3DHCOM_US%26locale%3Den_US%22%2C%20%22duaid%22%3A%20%22d88d0c4d-cc55-4c14-a283-c3915a19b195%22%7D.com/') === 0) {
            break;
        }
    }
}

async clickTravelers() {
    await $(this.travelersLocator).click();
}

async addAdultTravelers() {
    await $(this.addAdultsLocator).click();
}

async addChildTravelers() {
    await $(this.addChildLocator).click();
}

async selectChild1Age(age) {
    await $(this.child1AgeLocator).selectByVisibleText(age);
}

async selectChild2Age(age) {
    await $(this.child2AgeLocator).selectByVisibleText(age);
}

async selectChild3Age(age) {
    await $(this.child3AgeLocator).selectByVisibleText(age);
}

async clickTravelersDone() {
    await $(this.travelersDoneBtnLocator).click();
}

async totalTravelers() {
    await $(this.travelersLocator).waitForDisplayed()
    return await $(this.travelersLocator).getText();
}
async totalChildrenDropdownCount() {
    return await $$(this.totalChildDropdownsLocator);
}

async addChildTravelersEnabled() {
    return await $(this.addChildLocator).isEnabled();
}

async minusChildTravelersEnabled() {
    return await $(this.minusChildLocator).isEnabled();
}

async subtractChildTraveler() {
    await $(this.minusChildLocator).click()
}

async inputLoginEmail(email) {
    await $(this.signInOrCreateAccountHeaderLocator).waitForDisplayed();
    await $(this.loginEmailLocator).setValue(email)
}

async clickLoginContinueBtn() {
    await $(this.loginContinueBtnLocator).click();
}

async loginErrorDisplayed() {
    await $(this.signInErrorLocator).waitForDisplayed();
    const loginError = await $(this.signInErrorLocator).isDisplayed()
    expect(loginError, 'Login error not displayed').to.be.true;
}

async clickLanguageIcon() {
    await $(this.languageLocator).click();
}

async selectEspanolLanguage(espLanguage) {
    await $(this.displaySettingsLocator).waitForDisplayed();
    await $(this.languageSelectorLocator).selectByVisibleText(espLanguage);
}

async clickSaveLanguage() {
    await $(this.saveBtnLocator).click();
}

async espanolDisplayed() {
    await $(this.espanolOnHomepageDisplayed).waitForDisplayed();
    return await $(this.espanolOnHomepageDisplayed).isDisplayed();
}

async selectEnglishLanguage(engLanguage) {
    await $(this.displaySettingsEspanolLocator).waitForDisplayed();
    await $(this.languageSelectorLocator).selectByVisibleText(engLanguage);
}

async clickSaveLanguageEsp() {
    await $(this.saveBtnEspanolLocator).click()
}

async englishDisplayed() {
    await $(this.englishOnHomepageDisplayed).waitForDisplayed();
    return await $(this.englishOnHomepageDisplayed).isDisplayed();
}

async clickListYourProperty() {
    await $(this.listYourPropertyLocator).click()
    const allHotelsHandles = await browser.getWindowHandles();
    for (const handle of allHotelsHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=HCOM_US-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=300000001&tpid=3001&eapid=1&langId=1033') === 0) {
            break;
        }
    }
}


}
module.exports = HotelsHomePage;