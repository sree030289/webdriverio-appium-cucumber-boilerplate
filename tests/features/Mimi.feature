Feature: Login si flowsgnup

  Background:
    Given I'm on the debug screen


  @MIMI_login
  Scenario: Displays login successfully, when entering valid credentials  
     When I click the Environment button
     Then I select the 'Staging' option from the list
     When I load an anonUser account
     Then I click on Profile button
      And I click on Login button