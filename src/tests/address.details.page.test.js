const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Address Details Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error //-> address removal isn't allowed (POST error 405 is thrown in browser dev console)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Address Details Test", () => {

        //Test 005 -> valid edit user address details test
        test("Valid Edit User Address Details Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user address details test
            await testMethods.validEditUserAddressTest();
        });

    });

    describe("Invalid Edit User Address Details Tests - No Singular Input", () => {

        //Test 005a -> invalid edit user address details test - no edited first name
        test("Invalid Edit User Address Details Test - No Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited first name
            await testMethods.invalidEditUserAddressNoFirstNameTest();
        });

        //Test 005b -> invalid edit user address details test - no edited last name
        test("Invalid Edit User Address Details Test - No Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited last name
            await testMethods.invalidEditUserAddressNoLastNameTest();
        });

        //Test 005c -> invalid edit user address details test - no edited phone
        test("Invalid Edit User Address Details Test - No Edited Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited phone
            await testMethods.invalidEditUserAddressNoPhoneTest();
        });

        //Test 005d -> invalid edit user address details test - no edited address one
        test("Invalid Edit User Address Details Test - No Edited Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited address one
            await testMethods.invalidEditUserAddressNoAddressOneTest();
        });

        //Test 005e -> invalid edit user address details test - no edited address two
        test("Invalid Edit User Address Details Test - No Edited Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited address two
            await testMethods.invalidEditUserAddressNoAddressTwoTest();
        });

        //Test 005f -> invalid edit user address details test - no edited country (it throws 500 server error)
        test("Invalid Edit User Address Details Test - No Edited Country", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - no edited country
            await testMethods.invalidEditUserAddressNoCountryTest();
        });

    });

    describe("Invalid Edit User Address Details Tests - Too Short Singular Input", () => {

        //Test 005f -> invalid edit user address details test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Short Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too short edited first name
            await testMethods.invalidEditUserAddressTooShortFirstNameTest();
        });

        //Test 005g -> invalid edit user address details test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Short Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too short edited last name
            await testMethods.invalidEditUserAddressTooShortLastNameTest();
        });

        //Test 005h -> invalid edit user address details test - too short edited phone (7 digits)
        test("Invalid Edit User Address Details Test - Too Short Edited Phone", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too short edited phone
            await testMethods.invalidEditUserAddressTooShortPhoneTest();
        });

        //Test 005i -> invalid edit user address details test - too short edited address one (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Short Edited Address One", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too short edited address one
            await testMethods.invalidEditUserAddressTooShortAddressOneTest();
        });

        //Test 005j -> invalid edit user address details test - too short edited address two (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Short Edited Address Two", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too short edited address two
            await testMethods.invalidEditUserAddressTooShortAddressTwoTest();
        });

    });

    describe("Invalid Edit User Address Details Tests - Too Long Singular Input", () => {

        //Test 005k -> invalid edit user address details test - too long edited first name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Long Edited First Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too long edited first name
            await testMethods.invalidEditUserAddressTooLongFirstNameTest();
        });

        //Test 005l -> invalid edit user address details test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Edit User Address Details Test - Too Long Edited Last Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user address details test - too long edited last name
            await testMethods.invalidEditUserAddressTooLongLastNameTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});