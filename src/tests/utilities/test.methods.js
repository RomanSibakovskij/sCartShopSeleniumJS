"use strict"

const BaseTest = require("./base.test");
const BasePage = require("../../pages/utilities/base.page.js");

const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginPage } = require("../../pages/login.page.js");
const { RegisterPage } = require("../../pages/register.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/register-page-invalid-input-scenarios/register.page.invalid.singular.input.js");

const GeneralPageTextElementAsserts = require("../text-element-asserts/general.page.text.element.asserts.js");
const HomePageTextElementAssert = require("../text-element-asserts/home.page.text.element.assert.js");
//const LoginPageTextElementAssert = require("../text-element-asserts/login.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../text-element-asserts/register.page.text.element.assert.js");

const HomePageDataLogger = require("../data-loggers/home.page.data.logger.js");

const assert = require("node:assert");
const {captureScreenshot} = require("./screenshot.class");

class TestMethods extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //navigate to register page test method
    async navigateToRegisterPageTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        //const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(3000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        //await homePage.scrollDownToNewProductsSection();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page new product data
        await homePageDataLogger.logHomePageNewProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar "Account" dropdown link
        await generalPage.clickSetNavBarLink(4);
        //select "Login" option
        await generalPage.clickSetAccountDropdownMenuOption(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3500)
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display
        await captureScreenshot(this.driver, "Login Page Display");
        //click "Account register" link
        await loginPage.clickAccountRegisterLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Navigate To Register Page Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation test

    //valid user account creation test method
    async validUserAccountCreationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after valid data input
        await captureScreenshot(this.driver, "Register Page Display After Valid Data Input");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected success message
        const registerPageSuccessMsg = await registerPage.getRegisterPageSignUpSuccessMessage();
        assert.strictEqual(registerPageSuccessMsg, "×\nSuccessful register", "The valid user account creation message doesn't match expectations or the user account creation process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Account Creation Test Result");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user account creation test method - no first name
    async invalidUserAccountCreationNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //don't input first name into first name input field
        await registerPageInvalidSingularInput.inputNoFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No First Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoFirstNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoFirstNameInputErrorMsg, "The First name field is required.", "The missing register first name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No First Name");
    }

    //invalid user account creation test method - no last name
    async invalidUserAccountCreationNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //don't input last name into last name input field
        await registerPageInvalidSingularInput.inputNoLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Last Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoLastNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoLastNameInputErrorMsg, "The Last name field is required.", "The missing register last name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Last Name");
    }

    //invalid user account creation test method - no email
    async invalidUserAccountCreationNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //don't input email into email input field
        await registerPageInvalidSingularInput.inputNoEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Email");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoEmailInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoEmailInputErrorMsg, "The Email field is required.", "The missing register email input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Email");
    }

    //invalid user account creation test method - no phone
    async invalidUserAccountCreationNoPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //don't input phone into phone input field
        await registerPageInvalidSingularInput.inputNoPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no phone
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Phone");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoPhoneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoPhoneInputErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The missing register phone input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Phone");
    }

    //invalid user account creation test method - no address one
    async invalidUserAccountCreationNoAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //don't input address one into address one input field
        await registerPageInvalidSingularInput.inputNoAddressOneIntoAddressOneInputField();
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no address one
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Address One");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoAddressOneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoAddressOneInputErrorMsg, "The Address 1 field is required.", "The missing register address one input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Address One");
    }

    //invalid user account creation test method - no address two
    async invalidUserAccountCreationNoAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPagePageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone into phone input field
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid address one into address one input field
        await registerPage.inputAddressOneIntoAddressOneInputField();
        //don't input address two into address two input field
        await registerPageInvalidSingularInput.inputNoAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no address two
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Address Two");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoAddressTwoInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoAddressTwoInputErrorMsg, "The Address 2 field is required.", "The missing register address two input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Address Two");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;