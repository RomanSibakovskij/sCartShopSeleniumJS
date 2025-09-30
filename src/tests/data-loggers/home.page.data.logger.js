"use strict"

const BaseTest = require("../utilities/base.test.js");
const { HomePage } = require("../../pages/home.page.js");

const Logger = require("../../pages/utilities/logger.js");

class HomePageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page new product data logger method
    async logHomePageNewProductData(){
        const homePage = new HomePage(this.driver);
        console.log("Home page displayed new product(s) data: " + "\n");
        //new products
        //log home page featured product name(s)
        const homePageNewProductNames = await homePage.getHomePageNewProductName();
        Logger.info("Home page new product name(s): " + homePageNewProductNames);
        //log home page featured product unit price(s)
        const homePageFeaturedProductUnitPrices = await homePage.getHomePageNewProductUnitPrice();
        Logger.info("Home page new product unit price(s): " + homePageFeaturedProductUnitPrices);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageDataLogger;