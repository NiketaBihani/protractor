describe('Request For Approval Flow', function () {

    var xlsxModule = require('xlsx');
    var wrkBook = xlsxModule.readFile('./TestData.xlsx');
    var wrkSheet = wrkBook.Sheets['amazon'];

    var propertiesModule = require('properties-reader');
    var filrPropobj = propertiesModule('./data.properties');

    browser.ignoreSynchronization = true;


    beforeEach(function (done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        setTimeout(function () {
            done();
        }, 500);
    });

    it('Amazon login', function () {

        browser.get('https://www.amazon.in/');
        element(by.xpath('//*[text()="Hello. Sign in"]')).click();
        element(by.name('email')).sendKeys(filrPropobj.get('mobileNO'));
        element(by.id('continue')).click();
        element(by.name('password')).sendKeys(filrPropobj.get('passWord'));
        element(by.id('signInSubmit')).click();
        var dataXlObj = wrkSheet['A1'].v;
        element(by.xpath('//*[@id="nav-link-accountList"]/child::span[1]')).getText().then(function (accName) {
            expect(accName).toContain(dataXlObj);
            console.log('loggd user  ' + accName);
        });
    });

    it('Itam search and order', function () {

        element(by.id('twotabsearchtextbox')).sendKeys(filrPropobj.get('srchItem'));
        element(by.id('twotabsearchtextbox')).sendKeys(protractor.Key.ENTER);
        var itmLink = element(by.xpath('//div[1]/div/span/div/div/div[2]/div[2]/div/div[1]/div/div/div[1]/h2/a/span[@class="a-size-medium a-color-base a-text-normal"]'));
        expect(itmLink.getText()).toContain(filrPropobj.get('srchItem'));
        
        var rating = element(by.xpath('//div[1]/div/span/div/div/div[2]/div[2]/div/div[1]/div/div/div[2]/div/span[1]/span/a/i[@class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"]'));
        //*[@class="a-section a-spacing-base a-spacing-top-medium"]/following::*
        browser.actions().mouseMove(rating).perform();
        element(by.xpath('//*[@class="a-size-medium a-color-base a-text-beside-button a-text-bold"]')).getText().then(function (rating) {
            console.log(rating);
            expect(rating).toContain(filrPropobj.get('rating'));
        });
        itmLink.click();
        
        browser.getAllWindowHandles().then(function (handles) {
            var firstWindow = handles[0];
            var secondWindow = handles[1];
            browser.switchTo().window(secondWindow).then(function () {
                element(by.id('add-to-cart-button')).click();
            });
        });
        element(by.id('hlb-ptc-btn-native')).click();
        element(by.xpath('//*[@class="a-declarative a-button-text " and contains(text(),"Deliver to this address")]')).click();
        element(by.xpath('//*[contains(text(),"OnePlus 7 Pro")]')).getText().then(function (ordItmTkt) {
            console.log('ordered item ' + ordItmTkt);
            expect(ordItmTkt).toContain(filrPropobj.get('srchItem'));
        });

    });


});
