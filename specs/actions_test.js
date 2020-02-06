let homepage = require('../pages/homepage');
let actions = require('../reusable_actions/buttonActions');

describe('actions test', function () {

    it('actions test', function () {

        //browser.waitForAngular();
        browser.sleep(2000);
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('100');
        homepage.enterSecondNumber('200');
        actions.click();
        homepage.enterFirstNumber('200');
        homepage.enterSecondNumber('300');
        homepage.clickGo();
        homepage.verifyResult();
        browser.sleep(3000);

    });
});


