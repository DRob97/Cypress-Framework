/// <reference types="cypress"/>

describe('Selector | ATTRIBUTES', () => {
    it('Validate Frontend Html Elements Paragraphs', () => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
        // Select all paragraphs
        cy.get('p')
        // Select all paragraphs that have id attribute
        cy.get('p[id]')
        // Select all paragraphs that have id attribute: "hello_paragraph"
        cy.get('p[id="hello_paragraph"]')
    })

    it('Validate Frontend Html Elements Buttons', () => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
        // Validate that there are 3 button elements
        cy.get('button').should('have.length', 3)
        // Validate that there are 2 button elements with id attribute
        cy.get('button[id]').should('have.length', 2)
        // Validate that there is only 1 button element with id attribute: "register_button"
        cy.get('button[id="register_button"]').should('have.length', 1)
    })
})