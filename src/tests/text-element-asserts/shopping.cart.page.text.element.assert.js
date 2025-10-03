"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { ShoppingCartPage } = require("../../pages/shopping.cart.page.js");

class ShoppingCartPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert the single product page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        assert.strictEqual(shoppingCartPageTitle, "Demo GP247 CMS", "The shopping cart page title doesn't match expectations.");
        //table
        //assert the single product page table name subtext is as expected
        const shoppingCartPageTableNameSubtext = await shoppingCartPage.getShoppingCartTableNameSubtext();
        assert.strictEqual(shoppingCartPageTableNameSubtext, "Name", "The shopping cart page table name subtext doesn't match expectations.");
        //assert the single product page table price subtext is as expected
        const shoppingCartPageTablePriceSubtext = await shoppingCartPage.getShoppingCartTablePriceSubtext();
        assert.strictEqual(shoppingCartPageTablePriceSubtext, "Price", "The shopping cart page table price subtext doesn't match expectations.");
        //assert the single product page table quantity subtext is as expected
        const shoppingCartPageTableQtySubtext = await shoppingCartPage.getShoppingCartTableQuantitySubtext();
        assert.strictEqual(shoppingCartPageTableQtySubtext, "Quantity", "The shopping cart page table quantity subtext doesn't match expectations.");
        //assert the single product page table subtotal subtext is as expected
        const shoppingCartPageTableSubtotalSubtext = await shoppingCartPage.getShoppingCartTableSubtotalSubtext();
        assert.strictEqual(shoppingCartPageTableSubtotalSubtext, "Subtotal", "The shopping cart page table subtotal subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartPageTextElementAssert;