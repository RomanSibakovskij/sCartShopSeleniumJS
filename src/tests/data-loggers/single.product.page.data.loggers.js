"use strict"

const BaseTest = require("../utilities/base.test.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");

const Logger = require("../../pages/utilities/logger.js");

class SingleProductPageDataLoggers extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product page product data logger method
    async logSingleProductPageProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        console.log("Single product page displayed product data: " + "\n");
        //log single product page product name
        const singleProductPageProductName = await singleProductPage.getSingleProductPageTitle();
        Logger.info("Single product name: " + singleProductPageProductName);
        //log single product page product brand
        const singleProductPageProductBrand = await singleProductPage.getSingleProductPageBrand();
        Logger.info("Single product brand: " + singleProductPageProductBrand);
        //log single product page product unit price
        const singleProductPageProductUnitPrice = await singleProductPage.getSingleProductPageUnitPrice();
        Logger.info("Single product unit price: " + singleProductPageProductUnitPrice);
        //log single product page product stock
        const singleProductPageProductStock = await singleProductPage.getSingleProductPageStock();
        Logger.info("Single product stock: " + singleProductPageProductStock);
        //log single product page product category
        const singleProductPageProductCategory = await singleProductPage.getSingleProductPageCategoryLinkText();
        Logger.info("Single product category: " + singleProductPageProductCategory);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = SingleProductPageDataLoggers;