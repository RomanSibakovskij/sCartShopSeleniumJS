"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("../pages/utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid address details input data
        this._editedAddressOne = testDataGenerator.generateRandomAddress(8);
        this._editedAddressTwo = testDataGenerator.generateRandomStreetType();

    }

    //valid edited address details input methods
    async inputEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._addressDetailsPageAddressOneInputField);
        await editedAddressOneInputField.clear();
        const editedAddressOne = await this._editedAddressOne;
        Logger.info("Valid edited user address one (address details): ", editedAddressOne);
        await editedAddressOneInputField.sendKeys(editedAddressOne);
    }
    async inputEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._addressDetailsPageAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const editedAddressTwo = await this._editedAddressTwo;
        Logger.info("Valid edited user address two (street type) (address details): ", editedAddressTwo);
        await editedAddressTwoInputField.sendKeys(editedAddressTwo);
    }

    //click "Country" dropdown menu method
    async clickAddressDetailsPageCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._addressDetailsPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select "Turkey" country option
    async selectTRCountryOption(){
        const turkeyCountryOption = await this.driver.findElement(this._addressDetailsPageTurkeyCountryOption);
        await turkeyCountryOption.click();
    }

    //click "Update Information" button method
    async clickUpdateInfoButton(){
        const updateInfoButton = await this.driver.findElement(this._addressDetailsPageUpdateInfoBtn);
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", updateInfoButton);
        await updateInfoButton.click();
    }

    //select "Country" country option
    async selectCountryOption(){
        const countryOption = await this.driver.findElement(this._addressDetailsPageSelectCountryOption);
        await countryOption.click();
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