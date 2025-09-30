"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class RegisterPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._registerPageFirstNameInputField = By.xpath("//div[@id='collapseExample']/div[1]/input");
        this._registerPageLastNameInputField = By.xpath("//div[@id='collapseExample']/div[2]/input");
        this._registerPageEmailInputField = By.xpath("//div[@id='collapseExample']/div[3]/input");
        this._registerPagePhoneInputField = By.xpath("//div[@id='collapseExample']/div[4]/input");
        this._registerPageAddressOneInputField = By.xpath("//div[@id='collapseExample']/div[5]/input");
        this._registerPageAddressTwoInputField = By.xpath("//div[@id='collapseExample']/div[6]/input");
        this._registerPagePasswordInputField = By.xpath("//div[@id='collapseExample']/div[8]/input");
        this._registerPageConfirmPasswordInputField = By.xpath("//div[@id='collapseExample']/div[9]/input");

    }


}
module.exports = { RegisterPageInvalidSingularInput };