"use strict"

const BaseTest = require("../utilities/base.test.js");
const { OrderHistoryDashboardPage } = require("../../pages/order.history.dashboard.page.js");

const Logger = require("../../pages/utilities/logger.js");

class OrderHistoryDashPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order history dashboard page product table data logger method
    async logOrderHistoryDashPageProductTableData(){
        const orderHistoryDashboardPage = new OrderHistoryDashboardPage(this.driver);
        console.log("Order history dashboard page displayed order table data: " + "\n");
        //log order history dashboard page order queue number(s)
        const orderHistoryDashPageOrderNumber = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderNumber();
        Logger.info("Order history dashboard page order queue number(s): " + orderHistoryDashPageOrderNumber);
        //log order history dashboard page order ID(s)
        const orderHistoryDashPageOrderID = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderID();
        Logger.info("Order history dashboard page order ID(s): " + orderHistoryDashPageOrderID);
        //log order history dashboard page order total price(s)
        const orderHistoryDashPageOrderTotalPrice = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderTotalPrice();
        Logger.info("Order history dashboard page order total price(s): " + orderHistoryDashPageOrderTotalPrice);
        //log order history dashboard page order status(es)
        const orderHistoryDashPageOrderStatus = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderStatus();
        Logger.info("Order history dashboard page order status(es): " + orderHistoryDashPageOrderStatus);
        //log order history dashboard page order created at timestamp(s)
        const orderHistoryDashPageOrderCreatedAt = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderCreatedAtTimestamp();
        Logger.info("Order history dashboard page order created at timestamp(s): " + orderHistoryDashPageOrderCreatedAt);
        //log order history dashboard page order details link text(s)
        const orderHistoryDashPageOrderDetailsLinkText = await orderHistoryDashboardPage.getOrderHistoryDashPageOrderDetailsLinkText();
        Logger.info("Order history dashboard page order details link text(s): " + orderHistoryDashPageOrderDetailsLinkText);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = OrderHistoryDashPageDataLogger;