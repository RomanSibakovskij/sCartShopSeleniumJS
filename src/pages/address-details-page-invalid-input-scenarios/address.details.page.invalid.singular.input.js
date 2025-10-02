"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class AddressDetailsPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._addressDetailsPageFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._addressDetailsPageLastNameInputField = By.xpath("//input[@id='last_name']");
        this._addressDetailsPagePhoneInputField = By.xpath("//input[@id='phone']");
        this._addressDetailsPageAddressOneInputField = By.xpath("//input[@id='address1']");
        this._addressDetailsPageAddressTwoInputField = By.xpath("//input[@id='address2']");

        //invalid singular input - no singular input
        this._noAddressFirstName = "";
        this._noAddressLastName = "";
        this._noAddressPhone = "";
        this._noAddressOne = "";
        this._noAddressTwo = "";

        //invalid singular input - too short singular input
        this._tooShortAddressFirstName = "D"; // 1 char
        this._tooShortAddressLastName = "S"; // 1 char
        this._tooShortAddressPhone = "0123456"; // 7 chars
        this._tooShortAddressOne = "6 D"; // 3 chars
        this._tooShortAddressTwo = "Str"; // 3 chars

        //invalid singular input - too long singular input
        this._tooLongAddressFirstName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongAddressLastName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars

    }

    //invalid edited address details input methods - no singular input
    async inputNoEditedAddressFirstNameIntoEditedAddressFirstNameInputField(){
        const editedAddressFirstNameInputField = await this.driver.findElement(this._addressDetailsPageFirstNameInputField);
        await editedAddressFirstNameInputField.clear();
        const noEditedAddressFirstName = this._noAddressFirstName;
        Logger.info("No edited user first name (address details): ", noEditedAddressFirstName);
        await editedAddressFirstNameInputField.sendKeys(noEditedAddressFirstName);
    }
    async inputNoEditedAddressLastNameIntoEditedAddressLastNameInputField(){
        const editedAddressLastNameInputField = await this.driver.findElement(this._addressDetailsPageLastNameInputField);
        await editedAddressLastNameInputField.clear();
        const noEditedAddressLastName = this._noAddressLastName;
        Logger.info("No edited user last name (address details): ", noEditedAddressLastName);
        await editedAddressLastNameInputField.sendKeys(noEditedAddressLastName);
    }
    async inputNoEditedAddressPhoneIntoEditedAddressPhoneInputField(){
        const editedAddressPhoneInputField = await this.driver.findElement(this._addressDetailsPagePhoneInputField);
        await editedAddressPhoneInputField.clear();
        const noEditedAddressPhone = this._noAddressPhone;
        Logger.info("No edited user phone (address details): ", noEditedAddressPhone);
        await editedAddressPhoneInputField.sendKeys(noEditedAddressPhone);
    }
    async inputNoEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._addressDetailsPageAddressOneInputField);
        await editedAddressOneInputField.clear();
        const noEditedAddressOne = this._noAddressOne;
        Logger.info("No edited user address one (address details): ", noEditedAddressOne);
        await editedAddressOneInputField.sendKeys(noEditedAddressOne);
    }
    async inputNoEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._addressDetailsPageAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const noEditedAddressTwo = this._noAddressTwo;
        Logger.info("No edited user address two (street type) (address details): ", noEditedAddressTwo);
        await editedAddressTwoInputField.sendKeys(noEditedAddressTwo);
    }

    //invalid edited address details input methods - too short singular input
    async inputTooShortEditedAddressFirstNameIntoEditedAddressFirstNameInputField(){
        const editedAddressFirstNameInputField = await this.driver.findElement(this._addressDetailsPageFirstNameInputField);
        await editedAddressFirstNameInputField.clear();
        const tooShortEditedAddressFirstName = this._tooShortAddressFirstName;
        Logger.info("Too short edited user first name (address details): ", tooShortEditedAddressFirstName);
        await editedAddressFirstNameInputField.sendKeys(tooShortEditedAddressFirstName);
    }
    async inputTooShortEditedAddressLastNameIntoEditedAddressLastNameInputField(){
        const editedAddressLastNameInputField = await this.driver.findElement(this._addressDetailsPageLastNameInputField);
        await editedAddressLastNameInputField.clear();
        const tooShortEditedAddressLastName = this._tooShortAddressLastName;
        Logger.info("Too short edited user last name (address details): ", tooShortEditedAddressLastName);
        await editedAddressLastNameInputField.sendKeys(tooShortEditedAddressLastName);
    }
    async inputTooShortEditedAddressPhoneIntoEditedAddressPhoneInputField(){
        const editedAddressPhoneInputField = await this.driver.findElement(this._addressDetailsPagePhoneInputField);
        await editedAddressPhoneInputField.clear();
        const tooShortEditedAddressPhone = this._tooShortAddressPhone;
        Logger.info("Too short edited user phone (address details): ", tooShortEditedAddressPhone);
        await editedAddressPhoneInputField.sendKeys(tooShortEditedAddressPhone);
    }
    async inputTooShortEditedAddressOneIntoEditedAddressOneInputField(){
        const editedAddressOneInputField = await this.driver.findElement(this._addressDetailsPageAddressOneInputField);
        await editedAddressOneInputField.clear();
        const tooShortEditedAddressOne = this._tooShortAddressOne;
        Logger.info("Too short edited user address one (address details): ", tooShortEditedAddressOne);
        await editedAddressOneInputField.sendKeys(tooShortEditedAddressOne);
    }
    async inputTooShortEditedAddressTwoIntoEditedAddressTwoInputField(){
        const editedAddressTwoInputField = await this.driver.findElement(this._addressDetailsPageAddressTwoInputField);
        await editedAddressTwoInputField.clear();
        const tooShortEditedAddressTwo = this._tooShortAddressTwo;
        Logger.info("Too short edited user address two (street type) (address details): ", tooShortEditedAddressTwo);
        await editedAddressTwoInputField.sendKeys(tooShortEditedAddressTwo);
    }

    //invalid edited address details input methods - too long singular input
    async inputTooLongEditedAddressFirstNameIntoEditedAddressFirstNameInputField(){
        const editedAddressFirstNameInputField = await this.driver.findElement(this._addressDetailsPageFirstNameInputField);
        await editedAddressFirstNameInputField.clear();
        const tooLongEditedAddressFirstName = this._tooLongAddressFirstName;
        Logger.info("Too long edited user first name (address details): ", tooLongEditedAddressFirstName);
        await editedAddressFirstNameInputField.sendKeys(tooLongEditedAddressFirstName);
    }
    async inputTooLongEditedAddressLastNameIntoEditedAddressLastNameInputField(){
        const editedAddressLastNameInputField = await this.driver.findElement(this._addressDetailsPageLastNameInputField);
        await editedAddressLastNameInputField.clear();
        const tooLongEditedAddressLastName = this._tooLongAddressLastName;
        Logger.info("Too long edited user last name (address details): ", tooLongEditedAddressLastName);
        await editedAddressLastNameInputField.sendKeys(tooLongEditedAddressLastName);
    }

}
module.exports = AddressDetailsPageInvalidSingularInput;
