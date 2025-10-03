"use strict"

const BaseTest = require("../utilities/base.test.js");
const { ShoppingCartPage } = require("../../pages/shopping.cart.page.js");

const Logger = require("../../pages/utilities/logger.js");

class ShoppingCartPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart page product data logger method
    async logShoppingCartPageProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        console.log("Shopping cart page displayed product data: " + "\n");
        //log shopping cart page product name(s)
        const shoppingCartPageProductName = await shoppingCartPage.getShoppingCartPageProductName();
        Logger.info("Shopping cart page product name(s): " + shoppingCartPageProductName);
        //log shopping cart page product SKU code(s)
        const shoppingCartPageProductSKUCode = await shoppingCartPage.getShoppingCartPageProductSKUCode();
        Logger.info("Shopping cart page product SKU code(s): " + shoppingCartPageProductSKUCode);
        //log shopping cart page product price(s)
        const shoppingCartPageProductPrice = await shoppingCartPage.getShoppingCartPageProductPrice();
        Logger.info("Shopping cart page product price(s): " + shoppingCartPageProductPrice);
        //log shopping cart page product quantity(ies)
        const shoppingCartPageProductQty = await shoppingCartPage.getShoppingCartPageProductQty();
        Logger.info("Shopping cart page product quantity(ies): " + shoppingCartPageProductQty);
        //log shopping cart page product subtotal price(s)
        const shoppingCartPageProductSubtotalPrice = await shoppingCartPage.getShoppingCartPageProductSubtotalPrice();
        Logger.info("Shopping cart page product subtotal price(s): " + shoppingCartPageProductSubtotalPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartPageDataLogger;