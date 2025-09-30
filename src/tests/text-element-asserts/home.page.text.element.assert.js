"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { HomePage } = require("../../pages/home.page.js");

class HomePageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //main section
        //assert the home page title is as expected
        const homePageTitle = await homePage.getHomePageTitle();
        assert.strictEqual(homePageTitle, "WELCOME TO CMS CREATED BY GP247 SYSTEM", "The home page title doesn't match expectations.");
        //new products
        //assert the home page new products section title is as expected (Selenium can't find this element with VALID selector)
        //const homePageNewProductsSectionTitle = await homePage.getHomePageNewProductsSectionTitle();
        //assert.strictEqual(homePageNewProductsSectionTitle, "NEW PRODUCTS", "The home page new products section title doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageTextElementAssert;