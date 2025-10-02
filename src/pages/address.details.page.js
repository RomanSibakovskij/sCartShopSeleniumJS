"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class AddressDetailsPage extends BasePage{

    constructor(driver) {
        super(driver);

        //address details page web elements
        this._addressDetailsPageTitle = By.xpath("//h3");
        //input form
        this._addressDetailsPageFirstNameSubtext = By.xpath("//label[@for='first_name']");
        this._addressDetailsPageFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._addressDetailsPageLastNameSubtext = By.xpath("//label[@for='last_name']");
        this._addressDetailsPageLastNameInputField = By.xpath("//input[@id='last_name']");
        this._addressDetailsPagePhoneSubtext = By.xpath("//label[@for='phone']");
        this._addressDetailsPagePhoneInputField = By.xpath("//input[@id='phone']");
        this._addressDetailsPageAddressOneSubtext = By.xpath("//label[@for='address1']");
        this._addressDetailsPageAddressOneInputField = By.xpath("//input[@id='address1']");
        this._addressDetailsPageAddressTwoSubtext = By.xpath("//label[@for='address2']");
        this._addressDetailsPageAddressTwoInputField = By.xpath("//input[@id='address2']");
        this._addressDetailsPageCountrySubtext = By.xpath("//label[@for='country']");
        this._addressDetailsPageCountryDropdownMenu = By.xpath("//select");
        this._addressDetailsPageTurkeyCountryOption = By.xpath("//select/option[@value='TR']");
        this._addressDetailsPageSelectCountryOption = By.xpath("//select/option[1]");
        //button
        this._addressDetailsPageUpdateInfoBtn = By.xpath("//button[@class='button button-secondary']");
        //update information success message
        this._addressDetailsPageUpdateSuccessMessage = By.xpath("//div[@role='alert']");
        //singular input error message
        this._addressDetailsPageInvalidSingularInputError = By.xpath("//span[@class='help-block']");

    }

    //address details page text element getters
    async getAddressDetailsPageTitle(){
        const addressDetailsPageTitle = await this.driver.findElement(this._addressDetailsPageTitle);
        return await addressDetailsPageTitle.getText();
    }
    //input form
    async getAddressDetailsPageFirstNameSubtext(){
        const addressDetailsPageFirstNameSubtext = await this.driver.findElement(this._addressDetailsPageFirstNameSubtext);
        return await addressDetailsPageFirstNameSubtext.getText();
    }
    async getAddressDetailsPageLastNameSubtext(){
        const addressDetailsPageLastNameSubtext = await this.driver.findElement(this._addressDetailsPageLastNameSubtext);
        return await addressDetailsPageLastNameSubtext.getText();
    }
    async getAddressDetailsPagePhoneSubtext(){
        const addressDetailsPagePhoneSubtext = await this.driver.findElement(this._addressDetailsPagePhoneSubtext);
        return await addressDetailsPagePhoneSubtext.getText();
    }
    async getAddressDetailsPageAddressOneSubtext(){
        const addressDetailsPageAddressOneSubtext = await this.driver.findElement(this._addressDetailsPageAddressOneSubtext);
        return await addressDetailsPageAddressOneSubtext.getText();
    }
    async getAddressDetailsPageAddressTwoSubtext(){
        const addressDetailsPageAddressTwoSubtext = await this.driver.findElement(this._addressDetailsPageAddressTwoSubtext);
        return await addressDetailsPageAddressTwoSubtext.getText();
    }
    async getAddressDetailsPageCountrySubtext(){
        const addressDetailsPageCountrySubtext = await this.driver.findElement(this._addressDetailsPageCountrySubtext);
        return await addressDetailsPageCountrySubtext.getText();
    }

    //address details page sign up success message getter
    async getAddressDetailsUpdateSuccessMessage(){
        const addressDetailsUpdateSuccessMessage = await this.driver.findElement(this._addressDetailsPageUpdateSuccessMessage);
        return await addressDetailsUpdateSuccessMessage.getText();
    }

    //address details page singular input error message getter
    async getAddressDetailsSingularInputErrorMessage(){
        const addressDetailsPageSingularInputErrorMessage = await this.driver.findElement(this._addressDetailsPageInvalidSingularInputError);
        return await addressDetailsPageSingularInputErrorMessage.getText();
    }

    //address details page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddressDetailsPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addressDetailsPageTitle,
            this._addressDetailsPageFirstNameSubtext,
            this._addressDetailsPageFirstNameInputField,
            this._addressDetailsPageLastNameSubtext,
            this._addressDetailsPageLastNameInputField,
            this._addressDetailsPagePhoneSubtext,
            this._addressDetailsPagePhoneInputField,
            this._addressDetailsPageAddressOneSubtext,
            this._addressDetailsPageAddressOneInputField,
            this._addressDetailsPageAddressTwoSubtext,
            this._addressDetailsPageAddressTwoInputField,
            this._addressDetailsPageCountrySubtext,
            this._addressDetailsPageCountryDropdownMenu,
            this._addressDetailsPageUpdateInfoBtn
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AddressDetailsPage };