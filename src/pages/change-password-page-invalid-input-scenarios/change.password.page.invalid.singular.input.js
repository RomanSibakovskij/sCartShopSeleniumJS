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
        this._noNewPassword = "";

    }

    //invalid user password data input methods - no singular input
    async inputNoOldPasswordIntoOldPasswordInputField(){
        const oldPasswordInputField = await this.driver.findElement(this._changePasswordPageOldPasswordInputField);
        const noOldPassword = this._noOldPassword;
        Logger.info("No user password: ", noOldPassword);
        await oldPasswordInputField.sendKeys(noOldPassword);
    }
    async inputNoNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const noNewPassword = this._noNewPassword;
        Logger.info("No user new password: ", noNewPassword);
        await newPasswordInputField.sendKeys(noNewPassword);
    }
    async inputNoConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const noNewPassword = this._noNewPassword;
        Logger.info("No user matching confirm password: ", noNewPassword);
        await confirmPasswordInputField.sendKeys(noNewPassword);
    }

}
module.exports = ChangePasswordPageInvalidSingularInput;