const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Wishlist Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single New Product To Wishlist Tests", () => {

        //Test 010 -> add single new product ("Product bundle 1 - English") to wishlist test (as a guest)
        test("Add Single New Product To Wishlist Test (as a guest)", async function () {
            await testMethods.addSingleHomePageNewProductToWishlistGuestTest();
        });

        //Test 010a -> add single new product ("Product bundle 3 - English") to wishlist test (as a registered user)
        test("Add Single New Product To Wishlist Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Product bundle 3 - English") to wishlist test (as a registered user)
            await testMethods.addSingleHomePageNewProductToWishlistRegUserTest();
        });

    });

    describe("Add Multiple New Products To Wishlist Tests", () => {

        //Test 010b -> add multiple new products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") to wishlist test (as a guest)
        test("Add Multiple New Products To Wishlist Test (as a guest)", async function () {
            await testMethods.addMultipleHomePageNewProductsToWishlistGuestTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


