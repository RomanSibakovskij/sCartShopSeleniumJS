const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Register Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Creation Test(test block)", () => {

        //Test 002 -> valid user account creation test
        test("Valid User Account Creation Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

    });

    describe("Invalid User Account Creation Tests - No Singular Input", () => {

        //Test 002a -> invalid user account creation test - no first name
        test("Invalid User Account Creation Test - No First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no first name
            await testMethods.invalidUserAccountCreationNoFirstNameTest();
        });

        //Test 002b -> invalid user account creation test - no last name
        test("Invalid User Account Creation Test - No Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no last name
            await testMethods.invalidUserAccountCreationNoLastNameTest();
        });

        //Test 002c -> invalid user account creation test - no email
        test("Invalid User Account Creation Test - No Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no email
            await testMethods.invalidUserAccountCreationNoEmailTest();
        });

        //Test 002d -> invalid user account creation test - no phone
        test("Invalid User Account Creation Test - No Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no phone
            await testMethods.invalidUserAccountCreationNoPhoneTest();
        });

        //Test 002e -> invalid user account creation test - no address one
        test("Invalid User Account Creation Test - No Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no address one
            await testMethods.invalidUserAccountCreationNoAddressOneTest();
        });

        //Test 002f -> invalid user account creation test - no address two
        test("Invalid User Account Creation Test - No Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no address two
            await testMethods.invalidUserAccountCreationNoAddressTwoTest();
        });

        //Test 002g -> invalid user account creation test - no country
        test("Invalid User Account Creation Test - No Country", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no country
            await testMethods.invalidUserAccountCreationNoCountryTest();
        });

        //Test 002h -> invalid user account creation test - no password / confirm password
        test("Invalid User Account Creation Test - No Password / Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no password / confirm password
            await testMethods.invalidUserAccountCreationNoPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Short Singular Input", () => {

        //Test 002i -> invalid user account creation test - too short first name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short first name (1 char)
            await testMethods.invalidUserAccountCreationTooShortFirstNameTest();
        });

        //Test 002j -> invalid user account creation test - too short last name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short last name (1 char)
            await testMethods.invalidUserAccountCreationTooShortLastNameTest();
        });

        //Test 002k -> invalid user account creation test - too short email (1 char -> name, domain) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short email (1 char -> name, domain)
            await testMethods.invalidUserAccountCreationTooShortEmailTest();
        });

        //Test 002l -> invalid user account creation test - too short phone (7 chars)
        test("Invalid User Account Creation Test - Too Short Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short phone (7 chars)
            await testMethods.invalidUserAccountCreationTooShortPhoneTest();
        });

        //Test 002m -> invalid user account creation test - too short address one (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short address one (3 chars)
            await testMethods.invalidUserAccountCreationTooShortAddressOneTest();
        });

        //Test 002n -> invalid user account creation test - too short address two (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short address two (3 chars)
            await testMethods.invalidUserAccountCreationTooShortAddressTwoTest();
        });

        //Test 002o -> invalid user account creation test - too short password / confirm password (5 chars)
        test("Invalid User Account Creation Test - Too Short Password / Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short password / confirm password (5 chars)
            await testMethods.invalidUserAccountCreationTooShortPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Long Singular Input", () => {

        //Test 002p -> invalid user account creation test - too long first name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Long First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long first name (100 chars)
            await testMethods.invalidUserAccountCreationTooLongFirstNameTest();
        });

        //Test 002q -> invalid user account creation test - too long last name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Long Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long last name (100 chars)
            await testMethods.invalidUserAccountCreationTooLongLastNameTest();
        });

        //Test 002r -> invalid user account creation test - too long email (100 chars -> name, domain)
        test("Invalid User Account Creation Test - Too Long Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long email (100 chars -> name, domain)
            await testMethods.invalidUserAccountCreationTooLongEmailTest();
        });

        //Test 002s -> invalid user account creation test - too long phone (15 chars)
        test("Invalid User Account Creation Test - Too Long Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long phone (15 chars)
            await testMethods.invalidUserAccountCreationTooLongPhoneTest();
        });

        //Test 002t -> invalid user account creation test - too long address one (101 chars)
        test("Invalid User Account Creation Test - Too Long Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long address one (101 chars)
            await testMethods.invalidUserAccountCreationTooLongAddressOneTest();
        });

        //Test 002u -> invalid user account creation test - too long address two (101 chars)
        test("Invalid User Account Creation Test - Too Long Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long address two (101 chars)
            await testMethods.invalidUserAccountCreationTooLongAddressTwoTest();
        });

        //Test 002v -> invalid user account creation test - too long password / confirm password (17 chars)
        test("Invalid User Account Creation Test - Too Long Password / Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long password / confirm password (17 chars)
            await testMethods.invalidUserAccountCreationTooLongPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Invalid Singular Input Format", () => {

        //Test 002w -> invalid user account creation test - invalid first name format (special symbols only) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Invalid First Name Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - invalid first name format (special symbols only)
            await testMethods.invalidUserAccountCreationInvalidFirstNameFormatTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


