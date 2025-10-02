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

}
module.exports = AddressDetailsPageInvalidSingularInput;
