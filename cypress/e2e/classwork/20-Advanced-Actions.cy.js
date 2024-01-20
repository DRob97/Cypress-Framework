/// <reference types="cypress"/>

describe("Keyboard & Mouse Actions", () => {
    beforeEach(() => {
      // This will fail if the page doesn't send text/html with 200 status
      cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
      cy.clickCard("Html Elements");
    });
  
    it("Keyboard Actions", () => {
        
    });
})