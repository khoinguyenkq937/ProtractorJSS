let const_json = require('D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Data/LoginFunction/data_login_valid_account.json');
describe('should read the data from json file', function () {
    it ('shoul abc', function () {
        let setFirstName = browser.params.Login_accounts.firstName;
        let URL = browser.params.Login_accounts.url;
        browser.get(URL);
        console.log(setFirstName);
    })
})