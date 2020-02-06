let multiformpage=require('../pages/mutiformpage')

describe('multiformtest',function(){

it ('registrationtest',function(){

    
    multiformpage.getUrl('http://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile');
   // browser.waitForAngular();
    browser.sleep(2000);
    browser.driver.manage().window().maximize();
    browser.refresh();
    browser.sleep(2000);
    browser.refresh();
    multiformpage.fetchTitle('http://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile');
    multiformpage.name('niketa');
    multiformpage.enterEmail('abc@gmail.com');
    multiformpage.nextButton();
    browser.sleep(2000);
    

});

it ('interest test', function() {

    multiformpage.radioButton();
    multiformpage.nextButton();
});

it ('submit form',function(){

    multiformpage.submitForm();
    browser.sleep(2000);
    browser.switchTo().alert().accept().then(function()
    {
    browser.sleep(2000);});
});

});