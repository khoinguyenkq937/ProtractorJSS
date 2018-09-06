let homepage = require('./HomePage');
let loginpage = require('./LoginPage');

describe('Angular js homepage', function () {
    it('should access to Login page by the link Login', function () {
        homepage.openHomePage();
        homepage.waitForHomePage();
        homepage.goToLoginPage();
        browser.sleep(2000);
        loginpage.fillLoginForm();
        homepage.waitForUserLoginSuccessfully();

        //Take a screenshot if login successfully
        browser.takeScreenshot().then(function (png) {
            callTakeScreenshot.writeScreenShot(png, 'login_successfully.png')
        })
    })
})