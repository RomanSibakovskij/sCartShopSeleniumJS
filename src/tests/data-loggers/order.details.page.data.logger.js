"use strict"

const BaseTest = require("../utilities/base.test.js");
const { OrderDetailsPage } = require("../../pages/order.details.page.js");
const Logger = require("../../pages/utilities/logger.js");

class OrderDetailsPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order details page data logger method
    async logOrderDetailsPageData(){
        const orderDetailsPage = new OrderDetailsPage(this.driver);
        console.log("Order details page displayed data: " + "\n");
        //log order details page title
        const orderDetailsPageTitle = await orderDetailsPage.getOrderDetailsPageTitle();
        Logger.info("Order details page title (order number): " + orderDetailsPageTitle);
        //table one (user details)
        //log order details page first name
        const orderDetailsPageFirstName = await orderDetailsPage.getOrderDetailsPageFirstName();
        Logger.info("Order details page first name: " + orderDetailsPageFirstName);
        //log order details page last name
        const orderDetailsPageLastName = await orderDetailsPage.getOrderDetailsPageLastName();
        Logger.info("Order details page last name: " + orderDetailsPageLastName);
        //log order details page phone
        const orderDetailsPagePhone = await orderDetailsPage.getOrderDetailsPagePhone();
        Logger.info("Order details page phone: " + orderDetailsPagePhone);
        //log order details page email
        const orderDetailsPageEmail = await orderDetailsPage.getOrderDetailsPageEmail();
        Logger.info("Order details page email: " + orderDetailsPageEmail);
        //log order details page address one
        const orderDetailsPageAddressOne = await orderDetailsPage.getOrderDetailsPageAddressOne();
        Logger.info("Order details page address one: " + orderDetailsPageAddressOne);
        //log order details page address two
        const orderDetailsPageAddressTwo = await orderDetailsPage.getOrderDetailsPageAddressTwo();
        Logger.info("Order details page address two: " + orderDetailsPageAddressTwo);
        //log order details page country
        const orderDetailsPageCountry = await orderDetailsPage.getOrderDetailsPageCountry();
        Logger.info("Order details page country: " + orderDetailsPageCountry);
        //log order details page order status
        const orderDetailsPageOrderStatus = await orderDetailsPage.getOrderDetailsPageOrderStatus();
        Logger.info("Order details page order status: " + orderDetailsPageOrderStatus);
        //log order details page shipping status
        const orderDetailsPageShipStatus = await orderDetailsPage.getOrderDetailsPageShipStatus();
        Logger.info("Order details page shipping status: " + orderDetailsPageShipStatus);
        //log order details page shipping method
        const orderDetailsPageShipMethod = await orderDetailsPage.getOrderDetailsPageShipMethod();
        Logger.info("Order details page shipping method: " + orderDetailsPageShipMethod);
        //log order details page payment method
        const orderDetailsPagePayMethod = await orderDetailsPage.getOrderDetailsPagePayMethod();
        Logger.info("Order details page payment method: " + orderDetailsPagePayMethod);
        //log order details page currency
        const orderDetailsPageCurrency = await orderDetailsPage.getOrderDetailsPageCurrency();
        Logger.info("Order details page currency: " + orderDetailsPageCurrency);
        //log order details page exchange rate
        const orderDetailsPageExchangeRate = await orderDetailsPage.getOrderDetailsPageExchangeRate();
        Logger.info("Order details page exchange rate: " + orderDetailsPageExchangeRate);
        //table two (product table)
        //log order details page product name(s)
        const orderDetailsPageProductName = await orderDetailsPage.getOrderDetailsPageProductName();
        Logger.info("Order details page product name(s): " + orderDetailsPageProductName);
        //log order details page product SKU code(s)
        const orderDetailsPageProductSKUCode = await orderDetailsPage.getOrderDetailsPageProductSKUCode();
        Logger.info("Order details page product SKU code(s): " + orderDetailsPageProductSKUCode);
        //log order details page product price(s)
        const orderDetailsPageProductPrice = await orderDetailsPage.getOrderDetailsPageProductPrice();
        Logger.info("Order details page product price(s): " + orderDetailsPageProductPrice);
        //log order details page product quantity(ies)
        const orderDetailsPageProductQty = await orderDetailsPage.getOrderDetailsPageProductQty();
        Logger.info("Order details page product quantity(ies): " + orderDetailsPageProductQty);
        //log order details page product subtotal price(s)
        const orderDetailsPageProductSubtotal = await orderDetailsPage.getOrderDetailsPageProductSubtotalPrice();
        Logger.info("Order details page product subtotal price(s): " + orderDetailsPageProductSubtotal);
        //log order details page product tax(es)
        const orderDetailsPageProductTax = await orderDetailsPage.getOrderDetailsPageProductTax();
        Logger.info("Order details page product tax(es): " + orderDetailsPageProductTax);
        //table three
        //log order details page discount
        const orderDetailsPageDiscount = await orderDetailsPage.getOrderDetailsPageDiscount();
        Logger.info("Order details page discount: " + orderDetailsPageDiscount);
        //log order details page balance
        const orderDetailsPageBalance = await orderDetailsPage.getOrderDetailsPageBalance();
        Logger.info("Order details page balance: " + orderDetailsPageBalance);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = OrderDetailsPageDataLogger;