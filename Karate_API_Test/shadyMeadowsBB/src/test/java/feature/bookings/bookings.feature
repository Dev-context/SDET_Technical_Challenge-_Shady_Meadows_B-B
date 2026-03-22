Feature: Testing booking endpoint
Background:
    * url baseUrl
    * def bookingRequest = read('classpath:json/request/booking/request.json')
    * def bookingResponse = read('classpath:json/response/booking/response.json')
    * def dataGenerator = Java.type('helpers.DataGenerator')

Scenario: Booking creation
    # Get number of rooms and check if exists any room
    Given path 'room'
    When method get
    Then status 200
    And match response.rooms == '#array? _.length > 0'
    * def ids = get response.rooms[*].roomid
    * def randomRoomId = dataGenerator.getRandomRoomId(ids)
    * print 'IDs encontrados:', ids

    Given path 'booking'
    # SET request json from the file with Random values
    * set bookingRequest.roomid = randomRoomId
    * set bookingRequest.firstname = dataGenerator.getRandomFirstName()
    * set bookingRequest.lastname = dataGenerator.getRandomLastName()
    * set bookingRequest.depositpaid = dataGenerator.getRandomDepositpaid()

    And request bookingRequest
    * print randomRoomId
    When method post
    Then status 201
    * print response
    And match response == '#(^bookingRequest)'