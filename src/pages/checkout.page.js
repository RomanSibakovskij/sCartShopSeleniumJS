const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class CheckoutPage extends BasePage{

    constructor(driver) {
        super(driver);

        //checkout page web elements
        this._checkoutPageTitle = By.xpath("//h5");
        //product table
        this._checkoutPageProductTableNameSubtext = By.xpath("//div[@class='table-responsive']/table//th[1]");
        this._checkoutPageProductTablePriceSubtext = By.xpath("//div[@class='table-responsive']/table//th[2]");
        this._checkoutPageProductTableQuantitySubtext = By.xpath("//div[@class='table-responsive']/table//th[3]");
        this._checkoutPageProductTableSubtotalPriceSubtext = By.xpath("//div[@class='table-responsive']/table//th[4]");
        this._checkoutPageOrderSubtotalPriceSubtext = By.xpath("//div[@class='col-md-12']/table//tr[1]/th");
        this._checkoutPageOrderSubtotalPrice = By.xpath("//div[@class='col-md-12']/table//tr[1]/td");
        this._checkoutPageOrderTotalPriceSubtext = By.xpath("//div[@class='col-md-12']/table//tr[2]/th");
        this._checkoutPageOrderTotalPrice = By.xpath("//div[@class='col-md-12']/table//tr[2]/td");
        //list elements
        this._checkoutPageProductTableImgElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[1]//img");
        this._checkoutPageProductTableNameLinkElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[1]/span/a");
        this._checkoutPageProductTableSKUCodeSubtextElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[1]/span/b");
        this._checkoutPageProductTableSKUCodeElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[1]/span");
        this._checkoutPageProductTablePriceElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[2]//div[@class='product-price']");
        this._checkoutPageProductTableQtyElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[3]");
        this._checkoutPageProductTableSubtotalPriceElements = By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[4]");
        //input form
        this._checkoutPageChangeAddressDropdownMenu = By.xpath("//select[@name='address_process']"); //only registered users with present addresses have this feature
        this._checkoutPageFirstNameSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[1]/label");
        this._checkoutPageFirstNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[1]/input");
        this._checkoutPageLastNameSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[2]/label");
        this._checkoutPageLastNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[2]/input");
        this._checkoutPageEmailSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[1]/label");
        this._checkoutPageEmailInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[1]/input");
        this._checkoutPagePhoneSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[2]/label");
        this._checkoutPagePhoneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[2]/input");
        this._checkoutPageCountrySubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[3]//label");
        this._checkoutPageCountryDropdownMenu = By.xpath("//table[@class='table table-borderless table-responsive']//tr[3]//select");
        this._checkoutPageUSCountryOption = By.xpath("//table[@class='table table-borderless table-responsive']//tr[3]//select/option[@value='US']");
        this._checkoutPageAddressOneSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[5]//label");
        this._checkoutPageAddressOneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[5]//input");
        this._checkoutPageAddressTwoSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[6]//label");
        this._checkoutPageAddressTwoInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[6]//input");
        this._checkoutPageNoteSubtext = By.xpath("//table[@class='table table-borderless table-responsive']//tr[7]//label");
        this._checkoutPageNoteTextarea = By.xpath("//table[@class='table table-borderless table-responsive']//tr[7]//textarea");
        //shipping address table
        this._checkoutPageShipAddressTableTitle = By.xpath("//form[@id='form-order']/div/div[1]/h3");
        this._checkoutPageShipAddressTableNameSubtext = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[1]/th");
        this._checkoutPageShipAddressTableName = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[1]/td");
        this._checkoutPageShipAddressTablePhoneSubtext = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[2]/th");
        this._checkoutPageShipAddressTablePhone = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[2]/td");
        this._checkoutPageShipAddressTableEmailSubtext = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[3]/th");
        this._checkoutPageShipAddressTableEmail = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[3]/td");
        this._checkoutPageShipAddressTableAddressSubtext = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[4]/th");
        this._checkoutPageShipAddressTableAddress = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[4]/td");
        this._checkoutPageShipAddressTableNoteSubtext = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[5]/th");
        this._checkoutPageShipAddressTableNote = By.xpath("//form[@id='form-order']/div/div[1]/table//tr[5]/td");
        //buttons
        this._checkoutPageBackToCartButton = By.xpath("//button[contains(text(), 'Back to cart')]");
        this._checkoutPageCheckoutButton = By.xpath("//button[@class='button button-secondary']");
        this._checkoutPageConfirmButton = By.xpath("//button[contains(text(), 'Confirm')]");
        //order success elements
        this._checkoutPageOrderSuccessSubtitle = By.xpath("//h6");
        this._checkoutPageOrderSuccessTitle = By.xpath("//h2[@class='title-page']");
        this._checkoutPageOrderSuccessSubtext = By.xpath("//div[@class='col-md-12 text-success']/h2");
        this._checkoutPageOrderNumber = By.xpath("//div[@class='col-md-12 text-success']/h3");
        //singular input error message
        this._checkoutPageAddressInvalidSingularInputError = By.xpath("//span[@class='help-block']");

    }

    //click country dropdown menu
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._checkoutPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select "United States" option
    async selectUnitedStatesOption(){
        const usCountryOption = await this.driver.findElement(this._checkoutPageUSCountryOption);
        await usCountryOption.click();
    }

    //click "Checkout" button
    async clickCheckoutButton(){
        const checkoutButton = await this.driver.findElement(this._checkoutPageCheckoutButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: checkoutButton }).click().perform();
    }

    //click "Confirm" button
    async clickConfirmButton(){
        const confirmButton = await this.driver.findElement(this._checkoutPageConfirmButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: confirmButton }).click().perform();
    }

    //checkout page product data getters
    //product table (list elements)
    async getCheckoutPageProductName() {
        const elements = await this.driver.findElements(this._checkoutPageProductTableNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductSKUCode() {
        const elements = await this.driver.findElements(this._checkoutPageProductTableSKUCodeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table product SKU code(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductPrice() {
        const elements = await this.driver.findElements(this._checkoutPageProductTablePriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table product price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductQty() {
        const elements = await this.driver.findElements(this._checkoutPageProductTableQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductSubtotal() {
        const elements = await this.driver.findElements(this._checkoutPageProductTableSubtotalPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table product subtotal price(s):', error.message);
                    return '';
                }
            })
        );
    }
    //lower section (singular elements)
    async getCheckoutPageOrderSubtotalPrice(){
        const checkoutPageOrderSubtotalPrice = await this.driver.findElement(this._checkoutPageOrderSubtotalPrice);
        return await checkoutPageOrderSubtotalPrice.getText();
    }
    async getCheckoutPageOrderTotalPrice(){
        const checkoutPageOrderTotalPrice = await this.driver.findElement(this._checkoutPageOrderTotalPrice);
        return await checkoutPageOrderTotalPrice.getText();
    }

    //checkout page user input address data getters (for registered user)
    async getCheckoutPageInputAddressFirstName(){
        const checkoutPageInputAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        return await checkoutPageInputAddressFirstNameInputField.getAttribute('value');
    }
    async getCheckoutPageInputAddressLastName(){
        const checkoutPageInputAddressLastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        return await checkoutPageInputAddressLastNameInputField.getAttribute('value');
    }
    async getCheckoutPageInputAddressEmail(){
        const checkoutPageInputAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        return await checkoutPageInputAddressEmailInputField.getAttribute('value');
    }
    async getCheckoutPageInputAddressPhone(){
        const checkoutPageInputAddressPhoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        return await checkoutPageInputAddressPhoneInputField.getAttribute('value');
    }
    async getCheckoutPageInputAddressOne(){
        const checkoutPageInputAddressOneInputField = await this.driver.findElement(this._checkoutPageAddressOneInputField);
        return await checkoutPageInputAddressOneInputField.getAttribute('value');
    }
    async getCheckoutPageInputAddressTwo(){
        const checkoutPageInputAddressTwoInputField = await this.driver.findElement(this._checkoutPageAddressTwoInputField);
        return await checkoutPageInputAddressTwoInputField.getAttribute('value');
    }

    //checkout page text element getters
    async getCheckoutPageTitle(){
        const checkoutPageTitle = await this.driver.findElement(this._checkoutPageTitle);
        return await checkoutPageTitle.getText();
    }
    //product table
    async getCheckoutPageProductTableNameSubtext(){
        const checkoutPageProductTableNameSubtext = await this.driver.findElement(this._checkoutPageProductTableNameSubtext);
        return await checkoutPageProductTableNameSubtext.getText();
    }
    async getCheckoutPageProductTablePriceSubtext(){
        const checkoutPageProductTablePriceSubtext = await this.driver.findElement(this._checkoutPageProductTablePriceSubtext);
        return await checkoutPageProductTablePriceSubtext.getText();
    }
    async getCheckoutPageProductTableQtySubtext(){
        const checkoutPageProductTableQtySubtext = await this.driver.findElement(this._checkoutPageProductTableQuantitySubtext);
        return await checkoutPageProductTableQtySubtext.getText();
    }
    async getCheckoutPageProductTableSubtotalSubtext(){
        const checkoutPageProductTableSubtotalSubtext = await this.driver.findElement(this._checkoutPageProductTableSubtotalPriceSubtext);
        return await checkoutPageProductTableSubtotalSubtext.getText();
    }
    //list elements
    async getCheckoutPageProductSKUCodeSubtext() {
        const elements = await this.driver.findElements(this._checkoutPageProductTableSKUCodeSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page product table SKU code subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    //singular elements
    //lower section
    async getCheckoutPageOrderSubtotalSubtext(){
        const checkoutPageOrderSubtotalSubtext = await this.driver.findElement(this._checkoutPageOrderSubtotalPriceSubtext);
        return await checkoutPageOrderSubtotalSubtext.getText();
    }
    async getCheckoutPageOrderTotalSubtext(){
        const checkoutPageOrderTotalSubtext = await this.driver.findElement(this._checkoutPageOrderTotalPriceSubtext);
        return await checkoutPageOrderTotalSubtext.getText();
    }

    //input address section
    async getCheckoutPageInputAddressFirstNameSubtext(){
        const checkoutPageInputAddressFirstNameSubtext = await this.driver.findElement(this._checkoutPageFirstNameSubtext);
        return await checkoutPageInputAddressFirstNameSubtext.getText();
    }
    async getCheckoutPageInputAddressLastNameSubtext(){
        const checkoutPageInputAddressLastNameSubtext = await this.driver.findElement(this._checkoutPageLastNameSubtext);
        return await checkoutPageInputAddressLastNameSubtext.getText();
    }
    async getCheckoutPageInputAddressEmailSubtext(){
        const checkoutPageInputAddressEmailSubtext = await this.driver.findElement(this._checkoutPageEmailSubtext);
        return await checkoutPageInputAddressEmailSubtext.getText();
    }
    async getCheckoutPageInputAddressPhoneSubtext(){
        const checkoutPageInputAddressPhoneSubtext = await this.driver.findElement(this._checkoutPagePhoneSubtext);
        return await checkoutPageInputAddressPhoneSubtext.getText();
    }
    async getCheckoutPageInputAddressCountrySubtext(){
        const checkoutPageInputAddressCountrySubtext = await this.driver.findElement(this._checkoutPageCountrySubtext);
        return await checkoutPageInputAddressCountrySubtext.getText();
    }
    async getCheckoutPageInputAddressOneSubtext(){
        const checkoutPageInputAddressOneSubtext = await this.driver.findElement(this._checkoutPageAddressOneSubtext);
        return await checkoutPageInputAddressOneSubtext.getText();
    }
    async getCheckoutPageInputAddressTwoSubtext(){
        const checkoutPageInputAddressTwoSubtext = await this.driver.findElement(this._checkoutPageAddressTwoSubtext);
        return await checkoutPageInputAddressTwoSubtext.getText();
    }
    async getCheckoutPageInputAddressNoteSubtext(){
        const checkoutPageInputAddressNoteSubtext = await this.driver.findElement(this._checkoutPageNoteSubtext);
        return await checkoutPageInputAddressNoteSubtext.getText();
    }

    //shipping address table
    async getCheckoutPageShipAddressTableTitle(){
        const checkoutPageShipAddressTableTitle = await this.driver.findElement(this._checkoutPageShipAddressTableTitle);
        return await checkoutPageShipAddressTableTitle.getText();
    }
    async getCheckoutPageShipAddressTableNameSubtext(){
        const checkoutPageShipAddressTableNameSubtext = await this.driver.findElement(this._checkoutPageShipAddressTableNameSubtext);
        return await checkoutPageShipAddressTableNameSubtext.getText();
    }
    async getCheckoutPageShipAddressTableName(){
        const checkoutPageShipAddressTableName = await this.driver.findElement(this._checkoutPageShipAddressTableName);
        return await checkoutPageShipAddressTableName.getText();
    }
    async getCheckoutPageShipAddressTablePhoneSubtext(){
        const checkoutPageShipAddressTablePhoneSubtext = await this.driver.findElement(this._checkoutPageShipAddressTablePhoneSubtext);
        return await checkoutPageShipAddressTablePhoneSubtext.getText();
    }
    async getCheckoutPageShipAddressTablePhone(){
        const checkoutPageShipAddressTablePhone = await this.driver.findElement(this._checkoutPageShipAddressTablePhone);
        return await checkoutPageShipAddressTablePhone.getText();
    }
    async getCheckoutPageShipAddressTableEmailSubtext(){
        const checkoutPageShipAddressTableEmailSubtext = await this.driver.findElement(this._checkoutPageShipAddressTableEmailSubtext);
        return await checkoutPageShipAddressTableEmailSubtext.getText();
    }
    async getCheckoutPageShipAddressTableEmail(){
        const checkoutPageShipAddressTableEmail = await this.driver.findElement(this._checkoutPageShipAddressTableEmail);
        return await checkoutPageShipAddressTableEmail.getText();
    }
    async getCheckoutPageShipAddressTableAddressSubtext(){
        const checkoutPageShipAddressTableAddressSubtext = await this.driver.findElement(this._checkoutPageShipAddressTableAddressSubtext);
        return await checkoutPageShipAddressTableAddressSubtext.getText();
    }
    async getCheckoutPageShipAddressTableAddress(){
        const checkoutPageShipAddressTableAddress = await this.driver.findElement(this._checkoutPageShipAddressTableAddress);
        return await checkoutPageShipAddressTableAddress.getText();
    }
    async getCheckoutPageShipAddressTableNoteSubtext(){
        const checkoutPageShipAddressTableNoteSubtext = await this.driver.findElement(this._checkoutPageShipAddressTableNoteSubtext);
        return await checkoutPageShipAddressTableNoteSubtext.getText();
    }
    async getCheckoutPageShipAddressTableNote(){
        const checkoutPageShipAddressTableNote = await this.driver.findElement(this._checkoutPageShipAddressTableNote);
        return await checkoutPageShipAddressTableNote.getText();
    }

    //order success section
    async getCheckoutPageOrderSuccessSubtitle(){
        const checkoutPageOrderSuccessSubtitle = await this.driver.findElement(this._checkoutPageOrderSuccessSubtitle);
        return await checkoutPageOrderSuccessSubtitle.getText();
    }
    async getCheckoutPageOrderSuccessTitle(){
        const checkoutPageOrderSuccessTitle = await this.driver.findElement(this._checkoutPageOrderSuccessTitle);
        return await checkoutPageOrderSuccessTitle.getText();
    }
    async getCheckoutPageOrderSuccessSubtext(){
        const checkoutPageOrderSuccessSubtext = await this.driver.findElement(this._checkoutPageOrderSuccessSubtext);
        return await checkoutPageOrderSuccessSubtext.getText();
    }
    async getCheckoutPageOrderNumber(){
        const checkoutPageOrderNumber = await this.driver.findElement(this._checkoutPageOrderNumber);
        const trimmedOrderNumber =  await checkoutPageOrderNumber.getText();
        return trimmedOrderNumber.split('#')[1]?.trim() || null;
    }

    //checkout page (address) singular input error message getter
    async getCheckoutPageAddressSingularInputErrorMessage(){
        const checkoutPageAddressSingularInputErrorMessage = await this.driver.findElement(this._checkoutPageAddressInvalidSingularInputError);
        return await checkoutPageAddressSingularInputErrorMessage.getText();
    }

    //checkout page web element assert methods
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageProductTableWebElementDisplayed(){
        const elementsToCheck = [
            //this._checkoutPageTitle,
            this._checkoutPageProductTableNameSubtext,
            this._checkoutPageProductTablePriceSubtext,
            this._checkoutPageProductTableQuantitySubtext,
            this._checkoutPageProductTableSubtotalPriceSubtext,
            this._checkoutPageProductTableImgElements,
            this._checkoutPageProductTableNameLinkElements,
            this._checkoutPageProductTableSKUCodeSubtextElements,
            this._checkoutPageProductTableSKUCodeElements,
            this._checkoutPageProductTablePriceElements,
            this._checkoutPageProductTableQtyElements,
            this._checkoutPageProductTableSubtotalPriceElements,
            this._checkoutPageOrderSubtotalPriceSubtext,
            this._checkoutPageOrderSubtotalPrice,
            this._checkoutPageOrderTotalPriceSubtext,
            this._checkoutPageOrderTotalPrice
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageInputAddressWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageTitle,
            this._checkoutPageFirstNameSubtext,
            this._checkoutPageFirstNameInputField,
            this._checkoutPageLastNameSubtext,
            this._checkoutPageLastNameInputField,
            this._checkoutPageEmailSubtext,
            this._checkoutPageEmailInputField,
            this._checkoutPagePhoneSubtext,
            this._checkoutPagePhoneInputField,
            this._checkoutPageCountrySubtext,
            this._checkoutPageCountryDropdownMenu,
            this._checkoutPageAddressOneSubtext,
            this._checkoutPageAddressOneInputField,
            this._checkoutPageAddressTwoSubtext,
            this._checkoutPageAddressTwoInputField,
            this._checkoutPageNoteSubtext,
            this._checkoutPageNoteTextarea,
            this._checkoutPageCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageShipAddressWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageShipAddressTableTitle,
            this._checkoutPageShipAddressTableNameSubtext,
            this._checkoutPageShipAddressTableName,
            this._checkoutPageShipAddressTablePhoneSubtext,
            this._checkoutPageShipAddressTablePhone,
            this._checkoutPageShipAddressTableEmailSubtext,
            this._checkoutPageShipAddressTableEmail,
            this._checkoutPageShipAddressTableAddressSubtext,
            this._checkoutPageShipAddressTableAddress,
            this._checkoutPageShipAddressTableNoteSubtext,
            this._checkoutPageShipAddressTableNote,
            this._checkoutPageBackToCartButton,
            this._checkoutPageConfirmButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageOrderSuccessWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageOrderSuccessSubtitle,
            this._checkoutPageOrderSuccessTitle,
            this._checkoutPageOrderSuccessSubtext,
            this._checkoutPageOrderNumber
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { CheckoutPage };