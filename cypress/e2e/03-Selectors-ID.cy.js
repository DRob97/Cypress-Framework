/// <reference types="cypress"/>

describe('Selector | ID', () => {
    it('Validate TechGlobal Logo navigates user back to home page', () => {
        // Code goes here
        cy.visit('https://techglobal-training.com/')
        
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('#logo').click()
        cy.url().should('eq', 'https://techglobal-training.com/')
    })

    it('Validate Html Elements Heading', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('#card-1').click()
        cy.get('#main_heading').should('have.text', 'Html Elements')
    })

    it('Validate ID Locators', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('#card-1').click()
        
        cy.get('#hello_paragraph').should('be.visible')
        cy.get('#testing_paragraph').should('be.visible')

        cy.get('#hello_paragraph').should('have.text', 'Hello World!')
        cy.get('#testing_paragraph').should('have.text', 'I like automation testing!')
    })
})