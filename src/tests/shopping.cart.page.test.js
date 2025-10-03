const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Shopping Cart Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single New Product To Checkout Tests", () => {

        //Test 015 -> add single new product ("Product bundle 1 - English") to check out test (as a guest)
        test("Add Single New Product To Checkout Test (as a guest)", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
        });

        //Test 015a -> add single new product ("Product bundle 3 - English") to check out test (as a registered user)
        test("Add Single New Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Product bundle 3 - English") to cart test (as a registered user)
            await testMethods.addSingleHomePageNewProductToCartRegUserTest();
            //add single new product ("Product bundle 3 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
        });

    });

    describe("Add Multiple New Products To Checkout Tests", () => {

        //Test 015b -> add multiple new products ("Product bundle 1 - English") to check out test (as a guest)
        test("Add Multiple New Products To Checkout Test (as a guest)", async function () {
            //add multiple new products ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addMultipleHomePageNewProductToCartGuestTest();
            //add multiple new products ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
        });

        //Test 015c -> add multiple new products ("Sample product 1 - English") to check out test (as a registered user)
        test("Add Multiple New Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple new products ("Sample product 1 - English") to cart test (as a registered user)
            await testMethods.addMultipleHomePageNewProductsToCartRegUserTest();
            //add multiple new products ("Sample product 1 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
        });

    });

    describe("Add Single Searched Product To Checkout Tests", () => {

        //Test 016 -> add single searched product ("Sample product 35 - English") to check out test (as a guest)
        test("Add Single Searched Product To Checkout Test (as a guest)", async function () {
            //add single searched product ("Sample product 35 - English") to cart test (as a guest)
            await testMethods.addSingleSearchedProductToCartGuestTest();
            //add single searched product ("Sample product 35 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
        });

        //Test 016a -> add single searched product ("Sample product 10 - English") to check out test (as a registered user)
        test("Add Single Searched Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single searched product ("Sample product 10 - English") to cart test (as a registered user)
            await testMethods.addSingleSearchedProductToCartRegUserTest();
            //add single searched product ("Sample product 10 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
        });

    });

    describe("Add Multiple Searched Products To Checkout Tests", () => {

        //Test 016b -> add multiple searched products ("Sample product 14 - English") to check out test (as a guest)
        test("Add Multiple Searched Products To Checkout Test (as a guest)", async function () {
            //add multiple searched products ("Sample product 14 - English") to cart test (as a guest)
            await testMethods.addMultipleSearchedProductsToCartGuestTest();
            //add multiple searched products ("Sample product 14 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
        });

        //Test 016c -> add multiple searched products ("Sample product 10 - English") to check out test (as a registered user)
        test("Add Multiple Searched Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple searched products ("Sample product 10 - English") to cart test (as a registered user)
            await testMethods.addMultipleSearchedProductsToCartRegUserTest();
            //add multiple searched products ("Sample product 10 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
        });

    });

    describe("Add Single Category Single Product To Checkout Tests", () => {

        //Test 017 -> add single category single product ("Product bundle 2 - English") to check out test (as a guest)
        test("Add Single Category Single Product To Checkout Test (as a guest)", async function () {
            //add single category single product ("Product bundle 2 - English") to cart test (as a guest)
            await testMethods.addSingleCategorySingleProductToCartGuestTest();
            //add single category single product ("Product bundle 2 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});