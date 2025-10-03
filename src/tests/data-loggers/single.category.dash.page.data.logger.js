"use strict"

const BaseTest = require("../utilities/base.test.js");
const { SingleCategoryDashboardPage } = require("../../pages/single.category.dashboard.page.js");

const Logger = require("../../pages/utilities/logger.js");

class SingleCategoryDashPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product page product data logger method
    async logSingleCategoryDashboardPageProductData(){
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        console.log("Single category dashboard product page displayed product data: " + "\n");
        //log single product page product name
        const singleCategoryDashboardPageProductCount = await singleCategoryDashboardPage.getSingleCategoryDashPageProductCount();
        Logger.info("Single category dashboard page product count: " + singleCategoryDashboardPageProductCount);
        //log single product page product name
        const singleCategoryDashboardPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        Logger.info("Single category dashboard page product name: " + singleCategoryDashboardPageProductName);
        //log single product page product unit price
        const singleCategoryDashboardPageProductUnitPrice = await singleCategoryDashboardPage.getSingleCategoryDashPageProductUnitPrice();
        Logger.info("Single category dashboard page product unit price: " + singleCategoryDashboardPageProductUnitPrice);
    }

    //searched product page product data logger method
    async logSearchedProductPageProductData(){
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        console.log("Searched product page displayed product data: " + "\n");
        //log searched product page product name
        const singleCategoryDashboardPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        Logger.info("Searched product page product name: " + singleCategoryDashboardPageProductName);
        //log searched product page product unit price
        const singleCategoryDashboardPageProductUnitPrice = await singleCategoryDashboardPage.getSingleCategoryDashPageProductUnitPrice();
        Logger.info("Searched product page product unit price: " + singleCategoryDashboardPageProductUnitPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = SingleCategoryDashPageDataLogger;