const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class CheckoutPageValidGuestInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        //input form
        this._checkoutPageFirstNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[1]/input");
        this._checkoutPageLastNameInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[1]/td[2]/input");
        this._checkoutPageEmailInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[1]/input");
        this._checkoutPagePhoneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[2]/td[2]/input");
        this._checkoutPageAddressOneInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[5]//input");
        this._checkoutPageAddressTwoInputField = By.xpath("//table[@class='table table-borderless table-responsive']//tr[6]//input");
        this._checkoutPageNoteTextarea = By.xpath("//table[@class='table table-borderless table-responsive']//tr[7]//textarea");

    }




}
module.exports = CheckoutPageValidGuestInput;