/// <reference types="cypress"/>
import BookingFunction from '../../pages/BookingFunctionPage'

describe('Booking Function Project', function() {

    beforeEach(() => {
        cy.fixture('booking_function').then(function(data) {
            this.dropdowns = data.dropdowns
            this.onePassOneWay = data.onePassOneWay
            this.trip1Confirmation = data.trip1Confirmation
            this.onePassRound = data.onePassRound
            this.trip2Confirmation = data.trip2Confirmation
            this.twoPass = data.twoPass
            this.trip3Confirmation = data.trip3Confirmation
            
        })

        cy.clickCard('Project - Booking Function')
    })

    const bookingFunction = new BookingFunction()

    it('Test Case 01 - Validate the default Book your trip form', function() {
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

    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', function() {
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

    it('Test 03', function() {
        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.onePassOneWay[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(this.onePassOneWay[2])

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).select(this.onePassOneWay[1][index])
        })

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip1Confirmation[0][0])
        .next().should('exist').and('have.text', this.trip1Confirmation[0][1])

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip1Confirmation[1][index])
        })
    })

    it('Test 04', function() {
        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.onePassRound[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(this.onePassRound[2][0])
        bookingFunction.getDatePickers().last().clear().type(this.onePassRound[2][1])

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).select(this.onePassRound[1][index])
        })

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip2Confirmation[0][0])
        .next().should('exist').and('have.text', this.trip2Confirmation[0][1])
        
        bookingFunction.getReturnHeading().should('exist')
        .next().should('exist').and('have.text', this.trip2Confirmation[1][0])
        .next().should('exist').and('have.text', this.trip2Confirmation[1][1])

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip2Confirmation[2][index])
        })
    })

    it('Test 05', function() {
        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.twoPass[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(this.twoPass[2])
       

        for(let i = 0; i <= 1; i++){
            bookingFunction.getDropDowns().each(function($el, index){
                cy.wrap($el).select(this.twoPass[1][index])
            })
        }

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip3Confirmation[0][0])
        .next().should('exist').and('have.text', this.trip3Confirmation[0][1])

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip3Confirmation[1][index])
        })
    })
})

// const onePassOneWay = ['One way', 'Business', 'Illinois', 'Florida', 1, 'Senior (65+)']
    // const onePassRound = ['Round trip', 'First', 'California', 'Illinois', 1, 'Adult (16-64)']
    // const twoPass = ['One way', 'Premium Economy', 'New York', 'Texas', 2, ['Adult (16-64)', 'Child (2-11)']]

    // const trips = [onePassOneWay, onePassRound, twoPass]

    // const trips = [this.onePassOneWay, this.onePassRound, this.twoPass]