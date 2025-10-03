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

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});