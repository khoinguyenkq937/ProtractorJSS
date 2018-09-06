var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', 'D:/TESTING/Automation/Project/GitHub/Protractor_Project/ProtractorJSS/nopCommerce/Data/LoginFunction/data_login_valid_account.json', false);
    request.send(null);
    if (request.status == 200)
        return request.firstName;
};

var temp = readJSON('../../data/file.json');