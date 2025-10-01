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

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});