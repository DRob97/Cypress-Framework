/// <reference types="cypress"/>
import BookingFunction from '../../pages/BookingFunctionPage'

describe('Booking Function Project', () => {

    beforeEach(() => {
        // cy.fixture("booking_function").then(function(data) {
        //     this.something = data.something
        // })

        cy.clickCard('Project - Booking Function')
    })

    const bookingFunction = new BookingFunction()

    it('Tests 1 & 2 go in Here', function() {

    })

    it('Tests 3, 4 & 5 go in Here', function() {

    })
})