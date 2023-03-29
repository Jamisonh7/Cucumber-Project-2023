const { Given, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../Pages/Homepage');


const homepage = new Homepage();

Given(/^I am on facebook homepage$/, async function () {
    await browser.url('/');
    await browser.pause(5000);
});

Given(/^I verify login email is enabled$/, async function () {
    await homepage.loginEmailFieldEnabled();
});

Then(/^I verify login password is enabled$/, async function () {
    await homepage.loginPasswordFieldEnabled();
});

Then(/^I verify login button field is enabled$/, async function () {
    await homepage.loginBtnEnabled();

});