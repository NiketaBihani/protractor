let objRepo = require('../resources/objectRepository.json');
let objLocator = require('../utils/objectLocator.js');
let inputBoxActions=require('../reusable_actions/inputBoxActions');
let buttonActions=require('../reusable_actions/buttonActions');
let dropDownActions=require('../reusable_actions/dropDownActions.js');
let verifyActions = require('../reusable_actions/verifyActions.js');
let frameActions=require('../reusable_actions/frameActions.js');
let waitActions=require('../reusable_actions/waitActions');
let testData = require('../resources/testData.json');
//let global = require('../conf/global.js');

let requestRFAPage = function(){
    'use strict';
    // console.log(objRepo.requestForApproval.clickRFA); 
    // var samp = objRepo.requestForApproval.clickRFA;
    // console.log(samp[0]);
    // console.log(samp[1]);
    var clickRFA = objLocator.findLocator(objRepo.requestForApproval.clickRFA[0],objRepo.requestForApproval.clickRFA[1]);
    console.log(clickRFA);

    // var frame = objLocator.findLocator(objRepo.requestForApproval.moveToFrame);
    // var clickNewButton = objLocator.findLocator(objRepo.requestForApproval.clickNewButton);
    // var categoryInput = objLocator.findLocator(objRepo.requestForApproval.categoryInput);
    // var selectCategory = objLocator.findLocator(objRepo.requestForApproval.selectCategory);
    // var clickDoneButton = objLocator.findLocator(objRepo.requestForApproval.clickDoneButton);
    // var severityDropdown = objLocator.findLocator(objRepo.requestForApproval.severityDropdown);
    // var dueDate = objLocator.findLocator(objRepo.requestForApproval.dueDate);
    // var locationInput = objLocator.findLocator(objRepo.requestForApproval.locationInput);
    // var descriptionInput = objLocator.findLocator(objRepo.requestForApproval.descriptionInput);
    // var rfaLabel = objLocator.findLocator(objRepo.requestForApproval.rfaLabel);
    // var label1 = objLocator.findLocator(objRepo.requestForApproval.label1);
    // var label2 = objLocator.findLocator(objRepo.requestForApproval.label2);
    // var addRolePlusButton = objLocator.findLocator(objRepo.requestForApproval.addRolePlusButton);
    // var attachImageButton = objLocator.findLocator(objRepo.requestForApproval.attachImageButton);
    // var clickConfirmButton = objLocator.findLocator(objRepo.requestForApproval.clickConfirmButton);
    // var clickSubmitButton = objLocator.findLocator(objRepo.requestForApproval.clickSubmitButton);
    // var rfaSuccessMessage = objLocator.findLocator(objRepo.requestForApproval.rfaSuccessMessage);

    //dynamic role and user value are called from json file
    // var approver1Label = element(by.xpath("//*[@id='new']/div[2]//div[contains(text(),'" + testData.roles.siteEngineer + "')]"));
    // var clickRadioButton = element(by.xpath("//*[@class='row py-2  align-items-center']/div[contains(text(),'" + testData.roles.siteEngineer + "')]/following-sibling::div[contains(text(),'" + testData.users.user1 + "')]/following-sibling::div"));

    this.getEnvironment = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.clickRFA = function() {
        buttonActions.click(clickRFA);
        return this;
    };

    this.switchToFrame = function() {
        frameActions.switchToFrame(frame);
    };

     this.clickNewButton = function() {
        buttonActions.click(clickNewButton);
        return this;
     };

    this.clickCategory = function() {
         buttonActions.click(clickCategory);
        return this;
    };
    this.selectCategory = function() {
        verifyActions.isCheckboxChecked(selectCategory);
        return this;
    };
    this.clickDoneButton = function() {
        buttonActions.click(clickDoneButton);
        return this;
    };
    this.severityDropdown = function(value) {
        dropDownActions.select(severityDropdown,value)
        return this;
    };

    this.enterLocation = function (value) {
        inputBoxActions.type(locationInput, value);
        return this;
    };

    this.enterDescription = function(value){
        inputBoxActions.type(descriptionInput,value);
    };

    this.addRolePlusButton=function(){
        buttonActions.click(addRolePlusButton);
    };

    this.clickRadioButton=function(){
        verifyActions.isRadioButtonSelected(clickRadioButton);
    }

    this.clickConfirmButton=function(){
        buttonActions.click(clickConfirmButton);
    }

    this.clickSubmitButton=function(){
        buttonActions.click(clickSubmitButton);
    }

};

module.exports = new requestRFAPage();