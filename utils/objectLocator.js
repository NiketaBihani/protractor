let objectLocator = function(){

    var webElement = null;

    //find locator using provided locator type and locator value
    this.findLocator = function (locatorType,locatorValue) {
        
        // if (typeof locatorType !== 'undefined') {
        //     if (locatorValue.includes('#REPLACE#')) {
        //         locatorValue = locatorValue.replace('#REPLACE#', value);
        //     }
            if (locatorType == 'id') {
                if (locatorValue !== 'undefined') {
                   
                    this.webElement = element(by.id(locatorValue));
                    //console.log(webElement);
                }
            } else if (locatorType == 'name') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.name(locatorValue));
                }
            } else if (locatorType == 'xpath') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.xpath(locatorValue));
                   // console.log(webElement);
                }
            } else if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue));
                }
            }
        };return this.webElement;
    };
//};
//}
module.exports = new objectLocator();




