let mutiformpage = function () {

    let enterName = element(by.model('formData.name'));
    let enterEmail = element(by.model('formData.email'));
    //let nextButton = element(by.buttonText('Next Section '));
    let nextButton = element(by.className('btn btn-block btn-info'));
    let radioButton = element(by.xpath("(//input[@ng-model='formData.type'])[2]"));
    let submitForm = element(by.className('btn btn-danger'));

    this.getUrl = function (url) {
        browser.sleep(3000);
        browser.get(url);
    }

    this.fetchTitle = function (expectTitle) {

        //expect(browser.getTitle()).toContain('title');
        //  return 'Title matched!';
        // } else {
        //     return 'Title not matched!';
        // }
        //expect(browser.getTitle()).toContain('title');
        // var EC = protractor.ExpectedConditions;
        // // Waits for the title to contain 'title'.
        // browser.wait(EC.titleContains('title'), 3000);
        browser.getTitle().then(function(title){
            console.log('Title of the page is:',+title);
        });
        //expect(title.toEqual(expectedTitle));

    };

    this.name = function (name) {
        enterName.sendKeys(name);
    };

    this.enterEmail = function (mail) {
        enterEmail.sendKeys(mail);
    }
    this.nextButton = function () {
        nextButton.click();
    };
    this.radioButton = function () {
        radioButton.click();
    };
    this.submitForm = function () {
        submitForm.click();
    }

};

module.exports = new mutiformpage();



