"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class AccountDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //account dashboard page web elements
        this._accountDashboardPageWelcomeMsg = By.xpath("//p[contains(text(), 'Wellcome')]");
        //aside list (link elements)
        this._accountDashboardPageAsideLinkElements = By.xpath("//ul[@class='list-group list-group-flush member-nav']/li/a");

    }

    //account dashboard page text element getters
    async getAccountDashboardPageWelcomeMsg(){
        const element = await this.driver.findElement(this._accountDashboardPageWelcomeMsg);
        const fullText = await element.getText();

        const lines = fullText
            .split('\n')
            .map(line => line.trim())
            .filter(Boolean);

        return lines[0]?.split(' ')[0] || '';
    }

    async getAccountDashboardPageAsideLinkText() {
        const elements = await this.driver.findElements(this._accountDashboardPageAsideLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get account dashboard page aside link text(s):', error.message);
                    return '';
                }
            })
        );
    }

    //account dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAccountDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._accountDashboardPageAsideLinkElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AccountDashboardPage };