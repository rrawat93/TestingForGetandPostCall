/* eslint new-cap: "off", no-invalid-this: "off" */

'use strict';

const apickli = require('../../../apickli/apickli.js');
const {Before, setDefaultTimeout} = require('cucumber');

Before(function() {
  this.apickli = new apickli.Apickli('https', 'jsonplaceholder.typicode.com');
  this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});