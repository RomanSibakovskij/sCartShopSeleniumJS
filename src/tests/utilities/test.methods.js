"use strict"

const BaseTest = require("./base.test");
const BasePage = require("../../pages/utilities/base.page.js");

const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginPage } = require("../../pages/login.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { ChangeInformationPage } = require("../../pages/change.information.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/register-page-invalid-input-scenarios/register.page.invalid.singular.input.js");
const ChangeInfoPageInvalidSingularInput = require("../../pages/change-info-page-invalid-input-scenarios/change.info.page.invalid.singular.input.js");

const GeneralPageTextElementAsserts = require("../text-element-asserts/general.page.text.element.asserts.js");
const HomePageTextElementAssert = require("../text-element-asserts/home.page.text.element.assert.js");
//const LoginPageTextElementAssert = require("../text-element-asserts/login.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../text-element-asserts/register.page.text.element.assert.js");
const AccountDashPageTextElementAssert = require("../text-element-asserts/account.dash.page.text.element.assert.js");
const ChangeInformationPageTextElementAssert = require("../text-element-asserts/change.information.page.text.element.assert.js");

const HomePageDataLogger = require("../data-loggers/home.page.data.logger.js");

const assert = require("node:assert");
const Logger = require("../../pages/utilities/logger.js");
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

    //invalid user account creation test method - no country
    async invalidUserAccountCreationNoCountryTest(){
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
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no country
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Country");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoCountryInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoCountryInputErrorMsg, "The selected country is invalid.", "The missing register country input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Country");
    }

    //invalid user account creation test method - no password/confirm password
    async invalidUserAccountCreationNoPasswordTest(){
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
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //don't input password into password input field
        await registerPageInvalidSingularInput.inputNoPasswordIntoPasswordInputField();
        //don't input confirm password into confirm password input field
        await registerPageInvalidSingularInput.inputNoConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no password/confirm password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Password and Confirm Password");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message
        const registerPageNoPasswordInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
        assert.strictEqual(registerPageNoPasswordInputErrorMsg, "The Password field is required.", "The missing register password and confirm password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Password and Confirm Password");
    }

    //too short singular input

    //invalid user account creation test method - too short first name (1 char)
    async invalidUserAccountCreationTooShortFirstNameTest(){
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
        //input too short first name into first name input field (1 char)
        await registerPageInvalidSingularInput.inputTooShortFirstNameIntoFirstNameInputField();
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
        //capture screenshot of the register page display after invalid data input - too short first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short First Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortFirstNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortFirstNameInputErrorMsg, "The first name is too short.", "The too short register first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short First Name");
            throw new Error("The too short register first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short First Name");
    }

    //invalid user account creation test method - too short last name (1 char)
    async invalidUserAccountCreationTooShortLastNameTest(){
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
        //input too short last name into last name input field (1 char)
        await registerPageInvalidSingularInput.inputTooShortLastNameIntoLastNameInputField();
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
        //capture screenshot of the register page display after invalid data input - too short last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Last Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortLastNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortLastNameInputErrorMsg, "The last name is too short.", "The too short register last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Last Name");
            throw new Error("The too short register last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Last Name");
    }

    //invalid user account creation test method - too short email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(){
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
        //input too short email into email input field (1 char -> name, domain)
        await registerPageInvalidSingularInput.inputTooShortEmailIntoEmailInputField();
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
        //capture screenshot of the register page display after invalid data input - too short email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Email");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortEmailInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortEmailInputErrorMsg, "The email is too short.", "The too short register email input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Email");
            throw new Error("The too short register email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Email");
    }

    //invalid user account creation test method - too short phone (7 chars)
    async invalidUserAccountCreationTooShortPhoneTest(){
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
        //input too short phone into phone input field (7 chars)
        await registerPageInvalidSingularInput.inputTooShortPhoneIntoPhoneInputField();
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
        //capture screenshot of the register page display after invalid data input - too short phone
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Phone");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortPhoneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortPhoneInputErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too short register phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Phone");
            throw new Error("The too short register phone input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Phone");
    }

    //invalid user account creation test method - too short address one (3 chars)
    async invalidUserAccountCreationTooShortAddressOneTest(){
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
        //input too short address one into address one input field (3 chars)
        await registerPageInvalidSingularInput.inputTooShortAddressOneIntoAddressOneInputField();
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
        //capture screenshot of the register page display after invalid data input - too short address one
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Address One");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortAddressOneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortAddressOneInputErrorMsg, "The address one is too short.", "The too short register address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Address One");
            throw new Error("The too short register address one input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Address One");
    }

    //invalid user account creation test method - too short address two (3 chars)
    async invalidUserAccountCreationTooShortAddressTwoTest(){
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
        //input too short address two into address two input field (3 chars)
        await registerPageInvalidSingularInput.inputTooShortAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - too short address two
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Address Two");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortAddressTwoInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortAddressTwoInputErrorMsg, "The address two is too short.", "The too short register address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Address Two");
            throw new Error("The too short register address two input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Address Two");
    }

    //invalid user account creation test method - too short password / confirm password (5 chars)
    async invalidUserAccountCreationTooShortPasswordTest(){
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
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input too short password into password input field (5 chars)
        await registerPageInvalidSingularInput.inputTooShortPasswordIntoPasswordInputField();
        //input too short matching confirm password into confirm password input field (5 chars)
        await registerPageInvalidSingularInput.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - too short password/confirm password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Password and Confirm Password");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooShortPasswordInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooShortPasswordInputErrorMsg, "Password minimum 6 characters", "The too short register password and confirm password input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Password and Confirm Password");
            throw new Error("The too short register password input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Password and Confirm Password");
    }

    //too long singular input

    //invalid user account creation test method - too long first name (100 chars)
    async invalidUserAccountCreationTooLongFirstNameTest(){
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
        //input too long first name into first name input field (100 chars)
        await registerPageInvalidSingularInput.inputTooLongFirstNameIntoFirstNameInputField();
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
        //capture screenshot of the register page display after invalid data input - too long first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long First Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongFirstNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongFirstNameInputErrorMsg, "The first name is too long.", "The too long register first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long First Name");
            throw new Error("The too long register first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long First Name");
    }

    //invalid user account creation test method - too long last name (100 chars)
    async invalidUserAccountCreationTooLongLastNameTest(){
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
        //input too long last name into last name input field (100 chars)
        await registerPageInvalidSingularInput.inputTooLongLastNameIntoLastNameInputField();
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
        //capture screenshot of the register page display after invalid data input - too long last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Last Name");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongLastNameInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongLastNameInputErrorMsg, "The last name is too long.", "The too long register last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Last Name");
            throw new Error("The too long register last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Last Name");
    }

    //invalid user account creation test method - too long email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(){
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
        //input too long email into email input field (100 chars -> name, domain)
        await registerPageInvalidSingularInput.inputTooLongEmailIntoEmailInputField();
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
        //capture screenshot of the register page display after invalid data input - too long email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Email");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongEmailInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongEmailInputErrorMsg, "The Email field must be a valid email address.", "The too long register email input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Email");
            throw new Error("The too long register email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Email");
    }

    //invalid user account creation test method - too long phone (15 chars)
    async invalidUserAccountCreationTooLongPhoneTest(){
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
        //input too long phone into phone input field (15 chars)
        await registerPageInvalidSingularInput.inputTooLongPhoneIntoPhoneInputField();
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
        //capture screenshot of the register page display after invalid data input - too long phone
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Phone");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongPhoneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongPhoneInputErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too long register phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Phone");
            throw new Error("The too long register phone input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Phone");
    }

    //invalid user account creation test method - too long address one (101 chars)
    async invalidUserAccountCreationTooLongAddressOneTest(){
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
        //input too long address one into address one input field (101 chars)
        await registerPageInvalidSingularInput.inputTooLongAddressOneIntoAddressOneInputField();
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
        //capture screenshot of the register page display after invalid data input - too long address one
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Address One");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongAddressOneInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongAddressOneInputErrorMsg, "The Address 1 field must not be greater than 100 characters.", "The too long register address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Address One");
            throw new Error("The too long register address one input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Address One");
    }

    //invalid user account creation test method - too long address two (101 chars)
    async invalidUserAccountCreationTooLongAddressTwoTest(){
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
        //input too long address two into address two input field (101 chars)
        await registerPageInvalidSingularInput.inputTooLongAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - too long address two
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Address Two");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongAddressTwoInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongAddressTwoInputErrorMsg, "The Address 2 field must not be greater than 100 characters.", "The too long register address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Address Two");
            throw new Error("The too long register address two input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Address Two");
    }

    //invalid user account creation test method - too long password / confirm password (17 chars)
    async invalidUserAccountCreationTooLongPasswordTest(){
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
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input too long password into password input field (17 chars)
        await registerPageInvalidSingularInput.inputTooLongPasswordIntoPasswordInputField();
        //input too long matching confirm password into confirm password input field (17 chars)
        await registerPageInvalidSingularInput.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - too long password/confirm password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Password and Confirm Password");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageTooLongPasswordInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageTooLongPasswordInputErrorMsg, "Password maximum 16 characters", "The too long register password and confirm password input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Password and Confirm Password");
            throw new Error("The too long password register input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Password and Confirm Password");
    }

    //invalid singular input format

    //invalid user account creation test method - invalid first name format (special symbols only)
    async invalidUserAccountCreationInvalidFirstNameFormatTest(){
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
        //input invalid first name format into first name input field (specials symbols only)
        await registerPageInvalidSingularInput.inputInvalidFirstNameFormatIntoFirstNameInputField();
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
        //capture screenshot of the register page display after invalid data input - invalid first name format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid First Name Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidFirstNameFormatInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidFirstNameFormatInputErrorMsg, "The first name cannot consist of special symbols only.", "The invalid register first name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid First Name Format");
            throw new Error("The invalid register first name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid First Name Format");
    }

    //invalid user account creation test method - invalid last name format (special symbols only)
    async invalidUserAccountCreationInvalidLastNameFormatTest(){
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
        //input invalid last name format into last name input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidLastNameFormatIntoLastNameInputField();
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
        //capture screenshot of the register page display after invalid data input - invalid last name format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Last Name Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidLastNameFormatInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidLastNameFormatInputErrorMsg, "The last name cannot of special symbols only.", "The invalid register last name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Last Name Format");
            throw new Error("The invalid register last name format input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Last Name Format");
    }

    //invalid user account creation test method - invalid email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
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
        //input invalid email format into email input field (missing '@')
        await registerPageInvalidSingularInput.inputInvalidEmailFormatIntoEmailInputField();
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
        //capture screenshot of the register page display after invalid data input - invalid email format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Email Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidEmailInputFormatErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidEmailInputFormatErrorMsg, "The Email field must be a valid email address.", "The invalid register email input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Email Format");
            throw new Error("The invalid register email input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Email Format");
    }

    //invalid user account creation test method - existing email (used beforehand in manual testing)
    async invalidUserAccountCreationExistingEmailTest(){
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
        //input existing email into email input field (used beforehand in manual testing)
        await registerPageInvalidSingularInput.inputExistingEmailIntoEmailInputField();
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
        //capture screenshot of the register page display after invalid data input - existing email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Existing Email");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageExistingEmailInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageExistingEmailInputErrorMsg, "The email has already been taken.", "The existing register email input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Existing Email");
            throw new Error("The existing register email input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Existing Email");
    }

    //invalid user account creation test method - invalid phone format (special symbols only)
    async invalidUserAccountCreationInvalidPhoneFormatTest(){
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
        //input invalid phone format into phone input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidPhoneFormatIntoPhoneInputField();
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
        //capture screenshot of the register page display after invalid data input - invalid phone format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Phone Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidPhoneInputFormatErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidPhoneInputFormatErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The invalid register phone input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Phone Format");
            throw new Error("The invalid register phone input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Phone Format");
    }

    //invalid user account creation test method - invalid address one format (special symbols only)
    async invalidUserAccountCreationInvalidAddressOneFormatTest(){
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
        //input invalid address one format into address one input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidAddressOneFormatIntoAddressOneInputField();
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
        //capture screenshot of the register page display after invalid data input - invalid address one format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Address One Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidAddressOneInputFormatErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidAddressOneInputFormatErrorMsg, "The address one cannot consist of special symbols only.", "The invalid register address one input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Address One Format");
            throw new Error("The invalid register address one input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Address One Format");
    }

    //invalid user account creation test method - invalid address two format (special symbols only)
    async invalidUserAccountCreationInvalidAddressTwoFormatTest(){
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
        //input invalid address two into address two input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidAddressTwoFormatIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input valid matching confirm password into confirm password input field
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - invalid address two format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Address Two Format");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageInvalidAddressTwoInputFormatErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageInvalidAddressTwoInputFormatErrorMsg, "The address two cannot consist of special symbols only.", "The invalid register address two input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Address Two Format");
            throw new Error("The invalid register address two input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Address Two Format");
    }

    //invalid user account creation test method - mismatching confirm password
    async invalidUserAccountCreationMismatchingConfirmPasswordTest(){
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
        //input valid address two into address two input field
        await registerPage.inputAddressTwoIntoAddressTwoInputField();
        //click "Country" dropdown menu
        await registerPage.clickCountryDropdownMenu();
        //select "United States" option
        await registerPage.selectUSCountryOption();
        //input valid password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //input mismatching confirm password into confirm password input field
        await registerPageInvalidSingularInput.inputMismatchingConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the register page display after invalid data input - mismatching confirm password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Mismatching Confirm Password");
        //click "Sign up" button
        await registerPage.clickSignUpButton();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const registerPageMismatchingPasswordInputErrorMsg = await registerPage.getRegisterPageSingularInputErrorMessage();
            assert.strictEqual(registerPageMismatchingPasswordInputErrorMsg, "The Password field confirmation does not match.", "The mismatching register confirm password and confirm password input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Mismatching Confirm Password");
            throw new Error("The mismatching password register input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Mismatching Confirm Password");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit account information test

    //valid edit account information test method
    async validEditAccountInformationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPagePageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change information" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change information page web element assert
        await changeInformationPage.isChangeInfoPageWebElementDisplayed();
        //change information page text element assert
        await changeInformationPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //capture screenshot of the change information page display before data input
        await captureScreenshot(this.driver, "Change Information Page Display Before Data Input");
        //input valid edited first name into edited first name input field
        await changeInformationPage.inputEditedFirstNameIntoEditedFirstNameInputField();
        //input valid edited last name into edited last name input field
        await changeInformationPage.inputEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after valid data input
        await captureScreenshot(this.driver, "Change Information Page Display After Valid Data Input");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPagePageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets an expected success message
        const changeInfoPageSuccessMsg = await changeInformationPage.getChangeInfoPageUpdateSuccessMessage();
        assert.strictEqual(changeInfoPageSuccessMsg, "×\nUpdate success", "The valid user information update message doesn't match expectations or the update process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit Account Information Test Result");
    }

    //invalid edit account information tests

    //no singular input

    //invalid edit account information test method - no edited first name
    async invalidEditAccountInformationNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPagePageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInfoPageInvalidSingularInput = new ChangeInfoPageInvalidSingularInput(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPagePageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change information" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change information page web element assert
        await changeInformationPage.isChangeInfoPageWebElementDisplayed();
        //change information page text element assert
        await changeInformationPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //capture screenshot of the change information page display before data input
        await captureScreenshot(this.driver, "Change Information Page Display Before Data Input");
        //don't input valid edited first name into edited first name input field
        await changeInfoPageInvalidSingularInput.inputNoEditedFirstNameIntoEditedFirstNameInputField();
        //input valid edited last name into edited last name input field
        await changeInformationPage.inputEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - no edited first name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited First Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPagePageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPagePageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The First name field is required.", "The missing edited first name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited First Name");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;