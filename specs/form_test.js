let formpage = require('../pages/formpage');

describe('form page test suite', function () {
    debugger;   
    it('form page test case', function () {

        formpage.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        formpage.name('Niketa');
        formpage.emailId('abc@gmail.com');
        formpage.password('password');
        formpage.checkBox();
        formpage.gender();
        formpage.radioButton();
        formpage.submitButton();
        formpage.successMessage();
        browser.sleep(1000);
        formpage.nameClear();
        formpage.name('N');
        formpage.captureErrorMessage();
        formpage.clickShop();
        //browser.sleep(1000);
        formpage.selectItems('iphone X');
        //browser.sleep(1000);
        formpage.selectItems('Samsung Note 8');
        formpage.checkoutButtonClick();
        formpage.amountOfItems();
        //formpage.amountOfItems('100000');
        

    });
});


