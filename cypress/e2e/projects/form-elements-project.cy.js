/// <reference types="cypress"/>

describe('Form Elements Project', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
    })

    it('Test Case 01 - Validate the "Contact Us" information', () => {

        cy.get('.is-size-3').should('have.text', 'Contact Us')
        cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
        cy.get('#email').should('have.text', 'info@techglobalschool.com')
        cy.get('#phone-number').should('have.text', '(224) 580-2150')
    })

    it('Test Case 02 - Validate the "Full name" input box', () => {

        cy.get('input[placeholder$="full name"]').should('be.visible')
        cy.get('input[placeholder$="full name"]').should('have.attr', 'required')
        cy.get('form > :nth-child(1) > label').should('have.text', 'Full name *')
        cy.get('input[placeholder$="full name"]').should('have.attr', 'placeholder').and('eq', 'Enter your full name')
    })

    it('Test Case 03 - Validate the "Gender" radio button', () => {
        cy.get('form > :nth-child(2) > div > :nth-child(1)').should('have.text', 'Gender *')
        cy.get('form > :nth-child(2) > div > :nth-child(2) > input').should('have.attr', 'required')
        // cy.get('form > :nth-child(2) > div > label').should('have.attr', '.radio')
        // .and('be.oneOf', ["Male", "Female", "Prefer not to disclose"])
        cy.get('form > :nth-child(2) > div > :nth-child(2)').first().should('have.text', 'Male')
        .next().should('have.text', 'Female')
        .next().should('have.text', 'Prefer not to disclose')

        cy.get('.mr-1').should('be.enabled').and('not.be.checked')

        cy.get('form > :nth-child(2) > div > :nth-child(2) > input').click()
        cy.get('form > :nth-child(2) > div > :nth-child(3) > input').should('be.enabled').and('not.be.checked')
        cy.get('form > :nth-child(2) > div > :nth-child(4) > input').should('be.enabled').and('not.be.checked')
        
        cy.get('form > :nth-child(2) > div > :nth-child(3) > input').click()
        cy.get('form > :nth-child(2) > div > :nth-child(2) > input').should('be.enabled').and('not.be.checked')
        cy.get('form > :nth-child(2) > div > :nth-child(4) > input').should('be.enabled').and('not.be.checked')
    })
    
})