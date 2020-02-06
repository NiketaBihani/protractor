let formpage = function () {

    let name = element(by.name('name'));
    let emailId = element(by.css('input[name="email"]'));
    let password = element(by.id('exampleInputPassword1'));
    let checkBox = element(by.css('input[id*="exampleInputPassword1"]'));
    let selectGender = element(by.cssContainingText('select[id*="exampleFormControlSelect1"] option', "Female"));
    //let selectRadioButton = element(by.name('inlineRadioOptions'));
    let selectRadioButton = element(by.css('div[class*="form-check form-check-inline"] input[value*="option2"]'));
    let submit = element(by.buttonText('Submit'));
    let successMessage = element(by.css('div[class*="success"]'));
    let errorMessage = element(by.css('div[class*="alert alert-danger"]'));
    let clickShop = element(by.linkText('Shop'));
    let checkoutButton = element(by.partialLinkText('Checkout'));
    let addButton = element(by.css('button[class*="btn-info"]'));
    let fetchAmountOfItem = element(by.xpath('//tbody/tr/td[4]/strong'));
    let totalAmount = element(by.xpath('//tbody/tr[3]/td[5]/h3/strong'));


    this.get = function (url) {
        browser.get(url);
    }

    this.name = function (value) {
        name.sendKeys(value);
    };

    this.emailId = function (id) {
        emailId.sendKeys(id);
    };

    this.password = function (pwd) {
        password.sendKeys(pwd);
    };

    this.checkBox = function () {
        checkBox.click();
    };

    this.gender = function () {
        selectGender.click();
    };

    this.radioButton = function () {
        //element.all(element(selectRadioButton)).first().click();
        selectRadioButton.click();
    };

    this.submitButton = function () {
        submit.click();
    };

    this.successMessage = function () {
        successMessage.getText().then(function (text) {

            // let EC = protractor.ExpectedConditions;
            // var isWait = EC.visibilityOf(text);
            console.log(text);
        });
    }

    this.nameClear = function () {
        name.clear();
    }
    this.captureErrorMessage = function () {
        errorMessage.getText().then(function (text) {
            expect(text).toEqual('Name should be at least 2 characters');
            console.log(text);
        });
    }

    this.clickShop = function () {
        clickShop.click();
    };

    this.selectItems = function (product) {

        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('h4[class="card-title"] a')).getText().then(function (itemName) {
                {
                    if (itemName == product) {
                        //console.log("In IF Loop");
                        item.element(by.css('button[class*="btn-info"]')).click();
                    }
                }
            });

        });

        checkoutButton.getText().then(function (text) {
            console.log(text);
            var strCount = text.split("(");
            var extractedNum = Number(strCount[1].trim().charAt(0));
            // expect(extractedNum.toBe(1));
            console.log("Count of items added to the cart is: " + extractedNum);
            // return extractedNum from this function and feed to another method, and using jasmine assertions (expect.tobe) match with cart items added.
            // return extractedNum;

        });
    };

    this.checkoutButtonClick = function () {
        checkoutButton.click();
        browser.sleep(2000);
    };

    this.amountOfItems = function () {
                
                // element.all(by.xpath("//tbody/tr")).each(function (values) {
                // values.element(by.xpath('//tr/td[4]/strong')).getText().then(function(items)
                // {
                //     console.log("Zeroth index is: "+items.get(0));
                // });


                element(by.xpath('//tr/td[4]/strong')).getText().then(function (amt1) {

                    var amountOne = amt1.split(' ');
                    var value1 = Number(amountOne[1]);
                    console.log("amount is: " + value1);

                    element(by.xpath('(//tr/td[4]/strong)[2]')).getText().then(function (amt2) {

                        var amountTwo = amt2.split(' ');
                        var value2 = Number(amountTwo[1]);
                        console.log("amount is: " + value2);

                        var sum = value1 + value2;
                        console.log("Total sum of the items is: " + sum);

                        element(by.xpath('//tr[3]/td[5]/h3/strong')).getText().then(function (tot) {

                        var totalAmount = tot.split(' ');
                        var total = Number(totalAmount[1]);
                        console.log("amount is: " + total);

                        expect(sum).toEqual(total);
                        console.log("Total and sum values matched : test passed");

                        });

                    });
                });
            //});
        }




    };


module.exports = new formpage();