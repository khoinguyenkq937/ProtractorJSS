exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Login.js'],
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