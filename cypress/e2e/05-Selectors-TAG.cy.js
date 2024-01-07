/// <reference types="cypress"/>

// we use anchor tags <a> for links
// we use image tags <img> for images
// we use paragraph tags <p> for paragraphs
// we use button tags <button> for buttons
// we use heading tags <h1> ... <h6> for headings
describe('Selector | Tag', () => {
    it('Validate Frontend Cards', () => {
        cy.visit('https://techglobal-training.com/frontend')
        
        // Locate all elements that are links
        cy.get('a').should('have.length', 28)
        // Locate all elements that are images
        cy.get('img').should('have.length', 1)
        // Locate all elements that are paragraphs
        cy.get('p').should('have.length', 2)
        // Locate all elements that are buttons
        cy.get('button').should('have.length', 0)
        // Locate all elements that are headings
        cy.get('h1, h2, h3, h4, h5, h6').should('have.length', 0)
    })
})