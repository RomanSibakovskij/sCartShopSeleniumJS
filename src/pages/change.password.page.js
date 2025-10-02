"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const { RegisterPage } = require("../pages/register.page.js");
const TestDataGenerator = require("../pages/utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

class ChangePasswordPage extends BasePage{

    constructor(driver) {
        super(driver);

        //change password page web elements
        this._changePasswordPageTitle = By.xpath("//h6");
        //input form
        this._changePasswordPageOldPasswordSubtext = By.xpath("(//label[@for='password'])[1]");
        this._changePasswordPageOldPasswordInputField = By.xpath("(//input[@type='password'])[1]");
        this._changePasswordPageNewPasswordSubtext = By.xpath("(//label[@for='password'])[2]");
        this._changePasswordPageNewPasswordInputField = By.xpath("(//input[@type='password'])[2]");
        this._changePasswordPageConfirmPasswordSubtext = By.xpath("//label[@for='password-confirm']");
        this._changePasswordPageConfirmPasswordInputField = By.xpath("//input[@id='password-confirm']");
        //button
        this._changePasswordPageUpdateInfoButton = By.xpath("//button[@class='button button-secondary']");
        //update password success message
        this._changePasswordPageUpdateSuccessMessage = By.xpath("//div[@role='alert']");
        //singular input error message
        this._changePasswordPageInvalidSingularInputError = By.xpath("//span[@class='help-block']");

        const registerPage = new RegisterPage(this.driver);
        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid edited information input data
        this._oldPassword = registerPage.getPassword();
        this._newPassword = "Ganger334";

    }

    //valid user password data input methods
    async inputOldPasswordIntoOldPasswordInputField(){
        const oldPasswordInputField = await this.driver.findElement(this._changePasswordPageOldPasswordInputField);
        const oldPassword = await this._oldPassword;
        Logger.info("Valid user password: ", oldPassword);
        await oldPasswordInputField.sendKeys(oldPassword);
    }
    async inputNewPasswordIntoNewPasswordInputField(){
        const newPasswordInputField = await this.driver.findElement(this._changePasswordPageNewPasswordInputField);
        const newPassword = this._newPassword;
        Logger.info("Valid user new password: ", newPassword);
        await newPasswordInputField.sendKeys(newPassword);
    }
    async inputConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._changePasswordPageConfirmPasswordInputField);
        const newPassword = this._newPassword;
        Logger.info("Valid user matching confirm password: ", newPassword);
        await confirmPasswordInputField.sendKeys(newPassword);
    }

    //click "Submit Information" button method
    async clickSubmitInfoButton(){
        const submitInfoButton = await this.driver.findElement(this._changePasswordPageUpdateInfoButton);
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", submitInfoButton);
        await submitInfoButton.click();
    }

    //change password page text getters
    async getChangePasswordPageTitle(){
        const changePasswordPageTitle = await this.driver.findElement(this._changePasswordPageTitle);
        return await changePasswordPageTitle.getText();
    }
    //input form
    async getChangePasswordPageOldPasswordSubtext(){
        const changePasswordPageOldPasswordSubtext = await this.driver.findElement(this._changePasswordPageOldPasswordSubtext);
        return await changePasswordPageOldPasswordSubtext.getText();
    }
    async getChangePasswordPageNewPasswordSubtext(){
        const changePasswordPageNewPasswordSubtext = await this.driver.findElement(this._changePasswordPageNewPasswordSubtext);
        return await changePasswordPageNewPasswordSubtext.getText();
    }
    async getChangePasswordPageConfirmPasswordSubtext(){
        const changePasswordPageConfirmPasswordSubtext = await this.driver.findElement(this._changePasswordPageConfirmPasswordSubtext);
        return await changePasswordPageConfirmPasswordSubtext.getText();
    }

    //private data getter
    async getNewPassword(){return this._newPassword;}

    //change password page sign up success message getter
    async getChangePasswordPageUpdateSuccessMessage(){
        const changePasswordUpdateSuccessMessage = await this.driver.findElement(this._changePasswordPageUpdateSuccessMessage);
        return await changePasswordUpdateSuccessMessage.getText();
    }

    //change password page singular input error message getter
    async getChangePasswordPageSingularInputErrorMessage(){
        const changePasswordPageSingularInputErrorMessage = await this.driver.findElement(this._changePasswordPageInvalidSingularInputError);
        return await changePasswordPageSingularInputErrorMessage.getText();
    }

    //change password page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isChangePasswordPageWebElementDisplayed(){
        const elementsToCheck = [
            this._changePasswordPageTitle,
            this._changePasswordPageOldPasswordSubtext,
            this._changePasswordPageOldPasswordInputField,
            this._changePasswordPageNewPasswordSubtext,
            this._changePasswordPageNewPasswordInputField,
            this._changePasswordPageConfirmPasswordSubtext,
            this._changePasswordPageConfirmPasswordInputField,
            this._changePasswordPageUpdateInfoButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ChangePasswordPage };