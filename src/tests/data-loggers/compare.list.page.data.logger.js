"use strict"

const BaseTest = require("../utilities/base.test.js");
const { CompareListPage } = require("../../pages/compare.list.page.js");

const Logger = require("../../pages/utilities/logger.js");

class CompareListPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //compare list page product data logger method
    async logCompareListPageProductData(){
        const compareListPage = new CompareListPage(this.driver);
        console.log("Compare list page displayed product data: " + "\n");
        //log compare list page product(s) text data
        const compareListPageProductTextData = await compareListPage.getCompareListPageProductData();
        //format the output
        const formattedProducts = compareListPageProductTextData
            .map((product, index) => `Product ${index + 1}:\n  ${product.join("\n  ")}`)
            .join("\n\n");
        Logger.info("Compare list page product(s) text data:\n" + formattedProducts);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = CompareListPageDataLogger;