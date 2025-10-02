"use strict"

const BaseTest = require("../utilities/base.test.js");
const { AddressListPage } = require("../../pages/address.list.page.js");
const Logger = require("../../pages/utilities/logger");

class AddressListPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //address list page data logger method
    async logAddressListPageData(){
        const addressListPage = new AddressListPage(this.driver);
        console.log("Address list page displayed address(es) data: " + "\n");
        //table
        //log address list page first name(s)
        const addressListPageFirstNames = await addressListPage.getAddressListFirstName();
        Logger.info("Address list page first name(s): " + addressListPageFirstNames);
        //log address list page last name(s)
        const addressListPageLastNames = await addressListPage.getAddressListLastName();
        Logger.info("Address list page last name(s): " + addressListPageLastNames);
        //log address list page phone(s)
        const addressListPagePhones = await addressListPage.getAddressListPhone();
        Logger.info("Address list page phone(s): " + addressListPagePhones);
        //log address list page address(es) one
        const addressListPageAddressOne = await addressListPage.getAddressListAddressOne();
        Logger.info("Address list page address(es) one: " + addressListPageAddressOne);
        //log address list page address(es) two
        const addressListPageAddressTwo = await addressListPage.getAddressListAddressTwo();
        Logger.info("Address list page address(es) two: " + addressListPageAddressTwo);
        //log address list page country(ies)
        const addressListPageCountry = await addressListPage.getAddressListCountry();
        Logger.info("Address list page country(ies): " + addressListPageCountry);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AddressListPageDataLogger;