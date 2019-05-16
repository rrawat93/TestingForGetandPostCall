Feature:
 Testing the secnarios to test
@test
  Scenario Outline: Making a get call
    Given I set Accept header to application/json
    When I do <call> <url>
    Then response code should be <code>
    And response body path <ID> should be <value>


Examples:
|call|url|code|ID|value|
|GET|/posts/1|200|$.userId|1|
|POST|/posts|201|$.id|101|