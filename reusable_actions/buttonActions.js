let actions = function(){

    //click on an element
    this.click = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.click();
                   // return this;
                });
            });
        }
    };
};
module.exports = new actions();
