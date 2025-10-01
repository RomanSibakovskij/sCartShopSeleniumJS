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
        this._noAddressTwo = "";
        this._noPassword = "";
        this._noConfirmPassword = "";

        //invalid singular input data - too short singular input
        this._tooShortFirstName = "F";// 1 char
        this._tooShortLastName = "G";// 1 char
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1);//1 char -> name, domain
        this._tooShortPhone = "0123456";// 7 chars
        this._tooShortAddressOne = "4 K";// 3 chars
        this._tooShortAddressTwo = "Str";// 3 chars
        this._tooShortPassword = "T&t@s"; // 5 chars
        this._tooShortConfirmPassword = "T&t@s"; // 5 chars

        //invalid singular input data - too long singular input
        this._tooLongFirstName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg";// 100 chars
        this._tooLongLastName = "Gsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg";// 100 chars
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);//100 chars -> name, domain
        this._tooLongPhone = "012345678901234";// 15 chars
        this._tooLongAddressOne = testDataGenerator.generateRandomAddress(100);// 101 chars
        this._tooLongAddressTwo = "Ssdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhgs";// 101 chars

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
    async inputNoAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._registerPageAddressTwoInputField);
        const noAddressTwo = this._noAddressTwo;
        Logger.info("No register user address two: ", noAddressTwo);
        await addressTwoInputField.sendKeys(noAddressTwo);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const noPassword = this._noPassword;
        Logger.info("No user register password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }
    async inputNoConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const noConfirmPassword = this._noConfirmPassword;
        Logger.info("No user register confirm password: ", noConfirmPassword);
        await confirmPasswordInputField.sendKeys(noConfirmPassword);
    }

    //invalid user register data input methods - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooShortFirstName = this._tooShortFirstName;
        Logger.info("Too short register user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooShortLastName = this._tooShortLastName;
        Logger.info("Too short register user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooShortEmail = this._tooShortEmail;
        Logger.info("Too short register user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._registerPagePhoneInputField);
        const tooShortPhone = this._tooShortPhone;
        Logger.info("Too short register user phone number: ", tooShortPhone);
        await phoneInputField.sendKeys(tooShortPhone);
    }
    async inputTooShortAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._registerPageAddressOneInputField);
        const tooShortAddressOne = this._tooShortAddressOne;
        Logger.info("Too short register user address one: ", tooShortAddressOne);
        await addressOneInputField.sendKeys(tooShortAddressOne);
    }
    async inputTooShortAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._registerPageAddressTwoInputField);
        const tooShortAddressTwo = this._tooShortAddressTwo;
        Logger.info("Too short register user address two: ", tooShortAddressTwo);
        await addressTwoInputField.sendKeys(tooShortAddressTwo);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooShortPassword = this._tooShortPassword;
        Logger.info("Too short user register password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const tooShortConfirmPassword = this._tooShortConfirmPassword;
        Logger.info("Too short user register matching confirm password: ", tooShortConfirmPassword);
        await confirmPasswordInputField.sendKeys(tooShortConfirmPassword);
    }

    //invalid user register data input methods - too long singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooLongFirstName = this._tooLongFirstName;
        Logger.info("Too long register user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooLongLastName = this._tooLongLastName;
        Logger.info("Too long register user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooLongEmail = this._tooLongEmail;
        Logger.info("Too long register user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._registerPagePhoneInputField);
        const tooLongPhone = this._tooLongPhone;
        Logger.info("Too long register user phone number: ", tooLongPhone);
        await phoneInputField.sendKeys(tooLongPhone);
    }
    async inputTooLongAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._registerPageAddressOneInputField);
        const tooLongAddressOne = this._tooLongAddressOne;
        Logger.info("Too long register user address one: ", tooLongAddressOne);
        await addressOneInputField.sendKeys(tooLongAddressOne);
    }
    async inputTooLongAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._registerPageAddressTwoInputField);
        const tooLongAddressTwo = this._tooLongAddressTwo;
        Logger.info("Too long register user address two: ", tooLongAddressTwo);
        await addressTwoInputField.sendKeys(tooLongAddressTwo);
    }

}
module.exports = RegisterPageInvalidSingularInput;