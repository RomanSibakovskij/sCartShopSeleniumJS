# sCartShopSeleniumJS

Selenium basic UI test suite on basic e-commerce web app functionality (user account creation, address addition, login/logout, various product addition to / quantity update / removal from shopping cart). The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

 4. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE
7. To run the ESlinter, run npx eslint in the terminal

## Test Case List (positive/negative test cases)

//Navigate to Register Page Test

1.	//Test 001 -> navigate user to register page test

//Valid User Account Creation Test

1.	//Test 002 -> valid user account creation test

//Invalid User Account Creation Tests - No Singular Input

1.	//Test 002a -> invalid user account creation test - no first name
2.	//Test 002b -> invalid user account creation test - no last name
3.	//Test 002c -> invalid user account creation test - no email
4.	//Test 002d -> invalid user account creation test - no phone
5.	//Test 002e -> invalid user account creation test - no address one
6.	//Test 002f -> invalid user account creation test - no address two
7.	//Test 002g -> invalid user account creation test - no country
8.	//Test 002h -> invalid user account creation test - no password / confirm password

//Invalid User Account Creation Tests - Too Short Singular Input

1.	//Test 002i -> invalid user account creation test - too short first name (1 char) (the error wasn't triggered, test has failed)
2.	//Test 002j -> invalid user account creation test - too short last name (1 char) (the error wasn't triggered, test has failed)
3.	//Test 002k -> invalid user account creation test - too short email (1 char -> name, domain) (the error wasn't triggered, test has failed)
4.	//Test 002l -> invalid user account creation test - too short phone (7 chars)
5.	//Test 002m -> invalid user account creation test - too short address one (3 chars) (the error wasn't triggered, test has failed)
6.	//Test 002n -> invalid user account creation test - too short address two (3 chars) (the error wasn't triggered, test has failed)
7.	//Test 002o -> invalid user account creation test - too short password / confirm password (5 chars)

//Invalid User Account Creation Tests - Too Long Singular Input

1.	//Test 002p -> invalid user account creation test - too long first name (100 chars) (the error wasn't triggered, test has failed)
2.	//Test 002q -> invalid user account creation test - too long last name (100 chars) (the error wasn't triggered, test has failed)
3.	//Test 002r -> invalid user account creation test - too long email (100 chars -> name, domain)
4.	//Test 002s -> invalid user account creation test - too long phone (15 chars)
5.	//Test 002t -> invalid user account creation test - too long address one (101 chars)
6.	//Test 002u -> invalid user account creation test - too long address two (101 chars)
7.	//Test 002v -> invalid user account creation test - too long password / confirm password (17 chars)

//Invalid User Account Creation Tests - Invalid Singular Input Format

1.	//Test 002w -> invalid user account creation test - invalid first name format (special symbols only) (the error wasn't triggered, test has failed)
2.	//Test 002x -> invalid user account creation test - invalid last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	//Test 002y -> invalid user account creation test - invalid email format (missing '@')
4.	//Test 002z -> invalid user account creation test - existing email (used beforehand in manual testing)
5.	//Test 002aa -> invalid user account creation test - invalid phone format (special symbols only)
6.	//Test 002ab -> invalid user account creation test - invalid address one format (special symbols only) (the error wasn't triggered, test has failed)
7.	//Test 002ac -> invalid user account creation test - invalid address two format (special symbols only) (the error wasn't triggered, test has failed)
8.	//Test 002ad -> invalid user account creation test - mismatching confirm password

//Valid Edit User Account Information Test

1.	//Test 003 -> valid edit user account information test

//Invalid Edit User Account Information Tests - No Singular Input

1.	//Test 003a -> invalid edit user account information test - no edited first name (the error gets triggered but the former first name gets displayed)
2.	//Test 003b -> invalid edit user account information test - no edited last name (the error gets triggered but the former last name gets displayed)
3.	//Test 003c -> invalid edit user account information test - no edited phone (the error gets triggered but the former phone gets displayed)
4.	//Test 003d -> invalid edit user account information test - no edited address one (the error gets triggered but the former address one gets displayed)
5.	//Test 003e -> invalid edit user account information test - no edited address two (the error gets triggered but the former address two gets displayed)
6.	//Test 003f -> invalid edit user account information test - no edited country (the error gets triggered but the former country gets displayed)

//Invalid Edit User Account Information Tests - Too Short Singular Input

1.	//Test 003g -> invalid edit user account information test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
2.	//Test 003h -> invalid edit user account information test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
3.	//Test 003i -> invalid edit user account information test - too short edited phone (7 chars)
4.	//Test 003j -> invalid edit user account information test - too short edited address one (3 chars) (the error wasn't triggered, test has failed)
5.	//Test 003k -> invalid edit user account information test - too short edited address two (3 chars) (the error wasn't triggered, test has failed)

