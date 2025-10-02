"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class LoginPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._loginPageEmailInputField = By.xpath("//input[@name='email']");
        this._loginPagePasswordInputField = By.xpath("//input[@name='password']");

        //invalid singular input - no singular input
        this._noLoginEmail = "";

    }

    //invalid login input data methods - no singular input
    async inputNoLoginEmailIntoLoginEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No user login email: ", noLoginEmail);
        await loginEmailInputField.sendKeys(noLoginEmail);
    }

}
module.exports = LoginPageInvalidSingularInput;