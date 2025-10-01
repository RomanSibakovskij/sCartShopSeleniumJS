"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class ChangePasswordPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relative web elements
        this._changePasswordPageOldPasswordInputField = By.xpath("(//input[@type='password'])[1]");
        this._changePasswordPageNewPasswordInputField = By.xpath("(//input[@type='password'])[2]");
        this._changePasswordPageConfirmPasswordInputField = By.xpath("//input[@id='password-confirm']");

    }



}
module.exports = { ChangePasswordPageInvalidSingularInput };