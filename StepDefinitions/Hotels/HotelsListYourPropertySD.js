const { Given, When, Then } = require('@wdio/cucumber-framework');
const ListYourProperty = require('../../Pages/Hotels/ListYourProperty');
const Homepage = require('../../Pages/Hotels/Homepage');
const { expect } = require("chai");

const listyourpropertypage = new ListYourProperty();
const homepage = new Homepage();

Then(/^I verify "What would you like to list" is displayed$/, async function () {
    const isListingHeaderDisplayed = await listyourpropertypage.listingHeaderDisplayed();
    expect(isListingHeaderDisplayed, 'Listing header is not displayed').to.be.true;
})

Then(/^I verify both "lodging and "private residence" options are displayed$/, async function () {
    const lodgingIsDisplayed = await listyourpropertypage.isLodgingDisplayed();
    expect(lodgingIsDisplayed, 'Lodging option is not displayed').to.be.true;

    const privateResidenceIsDisplayed = await listyourpropertypage.isPrivateResidenceDisplayed();
    expect(privateResidenceIsDisplayed, 'Private Residence is not displayed').to.be.true;
})

When(/^I click on "Private Residence"$/, async function () {
    await listyourpropertypage.clickPrivateResidence()
})

Then(/^I verify that "Step 1 of 3" is displayed$/, async function () {
    const is1of3Displayed = await listyourpropertypage.isStep1of3Displayed();
    expect(is1of3Displayed, 'Step 1 of 3 is not displayed').to.be.true;
})

Then(/^I verify that "See how much you could earn" is displayed$/, async function () {
    const isSeeHowMuchDisplayed = await listyourpropertypage.isSeeHowMuchHeaderDisplayed();
    expect(isSeeHowMuchDisplayed, 'See how much header is not displayed').to.be.true;
})

Then(/^I increase bedroom count to 4$/, async function () {
    await listyourpropertypage.clickIncreaseBedroom();
    await listyourpropertypage.clickIncreaseBedroom();
    await listyourpropertypage.clickIncreaseBedroom();
    await listyourpropertypage.clickIncreaseBedroom();
    await browser.pause(2000);
})

Then(/^I increase bathroom count to 2 and a half$/, async function () {
    await listyourpropertypage.clickIncreaseBathroom();
    await listyourpropertypage.clickIncreaseBathroom();
    await listyourpropertypage.clickIncreaseBathroom();
    await browser.pause(2000);
})

Then(/^I click on "Next" button$/, async function () {
    await listyourpropertypage.clickNext();
})

Then(/^I verify that "Step 2 of 3" is displayed$/, async function () {
    const is2of3Displayed = await listyourpropertypage.isStep2of3Displayed();
    expect(is2of3Displayed, 'Sept 2 of 3 is not displayed').to.be.true;
})

Then(/^I verify "Where is your property located" header is displayed$/, async function () {
    const isLocationHeaderDisplayed = await listyourpropertypage.isPropertyLocationHeaderDisplayed();
    expect(isLocationHeaderDisplayed, 'Location header is not displayed').to.be.true;
})

Then(/^I enter property address as "(.+)"$/, async function (address) {
    await listyourpropertypage.enterAddress(address);
    await browser.pause(2000);
})

Then(/^I select 121 6th Avenue, New York, NY, USA from suggestion$/, async function () {
    await listyourpropertypage.selectSuggestion()
    await browser.pause(2000);
})

Then(/^I verify map is displayed$/, async function () {
    const isMapDisplayed = await listyourpropertypage.isMapDisplayed();
    expect(isMapDisplayed, 'Map is Not displayed').to.be.true;
    await browser.pause(1000);
})

Then(/^I verify pin is displayed$/, async function () {
    const isPinDisplayed = await listyourpropertypage.isPinDisplayed();
    expect(isPinDisplayed, 'Pin is not displayed').to.be.true;
})

Then(/^I verify "Move the pinn to adjust the location of your property" is displayed below map$/, async function () {
    const isMovePinDisplayed = await listyourpropertypage.isMovePinHeaderDisplayed();
    expect(isMovePinDisplayed, 'Move pin header is not displayed').to.be.true;
    await browser.pause(5000);
})

