let searchPage = require('../pages/searchPage');
let searchResultPage = require('../pages/searchResultPage');
let actions = require('../reusable_actions/buttonActions');
let testData = require('../additional_files/testData.json');

describe('Google Search Tests execution on' + browser.browserName, function () {

    'use strict';

  //  var searchPage = new pages.searchPage();
  //  var searchResultPage = new pages.searchResultPage();

    it('Open Google Search page', function () {
        searchPage.openSearchPage(testData.search.baseUrl);
        searchPage.isPageLoaded();
        expect(browser.getCurrentUrl()).toContain(testData.search.baseUrl);
    });

    it('search automation', function () {
        searchPage.enterSearchKeyword(testData.keywords.keyword1).search();
        searchResultPage.isPageLoaded();
        expect(browser.getCurrentUrl()).toContain(testData.keywords.keyword1.replace(new RegExp(" ", 'g'), "+"));
    });

    it('search Hello Selenium', function () {
        searchPage.enterSearchKeyword(testData.keywords.keyword2).search();
        searchResultPage.isPageLoaded("1");
        expect(browser.getCurrentUrl()).toContain(testData.keywords.keyword2.replace(new RegExp(" ", 'g'), "+"));
    });

    it('Open Hello Selenium Result Page', function () {
        searchResultPage.openSearchResultLink();
        expect(browser.getCurrentUrl()).toContain(testData.results.result1);
    });
});
