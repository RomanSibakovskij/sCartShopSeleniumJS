const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

class CheckoutPage extends BasePage{

    constructor(driver) {
        super(driver);
    }



}
module.exports = { CheckoutPage };