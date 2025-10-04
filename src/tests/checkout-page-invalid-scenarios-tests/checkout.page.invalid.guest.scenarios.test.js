const TestMethods = require('../utilities/test.methods.js');
const BaseTest = require('../utilities/base.test.js');

describe('Invalid Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Invalid Guest Checkout Confirmation Tests - No Singular Input", () => {

        //Test 023 -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address first name
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address First Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address first name
            await testMethods.invalidProductCheckoutConfirmNoAddressFirstNameTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});