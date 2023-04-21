Feature: Sign in

@SmokeTest 
Scenario: Verify Verification message for invalid sign in credentials
    Given I am on hotels homepage
    Then I click on SignIn link
    And I click on blue sign in button
    When I enter invalid email address as "!@#$%"
    And I click on continue button
    Then I verify "enter a valid email" error is displayed

