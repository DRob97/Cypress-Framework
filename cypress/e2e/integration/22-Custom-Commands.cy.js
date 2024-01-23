/// <reference types="cypress"/>

describe("Custom Commands", () => {

    beforeEach(() => {
      cy.visit(`${Cypress.env('SITE_URL')}/frontend`);
      cy.clickCard("Html Elements");
    });
    
    it("Parent Commands", () => {
        cy.selectDropdownOption('#company_dropdown1', 'Apple')
        cy.selectDropdownOption('#company_dropdown2', 'Microsoft')
    });
  });