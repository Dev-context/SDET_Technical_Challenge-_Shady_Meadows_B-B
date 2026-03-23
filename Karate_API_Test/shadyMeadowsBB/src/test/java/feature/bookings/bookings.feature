Feature: Testing booking endpoint
Background:
    * url baseUrl
    * def bookingRequest = read('classpath:json/request/booking/request.json')
    * def bookingResponse = read('classpath:json/response/booking/response.json')
    * def dataGenerator = Java.type('helpers.DataGenerator')
    * configure logPrettyRequest = true
    * configure logPrettyResponse = true
    

    * def findRoom = 
    """
      function() {
        while(true) {
          var dates = dataGenerator.getRandomPairOfDates()
          var res = karate.call('classpath:helpers/featuresHelpers/getrooms.feature', 
                          { checkin: dates.checkin, checkout: dates.checkout })

          if(res.response.rooms && res.response.rooms.length > 0) {
              return { 
                    roomid: res.response.rooms[0].roomid,
                    checkin: dates.checkin, 
                    checkout: dates.checkout
                }
          }
              karate.log('Trying new date... no rooms for :', dates.checkin);
              java.lang.Thread.sleep(500);
        
        }
      
      }
    
    """
    * def roomInfo = findRoom()


Scenario: Booking creation
    Given path 'booking'
    # SET request json from the file with Random values
    * set bookingRequest.roomid = parseInt(roomInfo.roomid)
    * set bookingRequest.firstname = dataGenerator.getRandomFirstName()
    * set bookingRequest.lastname = dataGenerator.getRandomLastName()
    * set bookingRequest.depositpaid = dataGenerator.getRandomDepositpaid()
    
    * set bookingRequest.bookingdates = { checkin: '#(roomInfo.checkin)', checkout: '#(roomInfo.checkout)' }
    * print bookingRequest
    And request bookingRequest
    When method post
    Then status 201
    * print response
    And match response == '#(^bookingRequest)'