"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class AddressListPage extends BasePage{

    constructor(driver) {
        super(driver);

        //address list page web elements
        this._addressListPageTitle = By.xpath("//h6");
        //address list (list elements)
        this._addressListPageFirstNameSubtext = By.xpath("//table//tr[1]/td[1]");
        this._addressListPageFirstNameElements = By.xpath("//table//tr[1]/td[2]");
        this._addressListPageLastNameSubtext= By.xpath("//table//tr[2]/td[1]");
        this._addressListPageLastNameElements = By.xpath("//table//tr[2]/td[2]");
        this._addressListPagePhoneSubtext = By.xpath("//table//tr[3]/td[1]");
        this._addressListPagePhoneElements = By.xpath("//table//tr[3]/td[2]");
        this._addressListPageAddressOneSubtext = By.xpath("//table//tr[4]/td[1]");
        this._addressListPageAddressOneElements = By.xpath("//table//tr[4]/td[2]");
        this._addressListPageAddressTwoSubtext = By.xpath("//table//tr[5]/td[1]");
        this._addressListPageAddressTwoElements = By.xpath("//table//tr[5]/td[2]");
        this._addressListPageCountrySubtext = By.xpath("//table//tr[6]/td[1]");
        this._addressListPageCountryElements = By.xpath("//table//tr[6]/td[2]");
        //button elements
        this._addressListPageEditAddressBtnElements = By.xpath("//table//tr[7]//a[@title='Edit']");
        this._addressListPageDeleteAddressBtnElements = By.xpath("//table//tr[7]//a[@title='Delete']");
        this._addressListPageDefaultAddressBtnElements = By.xpath("//table//tr[7]//span[@title='Address default']");

    }

    //click set "Edit address" button method
    async clickSetEditAddressButton(index){
        const setEditAddressButton = await this.driver.findElements(this._addressListPageEditAddressBtnElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setEditAddressButton[index] }).click().perform();
    }

    //address list page address data getters
    async getAddressListFirstName(){
        const elements = await this.driver.findElements(this._addressListPageFirstNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page first name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getAddressListLastName(){
        const elements = await this.driver.findElements(this._addressListPageLastNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page last name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getAddressListPhone(){
        const elements = await this.driver.findElements(this._addressListPagePhoneElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page phone(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getAddressListAddressOne(){
        const elements = await this.driver.findElements(this._addressListPageAddressOneElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page address(es) one:', error.message);
                    return '';
                }
            })
        );
    }

    async getAddressListAddressTwo(){
        const elements = await this.driver.findElements(this._addressListPageAddressTwoElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page address(es) two:', error.message);
                    return '';
                }
            })
        );
    }
    async getAddressListCountry(){
        const elements = await this.driver.findElements(this._addressListPageCountryElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get address list page country(ies):', error.message);
                    return '';
                }
            })
        );
    }

    //address list page text element getters
    async getAddressListPageTitle(){
        const addressListPageTitle = await this.driver.findElement(this._addressListPageTitle);
        return await addressListPageTitle.getText();
    }
    async getAddressListFirstNameSubtext(){
        const addressListFirstNameSubtext = await this.driver.findElement(this._addressListPageFirstNameSubtext);
        return await addressListFirstNameSubtext.getText();
    }
    async getAddressListLastNameSubtext(){
        const addressListLastNameSubtext = await this.driver.findElement(this._addressListPageLastNameSubtext);
        return await addressListLastNameSubtext.getText();
    }
    async getAddressListPhoneSubtext(){
        const addressListPhoneSubtext = await this.driver.findElement(this._addressListPagePhoneSubtext);
        return await addressListPhoneSubtext.getText();
    }
    async getAddressListAddressOneSubtext(){
        const addressListAddressOneSubtext = await this.driver.findElement(this._addressListPageAddressOneSubtext);
        return await addressListAddressOneSubtext.getText();
    }
    async getAddressListAddressTwoSubtext(){
        const addressListAddressTwoSubtext = await this.driver.findElement(this._addressListPageAddressTwoSubtext);
        return await addressListAddressTwoSubtext.getText();
    }
    async getAddressListCountrySubtext(){
        const addressListCountrySubtext = await this.driver.findElement(this._addressListPageCountrySubtext);
        return await addressListCountrySubtext.getText();
    }

    //address list page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddressListPageWebElementDisplayed(){
        const elementsToCheck = [
            this._addressListPageTitle,
            this._addressListPageFirstNameSubtext,
            this._addressListPageFirstNameElements,
            this._addressListPageLastNameSubtext,
            this._addressListPageLastNameElements,
            this._addressListPagePhoneSubtext,
            this._addressListPagePhoneElements,
            this._addressListPageAddressOneSubtext,
            this._addressListPageAddressOneElements,
            this._addressListPageAddressTwoSubtext,
            this._addressListPageAddressTwoElements,
            this._addressListPageCountrySubtext,
            this._addressListPageCountryElements,
            this._addressListPageEditAddressBtnElements,
            this._addressListPageDeleteAddressBtnElements,
            this._addressListPageDefaultAddressBtnElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AddressListPage };