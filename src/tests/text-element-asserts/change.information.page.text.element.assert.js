"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { ChangeInformationPage } = require("../../pages/change.information.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const Logger = require("../../pages/utilities/logger.js");

class ChangeInformationPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //change information page text element assert test method
    async isChangeInfoPageTextElementAsExpected(){
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        //assert the change information page title is as expected (element is misspelled)
        const changeInfoPageTitle = await changeInformationPage.getChangeInformationPageTitle();
        //log the misspelling issue
        (changeInfoPageTitle === "Change information") ? Logger.info("The change information page title is spelled correctly") : Logger.info(`The change information page title isn't spelled correctly. Expected: 'Change information', actual: ${changeInfoPageTitle}.`);
        assert.strictEqual(changeInfoPageTitle, "Change infomation", "The change information page title doesn't match expectations.");
        //input form
        //assert the change information page first name subtext is as expected
        const changeInfoPageFirstNameSubtext = await changeInformationPage.getChangeInfoPageFirstNameSubtext();
        assert.strictEqual(changeInfoPageFirstNameSubtext, "First name", "The change information page first name subtext doesn't match expectations.");
        //assert the change information page last name subtext is as expected
        const changeInfoPageLastNameSubtext = await changeInformationPage.getChangeInfoPageLastNameSubtext();
        assert.strictEqual(changeInfoPageLastNameSubtext, "Last name", "The change information page last name subtext doesn't match expectations.");
        //assert the change information page phone subtext is as expected
        const changeInfoPagePhoneSubtext = await changeInformationPage.getChangeInfoPagePhoneSubtext();
        assert.strictEqual(changeInfoPagePhoneSubtext, "Phone", "The change information page phone subtext doesn't match expectations.");
        //assert the change information page email subtext is as expected
        const changeInfoPageEmailSubtext = await changeInformationPage.getChangeInfoPageEmailSubtext();
        assert.strictEqual(changeInfoPageEmailSubtext, "Email", "The change information page email subtext doesn't match expectations.");
        //assert the change information page email is as expected
        const changeInfoPageEmail = await changeInformationPage.getChangeInfoPageEmail();
        const expectedEmail = await registerPage.getEmail();
        assert.strictEqual(changeInfoPageEmail, expectedEmail, "The change information page email doesn't match expectations.");
        //assert the change information page address one subtext is as expected
        const changeInfoPageAddressOneSubtext = await changeInformationPage.getChangeInfoPageAddressOneSubtext();
        assert.strictEqual(changeInfoPageAddressOneSubtext, "Address 1", "The change information page address one subtext doesn't match expectations.");
        //assert the change information page address two subtext is as expected
        const changeInfoPageAddressTwoSubtext = await changeInformationPage.getChangeInfoPageAddressTwoSubtext();
        assert.strictEqual(changeInfoPageAddressTwoSubtext, "Address 2", "The change information page address two subtext doesn't match expectations.");
        //assert the change information page country subtext is as expected
        const changeInfoPageCountrySubtext = await changeInformationPage.getChangeInfoPageCountrySubtext();
        assert.strictEqual(changeInfoPageCountrySubtext, "Country", "The change information page country subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ChangeInformationPageTextElementAssert;