exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test_B_ValidationOfTitle.js'],
//    multiCapabilities: [{
//        browserName: 'firefox'
//    }, {
//        browserName: 'chrome'
//    }]
    capabilities:{
        browserName:'firefox'
    },
    onPrepare:() => {
        browser.ignoreSynchronization = true;
    }
};