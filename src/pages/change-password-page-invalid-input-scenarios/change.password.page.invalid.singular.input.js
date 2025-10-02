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

        //invalid singular input data - too short singular input
        this._tooShortNewPassword = "$5Rte"; //5 chars

        //invalid singular input data - too long singular input
        this._tooLongNewPassword = "DDFD@#$cffds^%&dg"; //17 chars

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

    //invalid user password data input methods - too short singular input
    async inputTooShortNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const tooShortNewPassword = this._tooShortNewPassword;
        Logger.info("Too short user new password: ", tooShortNewPassword);
        await newPasswordInputField.sendKeys(tooShortNewPassword);
    }
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const tooShortNewPassword = this._tooShortNewPassword;
        Logger.info("Too short user matching confirm password: ", tooShortNewPassword);
        await confirmPasswordInputField.sendKeys(tooShortNewPassword);
    }

    //invalid user password data input methods - too long singular input
    async inputTooLongNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const tooLongNewPassword = this._tooLongNewPassword;
        Logger.info("Too long user new password: ", tooLongNewPassword);
        await newPasswordInputField.sendKeys(tooLongNewPassword);
    }
    async inputTooLongConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const tooLongNewPassword = this._tooLongNewPassword;
        Logger.info("Too long user matching confirm password: ", tooLongNewPassword);
        await confirmPasswordInputField.sendKeys(tooLongNewPassword);
    }

}
module.exports = ChangePasswordPageInvalidSingularInput;