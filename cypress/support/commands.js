// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add("clickCard", (link) => {
  cy.get(".cards").contains(link).click({force: true});
});

Cypress.Commands.add('selectDropdownOption', (selector, value) => {
  cy.get(selector).select(value)
})

/*
/**
 * This function takes a and b argument and returns the sum of them
 * @param {number} a - argument 1
 * @param {number} b - argument 2
 *
 *  @returns {number}
 */

Cypress.Commands.add('login', (username, password) => {
  cy.get('#text_input1').type(username)
  cy.get('#text_input2').type(password)
})

Cypress.Commands.add('haveText', (locator, expectedValue) => {
  cy.get(locator).should('have.text', expectedValue)
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add('logText', {prevSubject: true}, (subject) => {
  const text = subject.text()

  cy.log(`My text is: ${text}`)

  return cy.wrap(subject)
})

Cypress.Commands.add('haveText', {prevSubject: true}, (subject, expectedValue) => {
  const text = subject.text()

  expect(text).to.equal(expectedValue)
  // Below is better
  // cy.wrap(subject).should('eq', expectedValue)
})

Cypress.Commands.add('validateAttr', {prevSubject: true}, (subject, expectedAttr, expectedValue) => {
  cy.wrap(subject).should('have.attr', expectedAttr, expectedValue)
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
