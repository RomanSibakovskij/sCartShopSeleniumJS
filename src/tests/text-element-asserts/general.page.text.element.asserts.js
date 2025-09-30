"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { GeneralPage } = require("../../pages/general.page.js");
const Logger = require("../../pages/utilities/logger.js");

class GeneralPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page header text element assert test method
    async isGeneralPageHeaderTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //header navbar section
        //assert the general page header navbar link texts are as expected
        const expectedHeaderNavbarLinkTexts = ["NEWS", "ALL PRODUCTS", "ABOUT", "GP247",  "ACCOUNT", "USD DOLA"];
        const actualHeaderNavbarLinkTexts = await generalPage.getHeaderNavLinkElements();
        assert.deepStrictEqual(actualHeaderNavbarLinkTexts, expectedHeaderNavbarLinkTexts, "The general page header navbar link texts don't match expectations.");
    }

    //general page header (registered user) text element assert test method
    async isGeneralPageHeaderRegUserTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //header navbar section
        //assert the general page header navbar link texts are as expected
        const expectedHeaderNavbarLinkTexts = ["NEWS", "ALL PRODUCTS", "ABOUT", "GP247",  "MY PROFILE", "USD DOLA"];
        const actualHeaderNavbarLinkTexts = await generalPage.getHeaderNavLinkElements();
        assert.deepStrictEqual(actualHeaderNavbarLinkTexts, expectedHeaderNavbarLinkTexts, "The general page header navbar link texts (registered user) don't match expectations.");
    }

    //general page footer text element assert test method
    async isGeneralPageFooterTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //footer
        //assert the general page footer page version text is as expected
        const generalPageFooterPageVersionText = await generalPage.getFooterPageVersionText();
        assert.strictEqual(generalPageFooterPageVersionText, "Demo GP247 CMS", "The general page footer page version text doesn't match expectations.");
        //about us section
        //assert the general page footer about us section title is as expected
        const generalPageFooterAboutUsSectionTitle = await generalPage.getFooterAboutUsSectionTitle();
        assert.strictEqual(generalPageFooterAboutUsSectionTitle, "ABOUT US", "The general page footer about us section title doesn't match expectations.");
        //assert the general page footer addresses link text is as expected
        const generalPageFooterAboutUsAddressLink = await generalPage.getFooterAboutUsAddressLink();
        assert.strictEqual(generalPageFooterAboutUsAddressLink, "Address: 123st - abc - xyz", "The general page footer about us addresses link text doesn't match expectations.");
        //assert the general page footer hotline link text is as expected
        const generalPageFooterAboutUsHotlineLink = await generalPage.getFooterAboutUsHotLineLink();
        assert.strictEqual(generalPageFooterAboutUsHotlineLink, "Hotline: Support: 0987654321", "The general page footer about us hotline link text doesn't match expectations.");
        //assert the general page footer email link text is as expected
        const generalPageFooterAboutUsEmailLink = await generalPage.getFooterAboutUsEmailLink();
        assert.strictEqual(generalPageFooterAboutUsEmailLink, "Email: admin@gp247.local", "The general page footer about us email link text doesn't match expectations.");
        //useful links section
        //assert the general page footer useful links section title is as expected
        const generalPageFooterUsefulLinksSectionTitle = await generalPage.getFooterUsefulLinksSectionTitle();
        //log the misspelling issue
        (generalPageFooterUsefulLinksSectionTitle === "USEFUL LINKS") ? Logger.info("The general page footer useful links section title is spelled correctly") : Logger.info(`The general page footer useful links section title isn't spelled correctly. Expected: 'USEFUL LINKS', actual: ${generalPageFooterUsefulLinksSectionTitle}.`);
        assert.strictEqual(generalPageFooterUsefulLinksSectionTitle, "LINK USEFUL", "The general page footer useful links section title doesn't match expectations.");
        //assert the general page footer terms of use link text is as expected
        const generalPageFooterTermsOfUseLink = await generalPage.getFooterUsefulLinksTermsOfUseLinkText();
        assert.strictEqual(generalPageFooterTermsOfUseLink, "Terms of Use", "The general page footer terms of use link text doesn't match expectations.");
        //assert the general page footer privacy policy link text is as expected
        const generalPageFooterPrivacyPolicyLink = await generalPage.getFooterUsefulLinksPrivacyPolicyLinkText();
        assert.strictEqual(generalPageFooterPrivacyPolicyLink, "Privacy Policy", "The general page footer privacy policy link text doesn't match expectations.");
        //copyright section
        //assert the general page footer copyright text is as expected
        const generalPageFooterCopyrightText = await generalPage.getFooterCopyrightText();
        assert.strictEqual(generalPageFooterCopyrightText, "© 2025 Demo GP247 CMS.  All rights reserved", "The general page footer copyright text doesn't match expectations.");
        //assert the general page footer powered by text is as expected
        const generalPageFooterPoweredByText = await generalPage.getFooterPoweredByText();
        assert.strictEqual(generalPageFooterPoweredByText, "Power by Core laravel admin for all systems", "The general page footer powered by text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = GeneralPageTextElementAssert;