//Invalid Edit User Account Information Tests - Too Long Singular Input

1.	//Test 003l -> invalid edit user account information test - too long edited first name (100 chars) (the error wasn't triggered, test has failed)
2.	//Test 003m -> invalid edit user account information test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
3.	//Test 003n -> invalid edit user account information test - too long edited phone (15 chars)
4.	//Test 003o -> invalid edit user account information test - too long edited address one (101 chars)
5.	//Test 003p -> invalid edit user account information test - too long edited address two (101 chars) 

//Invalid Edit User Account Information Tests - Invalid Singular Input Format

1.	//Test 003q -> invalid edit user account information test - invalid edited first name format (special symbols only) (the error wasn't triggered, test has failed)
2.	//Test 003r -> invalid edit user account information test - invalid edited last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	//Test 003s -> invalid edit user account information test - invalid edited phone format (special symbols only)
4.	//Test 003t -> invalid edit user account information test - invalid edited address one format (special symbols only) (the error wasn't triggered, test has failed)
5.	//Test 003u -> invalid edit user account information test - invalid edited address two format (special symbols only) (the error wasn't triggered, test has failed)

//Valid Edit User Account Password Test

1.	//Test 004 -> valid edit user account password test 

//Invalid Edit User Account Password Tests - No Singular Input

1.	//Test 004a -> invalid edit user account password test - no old password
2.	//Test 004b -> invalid edit user account password test - no new / confirm password

//Invalid Edit User Account Password Test - Too Short Singular Input

1.	//Test 004c -> invalid edit user account password test - too short new / confirm password (5 chars)

//Invalid Edit User Account Password Test - Too Long Singular Input

1.	//Test 004d -> invalid edit user account password test - too long new / confirm password (17 chars)

//Invalid Edit User Account Password Test - Invalid Singular Input

1.	//Test 004e -> invalid edit user account password test - mismatching confirm password

//Valid Edit User Address Details Test

1.	//Test 005 -> valid edit user address details test

//Invalid Edit User Address Details Tests - No Singular Input

1.	//Test 005a -> invalid edit user address details test - no edited first name
2.	//Test 005b -> invalid edit user address details test - no edited last name
3.	//Test 005c -> invalid edit user address details test - no edited phone
4.	//Test 005d -> invalid edit user address details test - no edited address one
5.	//Test 005e -> invalid edit user address details test - no edited address two
6.	//Test 005f -> invalid edit user address details test - no edited country (it throws 500 server error)

//Invalid Edit User Address Details Tests - Too Short Singular Input

1.	//Test 005f -> invalid edit user address details test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
2.	//Test 005g -> invalid edit user address details test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
3.	//Test 005h -> invalid edit user address details test - too short edited phone (7 digits)
4.	//Test 005i -> invalid edit user address details test - too short edited address one (3 chars) (the error wasn't triggered, test has failed)
5.	//Test 005j -> invalid edit user address details test - too short edited address two (3 chars) (the error wasn't triggered, test has failed)

//Invalid Edit User Address Details Tests - Too Long Singular Input

1.	//Test 005k -> invalid edit user address details test - too long edited first name (100 chars) (the error wasn't triggered, test has failed)
2.	//Test 005l -> invalid edit user address details test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
3.	//Test 005m -> invalid edit user address details test - too long edited phone (15 digits)
4.	//Test 005n -> invalid edit user address details test - too long edited address one (101 chars) 
5.	//Test 005o -> invalid edit user address details test - too long edited address two (101 chars) 

//Invalid Edit User Address Details Tests - Invalid Singular Input Format

1.	//Test 005p -> invalid edit user address details test - invalid edited first name format (special symbols only) (the error wasn't triggered, test has failed)
2.	//Test 005q -> invalid edit user address details test - invalid edited last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	//Test 005r -> invalid edit user address details test - invalid edited phone format (special symbols only) (former phone gets sho but the error gets triggered)
4.	//Test 005s -> invalid edit user address details test - invalid edited address one format (special symbols only) (the error wasn't triggered, test has failed)
5.	//Test 005t -> invalid edit user address details test - invalid edited address two format (special symbols only) (the error wasn't triggered, test has failed)

//Remove User Address Test

1.	//Test 006 -> remove user address test

//Valid User Logout Test

1.	//Test 007 -> valid user logout test

//Valid User Login Tests

1.	//Test 007a -> valid user login test
2.	//Test 007b -> valid user login with edited password test

//Invalid User Login Tests - No Singular Input

1.	//Test 007c -> invalid user login test - no login email
2.	//Test 007d -> invalid user login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	//Test 007e -> invalid user login test - invalid login email
2.	//Test 007f -> invalid user login test - invalid login email format (missing '@')
3.	//Test 007g -> invalid user login test - invalid login password

