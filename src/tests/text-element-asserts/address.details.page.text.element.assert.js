"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { AddressDetailsPage } = require("../../pages/address.details.page.js");
const Logger = require("../../pages/utilities/logger.js");

class AddressDetailsPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //address details page text element assert test method
    async isAddressDetailsPageTextElementAsExpected(){
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        //assert the address details page title is as expected (element is misspelled)
        const addressDetailsPageTitle = await addressDetailsPage.getAddressDetailsPageTitle();
        //log the misspelling issue
        (addressDetailsPageTitle === "ADDRESS DETAILS") ? Logger.info("The address details page title is spelled correctly") : Logger.info(`The address details page title isn't spelled correctly. Expected: 'ADDRESS DETAILS', actual: ${addressDetailsPageTitle}.`);
        assert.strictEqual(addressDetailsPageTitle, "ADDRESS DETAIL", "The address details page title doesn't match expectations.");
        //input form
        //assert the address details page first name subtext is as expected
        const addressDetailsPageFirstNameSubtext = await addressDetailsPage.getAddressDetailsPageFirstNameSubtext();
        assert.strictEqual(addressDetailsPageFirstNameSubtext, "First name", "The address details page first name subtext doesn't match expectations.");
        //assert the address details page last name subtext is as expected
        const addressDetailsPageLastNameSubtext = await addressDetailsPage.getAddressDetailsPageLastNameSubtext();
        assert.strictEqual(addressDetailsPageLastNameSubtext, "Last name", "The address details page last name subtext doesn't match expectations.");
        //assert the address details page phone subtext is as expected
        const addressDetailsPagePhoneSubtext = await addressDetailsPage.getAddressDetailsPagePhoneSubtext();
        assert.strictEqual(addressDetailsPagePhoneSubtext, "Phone", "The address details page phone subtext doesn't match expectations.");
        //assert the address details page address one subtext is as expected
        const addressDetailsPageAddressOneSubtext = await addressDetailsPage.getAddressDetailsPageAddressOneSubtext();
        assert.strictEqual(addressDetailsPageAddressOneSubtext, "Address 1", "The address details page address one subtext doesn't match expectations.");
        //assert the address details page address two subtext is as expected
        const addressDetailsPageAddressTwoSubtext = await addressDetailsPage.getAddressDetailsPageAddressTwoSubtext();
        assert.strictEqual(addressDetailsPageAddressTwoSubtext, "Address 2", "The address details page address two subtext doesn't match expectations.");
        //assert the address details page country subtext is as expected
        const addressDetailsPageCountrySubtext = await addressDetailsPage.getAddressDetailsPageCountrySubtext();
        assert.strictEqual(addressDetailsPageCountrySubtext, "Country", "The address details page country subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AddressDetailsPageTextElementAssert;