const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to Register Page Test", () => {

        //Test 001 -> navigate user to register page test
        test("User Navigation to Register Page Test", async function () {
            await testMethods.navigateToRegisterPageTest();
        });

    });

    describe("Add Single New Product To Cart Tests", () => {

        //Test 008 -> add single new product ("Product bundle 1 - English") to cart test (as a guest)
        test("Add Single New Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
        });

        //Test 008a -> add single new product ("Product bundle 3 - English") to cart test (as a registered user)
        test("Add Single New Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Product bundle 3 - English") to cart test (as a registered user)
            await testMethods.addSingleHomePageNewProductToCartRegUserTest();
        });

    });

    describe("Add Multiple New Product To Cart Tests", () => {

        //Test 008b -> add multiple new products ("Product bundle 1 - English") to cart test (as a guest)
        test("Add Multiple New Products To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleHomePageNewProductToCartGuestTest();
        });

        //Test 008c -> add multiple new products ("Sample product 1 - English") to cart test (as a registered user)
        test("Add Multiple New Products To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple new products ("Sample product 1 - English") to cart test (as a registered user)
            await testMethods.addMultipleHomePageNewProductsToCartRegUserTest();
        });


    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


