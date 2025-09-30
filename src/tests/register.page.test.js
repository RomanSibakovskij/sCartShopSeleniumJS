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

    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


