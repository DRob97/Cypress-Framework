/// <reference types="cypress"/>


describe('Selector | ATTRIBUTES', () => {

    // Runs once before the suite
    before(() => {
        cy.log('Execution of Selector | ATTRIBUTES started!!!')
    })

    // Runs once after the suite
    after(() => {
        cy.log('Execution of Selector | ATTRIBUTES is completed!!!')
    })

    // Before Each of the test below execute this block first
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    // After Each of the test below execute this block first
    afterEach(() => {
        cy.log('You can put all your after actions for each test case in this suite')
    })

    it('Validate Frontend Html Elements paragraphs', () => {
        // select all the paragraphs
        cy.get('p').should('have.length.at.least', 5)

        // select all the paragraphs that have id attribute
        cy.get('p[id]').should('have.length.lessThan', 5)

        // select all the paragraphs that have id attribute equals "hello_paragraph"
        cy.get('p[id="hello_paragraph"]').should('have.length', 1)
    })

    it('Validate Frontend Html Elements buttons', () => {
        // Validate that there are 3 button elements
        cy.get('button').should('have.length', 3)

        // Validate that there are 2 button elements with id attribute
        cy.get('button[id]').should('have.length', 2)

        // Validate that there is only one button element with id="register_button"
        cy.get('button[id="register_button"]').should('have.length', 1)

        // NOTE: Use #id_value if there is id for an element as the first choice

        cy.get('button[disabled]')
    })
})