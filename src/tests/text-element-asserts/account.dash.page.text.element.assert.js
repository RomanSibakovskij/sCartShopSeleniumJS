"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const Logger = require("../../pages/utilities/logger.js");

class AccountDashPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //account dashboard page text element assert test method
    async isAccountDashPageTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //aside
        //assert the account dashboard page link texts are as expected
        const expectedAccountDashPageAsideLinkTexts = ["Change password", "Change infomation", "Address list", "Order history"];
        //log the misspelling issue
        (expectedAccountDashPageAsideLinkTexts[1] === "Change information") ? Logger.info("The 'change information' is spelled correctly") : Logger.info(`The 'change information' isn't spelled correctly. Expected: 'change information', actual: ${actualAccountDashPageAsideLinkTexts[1]}.`);
        const actualAccountDashPageAsideLinkTexts = await accountDashboardPage.getAccountDashboardPageAsideLinkText();
        assert.deepStrictEqual(actualAccountDashPageAsideLinkTexts, expectedAccountDashPageAsideLinkTexts, "The account dashboard page aside link texts don't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AccountDashPageTextElementAssert;