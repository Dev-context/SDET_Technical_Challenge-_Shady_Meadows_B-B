
@ignore
Feature: Helper get Avaliable rooms
Background: 
    * url baseUrl

Scenario:
    Given path 'room'
    And param checkin = checkin
    And param checkout = checkout
    When method get
    Then status 200