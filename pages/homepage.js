let homepage = function(){

let first_Number = element(by.model('first'));
let second_Number = element(by.model('second'));
let goButton=element(by.css('[ng-click="doAddition()"]'));


this.get = function(url){
    browser.get(url);
}

this.enterFirstNumber=function(firstNo){
    first_Number.sendKeys(firstNo);
};

this.enterSecondNumber=function(secondNo){
    second_Number.sendKeys(secondNo);
};

this.clickGo = function(){
    goButton.click();
};

this.verifyResult=function(){
    //let  output = element(by.cssContainingText('.ng-binding',result));
    //expect(output.getText()).toEqual(result);

    element.all(by.repeater("result in memory")).each(function(item)
    {
      item.element(by.css("td:nth-child(3)")).getText().then(function(text)
      {
          console.log("Addition of two numbers is:"+text);
      })

    });

    

}



};

module.exports = new homepage();