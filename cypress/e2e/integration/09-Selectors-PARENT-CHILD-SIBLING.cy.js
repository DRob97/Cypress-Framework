/// <reference types="cypress"/>

describe('Selectors | CSS parent, child, sibling', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    it('Validate TechGlobal Elements with parent -hild', () => {
        cy.get('input').should('have.length.at.least', 10)
        cy.get('div>input').should('have.length.lessThan', 10)
        cy.get('div input').should('have.length', 12)
    })


    it('Validate TechGlobal Elements with adjacent sibling', () => {
        cy.get('div[data-identifier="Paragraphs"]>p').should('have.length', 2)
        cy.get('div[data-identifier="Paragraphs"]>p+p').should('have.length', 1)
    })
})