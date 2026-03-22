Feature: Tests for the branding endpoint
   
Background:
  * url baseUrl
  * def responseSchema = read('classpath:json/response/brandings/schema/branding.json')

Scenario: Get brandings
    Given path 'branding'
    When method get
    Then status 200
    And match response == responseSchema
    And match response.contact.name == "Shady Meadows B&B" 

        
