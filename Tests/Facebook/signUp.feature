Feature: Sign Up

  Scenario: Verify current date is selected in sign up form
    Given I am on facebook homepage
        And I click on Create New Account button
    Then I verify current month is selected in month dropdown
        And I verify current day is selected in date dropdown
        And I verify current year is selected in year dropdown
