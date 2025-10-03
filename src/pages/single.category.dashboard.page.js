"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class SingleCategoryDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single category dashboard page web elements
        this._singleCategoryDashboardPageProductCount = By.xpath("//p[@class='product-top-panel-title']");
        this._singleCategoryDashboardPageSortDropdownMenu = By.xpath("//select[@class='form-control']");
        //list elements
        this._singleCategoryDashboardPageSortByOptionElements = By.xpath("//select[@class='form-control']/option");
        //product table list elements
        this._singleCategoryDashboardPageProductImgElements = By.xpath("//div[@class='product-body']//img");
        this._singleCategoryDashboardPageProductNameLinkElements = By.xpath("//div[@class='product-body']//h5/a");
        this._singleCategoryDashboardPageProductUnitPriceElements = By.xpath("//div[@class='product-body']//div[@class='product-price']");
        this._singleCategoryDashboardPageProductAddToCartBtnElements = By.xpath("//div[@class='product-body']//a[@class='button button-secondary button-zakaria add-to-cart-list']");
        this._singleCategoryDashboardPageProductAddToWishlistBtnElements = By.xpath("//div[@class='product-button-wrap']/div[1]/a"); //appear only after hovering above the product card
        this._singleCategoryDashboardPageProductAddToCompareListBtnElements = By.xpath("//div[@class='product-button-wrap']/div[2]/a"); //appear only after hovering above the product card
        this._singleCategoryDashboardPagePaginationBtnElements = By.xpath("//nav[@aria-label='Page navigation']/ul//ul/li/a");

    }

    //single category dashboard product data getters
    async getSingleCategoryDashPageProductCount(){
        const singleCategoryDashPageProductCount = await this.driver.findElement(this._singleCategoryDashboardPageProductCount);
        return await singleCategoryDashPageProductCount.getText();
    }
    //product table (list elements)
    async getSingleCategoryDashPageProductName() {
        const elements = await this.driver.findElements(this._singleCategoryDashboardPageProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single category dashboard page product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getSingleCategoryDashPageProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleCategoryDashboardPageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single category dashboard page product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //single category dashboard page web element assert methods
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleCategoryDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleCategoryDashboardPageProductCount,
            this._singleCategoryDashboardPageSortDropdownMenu,
            this._singleCategoryDashboardPageProductImgElements,
            this._singleCategoryDashboardPageProductNameLinkElements,
            this._singleCategoryDashboardPageProductUnitPriceElements,
            this._singleCategoryDashboardPageProductAddToCartBtnElements,
            this._singleCategoryDashboardPagePaginationBtnElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //this page shares elements with single category dashboard page
    async isSearchedProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleCategoryDashboardPageProductImgElements,
            this._singleCategoryDashboardPageProductNameLinkElements,
            this._singleCategoryDashboardPageProductUnitPriceElements,
            this._singleCategoryDashboardPageProductAddToCartBtnElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleCategoryDashboardPage };