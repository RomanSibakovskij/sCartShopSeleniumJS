"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class CompareListPage extends BasePage{

    constructor(driver) {
        super(driver);

        //compare list page web elements
        this._compareListPageTitle = By.xpath("//h6");
        //product table
        this._compareListPageProductCardBlock = By.xpath("//table//td");
        this._compareListPageProductImgElements = By.xpath("//table//td//img");
        this._compareListPageProductUnitPriceElements = By.xpath("//table//td//div[@class='product-price']");
        this._compareListPageProductRemoveBtnElements = By.xpath("//table//td/a[@class='cart_quantity_delete']");
        //empty wishlist warning
        this._compareListPageEmptyWishlistWarningMessage = By.xpath("//div[@class='col-md-12 text-danger min-height-37vh']");

    }

    //click set product "Remove from compare list" button method (since the common click, nor Actions click do work, JS executor click is used)
    async clickSetRemoveProductFromCompareListBtn(index){
        const setRemoveProductFromCompareListBtn = await this.driver.findElements(this._compareListPageProductRemoveBtnElements);
        const targetElement = setRemoveProductFromCompareListBtn[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", targetElement);
        await this.driver.executeScript("arguments[0].click();", targetElement);
    }

    //compare list product data getters
    async getCompareListPageProductData() {
        const elements = await this.driver.findElements(this._compareListPageProductCardBlock);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();

                    //split on-line breaks and trim each part
                    return text
                        .split(/\r?\n/) //split on single or double newlines
                        .map(part => part.trim())
                        .filter(part => part.length > 0);
                } catch (error) {
                    Logger.warn('Failed to get compare list page product(s) text data:', error.message);
                    return [];
                }
            })
        );
    }

    //empty compare list warning message getter
    async getCompareListPageEmptyWishlistWarningMessage(){
        const compareListPageEmptyWishlistWarningMessage = await this.driver.findElement(this._compareListPageEmptyWishlistWarningMessage);
        return await compareListPageEmptyWishlistWarningMessage.getText();
    }

    //compare list page page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCompareListPageWebElementDisplayed(){
        const elementsToCheck = [
            this._compareListPageTitle,
            this._compareListPageProductCardBlock,
            this._compareListPageProductImgElements,
            this._compareListPageProductUnitPriceElements,
            this._compareListPageProductRemoveBtnElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { CompareListPage };