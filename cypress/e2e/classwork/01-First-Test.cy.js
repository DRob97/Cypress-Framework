/// <reference types="cypress"/>

// describe is used to group together a bundle of tests (automated test cases)
describe('TechGlobal Training Home Page Validation', () => { // each it represents a test case
  it('Validate TechGlobal Training application title and URL', () => {
    cy.visit('https://techglobal-training.com/')

    // Validate the Title
    cy.title().should('eq', 'TechGlobal Training | Home')

    // Validate the URL
    cy.url().should('eq', 'https://techglobal-training.com/')

  })

  it('Validate TechGlobal Training application title and URL with contains', () => {
    cy.visit('https://techglobal-training.com/')

    // Validate the Title
    cy.title().should('contain', 'TechGlobal')

    // Validate the URL
    cy.url().should('include', 'techglobal-training')
  })
})