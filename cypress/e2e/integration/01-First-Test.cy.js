/// <reference types="cypress"/>

// describe is used to group together a bundle of tests
describe('TechGlobal Training Home Page Validation', () => { 
  it('Validate TechGlobal Training application title and URL', () => {
    cy.visit('https://techglobal-training.com/')

    // Validate the Title - 
    cy.title().should('eq', 'TechGlobal Training | Home')

    // Validate the URL
    cy.url().should('eq', 'https://techglobal-training.com/')
    
  })

  // contain and include validations
  it('TechGlobal Training application title and URL with contains', () => {
    // your code goes here

    cy.visit('https://techglobal-training.com/')

    // Validate the Title - 
    cy.title().should('contain', 'TechGlobal')
    cy.title().should('include', 'TechGlobal')

    // Validate the URL
    cy.url().should('include', 'techglobal-training')
    cy.url().should('contain', 'techglobal-training')
  })
})