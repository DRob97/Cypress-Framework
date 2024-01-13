/// <reference types="cypress"/>

describe('Actions', () => {
    
    it('Actions | type and click', () => {
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Cypress{enter}')
        // cy.get('.pure-button').click()
        
        // Validate main heading equals 'Cypress'
        cy.get('.mw-page-title-main').should('have.text', 'Cypress')
        // Validate title of page contains 'Cypress'
        cy.title().should('contain', 'Cypress')
        // Validate the url of the page contains 'Cypress'
        cy.url().should('includes', 'Cypress')
    })
})