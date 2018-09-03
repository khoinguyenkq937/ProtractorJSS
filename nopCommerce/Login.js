let fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('Test the registeration function', function () {
    it('register successfully with an account', function () {
        // Access to Home page commercial
        browser.driver.manage().window().maximize();
        browser.get('http://demo.nopcommerce.com/');
        browser.debugger();
        browser.driver.sleep(2000);
        element(by.xpath("//*[@href='/register']")).click();

        // Access to Register page
        let EC = protractor.ExpectedConditions;
        let register_titleForm = element(by.xpath("//*[@class='page-title']"));
        browser.wait(EC.presenceOf(register_titleForm), 10000);

        expect(register_titleForm.isElementPresent);

        // Fill out Register form
        element(by.id('FirstName')).sendKeys('Steven');
        element(by.id('LastName')).sendKeys('Nguyen');
        element(by.id('Email')).sendKeys('seven_03092018_06@yopmail.fr');
        element(by.id('Password')).sendKeys('passwd123');
        element(by.id('ConfirmPassword')).sendKeys('passwd123');
        browser.sleep(2000);
        element(by.id('register-button')).click();

        // Register successfully => confirmation message appears
        let msg_registerConfirmation = element(by.xpath("//*[@class='result']"));
        let conditionElement1 = EC.presenceOf(msg_registerConfirmation);
        browser.wait(conditionElement1, 2000);
        browser.debugger();
        expect(msg_registerConfirmation.getText()).toEqual('Your registration completed');

        //Take a screenshot
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'msg_registerConfirmation.png')
        })

    })
});