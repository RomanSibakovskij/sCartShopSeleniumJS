"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class ChangeInformationPage extends BasePage{

    constructor(driver) {
        super(driver);

        //change information page web elements
        this._changeInfoPageTitle = By.xpath("//h6");
        //input form
        this._changeInfoFirstNameSubtext = By.xpath("//label[@for='first_name']");
        this._changeInfoFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._changeInfoLastNameSubtext = By.xpath("//label[@for='last_name']");
        this._changeInfoLastNameInputField = By.xpath("//input[@id='last_name']");
        this._changeInfoPhoneSubtext = By.xpath("//label[@for='phone']");
        this._changeInfoPhoneInputField = By.xpath("//input[@id='phone']");
        this._changeInfoEmailSubtext = By.xpath("//label[@for='email']");
        this._changeInfoEmail = By.xpath("//form/div[4]//div[@class='col-md-6']");
        this._changeInfoAddressOneSubtext = By.xpath("//label[@for='address1']");
        this._changeInfoAddressOneInputField = By.xpath("//input[@id='address1']");
        this._changeInfoAddressTwoSubtext = By.xpath("//label[@for='address2']");
        this._changeInfoAddressTwoInputField = By.xpath("//input[@id='address2']");
        this._changeInfoCountrySubtext = By.xpath("//label[@for='country']");
        this._changeInfoCountryDropdownMenu = By.xpath("//select");
        this._changeInfoCountryOption = By.xpath("//select/option[1]");
        //button
        this._changeInfoUpdateInfoBtn = By.xpath("//button[@class='button button-secondary']");
        //update information success message
        this._changeInfoPageUpdateSuccessMessage = By.xpath("//div[@role='alert']");

    }

    //change information page text element getters
    async getChangeInformationPageTitle(){
        const changeInformationPageTitle = await this.driver.findElement(this._changeInfoPageTitle);
        return await changeInformationPageTitle.getText();
    }
    //input form
    async getChangeInfoPageFirstNameSubtext(){
        const changeInfoPageFirstNameSubtext = await this.driver.findElement(this._changeInfoFirstNameSubtext);
        return await changeInfoPageFirstNameSubtext.getText();
    }
    async getChangeInfoPageLastNameSubtext(){
        const changeInfoPageLastNameSubtext = await this.driver.findElement(this._changeInfoLastNameSubtext);
        return await changeInfoPageLastNameSubtext.getText();
    }
    async getChangeInfoPagePhoneSubtext(){
        const changeInfoPagePhoneSubtext = await this.driver.findElement(this._changeInfoPhoneSubtext);
        return await changeInfoPagePhoneSubtext.getText();
    }
    async getChangeInfoPageEmailSubtext(){
        const changeInfoPageEmailSubtext = await this.driver.findElement(this._changeInfoEmailSubtext);
        return await changeInfoPageEmailSubtext.getText();
    }
    async getChangeInfoPageEmail(){
        const changeInfoPageEmail = await this.driver.findElement(this._changeInfoEmail);
        return await changeInfoPageEmail.getText();
    }
    async getChangeInfoPageAddressOneSubtext(){
        const changeInfoPageAddressOneSubtext = await this.driver.findElement(this._changeInfoAddressOneSubtext);
        return await changeInfoPageAddressOneSubtext.getText();
    }
    async getChangeInfoPageAddressTwoSubtext(){
        const changeInfoPageAddressTwoSubtext = await this.driver.findElement(this._changeInfoAddressTwoSubtext);
        return await changeInfoPageAddressTwoSubtext.getText();
    }
    async getChangeInfoPageCountrySubtext(){
        const changeInfoPageCountrySubtext = await this.driver.findElement(this._changeInfoCountrySubtext);
        return await changeInfoPageCountrySubtext.getText();
    }

    //change information page sign up success message getter
    async getChangeInfoPageUpdateSuccessMessage(){
        const changeInfoUpdateSuccessMessage = await this.driver.findElement(this._changeInfoPageUpdateSuccessMessage);
        return await changeInfoUpdateSuccessMessage.getText();
    }

    //change information page singular input error message getter
    async getChangeInfoPageSingularInputErrorMessage(){
        const changeInfoPageSingularInputErrorMessage = await this.driver.findElement(this._changeInfoPageInvalidSingularInputErrorMessage);
        return await changeInfoPageSingularInputErrorMessage.getText();
    }

    //change information page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isChangeInfoPageWebElementDisplayed(){
        const elementsToCheck = [
            this._changeInfoPageTitle,
            this._changeInfoFirstNameSubtext,
            this._changeInfoFirstNameInputField,
            this._changeInfoLastNameSubtext,
            this._changeInfoLastNameInputField,
            this._changeInfoPhoneSubtext,
            this._changeInfoPhoneInputField,
            this._changeInfoEmailSubtext,
            this._changeInfoEmail,
            this._changeInfoAddressOneSubtext,
            this._changeInfoAddressOneInputField,
            this._changeInfoAddressTwoSubtext,
            this._changeInfoAddressTwoInputField,
            this._changeInfoCountrySubtext,
            this._changeInfoCountryDropdownMenu,
            this._changeInfoUpdateInfoBtn
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ChangeInformationPage };