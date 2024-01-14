/// <reference types="cypress"/>

describe('Form Elements Project', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
    })

    it('Test Case 01 - Validate the "Contact Us" information', () => {
        // Validate contact info heading Text
        cy.get('.is-size-3')
        .should('have.text', 'Contact Us')
        // Validate contact address
        cy.get('#address')
        .should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
        // Validate contact email
        cy.get('#email')
        .should('have.text', 'info@techglobalschool.com')
        // Validate contact phone number
        cy.get('#phone-number')
        .should('have.text', '(224) 580-2150')
    })

    it('Test Case 02 - Validate the "Full name" input box', () => {
        // Validate full name input box is displayed, has a placeholder with expected text, and is required
        cy.get('input[placeholder$="full name"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your full name')
        .and('have.attr', 'required')
        // Validate full name input box label text
        cy.get('label[for="name"]')
        .should('have.text', 'Full name *')
    })

    it('Test Case 03 - Validate the "Gender" radio button', () => {
        // Validate radio button label text
        cy.get('form > :nth-child(2) > div > :nth-child(1)')
        .should('have.text', 'Gender *')
        // Validate radio button field is required
        cy.get('.mr-1')
        .first()
        .should('have.attr', 'required')
        // Validate individual radio button labels
            // cy.get('form > :nth-child(2) > div > label[radio]')
            // .and('be.oneOf', ["Male", "Female", "Prefer not to disclose"])
        cy.get('.radio')
        .first().should('have.text', 'Male')
        .next().should('have.text', 'Female')
        .next().should('have.text', 'Prefer not to disclose')
        // Validate the radio buttons are clickable and not selected
        cy.get('.mr-1')
        .should('be.enabled')
        .and('not.be.checked')
        // Select "Male" radio button, verify it is selected and that the other are not whilst still being clickable
        cy.get('.mr-1')
        .first()
        .click()
        .should('be.checked')
        cy.get('form > :nth-child(2) > div > :nth-child(3) > input')
        .should('be.enabled')
        .and('not.be.checked')
        cy.get('.mr-1')
        .last()
        .should('be.enabled')
        .and('not.be.checked')
        // Select "Female" radio button, verify it is selected and that the other are not whilst still being clickable
        cy.get('form > :nth-child(2) > div > :nth-child(3) > input')
        .click()
        .should('be.checked')
        cy.get('.mr-1')
        .first()
        .should('be.enabled')
        .and('not.be.checked')
        cy.get('.mr-1')
        .last()
        .should('be.enabled')
        .and('not.be.checked')
    })

    it('Test Case 04 - Validate the "Address" input box', () => {
        // Validate address input box is displayed, has a placeholder with expected text, and is not required
        cy.get('input[placeholder$="address"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your address')
        .and('not.have.attr', 'required')
        // Validate address input box label
        cy.get('form > :nth-child(3) > label')
        .should('have.text', 'Address')
    })

    it('Test Case 05 - Validate the "Email" input box', () => {
        // Validate email input box is displayed, has a placeholder with expected text, and is required
        cy.get('input[placeholder$="email"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your email')
        .and('have.attr', 'required')
        // Validate email input box label
        cy.get('form > :nth-child(4) > label')
        .should('have.text', 'Email *')
    })

    it('Test Case 06 - Validate the "Phone" input box', () => {
        // Validate address input box is displayed, has a placeholder with expected text, and is not required
        cy.get('input[placeholder$="phone number"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your phone number')
        .and('not.have.attr', 'required')
        // Validate phone input box label
        cy.get('form > :nth-child(5) > label')
        .should('have.text', 'Phone')
    })
    
    it('Test case 07 - Validate the "Message" text area', () => {
        // Validate message text area is displayed, has a placeholder with expected text, and is required
        cy.get('.textarea')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Type your message here...')
        .and('not.have.attr', 'required')
        // Validate message text area label
        cy.get('form > :nth-child(6) > label')
        .should('have.text', 'Message')
    })

    it('Test case 08 - Validate the "Consent" checkbox', () => {
        // cy.get('.checkbox')
        // .should('have.text', 'I give my consent to be contacted.')
        // Validate the text of the "Consent" checkbox
        cy.get('.checkbox').then(($el) => {
            const element = $el.text()
            expect(element.trim()).to.equal('I give my consent to be contacted.')
        })
        // Assign path a reference name
        cy.get('input[type="checkbox"]').as('c-box')
        // Validate consent check-box is displayed and is required
        cy.get('@c-box')
        .should('be.enabled')
        .and('have.attr', 'required')
        // Validate consent checkbox is not checked, and can be checked and un-checked by clicking on it
        cy.get('@c-box')
        .should('not.be.checked')
        .click()
        .should('be.checked')
        .click()
        .should('not.be.checked')
    })

    it('Test case 09 - Validate the "SUBMIT" button', () => {
        // // Validate address input box is displayed, enabled, and has expected text
        cy.get('.is-link')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'SUBMIT')
    })
    
    it('Test case 10 - Validate the "Form Submission"', () => {
        // Type name into "Full Name" input box
        cy.get('input[placeholder$="full name"]')
        .type('Dylan Robertson')
        // Click on "Male" radio button
        cy.get('.mr-1')
        .first()
        .click()
        // Type address into "Address" input box
        cy.get('input[placeholder$="address"]')
        .type('123 Fake Street, Chicago, IL 67890')
        // Type email into "Email" input box
        cy.get('input[placeholder$="email"]')
        .type('dylanlrobertson@gmail.com')
        // Type phone number into "Phone" input box
        cy.get('input[placeholder$="phone number"]')
        .type('309-221-1708')
        // Type a message into "Message" text area
        cy.get('.textarea')
        .type('Hello World! I am learning to integrate JavaScript and Cypress!')
        // Click on "Consent" checkbox
        cy.get('input[type="checkbox"]')
        .click()
        
        // Click on "SUBMIT" button
        cy.get('.is-link')
        .click()
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)

            if(e.message.includes('Cannot read properties of undefined')){
                return false
            }
        })
        // Verify expected message appears after submitting the form
        cy.get('.mt-5')
        .should('exist')
        //*/
    })
})