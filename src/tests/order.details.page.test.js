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

    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});