//Add Single New Product To Cart Tests

1.	//Test 008 -> add single new product ("Product bundle 1 - English") to cart test (as a guest)
2.	//Test 008a -> add single new product ("Product bundle 3 - English") to cart test (as a registered user)

//Add Multiple New Product To Cart Tests

1.	//Test 008b -> add multiple new products ("Product bundle 1 - English") to cart test (as a guest)
2.	//Test 008c -> add multiple new products ("Sample product 1 - English") to cart test (as a registered user)

//Add Single Searched Product To Cart Tests

1.	//Test 009 -> add single searched product ("Sample product 35 - English") to cart test (as a guest)
2.	//Test 009a -> add single searched product ("Sample product 10 - English") to cart test (as a registered user)

//Add Multiple Searched Products To Cart Tests

1.	//Test 009b -> add multiple searched products ("Sample product 14 - English") to cart test (as a guest)
2.	//Test 009c -> add multiple searched products ("Sample product 10 - English") to cart test (as a registered user)

//Add Single New Product To Wishlist Tests

1.	//Test 010 -> add single new product ("Product bundle 1 - English") to wishlist test (as a guest)
2.	//Test 010a -> add single new product ("Product bundle 3 - English") to wishlist test (as a registered user)

//Add Multiple New Products To Wishlist Tests

1.	//Test 010b -> add multiple new products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") to wishlist test (as a guest)
2.	//Test 010c -> add multiple new products ("Product bundle 3 - English", "Sample product 1 - English", "Sample product 2 - English") to wishlist test (as a registered user)

//Remove Products From Wishlist Test

1.	//Test 011 -> remove multiple products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") from wishlist test (as a guest)

//Add Single New Product To Compare List Tests

1.	//Test 012 -> add single new product ("Product bundle 1 - English") to compare list test (as a guest)
2.	//Test 012a -> add single new product ("Product bundle 3 - English") to compare list test (as a registered user)

//Add Multiple New Products To Compare List Tests

1.	//Test 012b -> add multiple new products ("Product bundle 1 - English", "Sample product 5 - English", "Sample product 6 - English") to compare list test (as a guest)
2.	//Test 012c -> add multiple new products ("Product bundle 3 - English", "Sample product 1 - English", "Sample product 2 - English") to compare list test (as a registered user)

//Remove Products From Compare List Test

1.	//Test 013 -> remove multiple products ("Product bundle 1 - English", "Sample product 1 - English", "Sample product 2 - English") from compare list test (as a guest)

//Add Single Category Single Product To Cart Tests

1.	//Test 014 -> add single category single product ("Product bundle 2 - English") to cart test (as a guest)
2.	//Test 014a -> add single category single product ("Sample product 4 - English") to cart test (as a registered user)

//Add Single Category Multiple Products To Cart Tests

1.	//Test 014b -> add single category multiple products ("Product bundle 2 - English") to cart test (as a guest)
2.	//Test 014c -> add single category multiple products ("Sample product 3 - English") to cart test (as a registered user)

//Add Single New Product To Checkout Tests

1.	//Test 015 -> add single new product ("Product bundle 1 - English") to check out test (as a guest)
2.	//Test 015a -> add single new product ("Product bundle 3 - English") to check out test (as a registered user)

//Add Multiple New Products To Checkout Tests

1.	//Test 015b -> add multiple new products ("Product bundle 1 - English") to check out test (as a guest)
2.	//Test 015c -> add multiple new products ("Sample product 1 - English") to check out test (as a registered user)

//Add Single Searched Product To Checkout Tests

1.	//Test 016 -> add single searched product ("Sample product 35 - English") to check out test (as a guest)
2.	//Test 016a -> add single searched product ("Sample product 10 - English") to check out test (as a registered user)

//Add Multiple Searched Products To Checkout Tests

1.	//Test 016b -> add multiple searched products ("Sample product 14 - English") to check out test (as a guest)
2.	//Test 016c -> add multiple searched products ("Sample product 10 - English") to check out test (as a registered user)

//Add Single Category Single Product Add To Checkout Tests

1.	//Test 017 -> add single category single product ("Product bundle 2 - English") to check out test (as a guest)
2.	//Test 017a -> add single category single product ("Sample product 4 - English") to check out test (as a registered user)

//Add Single Category Multiple Products To Checkout Tests

1.	//Test 017b -> add single category multiple products ("Product bundle 2 - English") to check out test (as a guest)
2.	//Test 017c -> add single category multiple products ("Sample product 3 - English") to check out test (as a registered user)

//Update Shopping Cart Product Quantity Test

1.	//Test 018 -> update product ("Product bundle 1 - English") quantity in shopping cart test (the product quantity doesn't get updated, test has failed)

