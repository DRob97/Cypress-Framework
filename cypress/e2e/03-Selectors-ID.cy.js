/// <reference types="cypress"/>

describe('Selector | ID', () => {
    it('Validate TechGlobal Logo navigates user back to home page', () => {
        // your code goes here
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

    it('Validate Paragraph Elements', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('#card-1').click()

        cy.get('#hello_paragraph').should('be.visible')
        cy.get('#hello_paragraph').should('have.text', 'Hello World!')

        cy.get('#testing_paragraph').should('be.visible')
        cy.get('#testing_paragraph').should('have.text', 'I like automation testing!')
    })

    it('Validate Paragraph Elements with Alias', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('#card-1').click()
        
        cy.get('#hello_paragraph').as('first_p')
        cy.get('#testing_paragraph').as('second_p')

        cy.get('@first_p').should('be.visible')
        cy.get('@second_p').should('be.visible')

        cy.get('@first_p').should('have.text', 'Hello World!')
        cy.get('@second_p').should('have.text', 'I like automation testing!')
        
    })
})