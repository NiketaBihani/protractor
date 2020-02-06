let objRepo = require('../resources/objectRepository.json');
let objLocator = require('../utils/objectLocator.js');
let inputBoxActions=require('../reusable_actions/inputBoxActions');
let buttonActions=require('../reusable_actions/buttonActions');
let waitActions=require('../reusable_actions/waitActions');

let loginpage = function(){
    'use strict';
  
    var enterUserName = element(by.id(objRepo.login.userName[0],objRepo.login.userName[1]));
    var enterPassword = objLocator.findLocator(objRepo.login.passWord[0],objRepo.login.passWord[1]);
    var clickLoginButton = objLocator.findLocator(objRepo.login.loginButton[0],objRepo.login.loginButton[1]);
    var logo = objLocator.findLocator(objRepo.login.livbimLogo[0],objRepo.login.livbimLogo[1]);

    console.log(objRepo.login.userName); 
    var samp = objRepo.login.userName;
    console.log(samp[0]);
    console.log(samp[1]);
    console.log(enterUserName);

    this.maxWindow = function(){
        browser.driver.manage().window().maximize();
    }

    this.enterUser = function (value) {
        console.log(enterUserName);
        inputBoxActions.type(enterUserName, value);
        console.log(enterUserName);
        //this.enterUserName.sendKeys(value);
        return this;
    };

    this.enterPassword = function (value) {
        inputBoxActions.type(enterPassword, value);
        return this;
    };

    this.clickLoginButton = function() {
        buttonActions.click(clickLoginButton);
    }

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(logo);
        return this;


}};
module.exports = new loginpage();