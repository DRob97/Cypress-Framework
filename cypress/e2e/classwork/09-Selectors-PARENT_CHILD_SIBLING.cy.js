/// <reference types="cypress"/>

describe('Dynamic Elements | CSS parent, child, sibling', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    it('Valide TechGlobal Elements 1', () => {
        cy.get('input').should('have.length.at.least', 10)      // Search for just 'input' tag
        cy.get('div>input').should('have.length.lessThan', 10)  // Search for 'input' tags that are direct children of 'div' tags
        cy.get('div input').should('have.length.at.least', 10)  // Search for 'input' tags that are any type of descendent of 'div' tags
    })

    it('Valide TechGlobal Elements 2', () => {                                      // can use parent>child:nth-child(number) to get adjacent sibling in position
                                                                                        // corresponding to the number
        cy.get('div[data-identifier="Paragraphs"]>p').should('have.length', 2)      // Get all direct children, starting with first
        cy.get('div[data-identifier="Paragraphs"]>p+p').should('have.length', 1)    // Move to adjacent sibling of first paragraph in div with this data-identifier
    })
})