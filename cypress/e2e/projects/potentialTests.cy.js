/// <reference types="cypress"/>
// booking functions radio buttons:

// bookingFunction.getRadioButtons.each


// booking functions labels and dropdown/date picker visiblity:

// for(i = 3; i < .length; i++){
//     bookingFunction.getLabels().eq(i).should
// }

describe('Testing Things', () => {
    beforeEach(() => {
        cy.clickCard('Project - Booking Function')
    })

    it.skip('Testing label to input movement', () => {
        cy.get('div > label').should('be.visible')
        .next().should('be.visible')
    })

    it('Test Case 01, Hard Coded', () => {
        cy.get('[value="One way"]').should('be.visible')
        .and('be.enabled').and('have.attr', 'checked')
        
        cy.get('[value="Round trip"]').should('be.visible')
        .and('be.enabled').and('not.have.attr', 'checked')
        ///////////////////////////////////////////////////
        cy.contains('Cabin Class').should('be.visible')
        .next().should('be.visible')
        
        cy.contains('From').should('be.visible')
        .next().should('be.visible')
        
        cy.contains('To').should('be.visible')
        .next().should('be.visible')
        //////////////////////////////////////////////////
        cy.contains('Depart').should('be.visible')
        .next().should('be.visible')
        
        cy.contains('Return').should('be.visible')
        .next().should('be.visible').and('not.be.enabled')
        ///////////////////////////////////////////////////////
        cy.contains('Number of passengers').should('be.visible')
        .next().should('be.visible')//.and('option:selected', '1')

        cy.contains('Passenger 1').should('be.visible')
        .next().should('be.visible')//.and('have.attr', 'placeholder', 'Adult (16-64')
        ///////////////////////////////////////////////////////////////////
        cy.get('button[type]').should('be.visible').and('be.enabled')
    })

})