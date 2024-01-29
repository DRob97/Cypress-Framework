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

    // Locators for submit message

    getDepartHeading(){
        return cy.contains('DEPART')
    }

    getReturnHeading(){
        return cy.contains('RETURN')
    }

    getPassengerInfo(){
        return cy.get('.mt-4 > p')
    }
    
    // Methods - NO ASSERTIONS
    clickSubmit(){
        this.getBookButton().click()
    }

    
}

export default BookingFunction

/** Notes for booking_function.json file:
 *  All three passenger scenarios need dates added, unsure how at this time
 *  Unsure of what information is really needed, should be whittled down as necessary
 */
