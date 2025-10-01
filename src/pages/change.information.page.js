"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const TestDataGenerator = require("../pages/utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid edited information input data
        const { editedFirstName, editedLastName } = testDataGenerator.getRandomEditedName();
        this._editedFirstName = editedFirstName;
        this._editedLastName = editedLastName;
        this._editedPhone = "1234567890"; //"0123456789"
        this._editedAddressOne = testDataGenerator.generateRandomAddress(8);
        this._editedAddressTwo = testDataGenerator.generateRandomStreetType();

    }

    //valid user register data input methods
    async inputEditedFirstNameIntoEditedFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._changeInfoFirstNameInputField);
        await editedFirstNameInputField.clear();
        const editedFirstName = this._editedFirstName;
        Logger.info("Valid edited user first name: ", editedFirstName);
        await editedFirstNameInputField.sendKeys(editedFirstName);
    }
    async inputEditedLastNameIntoEditedLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._changeInfoLastNameInputField);
        await editedLastNameInputField.clear();
        const editedLastName = this._editedLastName;
        Logger.info("Valid edited user last name: ", editedLastName);
        await editedLastNameInputField.sendKeys(editedLastName);
    }
    async inputEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._changeInfoAddressOneInputField);
        await editedAddressOneInputField.clear();
        const editedAddressOne = await this._editedAddressOne;
        Logger.info("Valid edited user address one: ", editedAddressOne);
        await editedAddressOneInputField.sendKeys(editedAddressOne);
    }
    async inputEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._changeInfoAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const editedAddressTwo = await this._editedAddressTwo;
        Logger.info("Valid edited user address two (street type): ", editedAddressTwo);
        await editedAddressTwoInputField.sendKeys(editedAddressTwo);
    }

    //click country dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._changeInfoCountryDropdownMenu);
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", countryDropdownMenu);
        await countryDropdownMenu.click();
    }

    //select "Country"  menu option method
    async selectCountryOption(){
        const countryMenuOption = await this.driver.findElement(this._changeInfoCountryOption);
        await countryMenuOption.click();
    }

    //click "Submit Information" button method
    async clickSubmitInfoButton(){
        const submitInfoButton = await this.driver.findElement(this._changeInfoUpdateInfoBtn);
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", submitInfoButton);
        await submitInfoButton.click();
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