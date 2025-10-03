const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class WishlistPage extends BasePage{

    constructor(driver) {
        super(driver);

        //wishlist page web elements
        this._wishlistPageTitle = By.xpath("//h6");
        //table elements
        this._wishlistPageTableNumberSubtext = By.xpath("//table/thead//th[1]");
        this._wishlistPageTableSKUCodeSubtext = By.xpath("//table/thead//th[2]");
        this._wishlistPageTableNameSubtext = By.xpath("//table/thead//th[3]");
        this._wishlistPageTablePriceSubtext = By.xpath("//table/thead//th[4]");
        //list elements
        this._wishlistPageTableProductNumberElements = By.xpath("//table//tr[@class='row_cart']/td[1]");
        this._wishlistPageTableProductSKUCodeElements = By.xpath("//table//tr[@class='row_cart']/td[2]");
        this._wishlistPageTableProductImgElements = By.xpath("//table//tr[@class='row_cart']/td[3]//img");
        this._wishlistPageTableProductNameLinkElements = By.xpath("//table//tr[@class='row_cart']/td[3]//a");
        this._wishlistPageTableProductUnitPriceElements = By.xpath("//table//tr[@class='row_cart']/td[4]");
        this._wishlistPageTableProductRemoveBtnElements = By.xpath("//table//tr[@class='row_cart']/td[5]/a");
        //empty wishlist warning
        this._wishlistPageEmptyWishlistWarningMessage = By.xpath("//div[@class='col-md-12 text-danger']");

    }

    //wishlist page product data getters
    async getWishlistPageProductNumber(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductNumberElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product number(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getWishlistPageProductSKUCode(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductSKUCodeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product SKU code(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getWishlistPageProductName(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getWishlistPageProductUnitPrice(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //wishlist page text element getters
    async getWishlistPageTitle(){
        const wishlistPageTitle = await this.driver.findElement(this._wishlistPageTitle);
        return await wishlistPageTitle.getText();
    }
    //table
    async getWishlistPageTableNumber(){
        const wishlistPageTableNumber = await this.driver.findElement(this._wishlistPageTableNumberSubtext);
        return await wishlistPageTableNumber.getText();
    }
    async getWishlistPageTableSKUCodeSubtext(){
        const wishlistPageTableSKUCodeSubtext = await this.driver.findElement(this._wishlistPageTableSKUCodeSubtext);
        return await wishlistPageTableSKUCodeSubtext.getText();
    }
    async getWishlistPageTableNameSubtext(){
        const wishlistPageTableNameSubtext = await this.driver.findElement(this._wishlistPageTableNameSubtext);
        return await wishlistPageTableNameSubtext.getText();
    }
    async getWishlistPageTablePriceSubtext(){
        const wishlistPageTablePriceSubtext = await this.driver.findElement(this._wishlistPageTablePriceSubtext);
        return await wishlistPageTablePriceSubtext.getText();
    }

    //empty wishlist warning message getter
    async getWishlistPageEmptyWishlistWarningMessage(){
        const wishlistPageEmptyWishlistWarningMessage = await this.driver.findElement(this._wishlistPageEmptyWishlistWarningMessage);
        return await wishlistPageEmptyWishlistWarningMessage.getText();
    }

    //wishlist page page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isWishlistPageWebElementDisplayed(){
        const elementsToCheck = [
            this._wishlistPageTitle,
            this._wishlistPageTableNumberSubtext,
            this._wishlistPageTableSKUCodeSubtext,
            this._wishlistPageTableNameSubtext,
            this._wishlistPageTablePriceSubtext,
            this._wishlistPageTableProductNumberElements,
            this._wishlistPageTableProductSKUCodeElements,
            this._wishlistPageTableProductImgElements,
            this._wishlistPageTableProductNameLinkElements,
            this._wishlistPageTableProductUnitPriceElements,
            this._wishlistPageTableProductRemoveBtnElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { WishlistPage };