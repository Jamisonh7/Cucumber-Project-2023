Feature: List your property

@SmokeTest
Scenario: Verify "List your Property" flow
    Given I am on hotels homepage
    When I click on "List your property"
    Then I verify "What would you like to list" is displayed
    And I verify both "lodging and "private residence" options are displayed
    When I click on "Private Residence"
    Then I verify that "Step 1 of 3" is displayed
    And I verify that "See how much you could earn" is displayed
    Then I increase bedroom count to 4
    And I increase bathroom count to 2 and a half
    Then I click on "Next" button
    And I verify that "Step 2 of 3" is displayed
    And I verify "Where is your property located" header is displayed
    Then I enter property address as "121 6th"
    And I select 121 6th Avenue, New York, NY, USA from suggestion
    And I verify map is displayed
    And I verify pin is displayed
    Then I verify "Move the pinn to adjust the location of your property" is displayed below map



