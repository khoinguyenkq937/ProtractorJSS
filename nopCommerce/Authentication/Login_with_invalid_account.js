let fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('Test Login form', function(){
    it('Authenticate failed if user login with invalid account', function(){
        //Access to Login page - Nopcommerce site
        browser.get('http://demo.nopcommerce.com/login');
        browser.sleep(3000);
        
        //Submit login form with blank Email and Password
        browser.element(by.xpath("//*[contains(@class,'login-button')]")).click()
        let EC = protractor.ExpectedConditions;
        let error_emptyValue =  browser.element(by.id('Email-error'));
        browser.wait(EC.presenceOf(error_emptyValue), 10000);
        expect(error_emptyValue.getText()).toEqual('Please enter your email');
        browser.sleep(1000)

        //then login with invalid Email and Password
        browser.element(by.id('Email')).sendKeys('nguoicodon@yopmail.com');
        browser.element(by.id('Password')).sendKeys('XX12345');
        browser.element(by.xpath("//*[contains(@class,'login-button')]")).click()
        let error_invalidCredentials = browser.element(by.xpath("//*[contains(@class,'validation-summary-errors')]"));
        browser.wait(EC.presenceOf(error_invalidCredentials), 10000);
        expect(error_invalidCredentials.getText()).toContain('No customer account found');

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'login_Unsuccessfully.png')
        })
    })
})