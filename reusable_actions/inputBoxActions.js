let inputBoxActions = function(){

    //type a value in input box
    
    this.type = function (element, value) {
        console.log("heyy type it..1");
        if (typeof element !== 'undefined') {
            console.log("heyy type it..2");
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') {
                        console.log("heyy type it..3");
                        this.element.sendKeys(this.value);
                    }
                    return this;
                });
           });
        };
    };

    //type a value in input box and press enter key
    this.typeAndEnter = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value + '\13');
                    }
                    return this;
                });
            });
        }
    };

    //verify a value in input box
    this.verifyValue = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') {
                        actualValue=element.getAttribute('value').toEqual(value);
                    }
                    return actualValue;
                });
            });
        }
    };
};
module.exports = new inputBoxActions();