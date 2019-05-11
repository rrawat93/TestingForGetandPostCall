This framework is to test the get and post call using BDD cucumber framework for the below test data :
get call test data:  https://jsonplaceholder.typicode.com/posts/1 
post call test data:  https://jsonplaceholder.typicode.com/posts

To run the test steps:
1. $ npm install
2. $ ./node_modules/.bin/cucumber-js test/features/Testing.feature --tags="@test" 
To Geerate report 
3. $ ./node_modules/.bin/cucumber-js test/features/Testing.feature --tags="@test" -f json:test/report/cucumber_report.json 
4. $ node generateReport.js


This will also read a json/Xml file, update it and save a new json/xml file.
Steps are as below:
1. source files are :
json: source/app.json
Xml: source/app.xml

2. Results file:
Json: source/Results/Resultsapp.json
Xml: source/Results/Resultsapp.xml

To run the code
3. $ npm install
4. $ node test.js
