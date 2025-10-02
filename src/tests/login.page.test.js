const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Login Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Logout Test", () => {

        //Test 007 -> valid user logout test
        test("Valid User Logout Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid valid user logout test
            await testMethods.validUserLogoutTest();
        });

    });

    describe("Valid User Login Tests", () => {

        //Test 007a -> valid user login test
        test("Valid User Login Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //valid user login test
            await testMethods.validUserLoginTest();
        });

        //Test 007b -> valid user login with edited password test
        test("Valid User Login With Edited Password Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account password test
            await testMethods.validEditAccountPasswordTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //valid user login with edited password test
            await testMethods.validUserLoginEditedPasswordTest();
        });

    });

    describe("Invalid User Login Tests - No Singular Input", () => {

        //Test 007c -> invalid user login test - no login email
        test("Invalid Edit User Login Test - No Login Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - no login email
            await testMethods.invalidUserNoLoginEmailTest();
        });

        //Test 007d -> invalid user login test - no login password
        test("Invalid Edit User Login Test - No Login Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - no login password
            await testMethods.invalidUserNoLoginPasswordTest();
        });

    });

    describe("Invalid User Login Tests - Invalid Singular Input", () => {

        //Test 007e -> invalid user login test - invalid login email
        test("Invalid Edit User Login Test - Invalid Login Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - invalid login email
            await testMethods.invalidUserInvalidLoginEmailTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});