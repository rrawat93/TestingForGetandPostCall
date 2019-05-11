Feature:
 Testing the secnarios to test
@test
  Scenario: Making a get call
    Given I set Accept header to application/json
    When I GET /posts/1
    Then response code should be 200
    And response body path $.userId should be 1


    @test
  Scenario: Making a post call
    Given I set Accept header to application/json
    When I POST to /posts
    Then response code should be 201
    And response body path $.id should be 1