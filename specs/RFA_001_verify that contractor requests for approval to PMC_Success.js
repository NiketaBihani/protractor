let actions = require('../reusable_actions/buttonActions');
let testData = require('../resources/testData.json');
let requestRFAPage = require('../pages/requestRFAPage.js');
let loginPage = require('../pages/loginpage');

describe('Verify that Contractor logs a requests for approval to PMC agent' + browser.browserName, function () {

    'use strict';

    it('Open livbim environment', function () {
        requestRFAPage.getEnvironment(testData.environment.baseUrl);
        expect(browser.getCurrentUrl()).toContain(testData.environment.baseUrl);
        browser.sleep(2000);
    });

    it('Login to livbim', function () {
        loginPage.maxWindow();
       // console.log("111222");
        loginPage.enterUser(testData.username.username1);
        console.log("444455");
        loginPage.enterPassword(testData.password.password);
        loginPage.clickLoginButton();
        browser.sleep(5000);
       // loginPage.isPageLoaded();
    });

    it('Create New RFA', function () {
        requestRFAPage.clickRFA();

    });





});