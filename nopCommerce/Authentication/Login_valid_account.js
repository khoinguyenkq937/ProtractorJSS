let fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('Ligin function', function () {
    it('should login with valid account', function () {
        browser.driver.manage().window().maximize();
        browser.get('http://demo.nopcommerce.com/');
        browser.sleep('2000');
        browser.element(by.xpath("//*[@href='/login']")).click();
        browser.sleep('5000');
        browser.element(by.id('Email')).sendKeys('seven_03092018_02@yopmail.fr');
        browser.element(by.id('Password')).sendKeys('passwd123');
        browser.element(by.xpath("//input[contains(@class,'login-button')]")).click();
        let EC = protractor.ExpectedConditions;
        let lnk_myAccount = element(by.xpath("//*[contains(@href,'/customer/info')]"))
        browser.wait(EC.presenceOf(lnk_myAccount), 30000);
        expect(lnk_myAccount.isElementPresent);

        //Take a screenshot if login successfully
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'login_successfully.png')
        })
    })
})