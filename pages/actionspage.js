let actionspage = function(){

    let first_Input = element(by.model('userInputQuery'));
    let second_Input = element(by.model('locationQuery'));
    let searchButton=element(by.css('button[type="submit"]'));
    
    
    this.get = function(url){
        browser.get(url);
    }
    
    this.enterFirstInput=function(firstNo){
        first_Input.sendKeys(firstNo);
    };
    
    this.enterSecondInput=function(secondNo){
        browser.actions().mouseMove.element((second_Input).sendKeys(secondNo)).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.key.ENTER).perform();
    };
    
    this.clickButton = function(){
        searchButton.click();
    };

};
    
    module.exports = new actionspage();