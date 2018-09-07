let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //    multiCapabilities: [{
    //        browserName: 'firefox'
    //    }, {
    //        browserName: 'chrome'
    //    }]
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args :[
                '--start-maximized'
            ]
        }
    },
        specs: [
        //    './Authentication/Login_valid_account.js',
            './Authentication/Login_with_invalid_account.js'
            ],
    //params: require('D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Data/LoginFunction/data_login_valid_account.json'),
    /*
    suites: {
        login_valid_account: './Authentication/Login_valid_account.js',
        login_Inalid_account: './Authentication/Login_with_invalid_account.js'
    },
    */
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        global.callTakeScreenshot = require('./takeScreenshot');

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath : 'D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Report',
                fileName : 'Report',
                takeScreenshots: true,
                takeScreenshotOnlyFailures : true
            })
          );
    }
};