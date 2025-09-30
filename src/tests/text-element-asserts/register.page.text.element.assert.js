"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { RegisterPage } = require("../../pages/register.page.js");

class RegisterPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //register page text element assert test method
    async isRegisterPageTextElementAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //assert the register page title is as expected
        const registerPageTitle = await registerPage.getRegisterPageTitle();
        assert.strictEqual(registerPageTitle, "ACCOUNT REGISTER", "The register page title doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = RegisterPageTextElementAssert;