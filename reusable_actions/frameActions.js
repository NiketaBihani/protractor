let frameActions = function(){

    //click on an element
    this.switchToFrame = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    browser.switchTo().frame(element).getWebElement();
                   // return this;
                });
            });
        }
    };

    this.switchBackToDefault = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    browser.switchToParentFrame();
                   // return this;
                });
            });
        }
    };
};
module.exports = new frameActions();
