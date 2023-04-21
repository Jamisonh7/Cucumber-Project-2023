const { Given, When, Then } = require('@wdio/cucumber-framework');
const Homepage = require('../../Pages/Hotels/Homepage');
const SignUpPage = require('../../Pages/Hotels/SignUpPage');
const TermsAndConditionsPage = require('../../Pages/Hotels/TermsAndConditionsPage');
const { expect } = require("chai");
const { and } = require('wdio-wait-for');
const moment = require("moment");

const homepage = new Homepage();
const signUpPage = new SignUpPage();
const termsConditions = new TermsAndConditionsPage();

Given(/^I am on hotels homepage$/, async function () {
    await browser.url('https://www.hotels.com/')
    await browser.pause(3000);
});

Then(/^I click on SignIn link$/, async function () {
    await homepage.clickSignInBtn();
    await browser.pause(2000);
});

Then(/^I click on SignUp link$/, async function () {
    await homepage.clickSignUpBtn();
    await browser.pause(2000);
})

When(/^I enter email address as "(.+)"$/, async function (email) {
    await signUpPage.enterSignUpEmail(email);
    await browser.pause(1000);
})

Then(/^I verify that "Enter a valid email" error is displayed$/, async function () {
    await signUpPage.emailErrorDisplayed();
})

When(/^I enter first name as "(.+)"$/, async function (fName) {
    await signUpPage.enterSignUpFName(fName);
    await browser.pause(1000);
})

Then(/^I verify that "First name cannot contain special characters" error is displayed$/, async function () {
    await signUpPage.fNameErrorDisplayed();
})

When(/^I enter last name as "(.+)"$/, async function (lName) {
    await signUpPage.enterSignUpLName(lName);
    await browser.pause(1000);
})

Then(/^I verify that "Last name cannot contain special characters" error is displayed$/, async function () {
    await signUpPage.lNameErrorDisplayed();
})

Then(/^I enter "(.+)" as password$/, async function (pass) {
    await signUpPage.enterSignUpPassword(pass);
    await browser.pause(1000);
})

Then(/^I verify "Keep me signed in checkbox is displayed$/, async function () {
    await signUpPage.keepMeSignedInCheckboxDisplayed();
})

Then(/^I verify "Keep me signed in checkbox is enabled$/, async function () {
    await signUpPage.keepMeSignedInCheckboxEnabled();
})

Then(/^I verify that "Continue" button is displayed$/, async function () {
    await signUpPage.signUpSumbitBtnDisplayed();
})

Then(/^I verify that "Continue" button is not enabled$/, async function () {
    await signUpPage.signUpSubmitBtnDisabled();
})

Then(/^I click on "Feedback"$/, async function () {
    await homepage.clickFeedbackBtn();
    await browser.pause(2000);
})

When(/^I click on Travelers$/, async function () {
    await homepage.clickTravelers();
})

Then(/^I select adults as "6"$/, async function () {
    await homepage.addAdultTravelers();
    await homepage.addAdultTravelers();
    await homepage.addAdultTravelers();
    await homepage.addAdultTravelers();
    await browser.pause(2000);
})

Then(/^I select children as "3"$/, async function () {
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
})

Then(/^I select the "first" childs age as "(.+)"$/, async function (age) {
    await homepage.selectChild1Age(age);
})

Then(/^I select the "second" childs age as "(.+)"$/, async function (age) {
    await homepage.selectChild2Age(age);
})

Then(/^I select the "third" childs age as "(.+)"$/, async function (age) {
    await homepage.selectChild3Age(age)
    await browser.pause(2000);
})

Then(/^I click on "Done"$/, async function () {
    await homepage.clickTravelersDone();
})

Then(/^I verify that total number of travelers is sum of adults and children traveling$/, async function () {
    const totalOfGuest = await homepage.totalTravelers();
    expect(totalOfGuest, 'Number not equal to amount').to.be.equal('9 travelers, 1 room');
})

Then(/^I select children as "2"$/, async function () {
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
    await browser.pause(2000)
})

Then(/^I verify there are 2 child dropdowns$/, async function () {
    const twoChildDropdowns = await homepage.totalChildrenDropdownCount();
    expect(twoChildDropdowns.length === 2, 'More or less than 2').to.be.true;
})

Then(/^I verify plus-button is enabled$/, async function () {
    const addEnabled = await homepage.addChildTravelersEnabled();
    expect(addEnabled, 'Add child is not enabled').to.be.true;
})

