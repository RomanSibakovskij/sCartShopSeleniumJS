"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);

        //general web page elements (elements that all pages share)
        //breadcrumb
        this._pageBreadcrumb = By.xpath("//ul[@class='breadcrumbs-custom-path']/li");
        //header
        this._homePageLogoLink = By.xpath("//div[@class='rd-navbar-brand']/a");
        this._headerSearchButton = By.xpath("//div[@class='rd-navbar-search rd-navbar-search-2 toggle-original-elements']/button");
        this._headerSearchInputField = By.xpath("//form[@class='rd-search']//input"); //search input field element (appears only after search button click)
        this._headerInvisibleSearchBtn = By.xpath("//form[@class='rd-search']//button"); //search input field element (appears only after search button click)
        this._headerShoppingCartButton = By.xpath("//div[@class='rd-navbar-basket-wrap']/a");
        //list elements
        this._headerNavLinkElements = By.xpath("//ul[@class='rd-navbar-nav']/li/a");
        this._headerNavLinkAccountDropdownMenuElements = By.xpath("//ul[@class='rd-menu rd-navbar-dropdown']/li[@class='rd-dropdown-item']/a");
        //footer
        this._footerHomePageLogoLink = By.xpath("//footer//div[@class='row row-40 row-md-50 justify-content-xl-between']/div[1]/a") //By.css("div.footer-classic-body.section-lg.bg-brown-2 > div > div > div:nth-child(1) > a");
        this._footerPageVersionText = By.css("div.footer-classic-body.section-lg.bg-brown-2 > div > div > div:nth-child(1) > p:nth-child(2)");
        //socials (list elements)
        this._footerSocialsIconLinkElements = By.css("div.footer-classic-social a");
        //about us section
        this._footerAboutUsSectionTitle = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]/h4");
        this._footerAboutUsAddressLink = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]//ul[@class='contacts-creative']/li[1]//a");
        this._footerAboutUsHotlineLink = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]//ul[@class='contacts-creative']/li[2]//a");
        this._footerAboutUsEmailLink = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]//ul[@class='contacts-creative']/li[3]//a");
        this._footerAboutUsEmailInputField = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]//ul[@class='contacts-creative']/li[4]//input[@id='subscribe-form-2-email']");
        this._footerAboutUsEmailSubscribeBtn = By.xpath("//div[@class='col-sm-6 col-lg-4 col-xl-3 wow fadeInRight'][2]//ul[@class='contacts-creative']/li[4]//button");
        //useful links section
        this._footerUsefulLinksSectionTitle = By.xpath("//div[@class='col-lg-4 wow fadeInRight']/h4");
        this._footerUsefulLinksTermsOfUseLink = By.xpath("//div[@class='col-lg-4 wow fadeInRight']//ul/li[1]/a");
        this._footerUsefulLinksPrivacyPolicyLink = By.xpath("//div[@class='col-lg-4 wow fadeInRight']//ul/li[2]/a");
        //copyright section
        this._footerCopyrightText = By.xpath("//div[@class='footer-classic-panel']//p[@class='rights']");
        this._footerPoweredByText = By.xpath("//div[@class='footer-classic-panel']//div[@class='col-md-auto'][2]");
        this._footerCoreLaravelLink = By.xpath("//div[@class='footer-classic-panel']//div[@class='col-md-auto'][2]/a");
        this._footerFBFanpageLink = By.xpath("//div[@class='footer-classic-panel']//div[@class='col-md-auto order-md-1']/a");
        //underscored section
        this._underscoredAdminPanelLink = By.xpath("//section[@class='contact']//div[@class='col-xs-12 col-sm-6'][1]/a");
        this._underscoredDemoMultiVendorLink = By.xpath("//section[@class='contact']//div[@class='col-xs-12 col-sm-6'][2]/a");

    }

    //click set navbar link method
    async clickSetNavBarLink(index){
        const setNavBarLink = await this.driver.findElements(this._headerNavLinkElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setNavBarLink[index] }).click().perform();
    }

    //click set account dropdown menu option method
    async clickSetAccountDropdownMenuOption(index){
        const setAccountDropdownMenuOption = await this.driver.findElements(this._headerNavLinkAccountDropdownMenuElements);
        await setAccountDropdownMenuOption[index].click();
    }

    //general page text element getters
    //header
    async getHeaderNavLinkElements() {
        const elements = await this.driver.findElements(this._headerNavLinkElements);

        const texts = await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header nav link text:', error.message);
                    return '';
                }
            })
        );

        //filter out any empty strings
        return texts.filter(t => t !== '');
    }
    //footer
    async getFooterPageVersionText(){
        const footerPageVersionText = await this.driver.findElement(this._footerPageVersionText);
        return await footerPageVersionText.getText();
    }
    //about us section
    async getFooterAboutUsSectionTitle(){
        const footerAboutUsSectionTitle = await this.driver.findElement(this._footerAboutUsSectionTitle);
        return await footerAboutUsSectionTitle.getText();
    }
    async getFooterAboutUsAddressLink(){
        const footerAboutUsAddressLink = await this.driver.findElement(this._footerAboutUsAddressLink);
        return await footerAboutUsAddressLink.getText();
    }
    async getFooterAboutUsHotLineLink(){
        const footerAboutUsHotLineLink = await this.driver.findElement(this._footerAboutUsHotlineLink);
        return await footerAboutUsHotLineLink.getText();
    }
    async getFooterAboutUsEmailLink(){
        const footerAboutUsEmailLink = await this.driver.findElement(this._footerAboutUsEmailLink);
        return await footerAboutUsEmailLink.getText();
    }
    //useful links section
    async getFooterUsefulLinksSectionTitle(){
        const footerUsefulLinksSectionTitle = await this.driver.findElement(this._footerUsefulLinksSectionTitle);
        return await footerUsefulLinksSectionTitle.getText();
    }
    async getFooterUsefulLinksTermsOfUseLinkText(){
        const footerUsefulLinksTermsOfUseLinkText = await this.driver.findElement(this._footerUsefulLinksTermsOfUseLink);
        return await footerUsefulLinksTermsOfUseLinkText.getText();
    }
    async getFooterUsefulLinksPrivacyPolicyLinkText(){
        const footerUsefulLinksPrivacyPolicyLinkText = await this.driver.findElement(this._footerUsefulLinksPrivacyPolicyLink);
        return await footerUsefulLinksPrivacyPolicyLinkText.getText();
    }
    //copyright text
    async getFooterCopyrightText(){
        const footerCopyrightText = await this.driver.findElement(this._footerCopyrightText);
        return await footerCopyrightText.getText();
    }
    async getFooterPoweredByText(){
        const footerPoweredByText = await this.driver.findElement(this._footerPoweredByText);
        return await footerPoweredByText.getText();
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageLogoLink,
            this._headerSearchButton,
            this._headerShoppingCartButton,
            this._headerNavLinkElements,
            this._underscoredAdminPanelLink,
            this._underscoredDemoMultiVendorLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //footer elements fail to be found with VALID selectors
    async isGeneralPageFooterWebElementDisplayed(){
        const elementsToCheck = [
            this._footerHomePageLogoLink,
            this._footerPageVersionText,
            this._footerSocialsIconLinkElements,
            this._footerAboutUsSectionTitle,
            this._footerAboutUsAddressLink,
            this._footerAboutUsHotlineLink,
            this._footerAboutUsEmailLink,
            this._footerAboutUsEmailInputField,
            this._footerAboutUsEmailSubscribeBtn,
            this._footerUsefulLinksSectionTitle,
            this._footerUsefulLinksTermsOfUseLink,
            this._footerUsefulLinksPrivacyPolicyLink,
            this._footerCopyrightText,
            this._footerPoweredByText,
            this._footerCoreLaravelLink,
            this._footerFBFanpageLink,
            this._underscoredAdminPanelLink,
            this._underscoredDemoMultiVendorLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //breadcrumb elements
    async isGeneralPageBreadcrumbWebElementDisplayed(){
        const elementsToCheck = [
            this._pageBreadcrumb
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { GeneralPage };