const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Change Password Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Account Password Test", () => {

        //Test 004 -> valid edit user account password test
        test("Valid Edit User Account Password Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account password test
            await testMethods.validEditAccountPasswordTest();
        });

    });

    describe("Invalid Edit User Account Password Tests - No Singular Input", () => {

        //Test 004a -> invalid edit user account password test - no old password
        test("Invalid Edit User Account Password Test - No Old Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account password test - no old password
            await testMethods.invalidEditAccountPasswordNoOldPasswordTest();
        });

        //Test 004b -> invalid edit user account password test - no new / confirm password
        test("Invalid Edit User Account Password Test - No New and Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account password test - no new / confirm password
            await testMethods.invalidEditAccountPasswordNoNewConfirmPasswordTest();
        });

    });

    describe("Invalid Edit User Account Password Test - Too Short Singular Input", () => {

        //Test 004c -> invalid edit user account password test - too short new / confirm password (5 chars)
        test("Invalid Edit User Account Password Test - Too Short New and Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account password test - too short new / confirm password (5 chars)
            await testMethods.invalidEditAccountPasswordTooShortNewConfirmPasswordTest();
        });

    });

    describe("Invalid Edit User Account Password Test - Too Long Singular Input", () => {

        //Test 004d -> invalid edit user account password test - too long new / confirm password (17 chars)
        test("Invalid Edit User Account Password Test - Too Long New and Confirm Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account password test - too long new / confirm password (17 chars)
            await testMethods.invalidEditAccountPasswordTooLongNewConfirmPasswordTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});