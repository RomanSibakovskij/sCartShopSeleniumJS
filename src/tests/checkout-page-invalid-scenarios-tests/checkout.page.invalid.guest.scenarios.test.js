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

        //Test 023d -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address country
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address Country", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address country
            await testMethods.invalidProductCheckoutConfirmNoAddressCountryTest();
        });

        //Test 023e -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address one
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address One", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address one
            await testMethods.invalidProductCheckoutConfirmNoAddressOneTest();
        });

        //Test 023f -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address two
        test("Invalid Single New Product Guest Checkout Confirmation Test - No Address Two", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address two
            await testMethods.invalidProductCheckoutConfirmNoAddressTwoTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Too Short Singular Input", () => {

        //Test 023g -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address first name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address First Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address first name
            await testMethods.invalidProductCheckoutConfirmTooShortAddressFirstNameTest();
        });

        //Test 023h -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address last name (1 char) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address Last Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address last name
            await testMethods.invalidProductCheckoutConfirmTooShortAddressLastNameTest();
        });

        //Test 023i -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address Email", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address email
            await testMethods.invalidProductCheckoutConfirmTooShortAddressEmailTest();
        });

        //Test 023j -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address phone (7 digits)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address Phone", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address phone
            await testMethods.invalidProductCheckoutConfirmTooShortAddressPhoneTest();
        });

        //Test 023k -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address one (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address One", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address one
            await testMethods.invalidProductCheckoutConfirmTooShortAddressOneTest();
        });

        //Test 023l -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address two (3 chars) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Short Address Two", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address two
            await testMethods.invalidProductCheckoutConfirmTooShortAddressTwoTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Too Long Singular Input", () => {

        //Test 023m -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address first name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address First Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address first name
            await testMethods.invalidProductCheckoutConfirmTooLongAddressFirstNameTest();
        });

        //Test 023n -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address last name (100 chars) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address Last Name", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address last name
            await testMethods.invalidProductCheckoutConfirmTooLongAddressLastNameTest();
        });

        //Test 023o -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address Email", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address email
            await testMethods.invalidProductCheckoutConfirmTooLongAddressEmailTest();
        });

        //Test 023p -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address phone (15 digits)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address Phone", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address phone
            await testMethods.invalidProductCheckoutConfirmTooLongAddressPhoneTest();
        });

        //Test 023q -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address one (101 chars)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address One", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address one
            await testMethods.invalidProductCheckoutConfirmTooLongAddressOneTest();
        });

        //Test 023r -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address two (101 chars) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Too Long Address Two", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address two
            await testMethods.invalidProductCheckoutConfirmTooLongAddressTwoTest();
        });

    });

    describe("Invalid Guest Checkout Confirmation Tests - Invalid Singular Input Format", () => {

        //Test 023s -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address first name format (special symbols only) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Invalid Address First Name Format", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address first name format
            await testMethods.invalidProductCheckoutConfirmInvalidAddressFirstNameFormatTest();
        });

        //Test 023t -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address last name format (special symbols only) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Invalid Address Last Name Format", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address last name format
            await testMethods.invalidProductCheckoutConfirmInvalidAddressLastNameFormatTest();
        });

        //Test 023u -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address email format (missing '@')
        test("Invalid Single New Product Guest Checkout Confirmation Test - Invalid Address Email Format", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address email format
            await testMethods.invalidProductCheckoutConfirmInvalidAddressEmailFormatTest();
        });

        //Test 023v -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - existing guest address email format (used beforehand in manual testing) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Existing Address Email", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - existing guest address email
            await testMethods.invalidProductCheckoutConfirmExistingAddressEmailFormatTest();
        });

        //Test 023w -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address phone format (special symbols only)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Invalid Address Phone Format", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address phone format
            await testMethods.invalidProductCheckoutConfirmInvalidAddressPhoneFormatTest();
        });

        //Test 023x -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address one format (special symbols only) (the error wasn't triggered, test has failed)
        test("Invalid Single New Product Guest Checkout Confirmation Test - Invalid Address One Format", async function () {
            //add single new product ("Product bundle 1 - English") to cart test (as a guest)
            await testMethods.addSingleHomePageNewProductToCartGuestTest();
            //add single new product ("Product bundle 1 - English") to check out test (as a guest)
            await testMethods.addProductToCheckoutGuestTest();
            //invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address one format
            await testMethods.invalidProductCheckoutConfirmInvalidAddressOneFormatTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});