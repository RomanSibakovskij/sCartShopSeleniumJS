const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");
const TestDataGenerator = require("../utilities/test.data.generator.js");

class CheckoutPageValidGuestInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        //input form
        this._checkoutPageFirstNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[1]/input");
        this._checkoutPageLastNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[2]/input");
        this._checkoutPageEmailInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[1]/input");
        this._checkoutPagePhoneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[2]/input");
        this._checkoutPageAddressOneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[5]//input");
        this._checkoutPageAddressTwoInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[6]//input");
        this._checkoutPageNoteTextarea = By.xpath("//table[@class='table table-borderless table-responsive']//tr[7]//textarea");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid guest address input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._validGuestFirstName = firstName;
        this._validGuestLastName = lastName;
        this._validGuestEmail = testDataGenerator.generateRandomEmailAddress(8);
        this._validGuestPhone = "0123456789";
        this._validGuestAddressOne = testDataGenerator.generateRandomAddress(7);
        this._validGuestAddressTwo = testDataGenerator.generateRandomStreetType();
        this._validGuestNote = "Test input for validation";

    }

    //valid guest address input methods
    async inputValidGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutPageFirstNameInputField);
        const validGuestFirstName = this._validGuestFirstName;
        Logger.info("Valid guest input address first name (checkout page): ", validGuestFirstName);
        await firstNameInputField.sendKeys(validGuestFirstName);
    }
    async inputValidGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutPageLastNameInputField);
        const validGuestLastName = this._validGuestLastName;
        Logger.info("Valid guest input address last name (checkout page): ", validGuestLastName);
        await lastNameInputField.sendKeys(validGuestLastName);
    }
    async inputValidGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const validGuestEmail = this._validGuestEmail;
        Logger.info("Valid guest input address email (checkout page): ", validGuestEmail);
        await emailInputField.sendKeys(validGuestEmail);
    }
    async inputValidGuestPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPagePhoneInputField);
        const validGuestPhone = this._validGuestPhone;
        Logger.info("Valid guest input address phone (checkout page): ", validGuestPhone);
        await phoneInputField.sendKeys(validGuestPhone);
    }
    async inputValidGuestAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._checkoutPageAddressOneInputField);
        const validGuestAddressOne = this._validGuestAddressOne;
        Logger.info("Valid guest input address one (checkout page): ", validGuestAddressOne);
        await addressOneInputField.sendKeys(validGuestAddressOne);
    }
    async inputValidGuestAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._checkoutPageAddressTwoInputField);
        const validGuestAddressTwo = this._validGuestAddressTwo;
        Logger.info("Valid guest input address two (checkout page): ", validGuestAddressTwo);
        await addressTwoInputField.sendKeys(validGuestAddressTwo);
    }
    async inputValidGuestNoteIntoNoteTextarea(){
        const noteInputField = await this.driver.findElement(this._checkoutPageNoteTextarea);
        const validGuestNote = this._validGuestNote;
        Logger.info("Valid guest input address note (checkout page): ", validGuestNote);
        await noteInputField.sendKeys(validGuestNote);
    }

}
module.exports = CheckoutPageValidGuestInput;