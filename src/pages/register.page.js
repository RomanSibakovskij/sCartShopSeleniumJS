"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const TestDataGenerator = require("../pages/utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

class RegisterPage extends BasePage{

    constructor(driver) {
        super(driver);

        //register page web elements
        this._registerPageTitle = By.xpath("//h2");
        //input form
        this._registerPageFirstNameInputField = By.xpath("//div[@id='collapseExample']/div[1]/input");
        this._registerPageLastNameInputField = By.xpath("//div[@id='collapseExample']/div[2]/input");
        this._registerPageEmailInputField = By.xpath("//div[@id='collapseExample']/div[3]/input");
        this._registerPagePhoneInputField = By.xpath("//div[@id='collapseExample']/div[4]/input");
        this._registerPageAddressOneInputField = By.xpath("//div[@id='collapseExample']/div[5]/input");
        this._registerPageAddressTwoInputField = By.xpath("//div[@id='collapseExample']/div[6]/input");
        this._registerPageCountryDropdownMenu = By.xpath("//div[@id='collapseExample']/div[7]/select");
        this._registerPageUSCountryOption = By.xpath("//div[@id='collapseExample']/div[7]/select/option[@value='US']");
        this._registerPagePasswordInputField = By.xpath("//div[@id='collapseExample']/div[8]/input");
        this._registerPageConfirmPasswordInputField = By.xpath("//div[@id='collapseExample']/div[9]/input");
        //button
        this._registerPageSignUpButton = By.xpath("//button[@id='gp247-button-process']");
        //register success message
        this._registerPageSignUpSuccessMessage = By.xpath("//div[@role='alert']");
        //singular input error message
        this._registerPageInvalidSingularInputError = By.xpath("//span[@class='help-block']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid register input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(8);
        this._addressOne = testDataGenerator.generateRandomAddress(8);
        this._addressTwo = testDataGenerator.generateRandomStreetType();
        this._phone = "0123456789"
        this._password = testDataGenerator.generateRandomPassword();

    }

    //valid user register data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const firstName = this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const lastName = this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const email = this._email;
        Logger.info("Valid user email: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._registerPagePhoneInputField);
        const phone = this._phone;
        Logger.info("Valid user phone number: ", phone);
        await phoneInputField.sendKeys(phone);
    }
    async inputAddressOneIntoAddressOneInputField(){
        const addressOneInputField = await this.driver.findElement(this._registerPageAddressOneInputField);
        const addressOne = await this._addressOne;
        Logger.info("Valid user address one: ", addressOne);
        await addressOneInputField.sendKeys(addressOne);
    }
    async inputAddressTwoIntoAddressTwoInputField(){
        const addressTwoInputField = await this.driver.findElement(this._registerPageAddressTwoInputField);
        const addressTwo = await this._addressTwo;
        Logger.info("Valid user address two: ", addressTwo);
        await addressTwoInputField.sendKeys(addressTwo);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }
    async inputConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._registerPageConfirmPasswordInputField);
        const password = this._password;
        Logger.info("Valid user matching confirm password: ", password);
        await confirmPasswordInputField.sendKeys(password);
    }

    //click "Country" dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._registerPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select "United States" option method
    async selectUSCountryOption(){
        const usCountryOption = await this.driver.findElement(this._registerPageUSCountryOption);
        await usCountryOption.click();
    }

    //click "Sign up" button method
    async clickSignUpButton(){
        const signUpButton = await this.driver.findElement(this._registerPageSignUpButton);
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", signUpButton);
        await signUpButton.click();
    }

    //register page text element getter
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }

    //private data getters
    async getFirstName(){return this._firstName;}
    async getLastName(){return this._lastName;}
    async getEmail(){return this._email;}
    async getPassword(){return this._password;}

    //register page sign up success message getter
    async getRegisterPageSignUpSuccessMessage(){
        const registerPageSignUpSuccessMessage = await this.driver.findElement(this._registerPageSignUpSuccessMessage);
        return await registerPageSignUpSuccessMessage.getText();
    }

    //register page singular input error message getter
    async getRegisterPageSingularInputErrorMessage(){
        const registerPageSingularInputErrorMessage = await this.driver.findElement(this._registerPageInvalidSingularInputError);
        return await registerPageSingularInputErrorMessage.getText();
    }

    //register page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageTitle,
            this._registerPageFirstNameInputField,
            this._registerPageLastNameInputField,
            this._registerPageEmailInputField,
            this._registerPagePhoneInputField,
            this._registerPageAddressOneInputField,
            this._registerPageAddressTwoInputField,
            this._registerPageCountryDropdownMenu,
            this._registerPagePasswordInputField,
            this._registerPageConfirmPasswordInputField,
            this._registerPageSignUpButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterPage };