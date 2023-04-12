// const { expect } = require("chai");
// const moment = require("moment");

// class SignUpPage {

// // Locators of webElements on Sign Up Page
// selectedMonthLocator = ('//select[@id="month"]//option[@selected]');
// selectedDayLocator = ('//select[@id="day"]//option[@selected]');
// selectedYearLocator = ('//select[@id="year"]//option[@selected]');
// createFirstNameLocator = ('//input[@name="firstname"]');
// createLastNameLocator = ('//input[@name="lastname"]');
// createEmailOrMobileNumberLocator = ('//input[@aria-label="Mobile number or email"]');
// femaleRadioBtnLocator = ('//input[@value="1"]');
// maleRadioBtnLocator = ('//input[@value="2"]');
// customRadioBtnLocator = ('//input[@value="-1"]');





//     // Functions to interact with webElements on Sign Up Page
    
//     async currentMonthSelected() {
//         const dobMonth = await $(this.selectedMonthLocator);
//         const monthDisplayed = await dobMonth.getText();

//         const currentMonth = moment().format('MMM')
//         expect(monthDisplayed, 'Invalid Month').to.be.equal(currentMonth)
//     }

//     async currentDaySelected() {
//         const dobDay = await $(this.selectedDayLocator);
//         const dayDisplayed = await dobDay.getText();

//         const currentDay = moment().format('D')
//         expect(dayDisplayed, 'Invalid Day').to.be.equal(currentDay)
//     }

//     async currentYearSelected() {
//         const dobYear = await $(this.selectedYearLocator);
//         const yearDisplayed = await dobYear.getText();

//         const currentYear = moment().format('YYYY')
//         expect(yearDisplayed, 'Invalid').to.be.equal(currentYear)
//     }

//     async femaleRadioBtnSelected() {
//         const femaleRadioBtn = await $(this.femaleRadioBtnLocator);
//         const isFemaleRadioBtnSelected = await femaleRadioBtn.isSelected();
//     }

//     async maleRadioBtnSelected() {
//         const maleRadioBtn = await $(this.maleRadioBtnLocator);
//         const isMaleRadioBtnSelected = await maleRadioBtn.isSelected();
//     }

//     async customRadioBtnSelected() {
//         const customRadioBtn = await $(this.customRadioBtnLocator);
//         const isCustomRadioBtnSelected = await customRadioBtn.isSelected();
//     }

//     async createFirstNameField() {
//         await $(this.createFirstNameLocator).getAttribute('value');

//     }

//     async createLastNameField() {
//         await $(this.createLastNameLocator).getAttribute('value');

//     } 

//     async createEmailOrNumberField() {
//         await $(this.createEmailOrMobileNumberLocator).getAttribute('value');

//     }





// }
// module.exports = SignUpPage;