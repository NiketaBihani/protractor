let objRepo = require('../resources/objectRepository.json');
let objLocator = require('../utils/objectLocator.js');
let inputBoxActions=require('../reusable_actions/inputBoxActions');
let buttonActions=require('../reusable_actions/buttonActions');
let waitActions=require('../reusable_actions/waitActions');

let searchpage = function(){
    'use strict';
    // Login page
    //var objRepo = require('../resources/objectRepository.json');

    // var objLocator = new utils.objectLocator();
    // var inputBoxActions = new reusable_actions.inputBoxActions();
    // var buttonActions = new reusable_actions.buttonActions();
    // var waitActions = new reusable_actions.waitActions();

    var googleLogo = objLocator.findLocator(objRepo.searchPag.googleLogo);
    var searchInput = objLocator.findLocator(objRepo.searchPag.searchInput);
    var searchButton = objLocator.findLocator(objRepo.searchPag.searchButton);
    var goButton=objLocator.findLocator(objRepo.searchPag.goButton);

    this.openSearchPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.enterSearchKeyword = function (value) {
        inputBoxActions.type(searchInput, value);
        return this;
    };

    this.search = function () {
        buttonActions.click(searchButton);
        return this;
    };

    this.go=function() {
        buttonActions.click(goButton);
        return this;

    }

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(googleLogo);
        return this;
    }
};
module.exports = new searchpage();