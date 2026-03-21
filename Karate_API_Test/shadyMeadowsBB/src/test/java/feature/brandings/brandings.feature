Feature: Tests for the branding endpoint
   
Background: 
        * url 'https://automationintesting.online/api'
        * configure headers = { Accept: 'application/json; charset=utf-8' }

    Scenario: Get branding informaton
        Given path 'branding'
        When method Get
        Then status 200
        And match response.contact.name == 'Shady Meadows B&B'
        And match response.contact.email == '#regex .+@.+'
 
        
