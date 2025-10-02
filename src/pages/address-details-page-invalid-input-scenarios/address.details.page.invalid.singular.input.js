"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class AddressDetailsPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._addressDetailsPageFirstNameInputField = By.xpath("//input[@id='first_name']");
        this._addressDetailsPageLastNameInputField = By.xpath("//input[@id='last_name']");
        this._addressDetailsPagePhoneInputField = By.xpath("//input[@id='phone']");
        this._addressDetailsPageAddressOneInputField = By.xpath("//input[@id='address1']");
        this._addressDetailsPageAddressTwoInputField = By.xpath("//input[@id='address2']");

    }



}
module.exports = { AddressDetailsPageInvalidSingularInput };
