/// <reference types="cypress"/>

describe('Login Function Project',() => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')
    })

    it('Test Case 01 - Validate the login form', () => {
        // Validate username input box is displayed and not required
        cy.get('#username').should('be.visible').and('not.have.attr', 'required')

        // Validate label of username input box
        cy.get('label[for="username"]').should('have.text', 'Please enter your username')

        // Validate password input box is displayed and not required
        cy.get('#password').should('be.visible').and('not.have.attr', 'required')

        // Validate label of password input box
        cy.get('label[for="password"]').should('have.text', 'Please enter your password')

        // Validate "LOGIN" button is displayed, clickable, and has the proper label
        cy.get('#login_btn').should('be.visible').and('be.enabled').and('have.text', 'LOGIN')

        // Validate "Forgot Password" link is displayed, clickable, and has the proper label
        cy.get('a[href="/frontend/project-2"]').should('be.visible').and('have.text', 'Forgot Password?').click()
        cy.location('pathname').should('eq', '/frontend/project-2')
    })

    it('Test Case 02 - Validate the valid login', () => {
        // Enter Username "TechGlobal"
        cy.get('#username').type('TechGlobal')

        // Enter Password "Test1234"
        cy.get('#password').type('Test1234')

        // Click login button
        cy.get('#login_btn').click()

        // Validate success message
        cy.get('#success_lgn').should('be.visible').and('have.text', 'You are logged in')

        // Validate text on 
        cy.get('#logout').should('be.visible').and('have.text', 'LOGOUT')
    })

    it('Test Case 03 - Validate the logout', () => {
        // Enter Username "TechGlobal"
        cy.get('#username').type('TechGlobal')

        // Enter Password "Test1234"
        cy.get('#password').type('Test1234')

        // Click login button
        cy.get('#login_btn').click()

        // Click logout button
        cy.get('#logout').click()

        // Validate login form is visible
        cy.get('body form').should('be.visible')
    })

    it('Test Case 04 - Validate the "Forgot Password?" Link and "Reset Password" modal', () => {
        // Click on Forgot Password?
        cy.get('a[href="/frontend/project-2"]').click()

        // Validate model heading is displayed with correct message
        cy.get('#modal_title').should('be.visible').and('have.text', 'Reset Password')

        // Validate "close" button is displayed
        cy.get('button[class="delete"]').should('be.visible')

        // Validate email input box is displayed
        cy.get('#email').should('be.visible')

        // Validate label of email input box
        cy.get('label[for="email"]').then((element) => {
            const label = element.text();
            expect(label.trim()).to.equal("Enter your email address and we'll send you a link to reset your password.")
        })
        
        // Validate "SUBMIT" button is displayed, clickable, and has text "SUBMIT"
        cy.get('#submit').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')
    })

    it('Test Case 05 - Validate the "Reset Password" modal close button', () => {
        // Click on "Forgot Password?" link
        cy.get('a[href="/frontend/project-2"]').click()

        // Validate "Reset Password" modal is displayed
        cy.get('.modal-card').should('be.visible')

        // Click close button
        cy.get('button[class="delete"]').click()

        // Validate modal has been closed
        cy.get('.modal-card').should('not.exist')
    })

    it('Test Case 06 - Validate the "Reset Password" form submission', () => {
        // Click on "Forgot Password?" link
        cy.get('a[href="/frontend/project-2"]').click()

        // Enter an email
        cy.get('#email').type('info@techglobalschool.com')

        // Click the submit button
        cy.get('#submit').click()

        // Validate proper message is displayed after sucessfully submitting the "Reset Password" form
        cy.get('#confirmation_message').should('be.visible')
        .and('have.text', 'A link to reset your password has been sent to your email address.')
    })
    
    const loginInfo = [
        {
            description: 'Validate the invlaid login with the empty credentials',
            username: '',
            password: '',
            error: 'Invalid Username entered!'
        },
        {
            description: 'Validate the invalid login with the wrong username',
            username: 'John',
            password: 'Test1234',
            error: 'Invalid Username entered!'
        },
        {
            description: 'Validate the invalid login with the wrong password',
            username: 'TechGlobal',
            password: '1234',
            error: 'Invalid Password entered!'
        },
        {
            description: 'Validate the invalid login with the wrong username and password',
            username: 'John',
            password: '1234',
            error: 'Invalid Username entered!'
        }
    ]

    loginInfo.forEach((loginAttempt, index) => {
        it(`Test Case ${index + 7} - ${loginAttempt.description}`, () => {
            if(loginAttempt.username && loginAttempt.password){
                cy.get('#username').type(loginAttempt.username)
                cy.get('#password').type(loginAttempt.password)
            }
            
            cy.get('#login_btn').click()

            cy.get('#error_message').should('be.visible')
            .and('have.text', loginAttempt.error)
        })
    })
})