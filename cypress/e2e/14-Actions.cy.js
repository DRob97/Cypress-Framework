/// <reference types="cypress"/>

describe('Actions', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    it('Actions | Type & Clear', () => {
        cy.get('#text_input1')
        .should('be.visible')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'Enter text here')
        .type('JavaScript')
        .should('have.value', 'JavaScript')
        .clear()
        .should('have.value', '')


        cy.get('#text_input2').as('EnterTextBelowInput')
        cy.contains('Enter text below').should('be.visible').and('have.text', 'Enter text below')
        //cy.get('@EnterTextBelowInput').parent().parent().children('label').as('EnterTextBelowInputLabel')

        const word = 'JavaScript'

        cy.get('@EnterTextBelowInput').should('be.visible').and('be.enabled')
        .type(word)
        .should('have.value', word)
        .clear()
        .should('have.value', '')
    })

    it('Actions | Check & Uncheck Checkboxes', () => {
        cy.get('#apple_check').should('be.visible').and('have.text', 'Apple')
        
        cy.get('#checkbox_1')
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')

        cy.get('#tesla_check').should('be.visible').and('have.text', 'Tesla')
        
        cy.get('#checkbox_3')
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')
    })

    it('Actions | Check Radio Buttons', () => {
        cy.get('#js_radio').should('be.visible').and('have.text', 'JavaScript')
        
        cy.get('#radio_1_option_2')
        .should('be.visible')
        .and('not.be.checked')
        .check()
        .should('be.checked')


        // Validate C# radio button 
        // cy.get('#c_radio').should('be.visible').and('have.text', 'C#') // There is a BUG
        cy.get('#radio_1_option_3')
        .should('be.visible')
        .and('not.be.checked')
        .check()
        .should('be.checked')
    })

    it('Actions | Select', () => {
        cy.get('#company_dropdown1').should('be.visible')
        cy.get('#company_dropdown1 option:selected').should('have.text', 'Select a company...')

        // 1. selecting by visible text
        cy.get('#company_dropdown1').select('Microsoft')
        cy.get('#company_dropdown1 option:selected').should('have.text', 'Microsoft')

        // 2. selecting by value
        cy.get('#company_dropdown1').select('Apple')
        cy.get('#company_dropdown1 option:selected').should('have.text', 'Apple')

        // 3. selecting by index
        cy.get('#company_dropdown1').select(3)
        cy.get('#company_dropdown1 option:selected').should('have.text', 'Tesla')
    })

    it.only('Actions | Type Dates', () => {
        // send date 10/10/2000 and validate you see that date in the input box

        cy.get('#date_input1')
        .should('be.visible')
        .should('have.attr', 'placeholder', 'mm/dd/yyyy')
        .should('have.value', '')
        .type('10/10/2000{enter}')
        .should('have.value', '10/10/2000')
        .clear('{enter}')
        .should('have.value', '')
        .type('{enter}')

        cy.get('#date_input2')
        .should('be.visible')
        .should('not.have.value', '')
        .clear()
        .should('have.value', '')
        .type('10/10/2000{enter}')
        .should('have.value', '10/10/2000')
        .clear()
        .should('have.value', '')
        .type('{enter}')
    })
})