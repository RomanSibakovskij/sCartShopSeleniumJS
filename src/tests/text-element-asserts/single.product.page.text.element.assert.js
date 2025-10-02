"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");

class SingleProductPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product page text element assert test method
    async isSingleProductPageTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert the single product page title is as expected
        const singleProductPageStockSubtext = await singleProductPage.getSingleProductPageStockSubtext();
        assert.strictEqual(singleProductPageStockSubtext, "Stock status:", "The single product page stock subtext doesn't match expectations.");
        //assert the single product page category subtext is as expected
        const singleProductPageCategorySubtext = await singleProductPage.getSingleProductPageCategorySubtext();
        assert.strictEqual(singleProductPageCategorySubtext, "Category:", "The single product page category subtext doesn't match expectations.");
        //assert the single product page bundle subtext is as expected //not all pages have that
        //const singleProductPageBundleSubtext = await singleProductPage.getSingleProductPageBundleSubtext();
        //assert.strictEqual(singleProductPageBundleSubtext, "Bundle", "The single product page bundle subtext doesn't match expectations.");
        //assert the single product page share subtext is as expected
        const singleProductPageShareSubtext = await singleProductPage.getSingleProductPageShareSubtext();
        assert.strictEqual(singleProductPageShareSubtext, "Share", "The single product page share subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = SingleProductPageTextElementAssert;