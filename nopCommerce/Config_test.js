exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Authentication/Login_valid_account.js'],
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
    }
};