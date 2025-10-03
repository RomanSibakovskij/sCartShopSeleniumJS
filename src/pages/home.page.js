"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class HomePage extends BasePage{

    constructor(driver) {
        super(driver);

        //home page web elements
        //carousel section
        this._homePageCarouselImgElements = By.xpath("//div[@class='swiper-wrapper text-center text-lg-left']/div");
        this._homePageCarouselScrollLeftBtn = By.xpath("//div[@class='swiper-button-prev']");
        this._homePageCarouselScrollRightBtn = By.xpath("//div[@class='swiper-button-next']");
        //main
        this._homePageTitle = By.xpath("//div[@class='page']/h3");
        //new products section
        this._homePageNewProductsSectionTitle = By.xpath("//div[@class='container']/h2");
        //list elements
        this._newProductsBlock = By.xpath("//div[@class='container']");
        this._homePageNewProductsProductImgElements = By.xpath("//div[@class='product-body']//img");
        this._homePageNewProductsProductNameLinkElements = By.xpath("//h5/a");
        this._homePageNewProductsProductCardLinkElements = By.xpath("//div[@class='product-figure']/a");
        this._homePageNewProductsProductAddToCartBtnElements = By.xpath("//div[@class='product-body']//a[@class='button button-secondary button-zakaria add-to-cart-list']");
        this._homePageNewProductsProductUnitPriceElements = By.xpath("//div[@class='row row-30 row-lg-50']//div[@class='product-price']");
        this._homePageNewProductsProductAddToWishlistBtnElements = By.xpath("//div[@class='row row-30 row-lg-50']//div[@class='product-button-wrap']//a[@class='button button-secondary button-zakaria']"); //appears only after hovering over product card
        this._homePageNewProductsProductAddToCompareListBtnElements = By.xpath("//div[@class='row row-30 row-lg-50']//div[@class='product-button-wrap']//a[@class='button button-primary button-zakaria']"); //appears only after hovering over product card

    }

    //click set new products name link method
    async clickSetNewProductNameLink(index){
        const setNewProductNameLink = await this.driver.findElements(this._homePageNewProductsProductCardLinkElements);
        const targetElement = setNewProductNameLink[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", targetElement);
        await this.driver.executeScript("arguments[0].click();", targetElement);
    }

    //scroll down method
    async scrollDownToNewProductsSection(){
        const targetElement = await this.driver.findElement(this._newProductsBlock);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: targetElement }).perform();
    }

    //hover over set new products card method
    async hoverOverSetNewProductCard(index){
        const setNewProductCard = await this.driver.findElements(this._homePageNewProductsProductCardLinkElements);
        const targetElement = setNewProductCard[index];
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: targetElement }).perform();
    }

    //click set new products "Add to wishlist" button method (since the common click, nor Actions click do work, JS executor click is used)
    async clickSetNewProductAddToWishlistBtn(index){
        const setNewProductAddToWishlistBtn = await this.driver.findElements(this._homePageNewProductsProductAddToWishlistBtnElements);
        const targetElement = setNewProductAddToWishlistBtn[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", targetElement);
        await this.driver.executeScript("arguments[0].click();", targetElement);
    }

    //click set new products "Add to compare list" button method (since the common click, nor Actions click do work, JS executor click is used)
    async clickSetNewProductAddToCompareListBtn(index){
        const setNewProductAddToCompareListBtn = await this.driver.findElements(this._homePageNewProductsProductAddToCompareListBtnElements);
        const targetElement = setNewProductAddToCompareListBtn[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", targetElement);
        await this.driver.executeScript("arguments[0].click();", targetElement);
    }

    //home page text element getters
    async getHomePageTitle(){
        const homePageTitle = await this.driver.findElement(this._homePageTitle);
        return await homePageTitle.getText();
    }
    async getHomePageNewProductsSectionTitle(){
        const homePageNewProductsSectionTitle = await this.driver.findElement(this._homePageNewProductsSectionTitle);
        return await homePageNewProductsSectionTitle.getText();
    }

    //home page product data getters
    async getHomePageNewProductName() {
        const elements = await this.driver.findElements(this._homePageNewProductsProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page new product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHomePageNewProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageNewProductsProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page new product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //home page page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            //this._homePageCarouselImgElements,
            this._homePageCarouselScrollLeftBtn,
            this._homePageCarouselScrollRightBtn,
            this._homePageTitle,
            //this._homePageNewProductsSectionTitle,
            //this._homePageNewProductsProductImgElements,
            //this._homePageNewProductsProductNameLinkElements,
            this._homePageNewProductsProductAddToCartBtnElements,
            this._homePageNewProductsProductUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }



}
module.exports = { HomePage };