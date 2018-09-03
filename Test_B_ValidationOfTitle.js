//This test is aim to validate the title of the visiting page
describe('Protractor Test B',function(){
    it('should validate the title of page',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        var b =  browser.getTitle;
        console.log(b);
        expect(browser.getTitle()).toEqual('Super Calculator');
    })
});