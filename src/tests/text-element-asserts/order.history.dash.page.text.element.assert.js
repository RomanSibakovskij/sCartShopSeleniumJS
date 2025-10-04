"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { OrderHistoryDashboardPage } = require("../../pages/order.history.dashboard.page.js");

class OrderHistoryDashPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //order history dashboard page text element assert test method
    async isOrderHistoryDashPageTextElementAsExpected(){
        const orderHistoryDashboardPage  = new OrderHistoryDashboardPage (this.driver);
        //assert the order history dashboard page title is as expected
        const orderHistoryDashPageTitle = await orderHistoryDashboardPage.getOrderHistoryDashPageTitle();
        assert.strictEqual(orderHistoryDashPageTitle, "Order history", "The order history dashboard page title doesn't match expectations.");
        //order history table
        //assert the order history dashboard page order table number subtext is as expected
        const orderHistoryDashPageTableNumberSubtext = await orderHistoryDashboardPage.getOrderHistoryDashPageTableNumberSubtext();
        assert.strictEqual(orderHistoryDashPageTableNumberSubtext, "No.", "The order history dashboard page order table number subtext doesn't match expectations.");
        //assert the order history dashboard page order table ID subtext is as expected
        const orderHistoryDashPageTableIDSubtext = await orderHistoryDashboardPage.getOrderHistoryDashPageTableIDSubtext();
        assert.strictEqual(orderHistoryDashPageTableIDSubtext, "ID", "The order history dashboard page order table ID subtext doesn't match expectations.");
        //assert the order history dashboard page order table total price subtext is as expected
        const orderHistoryDashPageTableTotalSubtext = await orderHistoryDashboardPage.getOrderHistoryDashPageTableTotalSubtext();
        assert.strictEqual(orderHistoryDashPageTableTotalSubtext, "Total", "The order history dashboard page order table total price subtext doesn't match expectations.");
        //assert the order history dashboard page order table order status subtext is as expected
        const orderHistoryDashPageTableOrderStatusSubtext = await orderHistoryDashboardPage.getOrderHistoryDashPageTableOrderStatusSubtext();
        assert.strictEqual(orderHistoryDashPageTableOrderStatusSubtext, "Order status", "The order history dashboard page order table order status subtext doesn't match expectations.");
        //assert the order history dashboard page order table order created at timestamp subtext is as expected
        const orderHistoryDashPageTableCreatedAtSubtext = await orderHistoryDashboardPage.getOrderHistoryDashPageTableCreatedAtSubtext();
        assert.strictEqual(orderHistoryDashPageTableCreatedAtSubtext, "Created at", "The order history dashboard page order table order created at timestamp subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = OrderHistoryDashPageTextElementAssert;