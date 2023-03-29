const { expect } = require("chai");
const moment = require("moment");

class SignUpPage {

// Locators of webElements on Sign Up Page
selectedMonthLocator = ('//select[@id="month"]//option[@selected]');
selectedDayLocator = ('//select[@id="day"]//option[@selected]');
selectedYearLocator = ('//select[@id="year"]//option[@selected]');




    // Functions to interact with webElements on Sign Up Page
    
    async currentMonthSelected() {
        const dobMonth = await $(this.selectedMonthLocator);
        const monthDisplayed = await dobMonth.getText();

        const currentMonth = moment().format('MMM')
        expect(monthDisplayed, 'Invalid Month').to.be.equal(currentMonth)
    }

    async currentDaySelected() {
        const dobDay = await $(this.selectedDayLocator);
        const dayDisplayed = await dobDay.getText();

        const currentDay = moment().format('D')
        expect(dayDisplayed, 'Invalid Day').to.be.equal(currentDay)
    }

    async currentYearSelected() {
        const dobYear = await $(this.selectedYearLocator);
        const yearDisplayed = await dobYear.getText();

        const currentYear = moment().format('YYYY')
        expect(yearDisplayed, 'Invalid').to.be.equal(currentYear)
    }



}
module.exports = SignUpPage;