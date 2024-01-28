/// <reference types="cypress"/>
import BookingFunction from '../../pages/BookingFunctionPage'

describe('Booking Function Project', function() {

    beforeEach(() => {
        cy.fixture('booking_function').then(function(data) {
            this.dropdowns = data.dropdowns
            this.onePassOneWay = data.onePassOneWay
            this.onePassRound = data.onePassRound
            this.twoPass = data.twoPass
            // this.trips = data.trips
        })

        cy.clickCard('Project - Booking Function')
    })

    const bookingFunction = new BookingFunction()

    it.skip('Test Case 01 - Validate the default Book your trip form', function() {
        bookingFunction.getRadioButtons().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 0){
                cy.wrap($el).should('have.attr', 'checked')
            }
            else{
                cy.wrap($el).should('not.have.attr', 'checked')
            }
        })

        bookingFunction.getLabels().should('be.visible')

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 3){
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
            else if(index === 4){
                cy.wrap($el,).invoke('val').should('eq', this.dropdowns[index - 3])
            }
        })

        bookingFunction.getDatePickers().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 1){
                cy.wrap($el).should('not.be.enabled')
            }
        })

        bookingFunction.getBookButton().should('be.enabled')
    })

    it.skip('Test Case 02 - Validate the Book your trip form when Round trip is selected', function() {
        bookingFunction.getRadioButtons().last().click().should('be.checked')
        bookingFunction.getRadioButtons().first().should('not.be.checked')

        bookingFunction.getLabels().should('be.visible')

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 3){
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
            else if(index === 4){
                cy.wrap($el,).invoke('val').should('eq', this.dropdowns[index - 3])
            }
        })

        bookingFunction.getDatePickers().should('be.visible')

        bookingFunction.getBookButton().should('be.enabled')
    })

    // const onePassOneWay = ['One way', 'Business', 'Illinois', 'Florida', 1, 'Senior (65+)']
    // const onePassRound = ['Round trip', 'First', 'California', 'Illinois', 1, 'Adult (16-64)']
    // const twoPass = ['One way', 'Premium Economy', 'New York', 'Texas', 2, ['Adult (16-64)', 'Child (2-11)']]

    // const trips = [onePassOneWay, onePassRound, twoPass]

    // const trips = [this.onePassOneWay, this.onePassRound, this.twoPass]

    it('Test 03', function() {
        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === trip[0]){
                cy.wrap($el).click()
            }
        })
    })

    // Below does not work
    const date = new Date()
    const today = new Date(date.getMonth(), date.getDate(), date.getFullYear())

    it.only('Test Setting Dynamic Dates', () => {
        bookingFunction.getDatePickers().first().select(today)
    })
})