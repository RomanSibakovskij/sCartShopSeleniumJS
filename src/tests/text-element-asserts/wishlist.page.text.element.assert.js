"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { WishlistPage } = require("../../pages/wishlist.page.js");

class WishlistPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //wishlist page text element assert test method
    async isWishlistPageTextElementAsExpected(){
        const wishlistPage = new WishlistPage(this.driver);
        //assert the wishlist page title is as expected
        const wishlistPageTitle = await wishlistPage.getWishlistPageTitle();
        assert.strictEqual(wishlistPageTitle, "PAGE WISHLIST", "The wishlist page title doesn't match expectations.");
        //table
        //assert the wishlist page product number subtext is as expected
        const wishlistPageProductNumberSubtext = await wishlistPage.getWishlistPageTableNumber();
        assert.strictEqual(wishlistPageProductNumberSubtext, "No.", "The wishlist page product number subtext doesn't match expectations.");
        //assert the wishlist page product SKU code subtext is as expected
        const wishlistPageProductSKUCodeSubtext = await wishlistPage.getWishlistPageTableSKUCodeSubtext();
        assert.strictEqual(wishlistPageProductSKUCodeSubtext, "SKU code", "The wishlist page product SKU code subtext doesn't match expectations.");
        //assert the wishlist page product name subtext is as expected
        const wishlistPageProductNameSubtext = await wishlistPage.getWishlistPageTableNameSubtext();
        assert.strictEqual(wishlistPageProductNameSubtext, "Name", "The wishlist page product name subtext doesn't match expectations.");
        //assert the wishlist page product price subtext is as expected
        const wishlistPageProductPriceSubtext = await wishlistPage.getWishlistPageTablePriceSubtext();
        assert.strictEqual(wishlistPageProductPriceSubtext, "Price", "The wishlist page product price subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = WishlistPageTextElementAssert;