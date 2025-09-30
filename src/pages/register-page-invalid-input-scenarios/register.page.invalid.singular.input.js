"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

const TestDataGenerator = require("../utilities/test.data.generator.js");
const Logger = require("../utilities/logger");

class RegisterPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._registerPageFirstNameInputField = By.xpath("//div[@id='collapseExample']/div[1]/input");
        this._registerPageLastNameInputField = By.xpath("//div[@id='collapseExample']/div[2]/input");
        this._registerPageEmailInputField = By.xpath("//div[@id='collapseExample']/div[3]/input");
        this._registerPagePhoneInputField = By.xpath("//div[@id='collapseExample']/div[4]/input");
        this._registerPageAddressOneInputField = By.xpath("//div[@id='collapseExample']/div[5]/input");
        this._registerPageAddressTwoInputField = By.xpath("//div[@id='collapseExample']/div[6]/input");
        this._registerPagePasswordInputField = By.xpath("//div[@id='collapseExample']/div[8]/input");
        this._registerPageConfirmPasswordInputField = By.xpath("//div[@id='collapseExample']/div[9]/input");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input data - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noEmail = "";
        this._noPhone = "";
        this._noAddressOne = "";

    }

    //invalid user register data input methods - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const noFirstName = this._noFirstName;
        Logger.info("No register user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const noLastName = this._noLastName;
        Logger.info("No register user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const noEmail = this._noEmail;
        Logger.info("No register user email: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    async inputNoPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._registerPagePhoneInputField);
        const noPhone = this._noPhone;
        Logger.info("No register user phone number: ", noPhone);
        await phoneInputField.sendKeys(noPhone);
    }
    async inputNoAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._registerPageAddressOneInputField);
        const noAddressOne = this._noAddressOne;
        Logger.info("No register user address one: ", noAddressOne);
        await addressOneInputField.sendKeys(noAddressOne);
    }

}
module.exports = RegisterPageInvalidSingularInput;