//This test is aim to validate the title of the visiting page
describe('Protractor Test B', function () {
    it('should validate the title of page', function () {
        browser.get('http://www.wikipedia.org');
        expect(browser.getTitle()).toEqual('Megaevolution');
    })
});