const { Given, Then } = require("@wdio/cucumber-framework");
const Homepage = require('../Pages/Homepage');
const SignUpPage = require("../Pages/SignUpPage");

const homepage = new Homepage();
const signuppage = new SignUpPage();

// Given(/^I am on facebook homepage$/, async function () {
   
// })

Given(/^I click on Create New Account button$/, async function () {
    await homepage.clickCreateAccountBtn();
    await browser.pause(2000);
})

Given(/^I verify current month is selected in month dropdown$/, async function () {
    await signuppage.currentMonthSelected();

})

Given(/^I verify current day is selected in date dropdown$/, async function () {
    await signuppage.currentDaySelected();
})

Then(/^I verify current year is selected in year dropdown$/, async function () {
    await signuppage.currentYearSelected();
})