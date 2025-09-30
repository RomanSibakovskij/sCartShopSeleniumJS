"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class LoginPage extends BasePage{

    constructor(driver) {
        super(driver);

        //login page web elements
        this._loginPageTitle = By.css("h2");
        //input form
        this._loginPageEmailSubtext = By.xpath("//label[@for='email']");
        this._loginPageEmailInputField = By.xpath("//input[@name='email']");
        this._loginPagePasswordSubtext = By.xpath("//label[@for='password']");
        this._loginPagePasswordInputField = By.xpath("//input[@name='password']");
        //links
        this._loginPageForgotPasswordLink = By.xpath("//p[@class='lost_password form-group']/a[1]");
        this._loginPageAccountRegisterLink = By.xpath("//p[@class='lost_password form-group']/a[2]");
        //button
        this._loginPageLoginButton = By.xpath("//button[@class='button button-secondary']");

    }

    //click "Account register" link method
    async clickAccountRegisterLink(){
        const accountRegisterLink = await this.driver.findElement(this._loginPageAccountRegisterLink);
        await accountRegisterLink.click();
    }

    //login page text element getters
    async getLoginPageTitle(){
        const loginPageTitle = await this.driver.findElement(this._loginPageTitle);
        return await loginPageTitle.getText();
    }
    //input form
    async getLoginPageEmailSubtext(){
        const loginPageEmailSubtext = await this.driver.findElement(this._loginPageEmailSubtext);
        if (!this.driver) {
            throw new Error('Driver is null or undefined.');
        }
        return await loginPageEmailSubtext.getText();
    }
    async getLoginPagePasswordSubtext(){
        const loginPagePasswordSubtext = await this.driver.findElement(this._loginPagePasswordSubtext);
        return await loginPagePasswordSubtext.getText();
    }
    //links
    async getLoginPageForgotPasswordLinkText(){
        const loginPageForgotPasswordLinkText = await this.driver.findElement(this._loginPageForgotPasswordLink);
        return await loginPageForgotPasswordLinkText.getText();
    }
    async getLoginPageAccountRegisterLinkText(){
        const loginPageAccountRegisterLinkText = await this.driver.findElement(this._loginPageAccountRegisterLink);
        return await loginPageAccountRegisterLinkText.getText();
    }

    //login page singular input error message getter
    async getLoginPageSingularInputErrorMessage(){
        const loginPageSingularInputErrorMessage = await this.driver.findElement(this._loginPageInvalidSingularInputError);
        return await loginPageSingularInputErrorMessage.getText();
    }

    //login page page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isLoginPageWebElementDisplayed(){
        const elementsToCheck = [
            this._loginPageTitle,
            this._loginPageEmailSubtext,
            this._loginPageEmailInputField,
            this._loginPagePasswordSubtext,
            this._loginPagePasswordInputField,
            this._loginPageForgotPasswordLink,
            this._loginPageAccountRegisterLink,
            this._loginPageLoginButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { LoginPage };