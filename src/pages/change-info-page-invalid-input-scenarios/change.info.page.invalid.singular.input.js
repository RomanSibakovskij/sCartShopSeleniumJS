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

}
module.exports = ChangeInfoPageInvalidSingularInput;