"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class ChangeInfoPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._changeInfoFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._changeInfoLastNameInputField = By.xpath("//input[@id='last_name']");
        this._changeInfoPhoneInputField = By.xpath("//input[@id='phone']");
        this._changeInfoAddressOneInputField = By.xpath("//input[@id='address1']");
        this._changeInfoAddressTwoInputField = By.xpath("//input[@id='address2']");

    }



}
module.exports = { ChangeInfoPageInvalidSingularInput };