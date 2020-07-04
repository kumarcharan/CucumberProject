Feature: Title of your feature
  I want to use this template for my feature file

  Background: Login Details simple asfsdf
    Given Precondition
    
    
   #dfsdgdsfgds
   #comments in feature file we have to use Hash 

  @smoke @All
  Scenario: 
    Given I am login page
    When Enter username and password
    Then Login Successfully

  @sanity 
  Scenario: 
    Given Second testcase
    When second testcase Enter username and password
    Then should Login Successfully

  @All
  Scenario Outline: 
    Given Secondplace testcase
    When secondplace testcases Enter '<usernames>' and '<passwords>'
    Then should and Login Successfully

    Examples: 
      | usernames |  | passwords |
      | user123   |  | pass134   |
      | user212   |  | pass234   |
