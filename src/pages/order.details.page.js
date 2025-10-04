"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class OrderDetailsPage extends BasePage{

    constructor(driver) {
        super(driver);

        //order details page
        this._orderDetailsPageTitle = By.xpath("//h6");
        //table one (user details)
        this._orderDetailsPageFirstNameSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[1]/td[1]");
        this._orderDetailsPageFirstName = By.xpath("//div[@id='order-body']/div[1]//tr[1]/td[2]");
        this._orderDetailsPageLastNameSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[2]/td[1]");
        this._orderDetailsPageLastName = By.xpath("//div[@id='order-body']/div[1]//tr[2]/td[2]");
        this._orderDetailsPagePhoneSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[3]/td[1]");
        this._orderDetailsPagePhone = By.xpath("//div[@id='order-body']/div[1]//tr[3]/td[2]");
        this._orderDetailsPageEmailSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[4]/td[1]");
        this._orderDetailsPageEmail = By.xpath("//div[@id='order-body']/div[1]//tr[4]/td[2]");
        this._orderDetailsPageAddressOneSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[5]/td[1]");
        this._orderDetailsPageAddressOne = By.xpath("//div[@id='order-body']/div[1]//tr[5]/td[2]");
        this._orderDetailsPageAddressTwoSubtext = By.xpath("//div[@id='order-body']/div[1]//tr[6]/td[1]");
        this._orderDetailsPageAddressTwo = By.xpath("//div[@id='order-body']/div[1]//tr[6]/td[2]");
        this._orderDetailsPageCountrySubtext = By.xpath("//div[@id='order-body']/div[1]//tr[7]/td[1]");
        this._orderDetailsPageCountry = By.xpath("//div[@id='order-body']/div[1]//tr[7]/td[2]");
        this._orderDetailsPageOrderStatusSubtext = By.xpath("//div[@id='order-body']/div[2]//tr[1]/td[1]");
        this._orderDetailsPageOrderStatus = By.xpath("//div[@id='order-body']/div[2]//tr[1]/td[2]");
        this._orderDetailsPageShipStatusSubtext = By.xpath("//div[@id='order-body']/div[2]//tr[2]/td[1]");
        this._orderDetailsPageShipStatus = By.xpath("//div[@id='order-body']/div[2]//tr[2]/td[2]");
        this._orderDetailsPageShipMethodSubtext = By.xpath("//div[@id='order-body']/div[2]//tr[3]/td[1]");
        this._orderDetailsPageShipMethod = By.xpath("//div[@id='order-body']/div[2]//tr[3]/td[2]");
        this._orderDetailsPagePayMethodSubtext = By.xpath("//div[@id='order-body']/div[2]//tr[4]/td[1]");
        this._orderDetailsPagePayMethod = By.xpath("//div[@id='order-body']/div[2]//tr[4]/td[2]");
        this._orderDetailsPageCurrencySubtext = By.xpath("//div[@id='order-body']/div[2]//tr[5]/td[1]");
        this._orderDetailsPageCurrency = By.xpath("//div[@id='order-body']/div[2]//tr[5]/td[2]");
        this._orderDetailsPageExchangeRateSubtext = By.xpath("//div[@id='order-body']/div[2]//tr[6]/td[1]");
        this._orderDetailsPageExchangeRate = By.xpath("//div[@id='order-body']/div[2]//tr[6]/td[2]");
        //table two (product table)
        this._orderDetailsPageProductNameSubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[1]");
        this._orderDetailsPageProductSKUCodeSubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[2]");
        this._orderDetailsPageProductPriceSubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[3]");
        this._orderDetailsPageProductQtySubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[4]");
        this._orderDetailsPageProductSubtotalSubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[5]");
        this._orderDetailsPageProductTaxSubtext = By.xpath("//div[@class='table-responsive']//tr[1]/th[6]");
        //list elements
        this._orderDetailsPageProductNameElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[1]");
        this._orderDetailsPageProductSKUCodeElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[2]");
        this._orderDetailsPageProductPriceElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[3]");
        this._orderDetailsPageProductQtyElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[4]");
        this._orderDetailsPageProductSubtotalElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[5]");
        this._orderDetailsPageProductTaxElements = By.xpath("//div[@class='table-responsive']//tr[1]/td[6]");
        //singular elements
        //table three
        this._orderDetailsPageDiscountSubtext = By.xpath("//section[2]/div/div/div[2]/div[3]/div/div//tr[1]/td[1]");
        this._orderDetailsPageDiscount = By.xpath("//section[2]/div/div/div[2]/div[3]/div/div//tr[1]/td[2]");
        this._orderDetailsPageBalanceSubtext = By.xpath("//section[2]/div/div/div[2]/div[3]/div/div//tr[2]/td[1]");
        this._orderDetailsPageBalance = By.xpath("//section[2]/div/div/div[2]/div[3]/div/div//tr[2]/td[2]");

    }

    //order details page data getters
    async getOrderDetailsPageFirstName(){
        const orderDetailsPageFirstName = await this.driver.findElement(this._orderDetailsPageFirstName);
        return await orderDetailsPageFirstName.getText();
    }
    async getOrderDetailsPageLastName(){
        const orderDetailsPageLastName = await this.driver.findElement(this._orderDetailsPageLastName);
        return await orderDetailsPageLastName.getText();
    }
    async getOrderDetailsPagePhone(){
        const orderDetailsPagePhone = await this.driver.findElement(this._orderDetailsPagePhone);
        return await orderDetailsPagePhone.getText();
    }
    async getOrderDetailsPageEmail(){
        const orderDetailsPageEmail = await this.driver.findElement(this._orderDetailsPageEmail);
        return await orderDetailsPageEmail.getText();
    }
    async getOrderDetailsPageAddressOne(){
        const orderDetailsPageAddressOne = await this.driver.findElement(this._orderDetailsPageAddressOne);
        return await orderDetailsPageAddressOne.getText();
    }
    async getOrderDetailsPageAddressTwo(){
        const orderDetailsPageAddressTwo = await this.driver.findElement(this._orderDetailsPageAddressTwo);
        return await orderDetailsPageAddressTwo.getText();
    }
    async getOrderDetailsPageCountry(){
        const orderDetailsPageCountry = await this.driver.findElement(this._orderDetailsPageCountry);
        return await orderDetailsPageCountry.getText();
    }
    async getOrderDetailsPageOrderStatus(){
        const orderDetailsPageOrderStatus = await this.driver.findElement(this._orderDetailsPageOrderStatus);
        return await orderDetailsPageOrderStatus.getText();
    }
    async getOrderDetailsPageShipStatus(){
        const orderDetailsPageShipStatus = await this.driver.findElement(this._orderDetailsPageShipStatus);
        return await orderDetailsPageShipStatus.getText();
    }
    async getOrderDetailsPageShipMethod(){
        const orderDetailsPageShipMethod = await this.driver.findElement(this._orderDetailsPageShipMethod);
        return await orderDetailsPageShipMethod.getText();
    }
    async getOrderDetailsPagePayMethod(){
        const orderDetailsPagePayMethod = await this.driver.findElement(this._orderDetailsPagePayMethod);
        return await orderDetailsPagePayMethod.getText();
    }
    async getOrderDetailsPageCurrency(){
        const orderDetailsPageCurrency = await this.driver.findElement(this._orderDetailsPageCurrency);
        return await orderDetailsPageCurrency.getText();
    }
    async getOrderDetailsPageExchangeRate(){
        const orderDetailsPageExchangeRate = await this.driver.findElement(this._orderDetailsPageExchangeRate);
        return await orderDetailsPageExchangeRate.getText();
    }
    //list elements
    async getOrderDetailsPageProductName(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageProductSKUCode(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductSKUCodeSubtext);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product SKU code(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageProductPrice(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageProductQty(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageProductSubtotalPrice(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductSubtotalElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product subtotal price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageProductTax(){
        const elements = await this.driver.findElements(this._orderDetailsPageProductTaxElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order details page product table product tax(es):', error.message);
                    return '';
                }
            })
        );
    }
    async getOrderDetailsPageDiscount(){
        const orderDetailsPageDiscount = await this.driver.findElement(this._orderDetailsPageDiscount);
        return await orderDetailsPageDiscount.getText();
    }
    async getOrderDetailsPageBalance(){
        const orderDetailsPageBalance = await this.driver.findElement(this._orderDetailsPageBalance);
        return await orderDetailsPageBalance.getText();
    }

    //order details page text element assert
    async getOrderDetailsPageTitle(){
        const orderDetailsPageTitle = await this.driver.findElement(this._orderDetailsPageTitle);
        return await orderDetailsPageTitle.getText();
    }
    //table one (user details)
    async getOrderDetailsPageFirstNameSubtext(){
        const orderDetailsPageFirstNameSubtext = await this.driver.findElement(this._orderDetailsPageFirstNameSubtext);
        return await orderDetailsPageFirstNameSubtext.getText();
    }
    async getOrderDetailsPageLastNameSubtext(){
        const orderDetailsPageLastNameSubtext = await this.driver.findElement(this._orderDetailsPageLastNameSubtext);
        return await orderDetailsPageLastNameSubtext.getText();
    }
    async getOrderDetailsPagePhoneSubtext(){
        const orderDetailsPagePhoneSubtext = await this.driver.findElement(this._orderDetailsPagePhoneSubtext);
        return await orderDetailsPagePhoneSubtext.getText();
    }
    async getOrderDetailsPageEmailSubtext(){
        const orderDetailsPageEmailSubtext = await this.driver.findElement(this._orderDetailsPageEmailSubtext);
        return await orderDetailsPageEmailSubtext.getText();
    }
    async getOrderDetailsPageAddressOneSubtext(){
        const orderDetailsPageAddressOneSubtext = await this.driver.findElement(this._orderDetailsPageAddressOneSubtext);
        return await orderDetailsPageAddressOneSubtext.getText();
    }
    async getOrderDetailsPageAddressTwoSubtext(){
        const orderDetailsPageAddressTwoSubtext = await this.driver.findElement(this._orderDetailsPageAddressTwoSubtext);
        return await orderDetailsPageAddressTwoSubtext.getText();
    }
    async getOrderDetailsPageCountrySubtext(){
        const orderDetailsPageCountrySubtext = await this.driver.findElement(this._orderDetailsPageCountrySubtext);
        return await orderDetailsPageCountrySubtext.getText();
    }
    async getOrderDetailsPageOrderStatusSubtext(){
        const orderDetailsPageOrderStatusSubtext = await this.driver.findElement(this._orderDetailsPageOrderStatusSubtext);
        return await orderDetailsPageOrderStatusSubtext.getText();
    }
    async getOrderDetailsPageShipStatusSubtext(){
        const orderDetailsPageShipStatusSubtext = await this.driver.findElement(this._orderDetailsPageShipStatusSubtext);
        return await orderDetailsPageShipStatusSubtext.getText();
    }
    async getOrderDetailsPageShipMethodSubtext(){
        const orderDetailsPageShipMethodSubtext = await this.driver.findElement(this._orderDetailsPageShipMethodSubtext);
        return await orderDetailsPageShipMethodSubtext.getText();
    }
    async getOrderDetailsPagePayMethodSubtext(){
        const orderDetailsPagePayMethodSubtext = await this.driver.findElement(this._orderDetailsPagePayMethodSubtext);
        return await orderDetailsPagePayMethodSubtext.getText();
    }
    async getOrderDetailsPageCurrencySubtext(){
        const orderDetailsPageCurrencySubtext = await this.driver.findElement(this._orderDetailsPageCurrencySubtext);
        return await orderDetailsPageCurrencySubtext.getText();
    }
    async getOrderDetailsPageExchangeRateSubtext(){
        const orderDetailsPageExchangeRateSubtext = await this.driver.findElement(this._orderDetailsPageExchangeRateSubtext);
        return await orderDetailsPageExchangeRateSubtext.getText();
    }
    async getOrderDetailsPageProductNameSubtext(){
        const orderDetailsPageProductNameSubtext = await this.driver.findElement(this._orderDetailsPageProductNameSubtext);
        return await orderDetailsPageProductNameSubtext.getText();
    }
    async getOrderDetailsPageProductSKUCodeSubtext(){
        const orderDetailsPageProductSKUCodeSubtext = await this.driver.findElement(this._orderDetailsPageProductSKUCodeSubtext);
        return await orderDetailsPageProductSKUCodeSubtext.getText();
    }
    async getOrderDetailsPageProductPriceSubtext(){
        const orderDetailsPageProductPriceSubtext = await this.driver.findElement(this._orderDetailsPageProductPriceSubtext);
        return await orderDetailsPageProductPriceSubtext.getText();
    }
    async getOrderDetailsPageProductQtySubtext(){
        const orderDetailsPageProductQtySubtext = await this.driver.findElement(this._orderDetailsPageProductQtySubtext);
        return await orderDetailsPageProductQtySubtext.getText();
    }
    async getOrderDetailsPageProductSubtotalSubtext(){
        const orderDetailsPageProductSubtotalSubtext = await this.driver.findElement(this._orderDetailsPageProductSubtotalSubtext);
        return await orderDetailsPageProductSubtotalSubtext.getText();
    }
    async getOrderDetailsPageProductTaxSubtext(){
        const orderDetailsPageProductTaxSubtext = await this.driver.findElement(this._orderDetailsPageProductTaxSubtext);
        return await orderDetailsPageProductTaxSubtext.getText();
    }
    async getOrderDetailsPageDiscountSubtext(){
        const orderDetailsPageDiscountSubtext = await this.driver.findElement(this._orderDetailsPageDiscountSubtext);
        return await orderDetailsPageDiscountSubtext.getText();
    }
    async getOrderDetailsPageBalanceSubtext(){
        const orderDetailsPageBalanceSubtext = await this.driver.findElement(this._orderDetailsPageBalanceSubtext);
        return await orderDetailsPageBalanceSubtext.getText();
    }

    //order details page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isOrderDetailsPageWebElementDisplayed(){
        const elementsToCheck = [
            this._orderDetailsPageTitle,
            this._orderDetailsPageFirstNameSubtext,
            this._orderDetailsPageFirstName,
            this._orderDetailsPageLastNameSubtext,
            this._orderDetailsPageLastName,
            this._orderDetailsPagePhoneSubtext,
            this._orderDetailsPagePhone,
            this._orderDetailsPageEmailSubtext,
            this._orderDetailsPageEmail,
            this._orderDetailsPageAddressOneSubtext,
            this._orderDetailsPageAddressOne,
            this._orderDetailsPageAddressTwoSubtext,
            this._orderDetailsPageAddressTwo,
            this._orderDetailsPageCountrySubtext,
            this._orderDetailsPageCountry,
            this._orderDetailsPageOrderStatusSubtext,
            this._orderDetailsPageOrderStatus,
            this._orderDetailsPageShipStatusSubtext,
            this._orderDetailsPageShipStatus,
            this._orderDetailsPageShipMethodSubtext,
            this._orderDetailsPageShipMethod,
            this._orderDetailsPagePayMethodSubtext,
            this._orderDetailsPagePayMethod,
            this._orderDetailsPageCurrencySubtext,
            this._orderDetailsPageCurrency,
            this._orderDetailsPageExchangeRateSubtext,
            this._orderDetailsPageExchangeRate,
            this._orderDetailsPageProductNameSubtext,
            this._orderDetailsPageProductNameElements,
            this._orderDetailsPageProductSKUCodeSubtext,
            this._orderDetailsPageProductSKUCodeElements,
            this._orderDetailsPageProductPriceSubtext,
            this._orderDetailsPageProductPriceElements,
            this._orderDetailsPageProductQtySubtext,
            this._orderDetailsPageProductQtyElements,
            this._orderDetailsPageProductSubtotalSubtext,
            this._orderDetailsPageProductSubtotalElements,
            this._orderDetailsPageProductTaxSubtext,
            this._orderDetailsPageProductTaxElements,
            this._orderDetailsPageDiscountSubtext,
            this._orderDetailsPageDiscount,
            this._orderDetailsPageBalanceSubtext,
            this._orderDetailsPageBalance
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { OrderDetailsPage };