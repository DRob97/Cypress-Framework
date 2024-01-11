/// <reference types="cypress"/>
/*
TEST CASE:
Go to https://techglobal-training.com/frontend/html-elements
Validate that 'Enter text here' input is visible
Validate that 'Enter text here' is enabled (textable)
Validate that 'Enter text here' input placeholder is 'Enter text here'
Enter 'Cypress' to 'Enter text here' input
Validate that 'Enter text here' input value is 'Cypress'
Clear the text from the 'Enter text here' input
Validate that 'Enter text here' input value is empty
*/

describe('Actions', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    it('Actions | Type & Clear', () => {

        cy.get('#text_input1')
        .should('be.visible')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'Enter text here')
        .type('JavaScript')
        .should('have.value','JavaScript')
        .clear()
        .should('have.value', '')

        cy.get('#text_input2').as('EnterTextBelowInput')
        // cy.get('@EnterTextBelowInput').parent().parent().children('label').as('EnterTextBelowInputLabel')
        cy.contains('Enter text below').should('be.visible').and('have.text', 'Enter text below')

        const word = 'Cypress'

        cy.get('@EnterTextBelowInput').should('be.visible').and('be.enabled')
        .type(word)
        .should('have.value', word)
        .clear()
        .should('have.value', '')
    })
})