"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { ChangePasswordPage } = require("../../pages/change.password.page.js");

class ChangePasswordPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //change password page text element assert test method
    async isChangeInfoPageTextElementAsExpected(){
        const changePasswordPage = new ChangePasswordPage(this.driver);
        //assert the change password page title is as expected
        const changePasswordPageTitle = await changePasswordPage.getChangePasswordPageTitle();
        assert.strictEqual(changePasswordPageTitle, "Change password", "The change password page title doesn't match expectations.");
        //input form
        //assert the change password page old password subtext is as expected
        const changePasswordPageOldPasswordSubtext = await changePasswordPage.getChangePasswordPageOldPasswordSubtext();
        assert.strictEqual(changePasswordPageOldPasswordSubtext, "Old password", "The change password page old password subtext doesn't match expectations.");
        //assert the change password page new password subtext is as expected
        const changePasswordPageNewPasswordSubtext = await changePasswordPage.getChangePasswordPageNewPasswordSubtext();
        assert.strictEqual(changePasswordPageNewPasswordSubtext, "New password", "The change password page new password subtext doesn't match expectations.");
        //assert the change password page confirm password subtext is as expected
        const changePasswordPageConfirmPasswordSubtext = await changePasswordPage.getChangePasswordPageConfirmPasswordSubtext();
        assert.strictEqual(changePasswordPageConfirmPasswordSubtext, "Password confirm", "The change password page confirm password subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ChangePasswordPageTextElementAssert;