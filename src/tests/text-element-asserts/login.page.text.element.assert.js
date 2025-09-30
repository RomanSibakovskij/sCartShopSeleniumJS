"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { LoginPage } = require("../../pages/login.page.js");

class LoginPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super(driver);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //login page header text element assert test method
    async isLoginPageTextElementAsExpected(){
        const loginPage = new LoginPage(this.driver);
        //assert the login page title is as expected (Selenium can't read this element with VALID selector)
        const loginPageTitle = await loginPage.getLoginPageTitle();
        assert.strictEqual(loginPageTitle, "LOGIN PAGE", "The login page title doesn't match expectations.");
        //input form
        //assert the login page email subtext is as expected
        const loginPageEmailSubtext = await loginPage.getLoginPageEmailSubtext();
        assert.strictEqual(loginPageEmailSubtext, "Email", "The login page email subtext doesn't match expectations.");
        //assert the login page password subtext is as expected
        const loginPagePasswordSubtext = await loginPage.getLoginPagePasswordSubtext();
        assert.strictEqual(loginPagePasswordSubtext, "Password", "The login page password subtext doesn't match expectations.");
        //links
        //assert the login page forgot password link text is as expected
        const loginPageForgotPasswordLink = await loginPage.getLoginPageForgotPasswordLinkText();
        assert.strictEqual(loginPageForgotPasswordLink, "Forgot password", "The login page forgot password link text doesn't match expectations.");
        //assert the login page account register link text is as expected
        const loginPageAccountRegisterLink = await loginPage.getLoginPageAccountRegisterLinkText();
        assert.strictEqual(loginPageAccountRegisterLink, "Account register", "The login page account register link text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = LoginPageTextElementAssert;