//Product Removal From Shopping Cart Test

1.	//Test 019 -> product ("Product bundle 1 - English") removal from shopping cart test

//Single New Product Checkout Confirmation Tests

1.	//Test 020 -> single new product ("Product bundle 1 - English") check out confirmation test (as a guest)
2.	//Test 020a -> single new product ("Product bundle 3 - English") check out confirmation test (as a registered user)

//Multiple New Products Checkout Confirmation Tests

1.	//Test 020b -> multiple new products ("Product bundle 1 - English") check out confirmation test (as a guest)
2.	//Test 020c -> multiple new products ("Sample product 1 - English") check out confirmation test (as a registered user)

//Single Searched Product Checkout Confirmation Tests

1.	//Test 021 -> single searched product ("Sample product 35 - English") check out confirmation test (as a guest)
2.	//Test 021a -> single searched product ("Sample product 10 - English") check out confirmation test (as a registered user)

//Multiple Searched Products Checkout Confirmation Tests

1.	//Test 021b -> multiple searched products ("Sample product 14 - English") check out confirmation test (as a guest)
2.	//Test 021c -> multiple searched products ("Sample product 10 - English") check out confirmation test (as a registered user)

//Single Category Single Product Checkout Confirmation Tests

1.	//Test 022 -> single category single product ("Product bundle 2 - English") check out confirmation test (as a guest)
2.	//Test 022a -> single category single product ("Sample product 4 - English") check out confirmation test (as a registered user)

//Single Category Multiple Products Checkout Confirmation Tests

1.	//Test 022b -> single category multiple products ("Product bundle 2 - English") check out confirmation test (as a guest)
2.	//Test 022c -> single category multiple products ("Sample product 3 - English") check out confirmation test (as a registered user)

//Invalid Guest Checkout Confirmation Tests - No Singular Input

1.	//Test 023 -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address first name
2.	//Test 023a -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address last name
3.	//Test 023b -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address email
4.	//Test 023c -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address phone
5.	//Test 023d -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address country
6.	//Test 023e -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address one
7.	//Test 023f -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - no guest address two

//Invalid Guest Checkout Confirmation Tests - Too Short Singular Input

1.	//Test 023g -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address first name (1 char) (the error wasn't triggered, test has failed)
2.	//Test 023h -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address last name (1 char) (the error wasn't triggered, test has failed)
3.	//Test 023i -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
4.	//Test 023j -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address phone (7 digits)
5.	//Test 023k -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address one (3 chars) (the error wasn't triggered, test has failed)
6.	//Test 023l -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too short guest address two (3 chars) (the error wasn't triggered, test has failed)

//Invalid Guest Checkout Confirmation Tests - Too Long Singular Input

1.	//Test 023m -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address first name (100 chars) (the error wasn't triggered, test has failed)
2.	//Test 023n -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address last name (100 chars) (the error wasn't triggered, test has failed)
3.	//Test 023o -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
4.	//Test 023p -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address phone (15 digits)
5.	//Test 023q -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address one (101 chars)
6.	//Test 023r -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - too long guest address two (101 chars) (the error wasn't triggered, test has failed)

//Invalid Guest Checkout Confirmation Tests - Invalid Singular Input Format

1.	//Test 023s -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address first name format (special symbols only) (the error wasn't triggered, test has failed)
2.	//Test 023t -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	//Test 023u -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address email format (missing '@')
4.	//Test 023v -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - existing guest address email format (used beforehand in manual testing) (the error wasn't triggered, test has failed)
5.	//Test 023w -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address phone format (special symbols only)
6.	//Test 023x -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address one format (special symbols only) (the error wasn't triggered, test has failed)
7.	//Test 023y -> invalid single new product ("Product bundle 1 - English") guest check out confirmation test - invalid guest address two format (special symbols only) (the error wasn't triggered, test has failed)

//Single/Multiple New Product(s) Order Details Validation Tests

1.	//Test 024 -> single new product ("Product bundle 3 - English") order details validation test (as a registered user) (the order doesn't show up on order history dashboard page, test has failed)
2.	//Test 024a -> multiple new products ("Sample product 1 - English") order details validation test (as a registered user)

//Single/Multiple Searched Product(s) Order Details Validation Tests

1.	//Test 025 -> single searched product ("Sample product 10 - English") order details validation test (as a registered user)
2.	//Test 025a -> multiple searched products ("Sample product 1 - English") order details validation test (as a registered user)

//Single Category Single/Multiple Product(s) Order Details Validation Tests

1.	//Test 026 -> single category single product ("Sample product 4 - English") order details validation test (as a registered user)
2.	//Test 026a -> single category multiple products ("Sample product 3 - English") order details validation test (as a registered user)

