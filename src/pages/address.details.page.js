"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class AddressDetailsPage extends BasePage{

    constructor(driver) {
        super(driver);
    }



}
module.exports = { AddressDetailsPage };