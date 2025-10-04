"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class OrderHistoryDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);
    }


}
module.exports = { OrderHistoryDashboardPage };