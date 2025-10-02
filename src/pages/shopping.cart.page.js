const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartPageTitle = By.xpath("//h5");
        this._shoppingCartPageIcon = By.xpath("//h5/i");
        //shopping cart table
        this._shoppingCartTableNameSubtext = By.xpath("//table/thead//th[1]");
        this._shoppingCartTablePriceSubtext = By.xpath("//table/thead//th[2]");
        this._shoppingCartTableQuantitySubtext = By.xpath("//table/thead//th[3]");
        this._shoppingCartTableSubtotalSubtext = By.xpath("//table/thead//th[4]");
        //list elements
        this._shoppingCartTableProductImgElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[1]//img");
        this._shoppingCartTableProductNameLinkElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[1]//span/a[@class='row_cart-name']");
        this._shoppingCartTableProductSKUCodeSubtextElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[1]//span/b");
        this._shoppingCartTableProductSKUCodeElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[1]//span");
        this._shoppingCartTableProductPriceElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[2]");
        this._shoppingCartTableProductQtyDecreaseBtnElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[3]//span[@class='stepper-arrow down']");
        this._shoppingCartTableProductQtyInputFieldElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[3]//input");
        this._shoppingCartTableProductQtyIncreaseBtnElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[3]//span[@class='stepper-arrow up']");
        this._shoppingCartTableProductSubtotalPriceElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[4]");
        this._shoppingCartTableProductRemoveBtnElements = By.xpath("//table//tr[@class='row_cart form-group ']/td[5]/a");
        //button
        this._shoppingCartCheckoutButton = By.xpath("//button[@class='button button-secondary']");
        //empty shopping cart message
        this._shoppingCartEmptyMsg = By.xpath("//div[@class='col-md-12']");

    }

    //shopping cart product data getters
    async getShoppingCartPageProductName() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartPageProductSKUCode() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductSKUCodeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page product SKU code(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartPageProductPrice() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page product price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartPageProductQty() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getAttribute("value");
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartPageProductSubtotalPrice() {
        const elements = await this.driver.findElements(this._shoppingCartTableProductSubtotalPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page product subtotal price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //shopping cart page text element getters
    async getShoppingCartPageTitle(){
        const shoppingCartPageTitle = await this.driver.findElement(this._shoppingCartPageTitle);
        return await shoppingCartPageTitle.getText();
    }
    //table
    async getShoppingCartTableNameSubtext(){
        const shoppingCartTableNameSubtext = await this.driver.findElement(this._shoppingCartTableNameSubtext);
        return await shoppingCartTableNameSubtext.getText();
    }
    async getShoppingCartTablePriceSubtext(){
        const shoppingCartTablePriceSubtext = await this.driver.findElement(this._shoppingCartTablePriceSubtext);
        return await shoppingCartTablePriceSubtext.getText();
    }
    async getShoppingCartTableQuantitySubtext(){
        const shoppingCartTableQtySubtext = await this.driver.findElement(this._shoppingCartTableQuantitySubtext);
        return await shoppingCartTableQtySubtext.getText();
    }
    async getShoppingCartTableSubtotalSubtext(){
        const shoppingCartTableSubtotalSubtext = await this.driver.findElement(this._shoppingCartTableSubtotalSubtext);
        return await shoppingCartTableSubtotalSubtext.getText();
    }

    //empty shopping cart message getter
    async getShoppingCartEmptyMsg(){
        const shoppingCartPageEmptyMsg = await this.driver.findElement(this._shoppingCartEmptyMsg);
        return await shoppingCartPageEmptyMsg.getText();
    }

    //shopping cart page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingCartPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartPageTitle,
            this._shoppingCartPageIcon,
            this._shoppingCartTableNameSubtext,
            this._shoppingCartTablePriceSubtext,
            this._shoppingCartTableQuantitySubtext,
            this._shoppingCartTableSubtotalSubtext,
            this._shoppingCartTableProductImgElements,
            this._shoppingCartTableProductNameLinkElements,
            this._shoppingCartTableProductSKUCodeSubtextElements,
            this._shoppingCartTableProductSKUCodeElements,
            this._shoppingCartTableProductPriceElements,
            this._shoppingCartTableProductQtyDecreaseBtnElements,
            this._shoppingCartTableProductQtyInputFieldElements,
            this._shoppingCartTableProductQtyIncreaseBtnElements,
            this._shoppingCartTableProductSubtotalPriceElements,
            this._shoppingCartTableProductRemoveBtnElements,
            this._shoppingCartCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ShoppingCartPage };