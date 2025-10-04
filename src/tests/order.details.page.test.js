const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Order Details Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(250000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single/Multiple New Product(s) Order Details Validation Tests", () => {

        //Test 024 -> single new product ("Product bundle 3 - English") order details validation test (as a registered user) (the order doesn't show up on order history dashboard page, test has failed)
        test("Single New Product Order Details Validation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Product bundle 3 - English") to cart test (as a registered user)
            await testMethods.addSingleHomePageNewProductToCartRegUserTest();
            //add single new product ("Product bundle 3 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //single new product ("Product bundle 3 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

        //Test 024a -> multiple new products ("Sample product 1 - English") order details validation test (as a registered user)
        test("Multiple New Products Order Details Validation Test (as a registered user)", async function () {
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
            //multiple new products ("Sample product 1 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

    });

    describe("Single/Multiple Searched Product(s) Order Details Validation Tests", () => {

        //Test 025 -> single searched product ("Sample product 10 - English") order details validation test (as a registered user)
        test("Single Searched Product Order Details Validation Test (as a registered user)", async function () {
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
            //single searched product ("Sample product 10 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

        //Test 025a -> multiple searched products ("Sample product 1 - English") order details validation test (as a registered user)
        test("Multiple Searched Products Order Details Validation Test (as a registered user)", async function () {
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
            //multiple new products ("Sample product 1 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
            //multiple searched products ("Sample product 1 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

    });

    describe("Single Category Single/Multiple Product(s) Order Details Validation Tests", () => {

        //Test 026 -> single category single product ("Sample product 4 - English") order details validation test (as a registered user)
        test("Single Category Single Product Order Details Validation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Sample product 4 - English") to cart test (as a registered user)
            await testMethods.addSingleCategorySingleProductToCartRegUserTest();
            //add single category single product ("Sample product 4 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //single category single product ("Sample product 4 - English") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationRegUserTest();
            //single category single product ("Sample product 4 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

        //Test 026a -> single category multiple products ("Sample product 3 - English") order details validation test (as a registered user)
        test("Single Category Multiple Products Order Details Validation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single category multiple products ("Sample product 3 - English") to cart test (as a registered user)
            await testMethods.addSingleCategoryMultipleProductsToCartRegUserTest();
            //add single category multiple products ("Sample product 3 - English") to check out test (as a registered user)
            await testMethods.addProductToCheckoutRegUserTest();
            //single category multiple products ("Sample product 3 - English") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationRegUserTest();
            //single category multiple products ("Sample product 3 - English") order details validation test (as a registered user)
            await testMethods.orderDetailsValidationTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});