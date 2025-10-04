const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class CheckoutPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._checkoutPageFirstNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[1]/input");
        this._checkoutPageLastNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[2]/input");
        this._checkoutPageEmailInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[1]/input");
        this._checkoutPagePhoneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[2]/input");
        this._checkoutPageAddressOneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[5]//input");
        this._checkoutPageAddressTwoInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[6]//input");

        //invalid singular input (guest user) - no singular input
        this._noGuestAddressFirstName = "";
        this._noGuestAddressLastName = "";
        this._noGuestAddressEmail = "";
        this._noGuestAddressPhone = "";

    }

    //invalid guest address input methods - no singular input
    async inputNoGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        const noGuestFirstName = this._noGuestAddressFirstName;
        Logger.info("No guest input address first name (checkout page): ", noGuestFirstName);
        await firstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        const noGuestLastName = this._noGuestAddressLastName;
        Logger.info("No guest input address last name (checkout page): ", noGuestLastName);
        await lastNameInputField.sendKeys(noGuestLastName);
    }
    async inputNoGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const noGuestEmail = this._noGuestAddressEmail;
        Logger.info("No guest input address email (checkout page): ", noGuestEmail);
        await emailInputField.sendKeys(noGuestEmail);
    }
    async inputNoGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        const noGuestPhone = this._noGuestAddressPhone;
        Logger.info("No guest input address phone (checkout page): ", noGuestPhone);
        await phoneInputField.sendKeys(noGuestPhone);
    }

}
module.exports = CheckoutPageInvalidSingularInput;