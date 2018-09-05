exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './Authentication/Login_valid_account.js',
//        './Authentication/Login_with_invalid_account.js'
        ],
//    multiCapabilities: [{
//        browserName: 'firefox'
//    }, {
//        browserName: 'chrome'
//    }]
    capabilities:{
        browserName:'chrome'
    },
    onPrepare:() => {
        browser.ignoreSynchronization = true;
        global.callTakeScreenshot = require('./takeScreenshot');
    }
};