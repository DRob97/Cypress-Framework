/// <reference types="cypress"/>

// .should('have.length', 20)
describe('Selector | Class', () => {
    it('Validate there are 20 cards on TechGlobal Frontend Training page', () => {
        cy.visit('https://techglobal-training.com/frontend')

        cy.get('div[class="Card_cards__1vJx1 cards"]').should('have.length', 20)
        // cy.get(".cards").should('have.length', 20)

    })
})