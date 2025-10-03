"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { CheckoutPage } = require("../../pages/checkout.page.js");
const Logger = require("../../pages/utilities/logger.js");

class CheckoutPageTextElementAsserts extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page text element assert test method
    async isCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        assert.strictEqual(checkoutPageTitle, "Demo GP247 CMS", "The checkout page title doesn't match expectations.");
    }

    //checkout page product table text element assert test method
    async isCheckoutPageProductTableTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //product table
        //assert the checkout page product table name subtext is as expected
        const checkoutPageProductTableNameSubtext = await checkoutPage.getCheckoutPageProductTableNameSubtext();
        assert.strictEqual(checkoutPageProductTableNameSubtext, "Name", "The checkout page product table product name subtext doesn't match expectations.");
        //assert the checkout page product table price subtext is as expected
        const checkoutPageProductTablePriceSubtext = await checkoutPage.getCheckoutPageProductTablePriceSubtext();
        assert.strictEqual(checkoutPageProductTablePriceSubtext, "Price", "The checkout page product table product price subtext doesn't match expectations.");
        //assert the checkout page product table quantity subtext is as expected
        const checkoutPageProductTableQtySubtext = await checkoutPage.getCheckoutPageProductTableQtySubtext();
        assert.strictEqual(checkoutPageProductTableQtySubtext, "Quantity", "The checkout page product table product quantity subtext doesn't match expectations.");
        //assert the checkout page product table subtotal subtext is as expected
        const checkoutPageProductTableSubtotalSubtext = await checkoutPage.getCheckoutPageProductTableSubtotalSubtext();
        assert.strictEqual(checkoutPageProductTableSubtotalSubtext, "Subtotal", "The checkout page product table product subtotal subtext doesn't match expectations.");
        //list elements
        //assert the checkout page product table product SKU code subtexts are as expected
        const expectedProductTableSKUCodeSubtexts = ["SKU code"];
        const actualProductTableSKUCodeSubtexts = await checkoutPage.getCheckoutPageProductSKUCodeSubtext();
        assert.deepStrictEqual(actualProductTableSKUCodeSubtexts, expectedProductTableSKUCodeSubtexts, "The checkout page product table product SKU code subtexts don't match expectations.");
        //singular elements
        //lower section
        //assert the checkout page order subtotal subtext is as expected
        const checkoutPageOrderSubtotalSubtext = await checkoutPage.getCheckoutPageOrderSubtotalSubtext();
        //log the misspelling issue
        (checkoutPageOrderSubtotalSubtext === "Subtotal") ? Logger.info("The checkout page order subtotal subtext is spelled correctly") : Logger.info(`The checkout page order subtotal subtext isn't spelled correctly. Expected: 'Subtotal', actual: ${checkoutPageOrderSubtotalSubtext}.`);
        assert.strictEqual(checkoutPageOrderSubtotalSubtext, "SubTotal", "The checkout page product table order subtotal subtext doesn't match expectations.");
        //assert the checkout page order total subtext is as expected
        const checkoutPageOrderTotalSubtext = await checkoutPage.getCheckoutPageOrderTotalSubtext();
        assert.strictEqual(checkoutPageOrderTotalSubtext, "Total", "The checkout page product table order total subtext doesn't match expectations.");
    }

    //checkout page address section text element assert test method
    async isCheckoutPageInputAddressSectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //input form
        //assert the checkout page input address first name subtext is as expected
        const checkoutPageInputAddressFirstNameSubtext = await checkoutPage.getCheckoutPageInputAddressFirstNameSubtext();
        assert.strictEqual(checkoutPageInputAddressFirstNameSubtext, "First name:", "The checkout page input address first name subtext doesn't match expectations.");
        //assert the checkout page input address first name subtext is as expected
        const checkoutPageInputAddressLastNameSubtext = await checkoutPage.getCheckoutPageInputAddressLastNameSubtext();
        assert.strictEqual(checkoutPageInputAddressLastNameSubtext, "Last name:", "The checkout page input address last name subtext doesn't match expectations.");
        //assert the checkout page input address email subtext is as expected
        const checkoutPageInputAddressEmailSubtext = await checkoutPage.getCheckoutPageInputAddressEmailSubtext();
        assert.strictEqual(checkoutPageInputAddressEmailSubtext, "Email:", "The checkout page input address email subtext doesn't match expectations.");
        //assert the checkout page input address phone subtext is as expected
        const checkoutPageInputAddressPhoneSubtext = await checkoutPage.getCheckoutPageInputAddressPhoneSubtext();
        assert.strictEqual(checkoutPageInputAddressPhoneSubtext, "Phone:", "The checkout page input address phone subtext doesn't match expectations.");
        //assert the checkout page input address country subtext is as expected
        const checkoutPageInputAddressCountrySubtext = await checkoutPage.getCheckoutPageInputAddressCountrySubtext();
        assert.strictEqual(checkoutPageInputAddressCountrySubtext, "Country:", "The checkout page input address country subtext doesn't match expectations.");
        //assert the checkout page input address one subtext is as expected
        const checkoutPageInputAddressOneSubtext = await checkoutPage.getCheckoutPageInputAddressOneSubtext();
        assert.strictEqual(checkoutPageInputAddressOneSubtext, "Address:", "The checkout page input address one subtext doesn't match expectations.");
        //assert the checkout page input address two subtext is as expected
        const checkoutPageInputAddressTwoSubtext = await checkoutPage.getCheckoutPageInputAddressTwoSubtext();
        assert.strictEqual(checkoutPageInputAddressTwoSubtext, "Address:", "The checkout page input address two subtext doesn't match expectations.");
        //assert the checkout page input address note subtext is as expected
        const checkoutPageInputAddressNoteSubtext = await checkoutPage.getCheckoutPageInputAddressNoteSubtext();
        assert.strictEqual(checkoutPageInputAddressNoteSubtext, "Note:", "The checkout page input address note subtext doesn't match expectations.");
    }

    //checkout page shipping address table text element assert test method
    async isCheckoutPageShipAddressTableTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //shipping address table
        //assert the checkout page shipping address table name subtext is as expected
        const checkoutPageShipAddressTitle = await checkoutPage.getCheckoutPageShipAddressTableTitle();
        assert.strictEqual(checkoutPageShipAddressTitle, "SHIPPING ADDRESS:", "The checkout page shipping address table title doesn't match expectations.");
        //assert the checkout page shipping address table name subtext is as expected
        const checkoutPageShipAddressTableNameSubtext = await checkoutPage.getCheckoutPageShipAddressTableNameSubtext();
        assert.strictEqual(checkoutPageShipAddressTableNameSubtext, "Name:", "The checkout page shipping address table name subtext doesn't match expectations.");
        //assert the checkout page shipping address table phone subtext is as expected
        const checkoutPageShipAddressTablePhoneSubtext = await checkoutPage.getCheckoutPageShipAddressTablePhoneSubtext();
        assert.strictEqual(checkoutPageShipAddressTablePhoneSubtext, "Phone:", "The checkout page shipping address table phone subtext doesn't match expectations.");
        //assert the checkout page shipping address table email subtext is as expected
        const checkoutPageShipAddressTableEmailSubtext = await checkoutPage.getCheckoutPageShipAddressTableEmailSubtext();
        assert.strictEqual(checkoutPageShipAddressTableEmailSubtext, "Email:", "The checkout page shipping address table email subtext doesn't match expectations.");
        //assert the checkout page shipping address table address subtext is as expected
        const checkoutPageShipAddressTableAddressSubtext = await checkoutPage.getCheckoutPageShipAddressTableAddressSubtext();
        assert.strictEqual(checkoutPageShipAddressTableAddressSubtext, "Address:", "The checkout page shipping address table address subtext doesn't match expectations.");
        //assert the checkout page shipping address table note subtext is as expected
        const checkoutPageShipAddressTableNoteSubtext = await checkoutPage.getCheckoutPageShipAddressTableNoteSubtext();
        assert.strictEqual(checkoutPageShipAddressTableNoteSubtext, "Note:", "The checkout page shipping address table note subtext doesn't match expectations.");
    }

    //checkout page order success text element assert test method
    async isCheckoutPageOrderSuccessTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //order success section
        //assert the checkout page order section subtitle is as expected
        const checkoutPageOrderSectionSubtitle = await checkoutPage.getCheckoutPageOrderSuccessSubtitle();
        assert.strictEqual(checkoutPageOrderSectionSubtitle, "ORDER SUCCESS", "The checkout page shipping address table subtitle doesn't match expectations.");
        //assert the checkout page order section title is as expected
        const checkoutPageOrderSectionTitle = await checkoutPage.getCheckoutPageOrderSuccessTitle();
        assert.strictEqual(checkoutPageOrderSectionTitle, "ORDER SUCCESS", "The checkout page shipping address table title doesn't match expectations.");
        //assert the checkout page order section subtext is as expected
        const checkoutPageOrderSectionSubtext = await checkoutPage.getCheckoutPageOrderSuccessSubtext();
        assert.strictEqual(checkoutPageOrderSectionSubtext, "THANK YOU FOR YOUR PURCHASE!", "The checkout page shipping address table subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = CheckoutPageTextElementAsserts;