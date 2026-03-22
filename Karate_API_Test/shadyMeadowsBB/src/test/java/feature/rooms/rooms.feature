Feature:Test for room endpoint

    Background: 
    * url baseUrl
    * def responseSchema = read('classpath:json/response/rooms/schema/room.json')
    

    Scenario: Get rooms 
        Given path 'room'
        When method get
        Then status 200
        And match response.rooms == '#[] responseSchema'
        And match response.rooms == '#array? _.length > 0'
        And match each response.rooms.[*].roomPrice == '#number? _ > 0'

