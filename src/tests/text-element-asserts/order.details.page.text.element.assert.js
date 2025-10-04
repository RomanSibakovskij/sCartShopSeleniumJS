"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { OrderDetailsPage } = require("../../pages/order.details.page.js");

class OrderDetailsPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order details page text element assert test method
    async isOrderDetailsPageTextElementAsExpected(){
        const orderDetailsPage  = new OrderDetailsPage(this.driver);
        //table one (user details)
        //assert the order details page first name subtext is as expected
        const orderDetailsPageFirstNameSubtext = await orderDetailsPage.getOrderDetailsPageFirstNameSubtext();
        assert.strictEqual(orderDetailsPageFirstNameSubtext, "First name:", "The order details page first name subtext doesn't match expectations.");
        //assert the order details page last name subtext is as expected
        const orderDetailsPageLastNameSubtext = await orderDetailsPage.getOrderDetailsPageLastNameSubtext();
        assert.strictEqual(orderDetailsPageLastNameSubtext, "Last name:", "The order details page last name subtext doesn't match expectations.");
        //assert the order details page phone subtext is as expected
        const orderDetailsPagePhoneSubtext = await orderDetailsPage.getOrderDetailsPagePhoneSubtext();
        assert.strictEqual(orderDetailsPagePhoneSubtext, "Phone:", "The order details page phone subtext doesn't match expectations.");
        //assert the order details page email subtext is as expected
        const orderDetailsPageEmailSubtext = await orderDetailsPage.getOrderDetailsPageEmailSubtext();
        assert.strictEqual(orderDetailsPageEmailSubtext, "Email:", "The order details page email subtext doesn't match expectations.");
        //assert the order details page address one subtext is as expected
        const orderDetailsPageAddressOneSubtext = await orderDetailsPage.getOrderDetailsPageAddressOneSubtext();
        assert.strictEqual(orderDetailsPageAddressOneSubtext, "Address 1:", "The order details page address one subtext doesn't match expectations.");
        //assert the order details page address two subtext is as expected
        const orderDetailsPageAddressTwoSubtext = await orderDetailsPage.getOrderDetailsPageAddressTwoSubtext();
        assert.strictEqual(orderDetailsPageAddressTwoSubtext, "Address 2:", "The order details page address two subtext doesn't match expectations.");
        //assert the order details page country subtext is as expected
        const orderDetailsPageCountrySubtext = await orderDetailsPage.getOrderDetailsPageCountrySubtext();
        assert.strictEqual(orderDetailsPageCountrySubtext, "Country:", "The order details page country subtext doesn't match expectations.");
        //assert the order details page order status subtext is as expected
        const orderDetailsPageOrderStatusSubtext = await orderDetailsPage.getOrderDetailsPageOrderStatusSubtext();
        assert.strictEqual(orderDetailsPageOrderStatusSubtext, "Order status:", "The order details page order status subtext doesn't match expectations.");
        //assert the order details page shipping status subtext is as expected
        const orderDetailsPageShipStatusSubtext = await orderDetailsPage.getOrderDetailsPageShipStatusSubtext();
        assert.strictEqual(orderDetailsPageShipStatusSubtext, "Shipping status:", "The order details page shipping status subtext doesn't match expectations.");
        //assert the order details page shipping method subtext is as expected
        const orderDetailsPageShipMethodSubtext = await orderDetailsPage.getOrderDetailsPageShipMethodSubtext();
        assert.strictEqual(orderDetailsPageShipMethodSubtext, "Shipping method:", "The order details page shipping method subtext doesn't match expectations.");
        //assert the order details page payment method subtext is as expected
        const orderDetailsPagePayMethodSubtext = await orderDetailsPage.getOrderDetailsPagePayMethodSubtext();
        assert.strictEqual(orderDetailsPagePayMethodSubtext, "Payment method:", "The order details page payment method subtext doesn't match expectations.");
        //assert the order details page currency subtext is as expected
        const orderDetailsPageCurrencySubtext = await orderDetailsPage.getOrderDetailsPageCurrencySubtext();
        assert.strictEqual(orderDetailsPageCurrencySubtext, "Currency:", "The order details page currency subtext doesn't match expectations.");
        //assert the order details page exchange rate subtext is as expected
        const orderDetailsPageExchangeRateSubtext = await orderDetailsPage.getOrderDetailsPageExchangeRateSubtext();
        assert.strictEqual(orderDetailsPageExchangeRateSubtext, "Exchange rate:", "The order details page exchange rate subtext doesn't match expectations.");
        //table two (product table)
        //assert the order details page product table product name subtext is as expected
        const orderDetailsPageProductNameSubtext = await orderDetailsPage.getOrderDetailsPageProductNameSubtext();
        assert.strictEqual(orderDetailsPageProductNameSubtext, "Name", "The order details page product name subtext doesn't match expectations.");
        //assert the order details page product table product SKU code subtext is as expected
        const orderDetailsPageProductSKUCodeSubtext = await orderDetailsPage.getOrderDetailsPageProductSKUCodeSubtext();
        assert.strictEqual(orderDetailsPageProductSKUCodeSubtext, "SKU code", "The order details page product SKU code subtext doesn't match expectations.");
        //assert the order details page product table product price subtext is as expected
        const orderDetailsPageProductPriceSubtext = await orderDetailsPage.getOrderDetailsPageProductPriceSubtext();
        assert.strictEqual(orderDetailsPageProductPriceSubtext, "Price", "The order details page product price subtext doesn't match expectations.");
        //assert the order details page product table product quantity subtext is as expected
        const orderDetailsPageProductQtySubtext = await orderDetailsPage.getOrderDetailsPageProductQtySubtext();
        assert.strictEqual(orderDetailsPageProductQtySubtext, "Quantity", "The order details page product quantity subtext doesn't match expectations.");
        //assert the order details page product table product subtotal subtext is as expected
        const orderDetailsPageProductSubtotalSubtext = await orderDetailsPage.getOrderDetailsPageProductSubtotalSubtext();
        assert.strictEqual(orderDetailsPageProductSubtotalSubtext, "SubTotal", "The order details page product subtotal subtext doesn't match expectations.");
        //assert the order details page product table product tax subtext is as expected
        const orderDetailsPageProductTaxSubtext = await orderDetailsPage.getOrderDetailsPageProductTaxSubtext();
        assert.strictEqual(orderDetailsPageProductTaxSubtext, "Tax", "The order details page product tax subtext doesn't match expectations.");
        //table three
        //assert the order details page discount subtext is as expected
        const orderDetailsPageDiscountSubtext = await orderDetailsPage.getOrderDetailsPageDiscountSubtext();
        assert.strictEqual(orderDetailsPageDiscountSubtext, "Discount(-):", "The order details page product discount subtext doesn't match expectations.");
        //assert the order details page balance subtext is as expected
        const orderDetailsPageBalanceSubtext = await orderDetailsPage.getOrderDetailsPageBalanceSubtext();
        assert.strictEqual(orderDetailsPageBalanceSubtext, "Balance:", "The order details page product balance subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = OrderDetailsPageTextElementAssert;