"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class RegisterPage extends BasePage{

    constructor(driver) {
        super(driver);

        //register page web elements
        this._registerPageTitle = By.xpath("//h2");
        //input form
        this._registerPageFirstNameInputField = By.xpath("//div[@id='collapseExample']/div[1]/input");
        this._registerPageLastNameInputField = By.xpath("//div[@id='collapseExample']/div[2]/input");
        this._registerPageEmailInputField = By.xpath("//div[@id='collapseExample']/div[3]/input");
        this._registerPagePhoneInputField = By.xpath("//div[@id='collapseExample']/div[4]/input");
        this._registerPageAddressOneInputField = By.xpath("//div[@id='collapseExample']/div[5]/input");
        this._registerPageAddressTwoInputField = By.xpath("//div[@id='collapseExample']/div[6]/input");
        this._registerPageCountryDropdownMenu = By.xpath("//div[@id='collapseExample']/div[7]/select");
        this._registerPageUSCountryOption = By.xpath("//div[@id='collapseExample']/div[7]/select/option[@value='US']");
        this._registerPagePasswordInputField = By.xpath("//div[@id='collapseExample']/div[8]/input");
        this._registerPageConfirmPasswordInputField = By.xpath("//div[@id='collapseExample']/div[9]/input");
        //button
        this._registerPageSignUpButton = By.xpath("//button[@id='gp247-button-process']");
        //register success message
        this._registerPageSignUpSuccessMessage = By.xpath("//div[@role='alert']");

    }

    //register page text element getter
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }

    //register page sign up success message getter
    async getRegisterPageSignUpSuccessMessage(){
        const registerPageSignUpSuccessMessage = await this.driver.findElement(this._registerPageSignUpSuccessMessage);
        return await registerPageSignUpSuccessMessage.getText();
    }

    //register page singular input error message getter
    async getRegisterPageSingularInputErrorMessage(){
        const registerPageSingularInputErrorMessage = await this.driver.findElement(this._registerPageInvalidSingularInputError);
        return await registerPageSingularInputErrorMessage.getText();
    }

    //register page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageTitle,
            this._registerPageFirstNameInputField,
            this._registerPageLastNameInputField,
            this._registerPageEmailInputField,
            this._registerPagePhoneInputField,
            this._registerPageAddressOneInputField,
            this._registerPageAddressTwoInputField,
            this._registerPageCountryDropdownMenu,
            this._registerPagePasswordInputField,
            this._registerPageConfirmPasswordInputField,
            this._registerPageSignUpButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterPage };