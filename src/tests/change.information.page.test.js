const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Change Information Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Account Information Test", () => {

        //Test 003 -> valid edit user account information test
        test("Valid Edit User Account Information Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account information test
            await testMethods.validEditAccountInformationTest();
        });

    });

    describe("Invalid Edit User Account Information Tests - No Singular Input", () => {

        //Test 003a -> invalid edit user account information test - no edited first name (the error gets triggered but the former first name gets displayed)
        test("Invalid Edit User Account Information Test - No Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited first name
            await testMethods.invalidEditAccountInformationNoFirstNameTest();
        });

        //Test 003b -> invalid edit user account information test - no edited last name (the error gets triggered but the former last name gets displayed)
        test("Invalid Edit User Account Information Test - No Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited last name
            await testMethods.invalidEditAccountInformationNoLastNameTest();
        });

        //Test 003c -> invalid edit user account information test - no edited phone (the error gets triggered but the former phone gets displayed)
        test("Invalid Edit User Account Information Test - No Edited Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited phone
            await testMethods.invalidEditAccountInformationNoPhoneTest();
        });

        //Test 003d -> invalid edit user account information test - no edited address one (the error gets triggered but the former address one gets displayed)
        test("Invalid Edit User Account Information Test - No Edited Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited address one
            await testMethods.invalidEditAccountInformationNoAddressOneTest();
        });

        //Test 003e -> invalid edit user account information test - no edited address two (the error gets triggered but the former address two gets displayed)
        test("Invalid Edit User Account Information Test - No Edited Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited address two
            await testMethods.invalidEditAccountInformationNoAddressTwoTest();
        });

        //Test 003f -> invalid edit user account information test - no edited country (the error gets triggered but the former country gets displayed)
        test("Invalid Edit User Account Information Test - No Edited Country", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - no edited country
            await testMethods.invalidEditAccountInformationNoCountryTest();
        });

    });

    describe("Invalid Edit User Account Information Tests - Too Short Singular Input", () => {

        //Test 003g -> invalid edit user account information test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Short Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too short edited first name
            await testMethods.invalidEditAccountInformationTooShortFirstNameTest();
        });

        //Test 003h -> invalid edit user account information test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Short Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too short edited last name
            await testMethods.invalidEditAccountInformationTooShortLastNameTest();
        });

        //Test 003i -> invalid edit user account information test - too short edited phone (7 chars)
        test("Invalid Edit User Account Information Test - Too Short Edited Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too short edited phone
            await testMethods.invalidEditAccountInformationTooShortPhoneTest();
        });

        //Test 003j -> invalid edit user account information test - too short edited address one (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Short Edited Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too short edited address one
            await testMethods.invalidEditAccountInformationTooShortAddressOneTest();
        });

        //Test 003k -> invalid edit user account information test - too short edited address two (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Short Edited Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too short edited address two
            await testMethods.invalidEditAccountInformationTooShortAddressTwoTest();
        });

    });

    describe("Invalid Edit User Account Information Tests - Too Long Singular Input", () => {

        //Test 003l -> invalid edit user account information test - too long edited first name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Long Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too long edited first name
            await testMethods.invalidEditAccountInformationTooLongFirstNameTest();
        });

        //Test 003m -> invalid edit user account information test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Account Information Test - Too Long Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too long edited last name
            await testMethods.invalidEditAccountInformationTooLongLastNameTest();
        });

        //Test 003n -> invalid edit user account information test - too long edited phone (15 chars)
        test("Invalid Edit User Account Information Test - Too Long Edited Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too long edited phone
            await testMethods.invalidEditAccountInformationTooLongPhoneTest();
        });

        //Test 003o -> invalid edit user account information test - too long edited address one (101 chars)
        test("Invalid Edit User Account Information Test - Too Long Edited Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too long edited address one
            await testMethods.invalidEditAccountInformationTooLongAddressOneTest();
        });

        //Test 003p -> invalid edit user account information test - too long edited address two (101 chars) 
        test("Invalid Edit User Account Information Test - Too Long Edited Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account information test - too long edited address two
            await testMethods.invalidEditAccountInformationTooLongAddressTwoTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});