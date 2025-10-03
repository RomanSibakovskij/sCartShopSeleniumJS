"use strict"

const BaseTest = require("../utilities/base.test.js");
const { WishlistPage } = require("../../pages/wishlist.page.js");

const Logger = require("../../pages/utilities/logger.js");

class WishlistPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //wishlist page product data logger method
    async logWishlistPageProductData(){
        const wishlistPage = new WishlistPage(this.driver);
        console.log("Wishlist page displayed product data: " + "\n");
        //log wishlist page product number list
        const wishlistPageProductNumbers = await wishlistPage.getWishlistPageProductNumber();
        Logger.info("Wishlist page product number list: " + wishlistPageProductNumbers);
        //log wishlist page product SKU code(s)
        const wishlistPageProductSKUCodes = await wishlistPage.getWishlistPageProductSKUCode();
        Logger.info("Wishlist page product SKU code(s): " + wishlistPageProductSKUCodes);
        //log wishlist page product name(s)
        const wishlistPageProductNames = await wishlistPage.getWishlistPageProductName();
        Logger.info("Wishlist page product name(s): " + wishlistPageProductNames);
        //log wishlist page product unit price(s)
        const wishlistPageProductUnitPrices = await wishlistPage.getWishlistPageProductUnitPrice();
        Logger.info("Wishlist page product unit price(s): " + wishlistPageProductUnitPrices);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = WishlistPageDataLogger ;