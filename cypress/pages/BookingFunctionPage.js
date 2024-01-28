// import { get } from 'cypress/types/jquery'
import BasePage from './BasePage'

class BookingFunction extends BasePage{
    // Locators

    // Should be able to get all labels with 1 cy.get, and loop through them in the test
    // Same for inputs

    getLabels(){
        return cy.get('.field > label')
    }

    getDropDowns(){
        return cy.get('.select > select')
    }

    getDatePickers(){
        return cy.get('div > input')
    }

    getRadioButtons(){
        return cy.get('.mr-1')
    }

    getBookButton(){
        return cy.get('button[type]')
    }
    
    // getOneWay(){
    //     return cy.get('[value="One way"]')
    // }

    // getRoundTrip(){
    //     return cy.get('[value="Round trip"]')
    // }

    

    // Methods - NO ASSERTIONS
    clickSubmit(){
        this.getBookButton().click()
    }

    // selectCabinClass(input){
    //     this.getCabinClassDropdown().select(input)
    // }

    // selectOrigin(state){
    //     this.getFromDropdown.select(state)
    // }
    // selectDestination(state){
    //     this.getToDropdown.select(state)
    // }

    // selectDepartureDate(date){                      // Needs attention, not a dropdown
    //     this.getDepartDropdown().select(date)
    // }

    // selectReturnDate(date){                         // Needs attention, not a dropdown
    //     this.getReturnDropdown().select(date)
    // }

    // selectNumOfPass(num){
    //     this.getNumOfPassDropdown().select(num)
    // }

    // selectPassengerAge(str){                        // Needs attention, more dynamic
    //     this.getPassOneDropdown.select(str)
    // }
}

export default BookingFunction

/** Notes for booking_function.json file:
 *  All three passenger scenarios need dates added, unsure how at this time
 *  Unsure of what information is really needed, should be whittled down as necessary
 */
