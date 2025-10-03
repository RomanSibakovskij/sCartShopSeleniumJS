const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Single Category Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single Category Single Product To Cart Tests", () => {

        //Test 014 -> add single category single product ("Product bundle 2 - English") to cart test (as a guest)
        test("Add Single Category Single Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleCategorySingleProductToCartGuestTest();
        });

        //Test 014a -> add single category single product ("Sample product 4 - English") to cart test (as a registered user)
        test("Add Single Category Single Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single new product ("Sample product 4 - English") to cart test (as a registered user)
            await testMethods.addSingleCategorySingleProductToCartRegUserTest();
        });

    });

    describe("Add Single Category Multiple Products To Cart Tests", () => {

        //Test 014b -> add single category multiple products ("Product bundle 2 - English") to cart test (as a guest)
        test("Add Single Category Multiple Products To Cart Test (as a guest)", async function () {
            await testMethods.addSingleCategoryMultipleProductsToCartGuestTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


