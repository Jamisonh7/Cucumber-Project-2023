Feature: Home Page

@SmokeTest 
Scenario: Verify language can be changed successfully
    Given I am on hotels homepage
    When I click on language icon
    And I select "Español (Estados Unidos)" in language dropdown
    Then I click on save button
    And I verify that Español is displayed
    Then I click on language icon
    And I select "English (United States)" in language dropdown
    Then I click on Guardar button
     And I verify that English is displayed