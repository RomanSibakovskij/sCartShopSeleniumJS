"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");

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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input data - no singular input
        this._noEditedFirstName = "";
        this._noEditedLastName = "";
        this._noEditedPhone = "";
        this._noEditedAddressOne = "";
        this._noEditedAddressTwo = "";

        //invalid singular input data - too short singular input
        this._tooShortFirstName = "A";// 1 char
        this._tooShortLastName = "D";// 1 char
        this._tooShortPhone = "0123456"; // 7 chars
        this._tooShortAddressOne = "3 S";// 3 chars
        this._tooShortAddressTwo = "Bld";// 3 chars

        //invalid singular input data - too long singular input
        this._tooLongFirstName = "Asdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg";// 100 chars
        this._tooLongLastName = "Dsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg";// 100 chars
        this._tooLongPhone = "012345678901234"; // 15 chars
        this._tooLongAddressOne = testDataGenerator.generateRandomAddress(97);// 101 chars
        this._tooLongAddressTwo = "Bsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhgs";// 101 chars

        //invalid singular input data - invalid singular input format
        this._invalidFirstNameFormat = "!@#@#$#$%";// special symbols only
        this._invalidLastNameFormat = "@!$@#$%$#";// special symbols only
        this._invalidPhoneFormat = "!@#$@#$"; // special symbols only
        this._invalidAddressOneFormat = "@#$$#%^";// special symbols only
        this._invalidAddressTwoFormat = "@$@#%$#%";// special symbols only

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
    async inputTooShortEditedPhoneIntoEditedPhoneInputField(){
        const editedPhoneInputField = await this.driver.findElement(this._changeInfoPhoneInputField);
        await editedPhoneInputField.clear();
        const tooShortEditedPhone = this._tooShortPhone;
        Logger.info("Too short edited user phone number: ", tooShortEditedPhone);
        await editedPhoneInputField.sendKeys(tooShortEditedPhone);
    }
    async inputTooShortEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._changeInfoAddressOneInputField);
        await editedAddressOneInputField.clear();
        const tooShortEditedAddressOne = this._tooShortAddressOne;
        Logger.info("Too short edited user address one: ", tooShortEditedAddressOne);
        await editedAddressOneInputField.sendKeys(tooShortEditedAddressOne);
    }
    async inputTooShortEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._changeInfoAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const tooShortEditedAddressTwo = this._tooShortAddressTwo;
        Logger.info("Too short edited user address two (street type): ", tooShortEditedAddressTwo);
        await editedAddressTwoInputField.sendKeys(tooShortEditedAddressTwo);
    }

    //invalid singular input methods - too long singular input
    async inputTooLongEditedFirstNameIntoEditedFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._changeInfoFirstNameInputField);
        await editedFirstNameInputField.clear();
        const tooLongEditedFirstName = this._tooLongFirstName;
        Logger.info("Too long edited user first name: ", tooLongEditedFirstName);
        await editedFirstNameInputField.sendKeys(tooLongEditedFirstName);
    }
    async inputTooLongEditedLastNameIntoEditedLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._changeInfoLastNameInputField);
        await editedLastNameInputField.clear();
        const tooLongEditedLastName = this._tooLongLastName;
        Logger.info("Too long edited user last name: ", tooLongEditedLastName);
        await editedLastNameInputField.sendKeys(tooLongEditedLastName);
    }
    async inputTooLongEditedPhoneIntoEditedPhoneInputField(){
        const editedPhoneInputField = await this.driver.findElement(this._changeInfoPhoneInputField);
        await editedPhoneInputField.clear();
        const tooLongEditedPhone = this._tooLongPhone;
        Logger.info("Too long edited user phone number: ", tooLongEditedPhone);
        await editedPhoneInputField.sendKeys(tooLongEditedPhone);
    }
    async inputTooLongEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._changeInfoAddressOneInputField);
        await editedAddressOneInputField.clear();
        const tooLongEditedAddressOne = this._tooLongAddressOne;
        Logger.info("Too long edited user address one: ", tooLongEditedAddressOne);
        await editedAddressOneInputField.sendKeys(tooLongEditedAddressOne);
    }
    async inputTooLongEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._changeInfoAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const tooLongEditedAddressTwo = this._tooLongAddressTwo;
        Logger.info("Too long edited user address two (street type): ", tooLongEditedAddressTwo);
        await editedAddressTwoInputField.sendKeys(tooLongEditedAddressTwo);
    }

    //invalid singular input methods - invalid singular input format
    async inputInvalidEditedFirstNameFormatIntoEditedFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._changeInfoFirstNameInputField);
        await editedFirstNameInputField.clear();
        const invalidEditedFirstNameFormat = this._invalidFirstNameFormat;
        Logger.info("Invalid edited user first name format: ", invalidEditedFirstNameFormat);
        await editedFirstNameInputField.sendKeys(invalidEditedFirstNameFormat);
    }
    async inputInvalidEditedLastNameFormatIntoEditedLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._changeInfoLastNameInputField);
        await editedLastNameInputField.clear();
        const invalidEditedLastName = this._invalidLastNameFormat;
        Logger.info("Invalid edited user last name format: ", invalidEditedLastName);
        await editedLastNameInputField.sendKeys(invalidEditedLastName);
    }
    async inputInvalidEditedPhoneFormatIntoEditedPhoneInputField(){
        const editedPhoneInputField = await this.driver.findElement(this._changeInfoPhoneInputField);
        await editedPhoneInputField.clear();
        const invalidEditedPhoneFormat = this._invalidPhoneFormat;
        Logger.info("Invalid edited user phone number format: ", invalidEditedPhoneFormat);
        await editedPhoneInputField.sendKeys(invalidEditedPhoneFormat);
    }
    async inputInvalidEditedAddressOneFormatIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._changeInfoAddressOneInputField);
        await editedAddressOneInputField.clear();
        const invalidEditedAddressOneFormat = this._invalidAddressOneFormat;
        Logger.info("Invalid edited user address one format: ", invalidEditedAddressOneFormat);
        await editedAddressOneInputField.sendKeys(invalidEditedAddressOneFormat);
    }
    async inputInvalidEditedAddressTwoFormatIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._changeInfoAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const invalidEditedAddressTwoFormat = this._invalidAddressTwoFormat;
        Logger.info("Invalid edited user address two (street type) format: ", invalidEditedAddressTwoFormat);
        await editedAddressTwoInputField.sendKeys(invalidEditedAddressTwoFormat);
    }

}
module.exports = ChangeInfoPageInvalidSingularInput;