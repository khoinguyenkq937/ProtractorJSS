let AngularLoginPage = function () {
    let input_email = browser.element(by.id('Email'));
    let input_password = browser.element(by.id('Password'));
    let btn_submit = browser.element(by.xpath("//input[contains(@class,'login-button')]"));

    let EC = protractor.ExpectedConditions;

    this.fillLoginForm = function () {
        input_email.sendKeys('seven_03092018_02@yopmail.fr');
        input_password.sendKeys('passwd123');
        btn_submit.click();
        browser.sleep(2000);
    }

}

module.exports = new AngularLoginPage();