import { get } from "cypress/types/jquery";
import BasePage from "./BasePage";

class Booking extends BasePage{
    // Locators
    getOneWay(){
        return cy.get('[value="One way"]')
    }

    getRoundTrip(){
        return cy.get('[value="Round trip"]')
    }

    getCabinClassLabel(){
        return cy.get('.label').eq(1)   // Revisit this if these don't work
    }

    getCabinClassDropdown(){
        return cy.contains('Cabin Class').next()
    }

    getFromLabel(){
        return cy.get('.label').eq(2)   //
    }

    getFromDropdown(){
        return cy.contains('From').next()
    }

    getToLabel(){
        return cy.get('.label').eq(3)   //
    }

    getToDropdown(){
        return cy.contains('To').next()
    }

    getDepartLabel(){
        return cy.get('.label').eq(4)   //
    }

    getDepartDropdown(){                // Needs attention (not a dropdown)
        return cy.contains('Depart').next()
    }

    getReturnLabel(){
        return cy.get('.label').eq(5)   //
    }

    getReturnDropdown(){                // Needs attention, not a dropdown
        return cy.contains('Return').next()
    }

    getNumOfPassLabel(){
        return cy.get('.label').eq(6)   //
    }

    getNumOfPassDropdown(){
        return cy.contains('Number of passengers').next()
    }

    getPassOneLabel(){                  // Needs attention, more dynamic
        return cy.get('.label').eq(7)   //
    }

    getPassOneDropdown(){               // Needs attention, more dynamic
        return cy.contains('Passenger 1').next()
    }

    getPassTwoLabel(){                  // Needs attention, more dynamic
        return cy.get('.label').eq(8)   //
    }

    getPassTwoDropdown(){               // Needs attention, more dynamic
        return cy.contains('Passenger 2').next()
    }

    getBookButton(){
        return cy.get('button[type]')
    }

    // Methods - NO ASSERTIONS
    clickSubmit(){
        this.getBookButton().click()
    }

    selectCabinClass(input){
        this.getCabinClassDropdown().select(input)
    }

    selectOrigin(state){
        this.getFromDropdown.select(state)
    }

    selectDestination(state){
        this.getToDropdown.select(state)
    }

    selectDepartureDate(date){                      // Needs attention, not a dropdown
        this.getDepartDropdown().select(date)
    }

    selectReturnDate(date){                         // Needs attention, not a dropdown
        this.getReturnDropdown().select(date)
    }

    selectNumOfPass(num){
        this.getNumOfPassDropdown().select(num)
    }

    selectPassengerAge(str){                        // Needs attention, more dynamic
        this.getPassOneDropdown.select(str)
    }
}

export default Booking;

/** Notes for booking_function.json file:
 *  All three passenger scenarios need dates added, unsure how at this time
 *  Unsure of what information is really needed, should be whittled down as necessary
 */
