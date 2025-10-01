"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class ChangePasswordPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relative web elements
        this._changePasswordPageOldPasswordInputField = By.xpath("(//input[@type='password'])[1]");
        this._changePasswordPageNewPasswordInputField = By.xpath("(//input[@type='password'])[2]");
        this._changePasswordPageConfirmPasswordInputField = By.xpath("//input[@id='password-confirm']");

        //invalid singular input data - no singular input
        this._noOldPassword = "";

    }

    //invalid user password data input methods - no singular input
    async inputNoOldPasswordIntoOldPasswordInputField(){
        const oldPasswordInputField = await this.driver.findElement(this._changePasswordPageOldPasswordInputField);
        const noOldPassword = this._noOldPassword;
        Logger.info("No user password: ", noOldPassword);
        await oldPasswordInputField.sendKeys(noOldPassword);
    }

}
module.exports = ChangePasswordPageInvalidSingularInput;