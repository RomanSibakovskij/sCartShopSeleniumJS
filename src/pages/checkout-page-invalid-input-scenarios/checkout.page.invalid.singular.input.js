const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");
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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input (guest user) - no singular input
        this._noGuestAddressFirstName = "";
        this._noGuestAddressLastName = "";
        this._noGuestAddressEmail = "";
        this._noGuestAddressPhone = "";
        this._noGuestAddressOne = "";
        this._noGuestAddressTwo = "";

        //invalid singular input (guest user) - too short singular input
        this._tooShortGuestAddressFirstName = "G"; // 1 char
        this._tooShortGuestAddressLastName = "F"; // 1 char
        this._tooShortGuestAddressEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name, domain
        this._tooShortGuestAddressPhone = "0123456"; // 7 digits
        this._tooShortGuestAddressOne = "8 T"; // 3 chars
        this._tooShortGuestAddressTwo = "Bld"; // 3 chars

        //invalid singular input (guest user) - too long singular input
        this._tooLongGuestAddressFirstName = "Gsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongGuestAddressLastName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongGuestAddressEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); // 100 chars -> name, domain
        this._tooLongGuestAddressPhone = "012345678901234"; // 15 digits
        this._tooLongGuestAddressOne = testDataGenerator.generateRandomAddress(97); // 101 chars
        this._tooLongGuestAddressTwo = "Bsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhgs"; // 101 chars

        //invalid singular input (guest user) - invalid singular input format
        this._invalidGuestAddressFirstNameFormat = "@$@#$%#$^"; // special symbols only
        this._invalidGuestAddressLastNameFormat = "@$@#%$#^"; // special symbols only
        this._invalidGuestAddressEmailFormat = "sdfdffakemail.com"; // missing '@'
        this._existingGuestAddressEmail = "m0@example.com"; // used beforehand in manual testing
        this._invalidGuestAddressPhoneFormat = "@#@#$#$"; // special symbols only

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
    async inputNoGuestAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._checkoutPageAddressOneInputField);
        const noGuestAddressOne = this._noGuestAddressOne;
        Logger.info("No guest input address one (checkout page): ", noGuestAddressOne);
        await addressOneInputField.sendKeys(noGuestAddressOne);
    }
    async inputNoGuestAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._checkoutPageAddressTwoInputField);
        const noGuestAddressTwo = this._noGuestAddressTwo;
        Logger.info("No guest input address two (checkout page): ", noGuestAddressTwo);
        await addressTwoInputField.sendKeys(noGuestAddressTwo);
    }

    //invalid guest address input methods - too short singular input
    async inputTooShortGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        const tooShortGuestFirstName = this._tooShortGuestAddressFirstName;
        Logger.info("Too short guest input address first name (checkout page): ", tooShortGuestFirstName);
        await firstNameInputField.sendKeys(tooShortGuestFirstName);
    }
    async inputTooShortGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        const tooShortGuestLastName = this._tooShortGuestAddressLastName;
        Logger.info("Too short guest input address last name (checkout page): ", tooShortGuestLastName);
        await lastNameInputField.sendKeys(tooShortGuestLastName);
    }
    async inputTooShortGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooShortGuestEmail = this._tooShortGuestAddressEmail;
        Logger.info("Too short guest input address email (checkout page): ", tooShortGuestEmail);
        await emailInputField.sendKeys(tooShortGuestEmail);
    }
    async inputTooShortGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        const tooShortGuestPhone = this._tooShortGuestAddressPhone;
        Logger.info("Too short guest input address phone (checkout page): ", tooShortGuestPhone);
        await phoneInputField.sendKeys(tooShortGuestPhone);
    }
    async inputTooShortGuestAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._checkoutPageAddressOneInputField);
        const tooShortGuestAddressOne = this._tooShortGuestAddressOne;
        Logger.info("Too short guest input address one (checkout page): ", tooShortGuestAddressOne);
        await addressOneInputField.sendKeys(tooShortGuestAddressOne);
    }
    async inputTooShortGuestAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._checkoutPageAddressTwoInputField);
        const tooShortGuestAddressTwo = this._tooShortGuestAddressTwo;
        Logger.info("Too short guest input address two (checkout page): ", tooShortGuestAddressTwo);
        await addressTwoInputField.sendKeys(tooShortGuestAddressTwo);
    }

    //invalid guest address input methods - too long singular input
    async inputTooLongGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        const tooLongGuestFirstName = this._tooLongGuestAddressFirstName;
        Logger.info("Too long guest input address first name (checkout page): ", tooLongGuestFirstName);
        await firstNameInputField.sendKeys(tooLongGuestFirstName);
    }
    async inputTooLongGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        const tooLongGuestLastName = this._tooLongGuestAddressLastName;
        Logger.info("Too long guest input address last name (checkout page): ", tooLongGuestLastName);
        await lastNameInputField.sendKeys(tooLongGuestLastName);
    }
    async inputTooLongGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooLongGuestEmail = this._tooLongGuestAddressEmail;
        Logger.info("Too long guest input address email (checkout page): ", tooLongGuestEmail);
        await emailInputField.sendKeys(tooLongGuestEmail);
    }
    async inputTooLongGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        const tooLongGuestPhone = this._tooLongGuestAddressPhone;
        Logger.info("Too long guest input address phone (checkout page): ", tooLongGuestPhone);
        await phoneInputField.sendKeys(tooLongGuestPhone);
    }
    async inputTooLongGuestAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._checkoutPageAddressOneInputField);
        const tooLongGuestAddressOne = this._tooLongGuestAddressOne;
        Logger.info("Too long guest input address one (checkout page): ", tooLongGuestAddressOne);
        await addressOneInputField.sendKeys(tooLongGuestAddressOne);
    }
    async inputTooLongGuestAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._checkoutPageAddressTwoInputField);
        const tooLongGuestAddressTwo = this._tooLongGuestAddressTwo;
        Logger.info("Too long guest input address two (checkout page): ", tooLongGuestAddressTwo);
        await addressTwoInputField.sendKeys(tooLongGuestAddressTwo);
    }

    //invalid guest address input methods - invalid singular input format
    async inputInvalidGuestFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        const invalidGuestFirstNameFormat = this._invalidGuestAddressFirstNameFormat;
        Logger.info("Invalid guest input address first name format (checkout page): ", invalidGuestFirstNameFormat);
        await firstNameInputField.sendKeys(invalidGuestFirstNameFormat);
    }
    async inputInvalidGuestLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        const invalidGuestLastNameFormat = this._invalidGuestAddressLastNameFormat;
        Logger.info("Invalid guest input address last name format (checkout page): ", invalidGuestLastNameFormat);
        await lastNameInputField.sendKeys(invalidGuestLastNameFormat);
    }
    async inputInvalidGuestEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const invalidGuestEmailFormat = this._invalidGuestAddressEmailFormat;
        Logger.info("Invalid guest input address email format (checkout page): ", invalidGuestEmailFormat);
        await emailInputField.sendKeys(invalidGuestEmailFormat);
    }
    async inputExistingGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const existingGuestEmail = this._existingGuestAddressEmail;
        Logger.info("Existing guest input address email (checkout page): ", existingGuestEmail);
        await emailInputField.sendKeys(existingGuestEmail);
    }
    async inputInvalidGuestPhoneFormatIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        const invalidGuestPhoneFormat = this._invalidGuestAddressPhoneFormat;
        Logger.info("Invalid guest input address phone format (checkout page): ", invalidGuestPhoneFormat);
        await phoneInputField.sendKeys(invalidGuestPhoneFormat);
    }

}
module.exports = CheckoutPageInvalidSingularInput;