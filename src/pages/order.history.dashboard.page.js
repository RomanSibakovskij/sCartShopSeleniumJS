"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class OrderHistoryDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //order history dashboard page web elements
        this._orderHistoryDashboardPageTitle = By.xpath("//h6");
        this._orderHistoryDashboardPageNoOrderSubtextOne = By.xpath("//div[@class='text-danger']");
        //order history table
        this._orderHistoryDashPageTableNumberSubtext = By.xpath("//table//th[1]");
        this._orderHistoryDashPageTableIDSubtext = By.xpath("//table//th[2]");
        this._orderHistoryDashPageTableTotalSubtext = By.xpath("//table//th[3]");
        this._orderHistoryDashPageTableOrderStatusSubtext = By.xpath("//table//th[4]");
        this._orderHistoryDashPageTableCreatedAtSubtext = By.xpath("//table//th[5]");
        //list elements
        this._orderHistoryDashPageTableOrderNumberElements = By.xpath("//table/tbody/tr/td[1]");
        this._orderHistoryDashPageTableOrderIDElements = By.xpath("//table/tbody/tr/td[2]");
        this._orderHistoryDashPageTableOrderTotalElements = By.xpath("//table/tbody/tr/td[3]");
        this._orderHistoryDashPageTableOrderStatusElements = By.xpath("//table/tbody/tr/td[4]");
        this._orderHistoryDashPageTableOrderCreatedAtElements = By.xpath("//table/tbody/tr/td[5]");
        //singular element
        this._orderHistoryDashPageTableOrderDetailsLink = By.xpath("//table/tbody/tr/td[6]/a");

    }

    //order history dashboard page order data getters
    async getOrderHistoryDashPageOrderNumber() {
        const elements = await this.driver.findElements(this._orderHistoryDashPageTableOrderNumberElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history dashboard page order queue number(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderHistoryDashPageOrderID() {
        const elements = await this.driver.findElements(this._orderHistoryDashPageTableOrderIDElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history dashboard page order ID(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderHistoryDashPageOrderTotalPrice() {
        const elements = await this.driver.findElements(this._orderHistoryDashPageTableOrderTotalElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history dashboard page order total price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderHistoryDashPageOrderStatus() {
        const elements = await this.driver.findElements(this._orderHistoryDashPageTableOrderStatusElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history dashboard page order status(es):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderHistoryDashPageOrderCreatedAtTimestamp() {
        const elements = await this.driver.findElements(this._orderHistoryDashPageTableOrderCreatedAtElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history dashboard page order created at timestamp(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderHistoryDashPageOrderDetailsLinkText(){
        const orderHistoryDashPageOrderDetailsLink = await this.driver.findElement(this._orderHistoryDashPageTableOrderDetailsLink);
        return await orderHistoryDashPageOrderDetailsLink.getText();
    }


    //order history dashboard page text element getters
    async getOrderHistoryDashPageTitle(){
        const orderHistoryDashPageTitle = await this.driver.findElement(this._orderHistoryDashboardPageTitle);
        return await orderHistoryDashPageTitle.getText();
    }
    //order history table
    async getOrderHistoryDashPageTableNumberSubtext(){
        const orderHistoryDashPageTableNumberSubtext = await this.driver.findElement(this._orderHistoryDashPageTableNumberSubtext);
        return await orderHistoryDashPageTableNumberSubtext.getText();
    }
    async getOrderHistoryDashPageTableIDSubtext(){
        const orderHistoryDashPageTableIDSubtext = await this.driver.findElement(this._orderHistoryDashPageTableIDSubtext);
        return await orderHistoryDashPageTableIDSubtext.getText();
    }
    async getOrderHistoryDashPageTableTotalSubtext(){
        const orderHistoryDashPageTableTotalSubtext = await this.driver.findElement(this._orderHistoryDashPageTableTotalSubtext);
        return await orderHistoryDashPageTableTotalSubtext.getText();
    }
    async getOrderHistoryDashPageTableOrderStatusSubtext(){
        const orderHistoryDashPageTableOrderStatusSubtext = await this.driver.findElement(this._orderHistoryDashPageTableOrderStatusSubtext);
        return await orderHistoryDashPageTableOrderStatusSubtext.getText();
    }
    async getOrderHistoryDashPageTableCreatedAtSubtext(){
        const orderHistoryDashPageTableCreatedAtSubtext = await this.driver.findElement(this._orderHistoryDashPageTableCreatedAtSubtext);
        return await orderHistoryDashPageTableCreatedAtSubtext.getText();
    }

    //order history dashboard page is empty warning text getter
    async getOrderHistoryDashPageEmptyWarningText(){
        try {
            const warningElem = await this.driver.findElement(this._orderHistoryDashboardPageNoOrderSubtextOne);
            return await warningElem.getText();
        } catch (err) {
            if (err.name === "NoSuchElementError" || err.name === "NoSuchElementException") {
                return null; //warning not displayed
            }
            throw err; //rethrow unexpected errors
        }
    }

    //order history dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isOrderDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._orderHistoryDashboardPageTitle,
            this._orderHistoryDashPageTableNumberSubtext,
            this._orderHistoryDashPageTableIDSubtext,
            this._orderHistoryDashPageTableTotalSubtext,
            this._orderHistoryDashPageTableOrderStatusSubtext,
            this._orderHistoryDashPageTableCreatedAtSubtext,
            this._orderHistoryDashPageTableOrderNumberElements,
            this._orderHistoryDashPageTableOrderIDElements,
            this._orderHistoryDashPageTableOrderTotalElements,
            this._orderHistoryDashPageTableOrderStatusElements,
            this._orderHistoryDashPageTableOrderCreatedAtElements,
            this._orderHistoryDashPageTableOrderDetailsLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { OrderHistoryDashboardPage };