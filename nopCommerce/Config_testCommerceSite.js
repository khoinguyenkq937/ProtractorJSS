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
        browserName: 'chrome'
    },
    //    specs: [
    //        './Authentication/Login_valid_account.js',
    //        './Authentication/Login_with_invalid_account.js'
    //        ],
    suites: {
        login_valid_account: './Authentication/Login_valid_account.js',
        login_Inalid_account: './Authentication/Login_with_invalid_account.js'
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        global.callTakeScreenshot = require('./takeScreenshot');
    }
};