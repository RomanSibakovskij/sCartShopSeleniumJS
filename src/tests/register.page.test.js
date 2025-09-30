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

    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


