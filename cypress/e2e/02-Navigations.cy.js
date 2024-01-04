/// <reference types="cypress"/>

describe('Cypress Navigation', () => {

    it('Go to URL, refresh, navigate forward and back', () => {
        cy.visit('https://techglobal-training.com/')

        // refresh
        cy.reload()

        //navigate to another page
        cy.visit('https://google.com/')
        
        // navigate back to TechGlobal website
        cy.go('back')

        // navigate forward to Google website
        cy.go('forward')
    })
})