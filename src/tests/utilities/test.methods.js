"use strict"

const BaseTest = require("./base.test");
const BasePage = require("../../pages/utilities/base.page.js");

const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginPage } = require("../../pages/login.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { ChangeInformationPage } = require("../../pages/change.information.page.js");
const { ChangePasswordPage } = require("../../pages/change.password.page.js");
const { AddressListPage } = require("../../pages/address.list.page.js");
const { AddressDetailsPage } = require("../../pages/address.details.page.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");
const { ShoppingCartPage } = require("../../pages/shopping.cart.page.js");
const { SingleCategoryDashboardPage } = require("../../pages/single.category.dashboard.page.js");
const { WishlistPage } = require("../../pages/wishlist.page.js");
const { CompareListPage } = require("../../pages/compare.list.page.js")
const { CheckoutPage } = require("../../pages/checkout.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/register-page-invalid-input-scenarios/register.page.invalid.singular.input.js");
const ChangeInfoPageInvalidSingularInput = require("../../pages/change-info-page-invalid-input-scenarios/change.info.page.invalid.singular.input.js");
const ChangePasswordPageInvalidSingularInput = require("../../pages/change-password-page-invalid-input-scenarios/change.password.page.invalid.singular.input.js");
const AddressDetailsPageInvalidSingularInput = require("../../pages/address-details-page-invalid-input-scenarios/address.details.page.invalid.singular.input.js");
const LoginPageInvalidSingularInput = require("../../pages/login-page-invalid-input-scenarios/login.page.invalid.singular.input.js")
const CheckoutPageInvalidSingularInput = require("../../pages/checkout-page-invalid-input-scenarios/checkout.page.invalid.singular.input.js");

const CheckoutPageValidGuestInput = require("../../pages/checkout-page-guest-input/checkout.page.valid.guest.input.js");

const GeneralPageTextElementAsserts = require("../text-element-asserts/general.page.text.element.asserts.js");
const HomePageTextElementAssert = require("../text-element-asserts/home.page.text.element.assert.js");
//const LoginPageTextElementAssert = require("../text-element-asserts/login.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../text-element-asserts/register.page.text.element.assert.js");
const AccountDashPageTextElementAssert = require("../text-element-asserts/account.dash.page.text.element.assert.js");
const ChangeInformationPageTextElementAssert = require("../text-element-asserts/change.information.page.text.element.assert.js");
const ChangePasswordPageTextElementAssert = require("../text-element-asserts/change.password.page.text.element.assert.js");
const AddressListPageTextElementAssert = require("../text-element-asserts/address.list.page.text.element.assert.js");
const AddressDetailsPageTextElementAssert = require("../text-element-asserts/address.details.page.text.element.assert.js");
const SingleProductPageTextElementAssert = require("../text-element-asserts/single.product.page.text.element.assert.js");
const ShoppingCartPageTextElementAssert = require("../text-element-asserts/shopping.cart.page.text.element.assert.js");
const WishlistPageTextElementAssert = require("../text-element-asserts/wishlist.page.text.element.assert.js");
const CheckoutPageTextElementAsserts = require("../text-element-asserts/checkout.page.text.element.asserts.js");

const HomePageDataLogger = require("../data-loggers/home.page.data.logger.js");
const AddressListPageDataLogger = require("../data-loggers/address.list.page.data.logger.js");
const SingleProductPageDataLoggers = require("../data-loggers/single.product.page.data.loggers.js");
const SingleCategoryDashPageDataLogger = require("../data-loggers/single.category.dash.page.data.logger.js");
const WishlistPageDataLogger = require("../data-loggers/wishlist.page.data.logger.js");
const CompareListPageDataLogger = require("../data-loggers/compare.list.page.data.logger.js");
const ShoppingCartPageDataLogger = require("../data-loggers/shopping.cart.page.data.logger.js");
const CheckoutPageDataLoggers = require("../data-loggers/checkout.page.data.loggers.js");

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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //wait for elements to load (due to network issues, the test sometimes fail due to timeout absence)
        await basePage.waitForElementLoad(2000)
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
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
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The First name field is required.", "The missing edited first name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited First Name");
    }

    //invalid edit account information test method - no edited last name
    async invalidEditAccountInformationNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //don't input valid edited last name into edited last name input field
        await changeInfoPageInvalidSingularInput.inputNoEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - no edited last name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited Last Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The Last name field is required.", "The missing edited last name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited Last Name");
    }

    //invalid edit account information test method - no edited phone
    async invalidEditAccountInformationNoPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInfoPageInvalidSingularInput = new ChangeInfoPageInvalidSingularInput(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //don't input valid edited phone into edited phone input field
        await changeInfoPageInvalidSingularInput.inputNoEditedPhoneIntoEditedPhoneInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - no edited phone
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited Phone");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The missing edited phone input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited Phone");
    }

    //invalid edit account information test method - no edited address one
    async invalidEditAccountInformationNoAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts= new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //don't input valid edited address one into edited address one input field
        await changeInfoPageInvalidSingularInput.inputNoEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - no edited address one
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited Address One");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The Address 1 field is required.", "The missing edited address one input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited Address One");
    }

    //invalid edit account information test method - no edited address two
    async invalidEditAccountInformationNoAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //don't input valid edited address two into edited address two input field
        await changeInfoPageInvalidSingularInput.inputNoEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - no edited address two
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited Address Two");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The Address 2 field is required.", "The missing edited address two input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited Address Two");
    }

    //invalid edit account information test method - no edited country
    async invalidEditAccountInformationNoCountryTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click country dropdown menu
        await changeInformationPage.clickCountryDropdownMenu();
        //select "Country" option
        await changeInformationPage.selectCountryOption();
        //capture screenshot of the change information page display after invalid data input - no edited country
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - No Edited Country");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message
        const changeInfoPageNoFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
        assert.strictEqual(changeInfoPageNoFirstNameErrorMsg, "The selected country is invalid.", "The missing edited country input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - No Edited Country");
    }

    //too short singular input

    //invalid edit account information test method - too short edited first name (1 char)
    async invalidEditAccountInformationTooShortFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too short edited first name into edited first name input field (1 char)
        await changeInfoPageInvalidSingularInput.inputTooShortEditedFirstNameIntoEditedFirstNameInputField();
        //input valid edited last name into edited last name input field
        await changeInformationPage.inputEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too short edited first name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Short Edited First Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortFirstNameErrorMsg, "The first name is too short.", "The too short edited first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited First Name");
            throw new Error("The too short edited first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited First Name");
    }

    //invalid edit account information test method - too short edited last name (1 char)
    async invalidEditAccountInformationTooShortLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changeInformationPage = new ChangeInformationPage(this.driver);
        const changeInfoPageInvalidSingularInput = new ChangeInfoPageInvalidSingularInput(this.driver);
        const changeInformationPageTextElementAssert = new ChangeInformationPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too short edited last name into edited last name input field (1 char)
        await changeInfoPageInvalidSingularInput.inputTooShortEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too short edited last name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Short Edited Last Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortLastNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortLastNameErrorMsg, "The last name is too short.", "The too short edited last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Last Name");
            throw new Error("The too short edited last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Last Name");
    }

    //invalid edit account information test method - too short edited phone (7 chars)
    async invalidEditAccountInformationTooShortPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too short edited phone into edited phone input field (7 chars)
        await changeInfoPageInvalidSingularInput.inputTooShortEditedPhoneIntoEditedPhoneInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too short edited phone
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Short Edited Phone");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortPhoneErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortPhoneErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too short edited phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Phone");
            throw new Error("The too short edited phone input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Phone");
    }

    //invalid edit account information test method - too short edited address one (3 chars)
    async invalidEditAccountInformationTooShortAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too short edited address one into edited address one input field (3 chars)
        await changeInfoPageInvalidSingularInput.inputTooShortEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too short edited address one
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Short Edited Address One");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortAddressOneErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortAddressOneErrorMsg, "The address1 is too short.", "The too short edited address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Address One");
            throw new Error("The too short edited address one input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Address One");
    }

    //invalid edit account information test method - too short edited address two (3 chars)
    async invalidEditAccountInformationTooShortAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts= new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too short edited address two into edited address two input field (3 chars)
        await changeInfoPageInvalidSingularInput.inputTooShortEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too short edited address two
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Short Edited Address Two");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortAddressTwoErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortAddressTwoErrorMsg, "The address2 is too short.", "The too short edited address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Address Two");
            throw new Error("The too short edited address two input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Short Edited Address Two");
    }

    //too long singular input

    //invalid edit account information test method - too long edited first name (100 chars)
    async invalidEditAccountInformationTooLongFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too long edited first name into edited first name input field (100 chars)
        await changeInfoPageInvalidSingularInput.inputTooLongEditedFirstNameIntoEditedFirstNameInputField();
        //input valid edited last name into edited last name input field
        await changeInformationPage.inputEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too long edited first name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Long Edited First Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooLongFirstNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooLongFirstNameErrorMsg, "The first name is too long.", "The too long edited first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited First Name");
            throw new Error("The too long edited first name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited First Name");
    }

    //invalid edit account information test method - too long edited last name (100 chars)
    async invalidEditAccountInformationTooLongLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too long edited last name into edited last name input field (100 chars)
        await changeInfoPageInvalidSingularInput.inputTooLongEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too long edited last name
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Long Edited Last Name");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooLongLastNameErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooLongLastNameErrorMsg, "The last name is too long.", "The too long edited last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Last Name");
            throw new Error("The too long edited last name input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Last Name");
    }

    //invalid edit account information test method - too long edited phone (15 chars)
    async invalidEditAccountInformationTooLongPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too long edited phone into edited phone input field (15 chars)
        await changeInfoPageInvalidSingularInput.inputTooLongEditedPhoneIntoEditedPhoneInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too long edited phone
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Long Edited Phone");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooLongPhoneErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooLongPhoneErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too long edited phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Phone");
            throw new Error("The too long edited phone input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Phone");
    }

    //invalid edit account information test method - too long edited address one (101 chars)
    async invalidEditAccountInformationTooLongAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too long edited address one into edited address one input field (101 chars)
        await changeInfoPageInvalidSingularInput.inputTooLongEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too long edited address one
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Long Edited Address One");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooLongAddressOneErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooLongAddressOneErrorMsg, "The Address 1 field must not be greater than 100 characters.", "The too long edited address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Address One");
            throw new Error("The too long edited address one input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Address One");
    }

    //invalid edit account information test method - too long edited address two (101 chars)
    async invalidEditAccountInformationTooLongAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input too long edited address two into edited address two input field (101 chars)
        await changeInfoPageInvalidSingularInput.inputTooLongEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - too long edited address two
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Too Long Edited Address Two");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooLongAddressTwoErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooLongAddressTwoErrorMsg, "The Address 2 field must not be greater than 100 characters.", "The too long edited address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Address Two");
            throw new Error("The too long edited address two input error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Too Long Edited Address Two");
    }

    //invalid singular input format

    //invalid edit account information test method - invalid edited first name (special symbols only)
    async invalidEditAccountInformationInvalidFirstNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input invalid edited first name format into edited first name input field (100 chars)
        await changeInfoPageInvalidSingularInput.inputInvalidEditedFirstNameFormatIntoEditedFirstNameInputField();
        //input valid edited last name into edited last name input field
        await changeInformationPage.inputEditedLastNameIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - invalid edited first name format
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Invalid Edited First Name Format");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageInvalidFirstNameFormatErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageInvalidFirstNameFormatErrorMsg, "The first name cannot consist of special symbols only.", "The invalid edited first name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited First Name Format");
            throw new Error("The invalid edited first name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited First Name Format");
    }

    //invalid edit account information test method - invalid edited last name format (special symbols only)
    async invalidEditAccountInformationInvalidLastNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input invalid edited last name format into edited last name input field (special symbols only)
        await changeInfoPageInvalidSingularInput.inputInvalidEditedLastNameFormatIntoEditedLastNameInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - invalid edited last name format
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Invalid Edited Last Name Format");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageInvalidLastNameFormatErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageInvalidLastNameFormatErrorMsg, "The last name cannot consist of special symbols only.", "The invalid edited last name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Last Name Format");
            throw new Error("The invalid edited last name input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Last Name Format");
    }

    //invalid edit account information test method - invalid edited phone format (special symbols only)
    async invalidEditAccountInformationInvalidPhoneFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input invalid edited phone format into edited phone input field (special symbols only)
        await changeInfoPageInvalidSingularInput.inputInvalidEditedPhoneFormatIntoEditedPhoneInputField();
        //input valid edited address one into edited address one input field
        await changeInformationPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - invalid edited phone format
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Invalid Edited Phone Format");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageInvalidPhoneFormatErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageInvalidPhoneFormatErrorMsg, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The invalid edited phone input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Phone Format");
            throw new Error("The invalid edited phone input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Phone Format");
    }

    //invalid edit account information test method - invalid edited address one format (special symbols only)
    async invalidEditAccountInformationInvalidAddressOneFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input invalid edited address one format into edited address one input field (special symbols only)
        await changeInfoPageInvalidSingularInput.inputInvalidEditedAddressOneFormatIntoEditedAddressOneInputField();
        //input valid edited address two into edited address two input field
        await changeInformationPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - invalid edited address one
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Invalid Edited Address One Format");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageInvalidAddressOneFormatErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageInvalidAddressOneFormatErrorMsg, "The address 1 cannot consist of special symbols only.", "The invalid edited address one input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Address One Format");
            throw new Error("The invalid edited address one input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Address One Format");
    }

    //invalid edit account information test method - invalid edited address two format (special symbols only)
    async invalidEditAccountInformationInvalidAddressTwoFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts= new GeneralPageTextElementAsserts(this.driver);
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
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //input invalid edited address two format into edited address two input field (special symbols only)
        await changeInfoPageInvalidSingularInput.inputInvalidEditedAddressTwoFormatIntoEditedAddressTwoInputField();
        //capture screenshot of the change information page display after invalid data input - invalid edited address two
        await captureScreenshot(this.driver, "Change Information Page Display After Invalid Data Input - Invalid Edited Address Two");
        //click "Submit Information" button
        await changeInformationPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected error message, throw an error otherwise
        try {
            const changeInfoPageTooShortAddressTwoErrorMsg = await changeInformationPage.getChangeInfoPageSingularInputErrorMessage();
            assert.strictEqual(changeInfoPageTooShortAddressTwoErrorMsg, "The address 2 cannot consist of special symbols only.", "The invalid edited address two input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Address Two Format");
            throw new Error("The invalid edited address two input format error doesn't get triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Information Test Result - Invalid Edited Address Two Format");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit account password test

    //valid edit account password test method
    async validEditAccountPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts= new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input valid old password into old password one input field
        await changePasswordPage.inputOldPasswordIntoOldPasswordInputField();
        //input valid new password into new password two input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input valid confirm password into confirm password two input field
        await changePasswordPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after valid data input
        await captureScreenshot(this.driver, "Change Password Page Display After Valid Data Input");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message
        const changeInfoPageSuccessMsg = await changePasswordPage.getChangePasswordPageUpdateSuccessMessage();
        assert.strictEqual(changeInfoPageSuccessMsg, "×\nUpdate success", "The valid user password update message doesn't match expectations or the update process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit Account Password Test Result");
    }

    //invalid edit account password tests

    //no singular input

    //invalid edit account password test method - no old password
    async invalidEditAccountPasswordNoOldPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts= new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidSingularInput = new ChangePasswordPageInvalidSingularInput(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //don't input old password into old password one input field
        await changePasswordPageInvalidSingularInput.inputNoOldPasswordIntoOldPasswordInputField();
        //input valid new password into new password two input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input valid confirm password into confirm password two input field
        await changePasswordPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - no old password
        await captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - No Old Password");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message, log an error otherwise (it throws react style alert that can't be pinpointed with locator)
        try {
            const noOldPasswordInputError = await changePasswordPage.getChangePasswordPageSingularInputErrorMessage();
            assert.strictEqual(noOldPasswordInputError, "Please input old password", "The missing user password error message doesn't match expectations.");
        } catch {
            Logger.error("The missing old password input wasn't triggered.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - No Old Password");
    }

    //invalid edit account password test method - no new/confirm password
    async invalidEditAccountPasswordNoNewConfirmPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidSingularInput = new ChangePasswordPageInvalidSingularInput(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input valid old password into old password one input field
        await changePasswordPage.inputOldPasswordIntoOldPasswordInputField();
        //don't input new password into new password two input field
        await changePasswordPageInvalidSingularInput.inputNoNewPasswordIntoNewPasswordInputField();
        //don't input confirm password into confirm password two input field
        await changePasswordPageInvalidSingularInput.inputNoConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - no new/confirm password
        await captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - No New and Confirm Password");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message, log an error otherwise (it throws react style alert that can't be pinpointed with locator)
        try {
            const noOldPasswordInputError = await changePasswordPage.getChangePasswordPageSingularInputErrorMessage();
            assert.strictEqual(noOldPasswordInputError, "Please input new password", "The missing user new password/confirm password error message doesn't match expectations.");
        } catch {
            Logger.error("The missing new password/confirm password input wasn't triggered.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - No New and Confirm Password");
    }

    //too short singular input

    //invalid edit account password test method - too short new/confirm password (5 chars)
    async invalidEditAccountPasswordTooShortNewConfirmPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidSingularInput = new ChangePasswordPageInvalidSingularInput(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input valid old password into old password one input field
        await changePasswordPage.inputOldPasswordIntoOldPasswordInputField();
        //input too short new password into new password two input field (5 chars)
        await changePasswordPageInvalidSingularInput.inputTooShortNewPasswordIntoNewPasswordInputField();
        //input too short confirm password into confirm password two input field (5 chars)
        await changePasswordPageInvalidSingularInput.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - too short new/confirm password
        await captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - Too Short New and Confirm Password");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message, throw an error otherwise
        try {
            const tooShortPasswordInputError = await changePasswordPage.getChangePasswordPageSingularInputErrorMessage();
            assert.strictEqual(tooShortPasswordInputError, "Password minimum 6 characters", "The too short user new password/confirm password error message doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Too Short New and Confirm Password");
            throw new Error("The too short password/confirm password input wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Too Short New and Confirm Password");
    }

    //too long singular input

    //invalid edit account password test method - too long new/confirm password (17 chars)
    async invalidEditAccountPasswordTooLongNewConfirmPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidSingularInput = new ChangePasswordPageInvalidSingularInput(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input valid old password into old password one input field
        await changePasswordPage.inputOldPasswordIntoOldPasswordInputField();
        //input too long new password into new password two input field (17 chars)
        await changePasswordPageInvalidSingularInput.inputTooLongNewPasswordIntoNewPasswordInputField();
        //input too long confirm password into confirm password two input field (17 chars)
        await changePasswordPageInvalidSingularInput.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - too long new/confirm password
        await captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - Too Long New and Confirm Password");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message, throw an error otherwise
        try {
            const tooLongPasswordInputError = await changePasswordPage.getChangePasswordPageSingularInputErrorMessage();
            assert.strictEqual(tooLongPasswordInputError, "Password maximum 16 characters", "The too long user new password/confirm password error message doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Too Long New and Confirm Password");
            throw new Error("The too long password/confirm password input wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Too Long New and Confirm Password");
    }

    //invalid singular input

    //invalid edit account password test method - mismatching confirm password
    async invalidEditAccountPasswordMismatchingConfirmPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const changePasswordPage = new ChangePasswordPage(this.driver);
        const changePasswordPageInvalidSingularInput = new ChangePasswordPageInvalidSingularInput(this.driver);
        const changePasswordPageTextElementAssert = new ChangePasswordPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //assert the account dashboard page welcome greeting is as expected
        const accountDashPageWelcomeMsg = await accountDashboardPage.getAccountDashboardPageWelcomeMsg();
        //log the misspelling issue
        (accountDashPageWelcomeMsg === "Welcome") ? Logger.info("The 'welcome' word is spelled correctly") : Logger.info(`The "welcome" word isn't spelled correctly. Expected: "Welcome", actual: ${accountDashPageWelcomeMsg}`);
        assert.strictEqual(accountDashPageWelcomeMsg, "Wellcome", "The account dashboard page welcome text message doesn't match expectations.");
        //click "Change password" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //change password page web element assert
        await changePasswordPage.isChangePasswordPageWebElementDisplayed();
        //change password text element assert
        await changePasswordPageTextElementAssert.isChangeInfoPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the change password page display before data input
        await captureScreenshot(this.driver, "Change Password Page Display Before Data Input");
        //input valid old password into old password one input field
        await changePasswordPage.inputOldPasswordIntoOldPasswordInputField();
        //input valid new password into new password two input field
        await changePasswordPage.inputNewPasswordIntoNewPasswordInputField();
        //input mismatching confirm password into confirm password two input field
        await changePasswordPageInvalidSingularInput.inputMismatchingConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the change password page display after invalid data input - mismatching confirm password
        await captureScreenshot(this.driver, "Change Password Page Display After Invalid Data Input - Mismatching Confirm Password");
        //click "Submit Information" button
        await changePasswordPage.clickSubmitInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //assert the user gets an expected success message, throw an error otherwise
        try {
            const mismatchPasswordInputError = await changePasswordPage.getChangePasswordPageSingularInputErrorMessage();
            assert.strictEqual(mismatchPasswordInputError, "The Password field confirmation does not match.", "The mismatching user confirm password error message doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Mismatching Confirm Password");
            throw new Error("The mismatching confirm password input wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Password Test Result - Mismatching Confirm Password");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit user address test

    //valid edit user address test method
    async validEditUserAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input valid edited user address one into address one input field
        await addressDetailsPage.inputEditedAddressOneIntoEditedAddressOneInputField();
        //input valid edited user address two into address two input field
        await addressDetailsPage.inputEditedAddressTwoIntoEditedAddressTwoInputField();
        //click "Country" dropdown menu
        await addressDetailsPage.clickAddressDetailsPageCountryDropdownMenu();
        //select set country ("Turkey") option
        await addressDetailsPage.selectTRCountryOption();
        //capture screenshot of the address details page after valid data input
        await captureScreenshot(this.driver, "Address Details Page Display After Valid Data Input");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user gets an expected success message
        const addressDetailsUpdateSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage();
        assert.strictEqual(addressDetailsUpdateSuccessMsg, "×\nUpdate success", "The valid user address details update message doesn't match expectations or the address details update process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit User Address Test Result");
    }

    //invalid edit user address tests

    //no singular input

    //invalid edit user address test method - no edited first name
    async invalidEditUserAddressNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //don't input edited user first name into first name input field
        await addressDetailsPageInvalidSingularInput.inputNoEditedAddressFirstNameIntoEditedAddressFirstNameInputField();
        //capture screenshot of the address details page after invalid data input - no edited first name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited First Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited First Name");
    }

    //invalid edit user address test method - no edited last name
    async invalidEditUserAddressNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //don't input edited user last name into last name input field
        await addressDetailsPageInvalidSingularInput.inputNoEditedAddressLastNameIntoEditedAddressLastNameInputField();
        //capture screenshot of the address details page after invalid data input - no edited last name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited Last Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited Last Name");
    }

    //invalid edit user address test method - no edited phone
    async invalidEditUserAddressNoPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //don't input edited user phone into phone input field
        await addressDetailsPageInvalidSingularInput.inputNoEditedAddressPhoneIntoEditedAddressPhoneInputField();
        //capture screenshot of the address details page after invalid data input - no edited phone
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited Phone");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited Phone");
    }

    //invalid edit user address test method - no edited address one
    async invalidEditUserAddressNoAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //don't input edited user address one into address one input field
        await addressDetailsPageInvalidSingularInput.inputNoEditedAddressOneIntoEditedAddressOneInputField();
        //capture screenshot of the address details page after invalid data input - no edited address one
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited Address One");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited Address One");
    }

    //invalid edit user address test method - no edited address two
    async invalidEditUserAddressNoAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //don't input edited user address two into address two input field
        await addressDetailsPageInvalidSingularInput.inputNoEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the address details page after invalid data input - no edited address two
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited Address Two");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited Address Two");
    }

    //invalid edit user address test method - no edited country
    async invalidEditUserAddressNoCountryTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //click country dropdown menu
        await addressDetailsPage.clickAddressDetailsPageCountryDropdownMenu();
        //select "Country" option
        await addressDetailsPage.selectCountryOption();
        //capture screenshot of the address details page after invalid data input  - no edited country
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - No Edited Country");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //since the address details page has no error boxes (that can't be pinpointed with locators), html address assert is being used
        const addressListURL = "https://demo.s-cart.org/customer/address-list.html";
        const actualURL = await this.driver.getCurrentUrl();
        assert.notStrictEqual(actualURL, addressListURL, `The actual (${actualURL}) and expected (${addressListURL}) URL addresses match, test has failed.`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - No Edited Country");
    }

    //too short singular input

    //invalid edit user address test method - too short edited first name (1 char)
    async invalidEditUserAddressTooShortFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too short edited user first name into first name input field (1 char)
        await addressDetailsPageInvalidSingularInput.inputTooShortEditedAddressFirstNameIntoEditedAddressFirstNameInputField();
        //capture screenshot of the address details page after invalid data input - too short edited first name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Short Edited First Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooShortFirstNameInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooShortFirstNameInputError, "The first name is too short.", "The too short address first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited First Name")
            throw new Error("The too short address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited First Name");
    }

    //invalid edit user address test method - too short edited last name (1 char)
    async invalidEditUserAddressTooShortLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too short edited user last name into last name input field (1 char)
        await addressDetailsPageInvalidSingularInput.inputTooShortEditedAddressLastNameIntoEditedAddressLastNameInputField();
        //capture screenshot of the address details page after invalid data input - too short edited last name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Short Edited Last Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooShortLastNameInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooShortLastNameInputError, "The last name is too short.", "The too short address last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Last Name")
            throw new Error("The too short address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Last Name");
    }

    //invalid edit user address test method - too short edited phone (7 digits)
    async invalidEditUserAddressTooShortPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too short edited user phone into phone input field (7 digits)
        await addressDetailsPageInvalidSingularInput.inputTooShortEditedAddressPhoneIntoEditedAddressPhoneInputField();
        //capture screenshot of the address details page after invalid data input - too short edited phone
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Short Edited Phone");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooShortPhoneInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooShortPhoneInputError, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too short address phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Phone")
            throw new Error("The too short address phone input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Phone");
    }

    //invalid edit user address test method - too short edited address one (3 chars)
    async invalidEditUserAddressTooShortAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too short edited user address one into address one input field (3 chars)
        await addressDetailsPageInvalidSingularInput.inputTooShortEditedAddressOneIntoEditedAddressOneInputField();
        //capture screenshot of the address details page after invalid data input - too short edited address one
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Short Edited Address One");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooShortAddressOneInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooShortAddressOneInputError, "The address 1 is too short.", "The too short address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Address One")
            throw new Error("The too short address one input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Address One");
    }

    //invalid edit user address test method - too short edited address two (3 chars)
    async invalidEditUserAddressTooShortAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too short edited user address two into address two input field (3 chars)
        await addressDetailsPageInvalidSingularInput.inputTooShortEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the address details page after invalid data input - too short edited address two
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Short Edited Address Two");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooShortAddressTwoInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooShortAddressTwoInputError, "The address 2 is too short.", "The too short address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Address Two")
            throw new Error("The too short address two input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Short Edited Address Two");
    }

    //too long singular input

    //invalid edit user address test method - too long edited first name (100 chars)
    async invalidEditUserAddressTooLongFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too long edited user first name into first name input field (100 chars)
        await addressDetailsPageInvalidSingularInput.inputTooLongEditedAddressFirstNameIntoEditedAddressFirstNameInputField();
        //capture screenshot of the address details page after invalid data input - too long edited first name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Long Edited First Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooLongFirstNameInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooLongFirstNameInputError, "The first name is too long.", "The too long address first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited First Name")
            throw new Error("The too long address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited First Name");
    }

    //invalid edit user address test method - too long edited last name (100 chars)
    async invalidEditUserAddressTooLongLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too long edited user last name into last name input field (100 chars)
        await addressDetailsPageInvalidSingularInput.inputTooLongEditedAddressLastNameIntoEditedAddressLastNameInputField();
        //capture screenshot of the address details page after invalid data input - too long edited last name
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Long Edited Last Name");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooLongLastNameInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooLongLastNameInputError, "The last name is too long.", "The too long address last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Last Name")
            throw new Error("The too long address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Last Name");
    }

    //invalid edit user address test method - too long edited phone (15 digits)
    async invalidEditUserAddressTooLongPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too long edited user phone into phone input field (15 digits)
        await addressDetailsPageInvalidSingularInput.inputTooLongEditedAddressPhoneIntoEditedAddressPhoneInputField();
        //capture screenshot of the address details page after invalid data input - too long edited phone
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Long Edited Phone");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooLongPhoneInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooLongPhoneInputError, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The too long address phone input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Phone")
            throw new Error("The too long address phone input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Phone");
    }

    //invalid edit user address test method - too long edited address one (101 chars)
    async invalidEditUserAddressTooLongAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too long edited user address one into address one input field (101 chars)
        await addressDetailsPageInvalidSingularInput.inputTooLongEditedAddressOneIntoEditedAddressOneInputField();
        //capture screenshot of the address details page after invalid data input - too long edited address one
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Long Edited Address One");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooLongAddressOneInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooLongAddressOneInputError, "The Address 1 field must not be greater than 100 characters.", "The too long address one input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Address One")
            throw new Error("The too long address one input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Address One");
    }

    //invalid edit user address test method - too long edited address two (101 chars)
    async invalidEditUserAddressTooLongAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input too long edited user address two into address two input field (101 chars)
        await addressDetailsPageInvalidSingularInput.inputTooLongEditedAddressTwoIntoEditedAddressTwoInputField();
        //capture screenshot of the address details page after invalid data input - too long edited address two
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Too Long Edited Address Two");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageTooLongAddressTwoInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageTooLongAddressTwoInputError, "The Address 2 field must not be greater than 100 characters.", "The too long address two input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Address Two")
            throw new Error("The too long address two input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Too Long Edited Address Two");
    }

    //invalid singular input format

    //invalid edit user address test method - invalid edited first name (special symbols only)
    async invalidEditUserAddressInvalidFirstNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input invalid edited user first name format into first name input field (special symbols only)
        await addressDetailsPageInvalidSingularInput.inputInvalidEditedAddressFirstNameFormatIntoEditedAddressFirstNameInputField();
        //capture screenshot of the address details page after invalid data input - invalid edited first name input format
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Invalid Edited First Name Format");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageInvalidFirstNameFormatInputError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageInvalidFirstNameFormatInputError, "The first name cannot consist of special symbols only.", "The invalid address first name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited First Name Format")
            throw new Error("The invalid address first name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited First Name Format");
    }

    //invalid edit user address test method - invalid edited last name format (special symbols only)
    async invalidEditUserAddressInvalidLastNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input invalid edited user last name format into last name input field (special symbols only)
        await addressDetailsPageInvalidSingularInput.inputInvalidEditedAddressLastNameFormatIntoEditedAddressLastNameInputField();
        //capture screenshot of the address details page after invalid data input - invalid edited last name input format
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Invalid Edited Last Name Format");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageInvalidLastNameInputFormatError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageInvalidLastNameInputFormatError, "The last name cannot consist of special symbols only.", "The invalid address last name input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Last Name Format")
            throw new Error("The invalid address last name input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Last Name Format");
    }

    //invalid edit user address test method - invalid edited phone format (special symbols only)
    async invalidEditUserAddressInvalidPhoneFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input invalid edited user phone format into phone input field (special symbols only)
        await addressDetailsPageInvalidSingularInput.inputInvalidEditedAddressPhoneFormatIntoEditedAddressPhoneInputField();
        //capture screenshot of the address details page after invalid data input - invalid edited phone input format
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Invalid Edited Phone Format");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageInvalidPhoneInputFormatError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageInvalidPhoneInputFormatError, "The phone format is not correct. Length 8-14, use only 0-9 and the \"-\" SIGN.", "The invalid address phone input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Phone Format")
            throw new Error("The invalid address phone input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Phone Format");
    }

    //invalid edit user address test method - invalid edited address one format (special symbols only)
    async invalidEditUserAddressInvalidAddressOneFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input invalid edited user address one format into address one input field (special symbols only)
        await addressDetailsPageInvalidSingularInput.inputInvalidEditedAddressOneFormatIntoEditedAddressOneInputField();
        //capture screenshot of the address details page after invalid data input - invalid edited address one input format
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Invalid Edited Address One Format");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageInvalidAddressOneInputFormatError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageInvalidAddressOneInputFormatError, "The address 1 cannot consist of special symbols only.", "The invalid address one input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Address One Format")
            throw new Error("The invalid address one input format error doesn't get triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Address One Format");
    }

    //invalid edit user address test method - invalid edited address two format (special symbols only)
    async invalidEditUserAddressInvalidAddressTwoFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const addressDetailsPageInvalidSingularInput = new AddressDetailsPageInvalidSingularInput(this.driver);
        const addressDetailsPageTextElementAssert = new AddressDetailsPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Edit address" button
        await addressListPage.clickSetEditAddressButton(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address details page web element assert
        await addressDetailsPage.isAddressDetailsPageWebElementDisplayed();
        //address details page text element assert
        await addressDetailsPageTextElementAssert.isAddressDetailsPageTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the address details page display before data input
        await captureScreenshot(this.driver, "Address Details Page Display Before Data Input");
        //input invalid edited user address two format into address two input field (special symbols only)
        await addressDetailsPageInvalidSingularInput.inputInvalidEditedAddressTwoFormatIntoEditedAddressTwoInputField();
        //capture screenshot of the address details page after invalid data input - invalid edited address two input format
        await captureScreenshot(this.driver, "Address Details Page Display After Invalid Data Input - Invalid Edited Address Two Format");
        //click "Update Information" button
        await addressDetailsPage.clickUpdateInfoButton();
        //assert the user receives an expected error message, throw an error otherwise
        try{
            const addressDetailsPageInvalidAddressTwoInputFormatError = await addressDetailsPage.getAddressDetailsSingularInputErrorMessage();
            assert.strictEqual(addressDetailsPageInvalidAddressTwoInputFormatError, "The address 2 cannot consist of special symbols only.", "The invalid address two input format error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Address Two Format")
            throw new Error("The invalid address two input format error doesn't get triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Address Test Result - Invalid Edited Address Two Format");
    }

    //user address removal test

    //remove user address test method
    async removeUserAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        const addressListPageTextElementAssert = new AddressListPageTextElementAssert(this.driver);
        const addressListPageDataLogger = new AddressListPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //click "Address List" link
        await accountDashboardPage.clickAccountDashboardPageAsideLink(2);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //address list page web element assert
        await addressListPage.isAddressListPageWebElementDisplayed();
        //address list page text element assert
        await addressListPageTextElementAssert.isAddressListPageTextElementAsExpected();
        //log address list page data
        await addressListPageDataLogger.logAddressListPageData();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "Delete address" button
        await addressListPage.clickSetDeleteAddressButton(0);
        //wait for alert to appear
        await basePage.waitForElementLoad(900);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets an expected success message, log the issue otherwise
        try {
            const addressRemovalSuccessMsg = await addressListPage.getEmptyAddressListMsg();
            assert.strictEqual(addressRemovalSuccessMsg, "No items yet", "The valid user address removal message doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "User Address Removal Test Result")
            throw new Error ("The user address removal feature doesn't work, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "User Address Removal Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user logout test

    //valid user logout test method
    async validUserLogoutTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //capture screenshot of the account page dashboard display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "My account" header navbar dropdown menu
        await generalPage.clickSetNavBarLink(4);
        //select "Logout" option
        await generalPage.clickSetAccountDropdownMenuOption(1);
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //login page web element assert (to verify the user returns to login page)
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Logout Test Result");
    }

    //valid user login tests

    //valid user login test method
    async validUserLoginTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoLoginEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after valid data input
        await captureScreenshot(this.driver, "Login Page Display After Valid Data Input");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login Test Result");
    }

    //valid user login (with edited password) test method
    async validUserLoginEditedPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoLoginEmailInputField();
        //input valid edited login password into login password input field
        await loginPage.inputValidEditedLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after valid data input (with edited login password)
        await captureScreenshot(this.driver, "Login Page Display After Valid Data Input (with edited login password)");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
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
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login with Edited Password Test Result");
    }

    //invalid login tests

    //no singular input

    //invalid user login test method - no user login email
    async invalidUserNoLoginEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //don't input login email into login email input field
        await loginPageInvalidSingularInput.inputNoLoginEmailIntoLoginEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after invalid data input - no login email
        await captureScreenshot(this.driver, "Login Page Display After Invalid Data Input - No Login Email");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //assert the user receives an expected error message
        const noLoginEmailErrorMsg = await loginPage.getLoginPageSingularInputErrorMessage();
        assert.strictEqual(noLoginEmailErrorMsg, "These credentials do not match our records.", "The missing login email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email");
    }

    //invalid user login test method - no user login password
    async invalidUserNoLoginPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoLoginEmailInputField();
        //don't input login password into login password input field
        await loginPageInvalidSingularInput.inputNoLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after invalid data input - no login password
        await captureScreenshot(this.driver, "Login Page Display After Invalid Data Input - No Login Password");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //assert the user receives an expected error message
        const noLoginPasswordErrorMsg = await loginPage.getLoginPageSingularInputErrorMessage();
        assert.strictEqual(noLoginPasswordErrorMsg, "These credentials do not match our records.", "The missing login password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user login test method - invalid user login email
    async invalidUserInvalidLoginEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input invalid login email into login email input field
        await loginPageInvalidSingularInput.inputInvalidLoginEmailIntoLoginEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after invalid data input - invalid login email
        await captureScreenshot(this.driver, "Login Page Display After Invalid Data Input - Invalid Login Email");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //assert the user receives an expected error message
        const invalidLoginEmailErrorMsg = await loginPage.getLoginPageSingularInputErrorMessage();
        assert.strictEqual(invalidLoginEmailErrorMsg, "These credentials do not match our records.", "The invalid login email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
    }

    //invalid user login test method - invalid user login email format (missing '@')
    async invalidUserInvalidLoginEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input invalid login email format into login email input field (missing '@')
        await loginPageInvalidSingularInput.inputInvalidLoginEmailFormatIntoLoginEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after invalid data input - invalid login email format
        await captureScreenshot(this.driver, "Login Page Display After Valid Data Input - Invalid Login Email Format");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //assert the user receives an expected error message
        const invalidLoginEmailFormatErrorMsg = await loginPage.getLoginPageSingularInputErrorMessage();
        assert.strictEqual(invalidLoginEmailFormatErrorMsg, "These credentials do not match our records.", "The invalid login email input format error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email Format");
    }

    //invalid user login test method - invalid user login password
    async invalidUserInvalidLoginPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const loginPage = new LoginPage(this.driver);
        //const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert (Selenium can't find these elements with VALID selectors)
        //await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of the login page display before data input
        await captureScreenshot(this.driver, "Login Page Display Before Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoLoginEmailInputField();
        //input invalid login password into login password input field
        await loginPageInvalidSingularInput.inputInvalidLoginPasswordIntoLoginPasswordInputField();
        //capture screenshot of the login page display after invalid data input - no login password
        await captureScreenshot(this.driver, "Login Page Display After Invalid Data Input - Invalid Login Password");
        //click "Login" button
        await loginPage.clickLoginButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //assert the user receives an expected error message
        const invalidLoginPasswordErrorMsg = await loginPage.getLoginPageSingularInputErrorMessage();
        assert.strictEqual(invalidLoginPasswordErrorMsg, "These credentials do not match our records.", "The invalid login password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single homepage new product addition to cart tests

    //add single homepage new product ("Product bundle 1 - English") to cart test (as a guest)
    async addSingleHomePageNewProductToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //click set new product ("Product bundle 1 - English") name link
        await homePage.clickSetNewProductNameLink(0);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //assert the user is on the correct product page
        const expectedSingleProductPageProductName = "Product bundle 1 - English";
        const actualSingleProductPageProductName = await singleProductPage.getSingleProductPageTitle();
        assert.strictEqual(actualSingleProductPageProductName, expectedSingleProductPageProductName, "The expected single product page product name doesn't match expectations.");
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Product bundle 1 - English) Page Display");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Product bundle 1 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName(); //[0] is being added since it returns a list of elements
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected home product name doesn't match expectations. Expected: 'Product bundle 1 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Single Product (Product bundle 1 - English) Addition To Cart Test Result (guest)");
    }

    //add single homepage new product ("Product bundle 3 - English") to cart test (as a registered user)
    async addSingleHomePageNewProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //click set new product ("Product bundle 3 - English") name link
        await homePage.clickSetNewProductNameLink(2);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //assert the user is on the correct product page
        const expectedSingleProductPageProductName = "Product bundle 3 - English";
        const actualSingleProductPageProductName = await singleProductPage.getSingleProductPageTitle();
        assert.strictEqual(actualSingleProductPageProductName, expectedSingleProductPageProductName, "The expected single product page product name doesn't match expectations.");
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Product bundle 3 - English) Page Display");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Product bundle 3 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected home product name doesn't match expectations. Expected: 'Product bundle 3 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Single Product (Product bundle 3 - English) Addition To Cart Test Result (registered user)");
    }

    //multiple homepage new products addition to cart tests

    //add multiple homepage new products ("Product bundle 1 - English") to cart test (as a guest)
    async addMultipleHomePageNewProductToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //click set new product ("Product bundle 1 - English") name link
        await homePage.clickSetNewProductNameLink(0);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //assert the user is on the correct product page
        const expectedSingleProductPageProductName = "Product bundle 1 - English";
        const actualSingleProductPageProductName = await singleProductPage.getSingleProductPageTitle();
        assert.strictEqual(actualSingleProductPageProductName, expectedSingleProductPageProductName, "The expected single product page product name doesn't match expectations.");
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Product bundle 1 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(4);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Product bundle 1 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct multiple products has been added
        const expectedSingleHomeProduct = "Product bundle 1 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected home multiple new product names don't match expectations. Expected: 'Product bundle 1 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple New Products (Product bundle 1 - English) Addition To Cart Test Result (guest)");
    }

    //add multiple homepage new products ("Sample product 1 - English") to cart test (as a registered user)
    async addMultipleHomePageNewProductsToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //click set new product ("Sample product 1 - English") name link
        await homePage.clickSetNewProductNameLink(6);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //assert the user is on the correct product page
        const expectedSingleProductPageProductName = "Sample product 1 - English";
        const actualSingleProductPageProductName = await singleProductPage.getSingleProductPageTitle();
        assert.strictEqual(actualSingleProductPageProductName, expectedSingleProductPageProductName, "The expected single product page product name doesn't match expectations.");
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Sample product 1 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(6);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Sample product 1 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct products have been added
        const expectedSingleHomeProduct = "Sample product 1 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected home page multiple new product names don't match expectations. Expected: 'Sample product 1 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple New Products (Sample product 1 - English) Addition To Cart Test Result (registered user)");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single searched product to cart tests

    //add single searched product ("Sample product 35 - English") to cart test method (as a guest)
    async addSingleSearchedProductToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
        //log home page new product data
        await homePageDataLogger.logHomePageNewProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header search button
        await generalPage.clickHeaderSearchButton();
        //input search query ("Sample product 35 - English") into search input field
        await generalPage.inputProductThirtyFiveQueryIntoSearchInputField();
        //click "Search" button (it's present in the DOM)
        await generalPage.clickInvisibleSearchButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        await singleCategoryDashboardPage.isSearchedProductPageWebElementDisplayed();
        //assert the correct searched product has been displayed
        const expectedSearchedProductPageProductName = "SAMPLE PRODUCT 35 - ENGLISH";
        const actualSearchedProductPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        assert.strictEqual(actualSearchedProductPageProductName[0], expectedSearchedProductPageProductName, "The expected searched product page product name doesn't match expectations.");
        //log searched product page displayed data (the logger shares elements with single category dashboard page)
        await singleCategoryDashPageDataLogger.logSearchedProductPageProductData();
        //click searched product ("Sample product 35 - English") "Add to cart" button
        await singleCategoryDashboardPage.selectSetAddToCartBtn(0);
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartBtn();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 35 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected searched product name doesn't match expectations. Expected: 'Sample product 35 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Searched Product (Sample product 35 - English) To Cart Test Result (guest)");
    }

    //add single searched product ("Sample product 10 - English") to cart test method (as a registered user)
    async addSingleSearchedProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click header search button
        await generalPage.clickHeaderSearchButton();
        //input search query ("Sample product 10 - English") into search input field
        await generalPage.inputProductTenSearchQueryIntoSearchInputField();
        //click "Search" button (it's present in the DOM)
        await generalPage.clickInvisibleSearchButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        await singleCategoryDashboardPage.isSearchedProductPageWebElementDisplayed();
        //assert the correct searched product has been displayed
        const expectedSearchedProductPageProductName = "SAMPLE PRODUCT 10 - ENGLISH";
        const actualSearchedProductPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        assert.strictEqual(actualSearchedProductPageProductName[0], expectedSearchedProductPageProductName, "The expected searched product page product name doesn't match expectations.");
        //log searched product page displayed data (the logger shares elements with single category dashboard page)
        await singleCategoryDashPageDataLogger.logSearchedProductPageProductData();
        //click searched product ("Sample product 10 - English") "Add to cart" button
        await singleCategoryDashboardPage.selectSetAddToCartBtn(0);
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartBtn();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 10 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected searched product name doesn't match expectations. Expected: 'Sample product 10 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Searched Product (Sample product 10 - English) To Cart Test Result (registered user)");
    }

    //add multiple searched products to cart tests

    //add multiple searched products ("Sample product 14 - English") to cart test method (as a guest)
    async addMultipleSearchedProductsToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
        //log home page new product data
        await homePageDataLogger.logHomePageNewProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header search button
        await generalPage.clickHeaderSearchButton();
        //input search query ("Sample product 14 - English") into search input field
        await generalPage.inputProductFourteenSearchQueryIntoSearchInputField();
        //click "Search" button (it's present in the DOM)
        await generalPage.clickInvisibleSearchButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        await singleCategoryDashboardPage.isSearchedProductPageWebElementDisplayed();
        //assert the correct searched product has been displayed
        const expectedSearchedProductPageProductName = "SAMPLE PRODUCT 14 - ENGLISH";
        const actualSearchedProductPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        assert.strictEqual(actualSearchedProductPageProductName[0], expectedSearchedProductPageProductName, "The expected searched product page product name doesn't match expectations.");
        //log searched product page displayed data (the logger shares elements with single category dashboard page)
        await singleCategoryDashPageDataLogger.logSearchedProductPageProductData();
        //click searched product ("Sample product 14 - English") name link
        await singleCategoryDashboardPage.clickSetProductNameLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Sample product 14 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(4);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Sample product 14 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 14 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected multiple searched product names doesn't match expectations. Expected: 'Sample product 14 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Searched Product (Sample product 14 - English) To Cart Test Result (guest)");
    }

    //add multiple searched products ("Sample product 10 - English") to cart test method (as a registered user)
    async addMultipleSearchedProductsToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click header search button
        await generalPage.clickHeaderSearchButton();
        //input search query ("Sample product 10 - English") into search input field
        await generalPage.inputProductTenSearchQueryIntoSearchInputField();
        //click "Search" button (it's present in the DOM)
        await generalPage.clickInvisibleSearchButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //searched product page web element assert (same list elements as with single category dashboard page (product list))
        await singleCategoryDashboardPage.isSearchedProductPageWebElementDisplayed();
        //assert the correct searched product has been displayed
        const expectedSearchedProductPageProductName = "SAMPLE PRODUCT 10 - ENGLISH";
        const actualSearchedProductPageProductName = await singleCategoryDashboardPage.getSingleCategoryDashPageProductName();
        assert.strictEqual(actualSearchedProductPageProductName[0], expectedSearchedProductPageProductName, "The expected searched product page product name doesn't match expectations.");
        //log searched product page displayed data (the logger shares elements with single category dashboard page)
        await singleCategoryDashPageDataLogger.logSearchedProductPageProductData();
        //click set product ("Sample product 10 - English") name link
        await singleCategoryDashboardPage.clickSetProductNameLink(0);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Sample product 10 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(8);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Sample product 10 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 10 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected multiple searched product names don't match expectations. Expected: 'Sample product 10 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Searched Products (Sample product 10 - English) To Cart Test Result (registered user)");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single product to wishlist tests

    //add single product ("Product bundle 1 - English") to wishlist test method (as a guest)
    async addSingleHomePageNewProductToWishlistGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const wishlistPageTextElementAssert = new WishlistPageTextElementAssert(this.driver);
        const wishlistPageDataLogger = new WishlistPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 1 - English") card
        await homePage.hoverOverSetNewProductCard(0)
        //click set new product ("Product bundle 1 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(0);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Wishlist" option
        await generalPage.clickSetAccountDropdownMenuOption(1);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await wishlistPageTextElementAssert.isWishlistPageTextElementAsExpected();
        //log wishlist page product data
        await wishlistPageDataLogger.logWishlistPageProductData();
        //assert the correct product is added to wishlist
        const expectedWishlistProduct = "Product bundle 1 - English";
        const actualWishlistProduct = (await wishlistPage.getWishlistPageProductName())[0];//convert output from array to string
        assert.deepStrictEqual(expectedWishlistProduct, actualWishlistProduct, "The wishlist page added product name doesn't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Single Product (Product bundle 1 - English) Addition To Wishlist Test Result (guest)");
    }

    //add single product ("Product bundle 3 - English") to wishlist test method (as a registered user)
    async addSingleHomePageNewProductToWishlistRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const wishlistPageTextElementAssert = new WishlistPageTextElementAssert(this.driver);
        const wishlistPageDataLogger = new WishlistPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 3 - English") card
        await homePage.hoverOverSetNewProductCard(2)
        //click set new product ("Product bundle 3 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(2);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Wishlist" option
        await generalPage.clickSetAccountDropdownMenuOption(2);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await wishlistPageTextElementAssert.isWishlistPageTextElementAsExpected();
        //log wishlist page product data
        await wishlistPageDataLogger.logWishlistPageProductData();
        //assert the correct product is added to wishlist
        const expectedWishlistProduct = "Product bundle 3 - English";
        const actualWishlistProduct = (await wishlistPage.getWishlistPageProductName())[0];//convert output from array to string
        assert.deepStrictEqual(expectedWishlistProduct, actualWishlistProduct, "The wishlist page added product name doesn't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Single Product (Product bundle 3 - English) Addition To Wishlist Test Result (registered user)");
    }

    //add multiple new products to wishlist tests

    //add multiple products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") to wishlist test method (as a guest)
    async addMultipleHomePageNewProductsToWishlistGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const wishlistPageTextElementAssert = new WishlistPageTextElementAssert(this.driver);
        const wishlistPageDataLogger = new WishlistPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 1 - English") card
        await homePage.hoverOverSetNewProductCard(0)
        //click set new product ("Product bundle 1 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(0);
        //hover over set new product ("Sample product 5 - English") card
        await homePage.hoverOverSetNewProductCard(10)
        //click set new product ("Sample product 5 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(10);
        //hover over set new product ("Sample product 6 - English") card
        await homePage.hoverOverSetNewProductCard(11)
        //click set new product ("Sample product 6 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(11);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Wishlist" option
        await generalPage.clickSetAccountDropdownMenuOption(1);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await wishlistPageTextElementAssert.isWishlistPageTextElementAsExpected();
        //log wishlist page product data
        await wishlistPageDataLogger.logWishlistPageProductData();
        //assert the correct product is added to wishlist
        const expectedWishlistProduct = ["Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English"];
        const actualWishlistProduct = await wishlistPage.getWishlistPageProductName();
        assert.deepStrictEqual(expectedWishlistProduct, actualWishlistProduct, "The wishlist page added product names don't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 1 - English, Sample product 5 - English, Sample product 6 - English) Addition To Wishlist Test Result (guest)");
    }

    //add single product ("Product bundle 3 - English", "Sample product 1 - English", "Sample product 2 - English") to wishlist test method (as a registered user)
    async addMultipleHomePageNewProductsToWishlistRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const wishlistPageTextElementAssert = new WishlistPageTextElementAssert(this.driver);
        const wishlistPageDataLogger = new WishlistPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 3 - English") card
        await homePage.hoverOverSetNewProductCard(2)
        //click set new product ("Product bundle 3 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(2);
        //hover over set new product ("Sample product 1 - English") card
        await homePage.hoverOverSetNewProductCard(6)
        //click set new product ("Sample product 1 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(6);
        //hover over set new product ("Sample product 2 - English") card
        await homePage.hoverOverSetNewProductCard(7)
        //click set new product ("Sample product 2 - English") "Add to wishlist" button
        await homePage.clickSetNewProductAddToWishlistBtn(7);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Wishlist" option
        await generalPage.clickSetAccountDropdownMenuOption(2);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await wishlistPageTextElementAssert.isWishlistPageTextElementAsExpected();
        //log wishlist page product data
        await wishlistPageDataLogger.logWishlistPageProductData();
        //assert the correct product is added to wishlist
        const expectedWishlistProduct = ["Product bundle 3 - English", "Sample product 1 - English", "Sample product 2 - English"];
        const actualWishlistProduct = await wishlistPage.getWishlistPageProductName();
        assert.deepStrictEqual(expectedWishlistProduct, actualWishlistProduct, "The wishlist page added product names don't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 3 - English, Sample product 1 - English, Sample product 2 - English) Addition To Wishlist Test Result (registered user)");
    }

    //remove multiple products from wishlist test (since both registered user and guest will have the same output, only guest branch is tested to avoid redundancy)

    //remove multiple products from wishlist test method (as a guest)
    async removeMultipleProductsFromWishlistGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const wishlistPage = new WishlistPage(this.driver);
        const wishlistPageTextElementAssert = new WishlistPageTextElementAssert(this.driver);
        const wishlistPageDataLogger = new WishlistPageDataLogger(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //wishlist page web element assert
        await wishlistPage.isWishlistPageWebElementDisplayed();
        //wishlist page text element assert
        await wishlistPageTextElementAssert.isWishlistPageTextElementAsExpected();
        //log wishlist page product data
        await wishlistPageDataLogger.logWishlistPageProductData();
        //capture screenshot of the wishlist page display (with multiple products)
        await captureScreenshot(this.driver, "Wishlist Page Display With Multiple Products (Product bundle 1 - English, Sample product 5 - English, Sample product 6 - English)");
        //assert the correct products are present in wishlist
        const expectedWishlistProducts = ["Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English"];
        const actualWishlistProducts = await wishlistPage.getWishlistPageProductName();
        assert.deepStrictEqual(expectedWishlistProducts, actualWishlistProducts, "The wishlist page added product names don't match expectations");
        //wishlist page html address (since the refresh doesn't seem to work)
        const wishlistURL = "https://demo.s-cart.org/wishlist.html";
        //click set product ("Product bundle 1 - English") remove from wishlist button
        await wishlistPage.clickSetRemoveProductFromWishlistBtn(0);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(wishlistURL);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the correct products are present in wishlist, throw the error otherwise
        try {
            const expectedWishlistProductsAfterFirstRemoval = ["Sample product 5 - English", "Sample product 6 - English"];
            const actualWishlistProductsAfterFirstRemoval = await wishlistPage.getWishlistPageProductName();
            assert.deepStrictEqual(expectedWishlistProductsAfterFirstRemoval, actualWishlistProductsAfterFirstRemoval, "The wishlist page added product names don't match expectations (after first removal)");
        } catch {
            await captureScreenshot(this.driver, "Wishlist Page Display (Expected List: Sample product 5 - English, Sample product 6 - English) Product Removal Failure");
            throw new Error("The product removal from wishlist process has failed, test has failed.");
        }
        //capture screenshot of the wishlist page display (after first product removal)
        await captureScreenshot(this.driver, "Wishlist Page Display With Multiple Products (Sample product 5 - English, Sample product 6 - English)");
        //click set product ("Sample product 6 - English") remove from wishlist button
        await wishlistPage.clickSetRemoveProductFromWishlistBtn(1);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(wishlistURL);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the correct products are present in wishlist, throw the error otherwise
        try {
            const expectedWishlistProductsAfterSecondRemoval = ["Sample product 5 - English"];
            const actualWishlistProductsAfterSecondRemoval = await wishlistPage.getWishlistPageProductName();
            assert.deepStrictEqual(expectedWishlistProductsAfterSecondRemoval, actualWishlistProductsAfterSecondRemoval, "The wishlist page added product names don't match expectations (after second removal)");
        } catch {
            await captureScreenshot(this.driver, "Wishlist Page Display (Expected List: Sample product 5 - English) Product Removal Failure");
            throw new Error("The product removal from wishlist process has failed, test has failed.");
        }
        //capture screenshot of the wishlist page display (after second product removal)
        await captureScreenshot(this.driver, "Wishlist Page Display With Multiple Products (Sample product 5 - English)");
        //click set product ("Sample product 5 - English") remove from wishlist button
        await wishlistPage.clickSetRemoveProductFromWishlistBtn(0);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(wishlistURL);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets an expected warning message
        const actualEmptyWishlistWarning = await wishlistPage.getWishlistPageEmptyWishlistWarningMessage();
        assert.strictEqual(actualEmptyWishlistWarning, "No items yet", "The empty wishlist warning message doesn't match expectations.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 1 - English, Sample product 5 - English, Sample product 6 - English) Removal From Wishlist Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single product to compare list tests

    //add single product ("Product bundle 1 - English") to compare list test method (as a guest)
    async addSingleHomePageNewProductToCompareListGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const compareListPage = new CompareListPage(this.driver);
        const compareListPageDataLogger = new CompareListPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 1 - English") card
        await homePage.hoverOverSetNewProductCard(0)
        //click set new product ("Product bundle 1 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(0);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Compare" option
        await generalPage.clickSetAccountDropdownMenuOption(2);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //compare list page web element assert
        await compareListPage.isCompareListPageWebElementDisplayed();
        //log compare list page product data
        await compareListPageDataLogger.logCompareListPageProductData();
        //assert the correct product is added to compare list
        const expectedCompareListProductName = "Product bundle 1 - English(SAMPLE-BUNDLE-1)";
        const productData = await compareListPage.getCompareListPageProductData();
        const actualCompareListProductName = productData[0][0]; //first product, first category line (since the product name is included in the div block and it can't be extracted otherwise)
        assert.deepStrictEqual(expectedCompareListProductName, actualCompareListProductName, "The compare list page added product name doesn't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single New Product (Product bundle 1 - English) To Compare List Test Result (guest)");
    }

    //add single product ("Product bundle 3 - English") to compare list test method (as a registered user)
    async addSingleHomePageNewProductToCompareListRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const compareListPage = new CompareListPage(this.driver);
        const compareListPageDataLogger = new CompareListPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 3 - English") card
        await homePage.hoverOverSetNewProductCard(2)
        //click set new product ("Product bundle 1 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(2);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Compare" option
        await generalPage.clickSetAccountDropdownMenuOption(3);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //compare list page web element assert
        await compareListPage.isCompareListPageWebElementDisplayed();
        //log compare list page product data
        await compareListPageDataLogger.logCompareListPageProductData();
        //assert the correct product is added to compare list
        const expectedCompareListProductName = "Product bundle 3 - English(SAMPLE-BUNDLE-3)";
        const productData = await compareListPage.getCompareListPageProductData();
        const actualCompareListProductName = productData[0][0]; //first product, first category line (since the product name is included in the div block and it can't be extracted otherwise)
        assert.deepStrictEqual(expectedCompareListProductName, actualCompareListProductName, "The compare list page added product name doesn't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Single Product (Product bundle 3 - English) Addition To Compare List Test Result (registered user)");
    }

    //add multiple new products to compare list tests

    //add multiple products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") to compare list test method (as a guest)
    async addMultipleHomePageNewProductsToCompareListGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const compareListPage = new CompareListPage(this.driver);
        const compareListPageDataLogger = new CompareListPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000)
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 1 - English") card
        await homePage.hoverOverSetNewProductCard(0)
        //click set new product ("Product bundle 1 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(0);
        //hover over set new product ("Sample product 5 - English") card
        await homePage.hoverOverSetNewProductCard(10)
        //click set new product ("Sample product 5 - English") "Add to compare ist" button
        await homePage.clickSetNewProductAddToCompareListBtn(10);
        //hover over set new product ("Sample product 6 - English") card
        await homePage.hoverOverSetNewProductCard(11)
        //click set new product ("Sample product 6 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(11);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Compare" option
        await generalPage.clickSetAccountDropdownMenuOption(2);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //compare list page web element assert
        await compareListPage.isCompareListPageWebElementDisplayed();
        //log compare list page product data
        await compareListPageDataLogger.logCompareListPageProductData();
        //assert the correct products are added to compare list
        const expectedCompareListProductNames = ["Product bundle 1 - English(SAMPLE-BUNDLE-1)", "Sample product 5 - English(SAMPLE-1-2)", "Sample product 6 - English(SAMPLE-1-3)"];
        const productData = await compareListPage.getCompareListPageProductData();
        const actualCompareListProductNames = productData.map(product => product[0]); //map to get just the first line (product name) from each product (since the product name is included in the div block and it can't be extracted otherwise)
        assert.deepStrictEqual(expectedCompareListProductNames, actualCompareListProductNames, "The compare list page added product names don't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 1 - English, Sample product 5 - English, Sample product 6 - English) Addition To Compare List Test Result (guest)");
    }

    //add multiple products ("Product bundle 3 - English", "Sample product 1 - English", "Sample product 2 - English") to compare list test method (as a registered user)
    async addMultipleHomePageNewProductsToCompareListRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const compareListPage = new CompareListPage(this.driver);
        const compareListPageDataLogger = new CompareListPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //click home page logo
        await generalPage.clickHeaderHomeLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
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
        //hover over set new product ("Product bundle 3 - English") card
        await homePage.hoverOverSetNewProductCard(2)
        //click set new product ("Product bundle 3 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(2);
        //hover over set new product ("Sample product 1 - English") card
        await homePage.hoverOverSetNewProductCard(6)
        //click set new product ("Sample product 1 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(6);
        //hover over set new product ("Sample product 2 - English") card
        await homePage.hoverOverSetNewProductCard(7)
        //click set new product ("Sample product 2 - English") "Add to compare list" button
        await homePage.clickSetNewProductAddToCompareListBtn(7);
        //click header "Account" navbar link
        await generalPage.clickSetNavBarLink(4);
        //click "Compare" option
        await generalPage.clickSetAccountDropdownMenuOption(3);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //compare list page web element assert
        await compareListPage.isCompareListPageWebElementDisplayed();
        //log compare list page product data
        await compareListPageDataLogger.logCompareListPageProductData();
        //assert the correct products are added to compare list
        const expectedCompareListProductNames = ["Product bundle 3 - English(SAMPLE-BUNDLE-3)", "Sample product 1 - English(SAMPLE-0-1)", "Sample product 2 - English(SAMPLE-0-2)"];
        const productData = await compareListPage.getCompareListPageProductData();
        const actualCompareListProductNames = productData.map(product => product[0]); //map to get just the first line (product name) from each product (since the product name is included in the div block and it can't be extracted otherwise)
        assert.deepStrictEqual(expectedCompareListProductNames, actualCompareListProductNames, "The compare list page added product names don't match expectations");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 3 - English, Sample product 1 - English, Sample product 2 - English) Addition To Compare List Test Result (registered user)");
    }

    //remove multiple products from compare list test (since both registered user and guest will have the same output, only guest branch is tested to avoid redundancy)

    //remove multiple products from compare list test method (as a guest)
    async removeMultipleProductsFromCompareListGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const compareListPage = new CompareListPage(this.driver);
        const compareListPageDataLogger = new CompareListPageDataLogger(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //compare list page web element assert
        await compareListPage.isCompareListPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //log compare list page product data
        await compareListPageDataLogger.logCompareListPageProductData();
        //assert the correct products are added to compare list
        const expectedCompareListProductNames = ["Product bundle 1 - English(SAMPLE-BUNDLE-1)", "Sample product 5 - English(SAMPLE-1-2)", "Sample product 6 - English(SAMPLE-1-3)"];
        const productData = await compareListPage.getCompareListPageProductData();
        const actualCompareListProductNames = productData.map(product => product[0]); //map to get just the first line (product name) from each product (since the product name is included in the div block and it can't be extracted otherwise)
        assert.deepStrictEqual(expectedCompareListProductNames, actualCompareListProductNames, "The compare list page added product names don't match expectations");
        //compare list page html address (since the refresh doesn't seem to work)
        const compareListURL = "https://demo.s-cart.org/compare.html";
        //click set product ("Product bundle 1 - English") remove from compare list button
        await compareListPage.clickSetRemoveProductFromCompareListBtn(0);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(compareListURL);
        //wait for elements to load
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //capture screenshot of the compare list page display (after first product removal)
        await captureScreenshot(this.driver, "Compare List Page Display With Multiple Products (Sample product 5 - English, Sample product 6 - English)");
        //click set product ("Sample product 2 - English") remove from compare list button
        await compareListPage.clickSetRemoveProductFromCompareListBtn(1);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(compareListURL);
        //wait for elements to load
        await basePage.waitForElementLoad(4000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //capture screenshot of the compare list page display (after second product removal)
        await captureScreenshot(this.driver, "Compare List Page Display With Multiple Products (Sample product 5 - English)");
        //click set product ("Sample product 5 - English") remove from compare list button
        await compareListPage.clickSetRemoveProductFromCompareListBtn(0);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //navigate back to wishlist page
        await this.driver.get(compareListURL);
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(4500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets an expected warning message
        const actualEmptyCompareListWarning = await compareListPage.getCompareListPageEmptyWishlistWarningMessage();
        assert.strictEqual(actualEmptyCompareListWarning, "No items yet", "The empty compare list warning message doesn't match expectations.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Multiple Products (Product bundle 1 - English, Sample product 5 - English, Sample product 6 - English) Removal From Compare List Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single category dashboard page single product to cart tests

    //add single category dashboard page single product ("Product bundle 2 - English") to cart test method (as a guest)
    async addSingleCategorySingleProductToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        //const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page new product data
        await homePageDataLogger.logHomePageNewProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "All products" header navbar link
        await generalPage.clickSetNavBarLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single category dashboard page web element
        await singleCategoryDashboardPage.isSingleCategoryDashboardPageWebElementDisplayed();
        //log single category dashboard page product data
        await singleCategoryDashPageDataLogger.logSingleCategoryDashboardPageProductData();
        //capture screenshot of the single category dashboard page display
        await captureScreenshot(this.driver, "Single Category Dashboard Page Display");
        //click set product ("Product bundle 2 - English") "Add to cart" button
        await singleCategoryDashboardPage.selectSetAddToCartBtn(1);
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartBtn();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets on shopping cart page
        const expectedURL = "https://demo.s-cart.org/cart.html";
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Product bundle 2 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected single category product name doesn't match expectations. Expected: 'Product bundle 2 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Category Dashboard Single Product (Product bundle 2 - English) To Cart Test Result (guest)");
    }

    //add single category dashboard page single product ("Sample product 4 - English") to cart test method (as a guest)
    async addSingleCategorySingleProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "All products" header navbar link
        await generalPage.clickSetNavBarLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //single category dashboard page web element
        await singleCategoryDashboardPage.isSingleCategoryDashboardPageWebElementDisplayed();
        //log single category dashboard page product data
        await singleCategoryDashPageDataLogger.logSingleCategoryDashboardPageProductData();
        //capture screenshot of the single category dashboard page display
        await captureScreenshot(this.driver, "Single Category Dashboard Page Display");
        //click set product ("Sample product 4 - English") "Add to cart" button
        await singleCategoryDashboardPage.selectSetAddToCartBtn(6);
        //click header shopping cart button
        await generalPage.clickHeaderShoppingCartBtn();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets on shopping cart page
        const expectedURL = "https://demo.s-cart.org/cart.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 4 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected single category product name doesn't match expectations. Expected: 'Sample product 4 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Category Dashboard Single Product (Sample product 4 - English) To Cart Test Result (registered user)");
    }

    //add single category dashboard page multiple products to cart tests

    //add single category dashboard page multiple products ("Product bundle 2 - English") to cart test method (as a guest)
    async addSingleCategoryMultipleProductsToCartGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //home page web element assert (Selenium can't find these elements with VALID selectors)
        //await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //scroll down to new products section
        await homePage.scrollDownToNewProductsSection();
        //log home page new product data
        await homePageDataLogger.logHomePageNewProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "All products" header navbar link
        await generalPage.clickSetNavBarLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single category dashboard page web element
        await singleCategoryDashboardPage.isSingleCategoryDashboardPageWebElementDisplayed();
        //log single category dashboard page product data
        await singleCategoryDashPageDataLogger.logSingleCategoryDashboardPageProductData();
        //capture screenshot of the single category dashboard page display
        await captureScreenshot(this.driver, "Single Category Dashboard Page Display");
        //click set product name link
        await singleCategoryDashboardPage.clickSetProductNameLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Product bundle 2 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(4);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Product bundle 2 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets on shopping cart page
        const expectedURL = "https://demo.s-cart.org/cart.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to cart process has failed.");
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Product bundle 2 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected single category multiple product names don't match expectations. Expected: 'Product bundle 2 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Category Dashboard Single Product (Product bundle 2 - English) To Cart Test Result (guest)");
    }

    //add single category dashboard page multiple products ("Sample product 3 - English") to cart test method (as a guest)
    async addSingleCategoryMultipleProductsToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const singleCategoryDashboardPage = new SingleCategoryDashboardPage(this.driver);
        const singleCategoryDashPageDataLogger = new SingleCategoryDashPageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers(this.driver);
        const addressDetailsPage = new AddressDetailsPage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //account dashboard page (aside elements) web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page (aside elements) text element assert
        await accountDashPageTextElementAssert.isAccountDashPageTextElementAsExpected();
        //click "All products" header navbar link
        await generalPage.clickSetNavBarLink(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //single category dashboard page web element
        await singleCategoryDashboardPage.isSingleCategoryDashboardPageWebElementDisplayed();
        //log single category dashboard page product data
        await singleCategoryDashPageDataLogger.logSingleCategoryDashboardPageProductData();
        //capture screenshot of the single category dashboard page display
        await captureScreenshot(this.driver, "Single Category Dashboard Page Display");
        //click set product name link
        await singleCategoryDashboardPage.clickSetProductNameLink(8);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Sample product 3 - English) Page Display");
        //input set product quantity into quantity input field
        await singleProductPage.inputSetProductQuantityIntoQuantityInputField(8);
        //capture screenshot of the single product page after quantity alteration display
        await captureScreenshot(this.driver, "Single Product (Sample product 3 - English) Page Display (Multiple Product Quantity)");
        //click "Add to cart" button
        await singleProductPage.clickAddToCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets on shopping cart page
        const expectedURL = "https://demo.s-cart.org/cart.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to cart process has failed.");
        //assert the user gets an expected success message
        const productAdditionToCartSuccessMsg = await addressDetailsPage.getAddressDetailsUpdateSuccessMessage(); //same element is being used as in address details page
        assert.strictEqual(productAdditionToCartSuccessMsg, "×\nAdd to cart success", "The product addition to cart message doesn't match expectations or the product addition to cart process has failed.");
        //assert the correct product has been added
        const expectedSingleHomeProduct = "Sample product 3 - English";
        const actualSingleHomeProduct = await shoppingCartPage.getShoppingCartPageProductName();
        assert.strictEqual(actualSingleHomeProduct[0], expectedSingleHomeProduct, `The expected single category multiple product names don't match expectations. Expected: 'Sample product 3 - English', Actual: ${actualSingleHomeProduct}`);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Category Dashboard Multiple Products (Sample product 3 - English) To Cart Test Result (registered user)");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //product addition to check out tests

    //add product(s) addition to check out test method (as a guest)
    async addProductToCheckoutGuestTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display
        await captureScreenshot(this.driver, "Shopping Cart Page Display");
        //click "Checkout" button
        await shoppingCartPage.clickCheckoutButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets on checkout page
        const expectedURL = "https://demo.s-cart.org/checkout.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to checkout process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Product(s) To Checkout Test Result (guest)");
    }

    //add product(s) addition to check out test method (as a registered user)
    async addProductToCheckoutRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display
        await captureScreenshot(this.driver, "Shopping Cart Page Display");
        //click "Checkout" button
        await shoppingCartPage.clickCheckoutButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //assert the user gets on checkout page
        const expectedURL = "https://demo.s-cart.org/checkout.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product addition to checkout process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Product(s) To Checkout Test Result (registered user)");
    }

    //update product quantity in shopping cart test (only guest branch is tested to avoid redundancy)

    //update product quantity in shopping cart test method
    async updateProductQuantityShopCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display before set product quantity input
        await captureScreenshot(this.driver, "Shopping Cart Page Display Before Set Product Quantity Input");
        //input set product quantity into set product quantity input field
        await shoppingCartPage.inputSetProductQtyIntoSetProductQtyInputField(0, 5);
        //refresh the page
        await this.driver.navigate().refresh();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Update Product Quantity In Shopping Cart Test Result");
        //if the product quantity doesn't get updated, throw an error
        const updatedProductQtyArray = await shoppingCartPage.getShoppingCartPageProductQty();
        const updatedProductQty = updatedProductQtyArray[0];
        if(updatedProductQty !== 5){
            throw new Error("The product quantity failed to be updated after page refresh, test has failed");
        }
    }

    //product removal from shopping cart test (only guest branch is tested to avoid redundancy)

    //product removal from shopping cart test method
    async productRemovalFromShopCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        const addressListPage = new AddressListPage(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart page text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page display before product removal
        await captureScreenshot(this.driver, "Shopping Cart Page Display Before Product Removal");
        //click set product removal button
        await shoppingCartPage.clickSetProductRemovalButton(0);
        //wait for alert to appear
        await basePage.waitForElementLoad(900);
        //click "OK" button in pop-up browser alert
        await addressListPage.clickOkPopUpAlertButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets an expected message
        const actualShopCartEmptyMsg = await shoppingCartPage.getShoppingCartEmptyMsg();
        assert.strictEqual(actualShopCartEmptyMsg, "The shopping cart is empty!", "The empty shopping cart message doesn't match expectations or the product removal process has failed");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Product Removal From Shopping Cart Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid product(s) checkout confirmation tests

    //valid product(s) checkout confirmation test method (as a guest)
    async validProductCheckoutConfirmationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Data Input (guest)");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(5500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets on checkout (confirmation section) page
        const expectedURL = "https://demo.s-cart.org/checkout-confirm.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product checkout confirmation process has failed.");
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page shipping address web element
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageShipAddressTableTextElementAsExpected();
        //log shipping address data
        await checkoutPageDataLoggers.logCheckoutPageShipAddressData();
        //capture screenshot of the checkout page shipping address display
        await captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display");
        //click "Confirm" button
        await checkoutPage.clickConfirmButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets the order submitted
        const expectedOrderSuccessURL = "https://demo.s-cart.org/order-success.html"
        const currentOrderSuccessURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentOrderSuccessURL, expectedOrderSuccessURL, "The page URL doesn't match expectations or the order submission confirmation process has failed.");
        //checkout page order success section web element assert
        await checkoutPage.isCheckoutPageOrderSuccessWebElementDisplayed();
        //checkout page order success section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageOrderSuccessTextElementAsExpected();
        //log checkout page order number
        await checkoutPageDataLoggers.logCheckoutPageOrderNumber();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Product(s) Checkout Confirmation Test Result (registered user)");
    }

    //valid product(s) checkout confirmation test method (as a registered user)
    async validProductCheckoutConfirmationRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //log checkout page registered user input data
        await checkoutPageDataLoggers.logCheckoutPageRegUserInputAddressData();
        //capture screenshot of the checkout page display (registered user)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display(registered user)");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(5500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets on checkout (confirmation section) page
        const expectedURL = "https://demo.s-cart.org/checkout-confirm.html"
        const currentURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentURL, expectedURL, "The page URL doesn't match expectations or the product checkout confirmation process has failed.");
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page shipping address web element
        await checkoutPage.isCheckoutPageShipAddressWebElementDisplayed();
        //checkout page shipping address text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageShipAddressTableTextElementAsExpected();
        //log shipping address data
        await checkoutPageDataLoggers.logCheckoutPageShipAddressData();
        //capture screenshot of the checkout page shipping address display
        await captureScreenshot(this.driver, "Checkout Page Shipping Address Section Display");
        //click "Confirm" button
        await checkoutPage.clickConfirmButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert (registered user side)
        await generalPageTextElementAsserts.isGeneralPageHeaderRegUserTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //assert the user gets the order submitted
        const expectedOrderSuccessURL = "https://demo.s-cart.org/order-success.html"
        const currentOrderSuccessURL = await this.driver.getCurrentUrl();
        assert.strictEqual(currentOrderSuccessURL, expectedOrderSuccessURL, "The page URL doesn't match expectations or the order submission confirmation process has failed.");
        //checkout page order success section web element assert
        await checkoutPage.isCheckoutPageOrderSuccessWebElementDisplayed();
        //checkout page order success section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageOrderSuccessTextElementAsExpected();
        //log checkout page order number
        await checkoutPageDataLoggers.logCheckoutPageOrderNumber();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Product(s) Checkout Confirmation Test Result (registered user)");
    }

    //invalid guest checkout confirmation tests (since the register user has the same output, only guest branch is being tested here to avoid redundancy)

    //no singular input

    //invalid guest product(s) checkout confirmation test method - no address first name
    async invalidProductCheckoutConfirmNoAddressFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //don't input guest first name into first name input field
        await checkoutPageInvalidSingularInput.inputNoGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address first name
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address First Name");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressFirstNameInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressFirstNameInputError, "The First name field is required.", "The missing checkout guest address first name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address First Name");
    }

    //invalid guest product(s) checkout confirmation test method - no address last name
    async invalidProductCheckoutConfirmNoAddressLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //don't input guest last name into last name input field
        await checkoutPageInvalidSingularInput.inputNoGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address last name
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address Last Name");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressLastNameInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressLastNameInputError, "The Last name field is required.", "The missing checkout guest address last name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address Last Name");
    }

    //invalid guest product(s) checkout confirmation test method - no address email
    async invalidProductCheckoutConfirmNoAddressEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //don't input guest email into email input field
        await checkoutPageInvalidSingularInput.inputNoGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address email
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address Email");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressEmailInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressEmailInputError, "The Email field is required.", "The missing checkout guest address email input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address Email");
    }

    //invalid guest product(s) checkout confirmation test method - no address phone
    async invalidProductCheckoutConfirmNoAddressPhoneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //don't input guest phone into phone input field
        await checkoutPageInvalidSingularInput.inputNoGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address phone
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address Phone");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressPhoneInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressPhoneInputError, "The Phone field is required.", "The missing checkout guest address phone input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address Phone");
    }

    //invalid guest product(s) checkout confirmation test method - no address country
    async invalidProductCheckoutConfirmNoAddressCountryTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address country
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address Country");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressCountryInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressCountryInputError, "The Country field is required.", "The missing checkout guest address country input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address Country");
    }

    //invalid guest product(s) checkout confirmation test method - no address one
    async invalidProductCheckoutConfirmNoAddressOneTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //don't input guest address one into address one input field
        await checkoutPageInvalidSingularInput.inputNoGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address one
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address One");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressOneInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressOneInputError, "The Address 1 field is required.", "The missing checkout guest address one input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address One");
    }

    //invalid guest product(s) checkout confirmation test method - no address two
    async invalidProductCheckoutConfirmNoAddressTwoTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //don't input guest address two into address two input field
        await checkoutPageInvalidSingularInput.inputNoGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - no address two
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - No Address Two");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message
        const noCheckoutGuestAddressTwoInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
        assert.strictEqual(noCheckoutGuestAddressTwoInputError, "The Address 2 field is required.", "The missing checkout guest address two input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - No Address Two");
    }

    //too short singular input

    //invalid guest product(s) checkout confirmation test method - too short address first name (1 char)
    async invalidProductCheckoutConfirmTooShortAddressFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input too short guest first name into first name input field (1 char)
        await checkoutPageInvalidSingularInput.inputTooShortGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - too short address first name
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - Too Short Address First Name");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message, throw an error otherwise
        try {
            const tooShortCheckoutGuestAddressFirstNameInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
            assert.strictEqual(tooShortCheckoutGuestAddressFirstNameInputError, "The first name is too short.", "The too short checkout guest address first name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address First Name")
            throw new Error("The too short checkout guest address first name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address First Name");
    }

    //invalid guest product(s) checkout confirmation test method - too short address last name (1 char)
    async invalidProductCheckoutConfirmTooShortAddressLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input too short guest last name into last name input field (1 char)
        await checkoutPageInvalidSingularInput.inputTooShortGuestLastNameIntoLastNameInputField();
        //input valid guest email into email input field
        await checkoutPageValidGuestInput.inputValidGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - too short address last name
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - Too Short Address Last Name");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message, throw an error otherwise
        try {
            const tooShortCheckoutGuestAddressLastNameInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
            assert.strictEqual(tooShortCheckoutGuestAddressLastNameInputError, "The last name is too short.", "The too short checkout guest address last name input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address Last Name");
            throw new Error("The too short checkout guest address last name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address Last Name");
    }

    //invalid guest product(s) checkout confirmation test method - too short address email (1 char -> name, domain)
    async invalidProductCheckoutConfirmTooShortAddressEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAsserts = new GeneralPageTextElementAsserts(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts(this.driver);
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageValidGuestInput = new CheckoutPageValidGuestInput(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page breadcrumb web element assert
        await generalPage.isGeneralPageBreadcrumbWebElementDisplayed();
        //general page header text element assert
        await generalPageTextElementAsserts.isGeneralPageHeaderTextElementAsExpected();
        //general page footer web element assert (Selenium can't find these elements with VALID selectors)
        //await generalPage.isGeneralPageFooterWebElementDisplayed();
        //general page footer text element assert (Selenium can't find these elements with VALID selectors)
        //await generalPageTextElementAsserts.isGeneralPageFooterTextElementAsExpected();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page input address web element assert
        await checkoutPage.isCheckoutPageInputAddressWebElementDisplayed();
        //checkout page product table web element assert
        await checkoutPage.isCheckoutPageProductTableWebElementDisplayed();
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextElementAsExpected();
        //checkout page product table text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageProductTableTextElementAsExpected();
        //checkout page input address section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageInputAddressSectionTextElementAsExpected();
        //log checkout page product table data
        await checkoutPageDataLoggers.logCheckoutPageProductTableData();
        //capture screenshot of the checkout page display before invalid data input (guest)
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display Before Invalid Data Input (guest)");
        //input valid guest first name into first name input field
        await checkoutPageValidGuestInput.inputValidGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name into last name input field
        await checkoutPageValidGuestInput.inputValidGuestLastNameIntoLastNameInputField();
        //input too short guest email into email input field (1 char -> name, domain)
        await checkoutPageInvalidSingularInput.inputTooShortGuestEmailIntoEmailInputField();
        //input valid guest phone into phone input field
        await checkoutPageValidGuestInput.inputValidGuestPhoneIntoPhoneInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUnitedStatesOption();
        //input valid guest address one into address one input field
        await checkoutPageValidGuestInput.inputValidGuestAddressOneIntoAddressOneInputField();
        //input valid guest address two into address two input field
        await checkoutPageValidGuestInput.inputValidGuestAddressTwoIntoAddressTwoInputField();
        //input valid guest note into note text area
        await checkoutPageValidGuestInput.inputValidGuestNoteIntoNoteTextarea();
        //capture screenshot of the checkout page display after invalid data input (guest) - too short address email
        await captureScreenshot(this.driver, "Checkout Page Input Address Section Display After Invalid Data Input (guest) - Too Short Address Email");
        //click "Checkout" button
        await checkoutPage.clickCheckoutButton();
        //wait for elements to load (due to network issues, wait time is extended)
        await basePage.waitForElementLoad(2500);
        //assert the user receives an expected error message, throw an error otherwise
        try {
            const tooShortCheckoutGuestAddressEmailInputError = await checkoutPage.getCheckoutPageAddressSingularInputErrorMessage();
            assert.strictEqual(tooShortCheckoutGuestAddressEmailInputError, "The email field is too short.", "The too short checkout guest address email input error doesn't match expectations.");
        } catch {
            await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address Email");
            throw new Error("The too short checkout guest address email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result (guest) - Too Short Address Email");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;