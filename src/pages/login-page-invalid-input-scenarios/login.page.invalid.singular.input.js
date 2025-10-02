"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class LoginPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._loginPageEmailInputField = By.xpath("//input[@name='email']");
        this._loginPagePasswordInputField = By.xpath("//input[@name='password']");

    }


}
module.exports = LoginPageInvalidSingularInput;