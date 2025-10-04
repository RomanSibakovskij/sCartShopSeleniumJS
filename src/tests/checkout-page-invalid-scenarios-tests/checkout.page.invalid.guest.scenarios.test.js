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

        //Test 023a -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address last name
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address Last Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address last name
            await testMethods.invalidProductCheckoutConfirmNoAddressLastNameTest();
        });

        //Test 023b -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address email
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address Email", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address email
            await testMethods.invalidProductCheckoutConfirmNoAddressEmailTest();
        });

        //Test 023c -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address phone
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address Phone", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address phone
            await testMethods.invalidProductCheckoutConfirmNoAddressPhoneTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});