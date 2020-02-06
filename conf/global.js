(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.reusable_actions = {};
    global.reusable_actions.inputBoxActions = require('./reusable_actions/inputBoxActions.js');
    global.reusable_actions.buttonActions = require('./reusable_actions/buttonActions.js');
    global.reusable_actions.dropDownActions = require('./reusable_actions/dropDownActions.js');
    global.reusable_actions.mouseActions = require('./reusable_actions/mouseActions.js');
    global.reusable_actions.waitActions = require('./reusable_actions/waitActions.js');
    global.reusable_actions.verifyActions = require('./reusable_actions/verifyActions.js');

    global.utils = {};
    global.utils.objectLocator = require('../utils/objectLocator.js');

    global.resources = {};
    global.resources.objectRepository = require('../resources/objectRepository.json');
    global.resources.testData = require('../resources/testData.json');
    
    
    global.pages = {};
    global.pages.searchPage = require('./pages/searchPage.js');
    global.pages.searchResultPage = require('./pages/searchResultPage.js');

}());
