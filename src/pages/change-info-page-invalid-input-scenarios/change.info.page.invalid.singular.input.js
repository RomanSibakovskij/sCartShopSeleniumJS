"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

const Logger = require("../utilities/logger");

class ChangeInfoPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._changeInfoFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._changeInfoLastNameInputField = By.xpath("//input[@id='last_name']");
        this._changeInfoPhoneInputField = By.xpath("//input[@id='phone']");
        this._changeInfoAddressOneInputField = By.xpath("//input[@id='address1']");
        this._changeInfoAddressTwoInputField = By.xpath("//input[@id='address2']");

        //invalid singular input data - no singular input
        this._noEditedFirstName = "";
        this._noEditedLastName = "";
        this._noEditedPhone = "";
        this._noEditedAddressOne = "";
        this._noEditedAddressTwo = "";

        //invalid singular input data - too short singular input
        this._tooShortFirstName = "A";// 1 char
        this._tooShortLastName = "D";// 1 char

    }

    //invalid singular input methods - no singular input
    async inputNoEditedFirstNameIntoEditedFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._changeInfoFirstNameInputField);
        await editedFirstNameInputField.clear();
        const noEditedFirstName = this._noEditedFirstName;
        Logger.info("No edited user first name: ", noEditedFirstName);
        await editedFirstNameInputField.sendKeys(noEditedFirstName);
    }
    async inputNoEditedLastNameIntoEditedLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._changeInfoLastNameInputField);
        await editedLastNameInputField.clear();
        const noEditedLastName = this._noEditedLastName;
        Logger.info("No edited user last name: ", noEditedLastName);
        await editedLastNameInputField.sendKeys(noEditedLastName);
    }
    async inputNoEditedPhoneIntoEditedPhoneInputField(){
        const editedPhoneInputField = await this.driver.findElement(this._changeInfoPhoneInputField);
        await editedPhoneInputField.clear();
        const noEditedPhone = this._noEditedPhone;
        Logger.info("No edited user phone number: ", noEditedPhone);
        await editedPhoneInputField.sendKeys(noEditedPhone);
    }
    async inputNoEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._changeInfoAddressOneInputField);
        await editedAddressOneInputField.clear();
        const noEditedAddressOne = this._noEditedAddressOne;
        Logger.info("No edited user address one: ", noEditedAddressOne);
        await editedAddressOneInputField.sendKeys(noEditedAddressOne);
    }
    async inputNoEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._changeInfoAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const noEditedAddressTwo = this._noEditedAddressTwo;
        Logger.info("No edited user address two (street type): ", noEditedAddressTwo);
        await editedAddressTwoInputField.sendKeys(noEditedAddressTwo);
    }

    //invalid singular input methods - too short singular input
    async inputTooShortEditedFirstNameIntoEditedFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._changeInfoFirstNameInputField);
        await editedFirstNameInputField.clear();
        const tooShortEditedFirstName = this._tooShortFirstName;
        Logger.info("Too short edited user first name: ", tooShortEditedFirstName);
        await editedFirstNameInputField.sendKeys(tooShortEditedFirstName);
    }
    async inputTooShortEditedLastNameIntoEditedLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._changeInfoLastNameInputField);
        await editedLastNameInputField.clear();
        const tooShortEditedLastName = this._tooShortLastName;
        Logger.info("Too short edited user last name: ", tooShortEditedLastName);
        await editedLastNameInputField.sendKeys(tooShortEditedLastName);
    }

}
module.exports = ChangeInfoPageInvalidSingularInput;