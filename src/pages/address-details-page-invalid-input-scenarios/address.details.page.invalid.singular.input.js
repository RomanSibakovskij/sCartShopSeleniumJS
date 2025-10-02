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

    }

    //invalid edited address details input methods - no singular input
    async inputNoEditedAddressFirstNameIntoEditedAddressFirstNameInputField(){
        const editedAddressFirstNameInputField = await this.driver.findElement(this._addressDetailsPageFirstNameInputField);
        await editedAddressFirstNameInputField.clear();
        const noEditedAddressFirstName = this._noAddressFirstName;
        Logger.info("No edited user first name (address details): ", noEditedAddressFirstName);
        await editedAddressFirstNameInputField.sendKeys(noEditedAddressFirstName);
    }

}
module.exports = AddressDetailsPageInvalidSingularInput;
