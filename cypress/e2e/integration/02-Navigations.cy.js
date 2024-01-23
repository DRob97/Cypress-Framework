/// <reference types="cypress"/>

describe('Cypress Navigation', () => {

    it('Go to ULR, refresh, navigate forward and back', () => {
        cy.visit('https://techglobal-training.com/')

        // refresh the page
        cy.reload()

        // navigate to another page
        cy.visit('https://www.google.com/')

        // navigate back to TechGlobal website
        //cy.go('back')
        cy.go(-1)

        // navigate forward to Google website
        //cy.go('forward')
        cy.go(1)
    })
})