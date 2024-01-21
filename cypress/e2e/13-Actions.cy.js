/// <reference types="cypress"/>

describe('Actions', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/actions')
    })

    it('Actions | click', () => {

        cy.get('#click').as('ClickOnMeButton')

        cy.get('@ClickOnMeButton')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'Click on me')

        cy.get('@ClickOnMeButton').click()

        cy.get('#click_result').should('be.visible').and('have.text', 'You clicked on a button!')
    })

    it('Actions | Right-Click', () => {
        cy.get('#right-click')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'Right-Click on me')
        .rightclick()

        cy.get('#right_click_result').should('be.visible').and('have.text', 'You right-clicked on a button!')
    })

    it('Actions | Double Click', () => {
        cy.get('#double-click')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'Double-Click on me')
        .dblclick()

        cy.get('#double_click_result').should('be.visible').and('have.text', 'You double-clicked on a button!')
    })

    it.only('Actions | Type & Clear', () => {
        cy.get('#input_box')
        .should('be.visible')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'Enter your message...')
        .type('Cypress')
        .should('have.value', 'Cypress')
        .clear()
        .should('have.attr', 'value', '')
    })
})