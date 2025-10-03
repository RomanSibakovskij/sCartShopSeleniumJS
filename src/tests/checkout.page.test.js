const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Valid Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single New Product Checkout Confirmation Tests", () => {

        //Test 020 -> single new product ("Product bundle 1 - English") check out confirmation test (as a guest)
        test("Single New Product Checkout Confirmation Test (as a guest)", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //single new product ("Product bundle 1 - English") check out confirmation test (as a guest)
            await testMethods.validProductCheckoutConfirmationTest();
        });

        //Test 020a -> single new product ("Product bundle 3 - English") check out confirmation test (as a registered user)
        test("Single New Product Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Product bundle 3 - English") to cart test (as a registered user)
            await testMethods.addSingleHomePageNewProductToCartRegUserTest();
            //add single new product ("Product bundle 3 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //single new product ("Product bundle 3 - English") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationRegUserTest();
        });

    });

    describe("Multiple New Products Checkout Confirmation Tests", () => {

        //Test 020b -> multiple new products ("Product bundle 1 - English") check out confirmation test (as a guest)
        test("Multiple New Products Checkout Confirmation Test (as a guest)", async function () {
            //add multiple new products ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addMultipleHomePageNewProductToCartGuestTest();
            //add multiple new products ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //multiple new products ("Product bundle 1 - English") check out confirmation test (as a guest)
            await testMethods.validProductCheckoutConfirmationTest();
        });

        //Test 020c -> multiple new products ("Sample product 1 - English") check out confirmation test (as a registered user)
        test("Multiple New Products Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple new products ("Sample product 1 - English") to cart test (as a registered user)
            await testMethods.addMultipleHomePageNewProductsToCartRegUserTest();
            //add multiple new products ("Sample product 1 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //multiple new products ("Sample product 1 - English") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationRegUserTest();
        });

    });

    describe("Single Searched Product Checkout Confirmation Tests", () => {

        //Test 021 -> single searched product ("Sample product 35 - English") check out confirmation test (as a guest)
        test("Single Searched Product Checkout Confirmation Test (as a guest)", async function () {
            //add single searched product ("Sample product 35 - English") to cart test (as a guest)
            await testMethods.addSingleSearchedProductToCartGuestTest();
            //add single searched product ("Sample product 35 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //single searched product ("Sample product 35 - English") check out confirmation test (as a guest)
            await testMethods.validProductCheckoutConfirmationTest();
        });

        //Test 021a -> single searched product ("Sample product 10 - English") check out confirmation test (as a registered user)
        test("Single Searched Product Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single searched product ("Sample product 10 - English") to cart test (as a registered user)
            await testMethods.addSingleSearchedProductToCartRegUserTest();
            //add single searched product ("Sample product 10 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //single searched product ("Sample product 10 - English") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationRegUserTest();
        });

    });

    describe("Multiple Searched Products Checkout Confirmation Tests", () => {

        //Test 021b -> multiple searched products ("Sample product 14 - English") check out confirmation test (as a guest)
        test("Multiple Searched Products Checkout Confirmation Test (as a guest)", async function () {
            //add multiple searched products ("Sample product 14 - English") to cart test (as a guest)
            await testMethods.addMultipleSearchedProductsToCartGuestTest();
            //add multiple searched products ("Sample product 14 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //multiple searched products ("Sample product 14 - English") check out confirmation test (as a guest)
            await testMethods.validProductCheckoutConfirmationTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});