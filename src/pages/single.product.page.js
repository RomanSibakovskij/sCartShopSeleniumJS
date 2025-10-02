"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class SingleProductPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single product page web elements
        //last view products section
        this._singleProductPageLastViewProductSectionTitle = By.xpath("//h6");
        //list elements
        this._singleProductPageLastViewProductImgElements = By.xpath("//article[@class='post post-minimal']//img");
        this._singleProductPageLastViewProductNameLinkElements = By.xpath("//article[@class='post post-minimal']//p/a");
        this._singleProductPageLastViewProductViewDateElements = By.xpath("//article[@class='post post-minimal']//time");
        //main
        this._singleProductPageProductImg = By.xpath("//div[@class='slick-vertical slick-product']//img");
        this._singleProductPageProductName = By.xpath("//div[@class='single-product']/h3");
        this._singleProductPageProductBrand = By.xpath("//div[@class='single-product']/p");
        this._singleProductPageProductUnitPrice = By.xpath("//span[@class='gp247-new-price']");
        this._singleProductPageProductQtyInputField = By.xpath("//input[@name='qty']");
        this._singleProductPageProductQtyIncreaseButton = By.xpath("//span[@class='stepper-arrow up']");
        this._singleProductPageProductQtyDecreaseButton = By.xpath("//span[@class='stepper-arrow down']");
        this._singleProductPageProductAddToCartButton = By.xpath("//button[@class='button button-secondary']");
        this._singleProductPageProductStockSubtext = By.xpath("//form[@id='buy_block']/div/div[4]");
        this._singleProductPageProductStock = By.xpath("//span[@id='stock_status']");
        this._singleProductPageProductCategorySubtext = By.xpath("//form[@id='buy_block']/div/div[5]");
        this._singleProductPageProductCategoryLink = By.xpath("//form[@id='buy_block']/div/div[5]/a");
        this._singleProductPageProductBundleSubtext = By.xpath("//b");
        this._singleProductPageProductShareSubtext = By.xpath("//span[@class='list-social-title']");
        //list elements
        this._singleProductPageProductBundleImgElements = By.xpath("//span[@class='gp247-product-build']//img");
        this._singleProductPageProductBundleImgQtyElements = By.xpath("//span[@class='gp247-product-build']");
        this._singleProductPageProductShareSocialIconElements = By.xpath("//form[@id='buy_block']//ul[@class='list-inline list-social list-inline-sm']//a");
        this._singleProductPageProductDescriptionListElements = By.xpath("//ul[@class='nav nav-tabs nav-tabs-1']/li");
        //singular elements
        this._singleProductPageProductDescription = By.xpath("//div[@id='tabs-1-1']");
        //recommend section
        this._singleProductPageProductRecommendSectionTitle = By.xpath("//section[@class='section section-sm section-last bg-default']//h4");
        //list elements
        this._singleProductPageProductRecommendedImgElements = By.xpath("//section[@class='section section-sm section-last bg-default']//div[@class='product-figure']//img");
        this._singleProductPageProductRecommendedNameLinkElements = By.xpath("//section[@class='section section-sm section-last bg-default']//h5/a");
        this._singleProductPageProductRecommendedAddToCartBtnElements = By.xpath("//section[@class='section section-sm section-last bg-default']//a[@class='button button-secondary button-zakaria add-to-cart-list']");
        this._singleProductPageProductRecommendedUnitPriceElements = By.xpath("//section[@class='section section-sm section-last bg-default']//div[@class='product-price']");

    }

    //input set product quantity method
    async inputSetProductQuantityIntoQuantityInputField(quantity){
        const quantityInputField = await this.driver.findElement(this._singleProductPageProductQtyInputField);
        await quantityInputField.clear();
        Logger.info("Set product quantity input: ", quantity);
        await quantityInputField.sendKeys(quantity);
    }

    //click "Add to cart" button method
    async clickAddToCartButton(){
        const addToCartButton = await this.driver.findElement(this._singleProductPageProductAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    //single product page text element getters
    async getSingleProductPageTitle(){
        const singleProductPageTitle = await this.driver.findElement(this._singleProductPageProductName);
        return await singleProductPageTitle.getText();
    }
    async getSingleProductPageBrand(){
        const singleProductPageBrand = await this.driver.findElement(this._singleProductPageProductBrand);
        return await singleProductPageBrand.getText();
    }
    async getSingleProductPageUnitPrice(){
        const singleProductPageUnitPrice = await this.driver.findElement(this._singleProductPageProductUnitPrice);
        return await singleProductPageUnitPrice.getText();
    }
    async getSingleProductPageStockSubtext(){
        const singleProductPageStockSubtext = await this.driver.findElement(this._singleProductPageProductStockSubtext);
        const fullText = await singleProductPageStockSubtext.getText();
        const colonIndex = fullText.indexOf(':');
        return fullText.substring(0, colonIndex + 1);
    }
    async getSingleProductPageStock(){
        const singleProductPageStock = await this.driver.findElement(this._singleProductPageProductStock);
        return await singleProductPageStock.getText();
    }
    async getSingleProductPageCategorySubtext(){
        const singleProductPageCategorySubtext = await this.driver.findElement(this._singleProductPageProductCategorySubtext);
        const fullText = await singleProductPageCategorySubtext.getText();
        const colonIndex = fullText.indexOf(':');
        return fullText.substring(0, colonIndex + 1);
    }
    async getSingleProductPageCategoryLinkText(){
        const singleProductPageCategoryLinkText = await this.driver.findElement(this._singleProductPageProductCategoryLink);
        return await singleProductPageCategoryLinkText.getText();
    }
    async getSingleProductPageBundleSubtext(){
        const singleProductPageBundleSubtext = await this.driver.findElement(this._singleProductPageProductBundleSubtext);
        return await singleProductPageBundleSubtext.getText();
    }
    async getSingleProductPageShareSubtext(){
        const singleProductPageShareSubtext = await this.driver.findElement(this._singleProductPageProductShareSubtext);
        return await singleProductPageShareSubtext.getText();
    }

    //single product page web element assert methods
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageProductImg,
            this._singleProductPageProductName,
            this._singleProductPageProductBrand,
            this._singleProductPageProductUnitPrice,
            this._singleProductPageProductQtyInputField,
            this._singleProductPageProductQtyIncreaseButton,
            this._singleProductPageProductQtyDecreaseButton,
            this._singleProductPageProductAddToCartButton,
            this._singleProductPageProductStockSubtext,
            this._singleProductPageProductStock,
            this._singleProductPageProductCategorySubtext,
            this._singleProductPageProductCategoryLink,
            //this._singleProductPageProductBundleSubtext,
            this._singleProductPageProductShareSubtext,
            //this._singleProductPageProductBundleImgElements, //not all pages have that
            //this._singleProductPageProductBundleImgQtyElements, //not all pages have that
            this._singleProductPageProductShareSubtext,
            this._singleProductPageProductShareSocialIconElements,
            this._singleProductPageProductDescriptionListElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isSingleProductPageLastViewProductWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageLastViewProductSectionTitle,
            this._singleProductPageLastViewProductImgElements,
            this._singleProductPageLastViewProductNameLinkElements,
            this._singleProductPageLastViewProductViewDateElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isSingleProductPageRecommendedProductWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageProductRecommendSectionTitle,
            this._singleProductPageProductRecommendedImgElements,
            this._singleProductPageProductRecommendedNameLinkElements,
            this._singleProductPageProductRecommendedAddToCartBtnElements,
            this._singleProductPageProductRecommendedUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage };