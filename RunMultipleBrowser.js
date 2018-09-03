describe('Run multipe browser on the same test', function () {
    it('should run one test on chrome and firefox', function () {
        browser.get('http://www.angularjs.org');
        browser.addMockModule('moduleA', "angular.module('moduleA', []).value('version', '3');");
        //To create a new browser
        var browser2 = browser.forkNewDriverInstance();

        //To create a new browser with url as 'http://www.angularjs.org'
        var browser3 = browser.forkNewDriverInstance(true);

        //To create a new browser with mock modules injected:
        var browser4 = browser.forkNewDriverInstance(false, true);

        //To create a new browser with url as 'http://www.angularjs.org' and mock modules injected:
        var browser4 = browser.forkNewDriverInstance(true, true);

        var element2 = browser2.element;
        var $2 = browser2.$;
        var $$2 = browser2.$$;
       // element2(by.model(...)).click();
       // $2('.css').click();
       // $$2('.css').click();
    })
})