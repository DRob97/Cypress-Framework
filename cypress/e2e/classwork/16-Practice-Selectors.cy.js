/// <reference types="cypress"/>

describe('Practice Selectors', () => {

    it('Practice Selectors', () => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.contains('Html Elements')
        cy.contains('h1', 'Html Elements')

        cy.get('div').contains('Html Elements')
        cy.get('#main_header_container').contains('Html Elements')

        cy.get('[data-identifier="Unordered Lists"] #unordered_list_item2')
        cy.get('[data-identifier="Unordered Lists"]').find('#unordered_list_item2')
    })
})