Then(/^I verify minus-button is enabled$/, async function () {
    const minusEnabled = await homepage.minusChildTravelersEnabled();
    expect(minusEnabled, 'Minus child is not enabled').to.be.true;
})

Then(/^I select children as "6"$/, async function () {
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
    await homepage.addChildTravelers();
    await browser.pause(2000)
})

Then(/^I verify there are 6 child dropdowns$/, async function () {
    const sixChildDropdowns = await homepage.totalChildrenDropdownCount();
    expect(sixChildDropdowns.length === 6, 'More or less than 6').to.be.true;
})

Then(/^I verify plus-button is disabled$/, async function () {
    const addDisabled = await homepage.addChildTravelersEnabled();
    expect(addDisabled, 'Add button is enabled').to.be.false;
})

Then(/^I select children as "5"$/, async function () {
    await homepage.subtractChildTraveler();
    await browser.pause(2000);
})

Then(/^I verify there are 5 child dropdowns$/, async function () {
    const fiveChildDropdowns = await homepage.totalChildrenDropdownCount();
    expect(fiveChildDropdowns.length === 5, 'More or less than 5').to.be.true
})

Then(/^I select children as "0"$/, async function () {
    await homepage.subtractChildTraveler();
    await homepage.subtractChildTraveler();
    await homepage.subtractChildTraveler();
    await homepage.subtractChildTraveler();
    await homepage.subtractChildTraveler();
    await browser.pause(2000);
})

Then(/^I verify there are 0 child dropdowns$/, async function () {
    const zeroChildDropdowns = await homepage.totalChildrenDropdownCount();
    expect(zeroChildDropdowns.length === 0, 'More than 0').to.be.true
})

Then(/^I verify minus-button is disabled$/, async function () {
    const minusDisabled = await homepage.minusChildTravelersEnabled();
    expect(minusDisabled, 'Minus button is enabled').to.be.false;
})

Then(/^I click on "Terms and conditions" link$/, async function () {
    await signUpPage.clickTermsAndConditions();
    await browser.pause(2000);
})

Then(/^I verify "terms and conditions" page opens in new tab$/, async function () {
    await termsConditions.termsOfServiceHeaderDisplayed();
})

Then(/^I verify "Last revised" date format$/, async function () {
    const revisedDate = await termsConditions.lastRevisedDate();
    expect(revisedDate, 'NOT WORKING').to.be.equal('01/01/23')

    Format = 'MM/DD/YY';

    const formatsAreMatching = moment(revisedDate, Format).isValid();
    expect(formatsAreMatching, 'Nice Try').to.be.true;
})

Then(/^I click on "Privacy Statment" link$/, async function () {
    await termsConditions.clickPrivacyStatment();

})

Then(/^I verify "Last Updated" date format$/, async function () {
    const lastUpdated = await termsConditions.lastUpdatedDate();
    expect(lastUpdated, 'Not Working').to.be.equal('20 December, 2022')

    Format2 = 'DD MMMM, YYYY'

    const formatsAreMatching2 = moment(lastUpdated, Format2).isValid();
    expect(formatsAreMatching2, 'Try again').to.be.true;
})

Then(/^I click on blue sign in button$/, async function () {
    await homepage.clickSignInOnSignInBtn()
})

When(/^I enter invalid email address as "(.+)"$/, async function (email) {
    await homepage.inputLoginEmail(email);
    await browser.pause(2000);
})

Then(/^I click on continue button$/, async function () {
    await homepage.clickLoginContinueBtn();
})

Then(/^I verify "enter a valid email" error is displayed$/, async function () {
    await homepage.loginErrorDisplayed();
})

When(/^I click on language icon$/, async function () {
    await homepage.clickLanguageIcon();
    await browser.pause(2000);
})

Then(/^I select "(.+)" in language dropdown$/, async function (Language) {
    await homepage.selectEspanolLanguage(Language);
    await browser.pause(2000);
})

Then(/^I click on save button$/, async function () {
    await homepage.clickSaveLanguage();
})

Then(/^I verify that Español is displayed$/, async function () {
    const isEspanolDisplayed = await homepage.espanolDisplayed();
    expect(isEspanolDisplayed, 'Espanol is not displayed').to.be.true;
})


Then(/^I click on Guardar button$/, async function () {
    await homepage.clickSaveLanguageEsp();
})

Then(/^I verify that English is displayed$/, async function () {
    const isEnglishDisplayed = await homepage.englishDisplayed();
    expect(isEnglishDisplayed, 'English is not displayed').to.be.true;
})

When(/^I click on "List your property"$/, async function () {
    await homepage.clickListYourProperty();
    await browser.pause(2000);
})