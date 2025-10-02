"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { AddressListPage } = require("../../pages/address.list.page.js");

class AddressListPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //address list page text element assert test method
    async isAddressListPageTextElementAsExpected(){
        const addressListPage = new AddressListPage(this.driver);
        //assert the address list page title is as expected
        const addressListPageTitle = await addressListPage.getAddressListPageTitle();
        assert.strictEqual(addressListPageTitle, "Address list", "The address list page title doesn't match expectations.");
        //input form
        //assert the address list page first name subtext is as expected
        const addressListPageFirstNameSubtext = await addressListPage.getAddressListFirstNameSubtext();
        assert.strictEqual(addressListPageFirstNameSubtext, "First name:", "The address list page first name subtext doesn't match expectations.");
        //assert the address list page last name subtext is as expected
        const addressListPageLastNameSubtext = await addressListPage.getAddressListLastNameSubtext();
        assert.strictEqual(addressListPageLastNameSubtext, "Last name:", "The address list last name subtext doesn't match expectations.");
        //assert the address list page phone subtext is as expected
        const addressListPagePhoneSubtext = await addressListPage.getAddressListPhoneSubtext();
        assert.strictEqual(addressListPagePhoneSubtext, "Phone:", "The address list phone subtext doesn't match expectations.");
        //assert the address list page address one subtext is as expected
        const addressListPageAddressOneSubtext = await addressListPage.getAddressListAddressOneSubtext();
        assert.strictEqual(addressListPageAddressOneSubtext, "Address 1:", "The address list address one subtext doesn't match expectations.");
        //assert the address list page address two subtext is as expected
        const addressListPageAddressTwoSubtext = await addressListPage.getAddressListAddressTwoSubtext();
        assert.strictEqual(addressListPageAddressTwoSubtext, "Address 2:", "The address list address two subtext doesn't match expectations.");
        //assert the address list page country subtext is as expected
        const addressListPageCountrySubtext = await addressListPage.getAddressListCountrySubtext();
        assert.strictEqual(addressListPageCountrySubtext, "Country:", "The address list country subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AddressListPageTextElementAssert;