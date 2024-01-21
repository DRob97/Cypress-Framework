/// <reference types="cypress"/>

describe('Selector | VISIBLE TEXT', () => {
    it('Validate Frontend Cards', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Waits')

        // Locate the elements which contains Tables text
        cy.contains('Tables')

        // Locate the elements which contains Project text
        cy.contains('Project')

        // Locate the elements which contains Elements text
        cy.contains('Elements')

        // Locate the elements which contains Actions text
        cy.contains('Actions')
    })
})

