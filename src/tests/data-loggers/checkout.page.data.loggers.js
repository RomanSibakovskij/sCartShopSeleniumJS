"use strict"

const BaseTest = require("../utilities/base.test.js");
const { CheckoutPage } = require("../../pages/checkout.page.js");
const Logger = require("../../pages/utilities/logger.js")

class CheckoutPageDataLoggers extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page product table data logger method
    async logCheckoutPageProductTableData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page displayed product table data: " + "\n");
        //log checkout page product name(s)
        const checkoutPageProductName = await checkoutPage.getCheckoutPageProductName();
        Logger.info("Checkout page (product table) product name(s): " + checkoutPageProductName);
        //log checkout page product SKU code(s)
        const checkoutPageProductSKUCode = await checkoutPage.getCheckoutPageProductSKUCode();
        Logger.info("Checkout page (product table) product SKU code(s): " + checkoutPageProductSKUCode);
        //log checkout page product price(s)
        const checkoutPageProductPrice = await checkoutPage.getCheckoutPageProductPrice();
        Logger.info("Checkout page (product table) product price(s): " + checkoutPageProductPrice);
        //log checkout page product quantity(ies)
        const checkoutPageProductQuantity = await checkoutPage.getCheckoutPageProductQty();
        Logger.info("Checkout page (product table) product quantity(ies): " + checkoutPageProductQuantity);
        //log checkout page product subtotal price(s)
        const checkoutPageProductSubtotalPrice = await checkoutPage.getCheckoutPageProductSubtotal();
        Logger.info("Checkout page (product table) product subtotal price(s): " + checkoutPageProductSubtotalPrice);
        //lower section
        //log checkout page order subtotal price(s)
        const checkoutPageOrderSubtotalPrice = await checkoutPage.getCheckoutPageOrderSubtotalPrice();
        Logger.info("Checkout page (product table) order subtotal price(s): " + checkoutPageOrderSubtotalPrice);
        //log checkout page order total price(s)
        const checkoutPageOrderTotalPrice = await checkoutPage.getCheckoutPageOrderTotalPrice();
        Logger.info("Checkout page (product table) order total price(s): " + checkoutPageOrderTotalPrice + "\n");
    }

    //checkout page registered user input address data logger method
    async logCheckoutPageRegUserInputAddressData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page registered user input address data: " + "\n");
        //log checkout page registered user input address first name
        const checkoutPageInputAddressFirstName = await checkoutPage.getCheckoutPageInputAddressFirstName();
        Logger.info("Checkout page input address registered user first name: " + checkoutPageInputAddressFirstName);
        //log checkout page registered user input address last name
        const checkoutPageInputAddressLastName = await checkoutPage.getCheckoutPageInputAddressLastName();
        Logger.info("Checkout page input address registered user last name: " + checkoutPageInputAddressLastName);
        //log checkout page registered user input address email
        const checkoutPageInputAddressEmail = await checkoutPage.getCheckoutPageInputAddressEmail();
        Logger.info("Checkout page input address registered user email: " + checkoutPageInputAddressEmail);
        //log checkout page registered user input address phone
        const checkoutPageInputAddressPhone = await checkoutPage.getCheckoutPageInputAddressPhone();
        Logger.info("Checkout page input address registered user phone: " + checkoutPageInputAddressPhone);
        //log checkout page registered user input address one
        const checkoutPageInputAddressOne = await checkoutPage.getCheckoutPageInputAddressOne();
        Logger.info("Checkout page input address registered user address one: " + checkoutPageInputAddressOne);
        //log checkout page registered user input address two
        const checkoutPageInputAddressTwo = await checkoutPage.getCheckoutPageInputAddressTwo();
        Logger.info("Checkout page input address registered user address two: " + checkoutPageInputAddressTwo + "\n");
    }

    //checkout page shipping address data logger method
    async logCheckoutPageShipAddressData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page shipping address data: " + "\n");
        //log checkout page shipping address name
        const checkoutPageShipAddressName = await checkoutPage.getCheckoutPageShipAddressTableName();
        Logger.info("Checkout page shipping address name: " + checkoutPageShipAddressName);
        //log checkout page shipping address phone
        const checkoutPageShipAddressPhone = await checkoutPage.getCheckoutPageShipAddressTablePhone();
        Logger.info("Checkout page shipping address phone: " + checkoutPageShipAddressPhone);
        //log checkout page shipping email
        const checkoutPageShipEmail = await checkoutPage.getCheckoutPageShipAddressTableEmail();
        Logger.info("Checkout page shipping address email: " + checkoutPageShipEmail);
        //log checkout page shipping address
        const checkoutPageShipAddress = await checkoutPage.getCheckoutPageShipAddressTableAddress();
        Logger.info("Checkout page shipping address: " + checkoutPageShipAddress);
        //log checkout page shipping address note
        const checkoutPageShipAddressNote = await checkoutPage.getCheckoutPageShipAddressTableNote();
        Logger.info("Checkout page shipping address note: " + checkoutPageShipAddressNote);
    }

    //checkout page shipping address data logger method
    async logCheckoutPageOrderNumber(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page order success section data: " + "\n");
        //log checkout page order number
        const checkoutPageOrderNumber = await checkoutPage.getCheckoutPageOrderNumber();
        Logger.info("Checkout page order number: " + checkoutPageOrderNumber);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = CheckoutPageDataLoggers;