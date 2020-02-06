let homepage = require('../pages/homepage');
let actions = require('../reusable_actions/buttonActions');
let searchPage = require('../pages/searchPage');

describe('calculator test', function () {

    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('100');
        homepage.enterSecondNumber('200');
        //homepage.clickGo();
        searchPage.go();
        homepage.enterFirstNumber('200');
        homepage.enterSecondNumber('300');
        homepage.clickGo();
        homepage.verifyResult();
        browser.sleep(3000);

    });
});


