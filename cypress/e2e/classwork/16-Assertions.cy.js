/// <reference types="cypress"/>

describe("Assertions", () => {
    beforeEach(() => {
      // This will fail if the page doesn't send text/html with 200 status
      cy.visit("https://techglobal-training.com/frontend/");
      cy.get(".cards").contains("Html Elements").click();
    });
    it("Default Assertions", () => {
      cy
        // there is a default assertion that thi
        // button must exist in the DOM before proceeding
        .get("#register_button  ")
        // since cypress internally checks of the web element on the dom tree or not
        // we dont need to below assertion
        // .should('be.visible')
  
        // before issuing the click, this button must be "actionable"
        // it cannot be covered, or disabled, or hidden from the view.
        .click();
  
      cy.get("#date_input1").click()
  
      // This will fail because it will be covered by date_input1
      // cy.get('#date_input2').click()
  
      cy.get("#text_input1").type("TechGlobal")
    });
  
    it("Implicit Assertiions", () => {
      // Any assertion we do using .should() method, is an "Implicit Assertion"
  
      cy.get("#main_heading").should("be.visible")
  
      // Checks if the elements text is equal to expected text
      cy.get("#main_heading").should("have.text", "Html Elements")
  
      // Checks if the elements text contains expected text
      cy.get("#main_heading").should("contain.text", "Html Elements")
      cy.get("#main_heading").should("include.text", "Html Elements")
  
      cy.url().should('eq', 'https://techglobal-training.com/frontend/html-elements')
      cy.title().should('equal', 'TechGlobal Training | Html Elements')
  
  
      // have.attr chainer checks the elements attribute property
      // it can get 2, or 3 arguments, we can validate if element has specific attribute, and the value of it
      cy.get("#main_heading").should('have.attr', 'id')
      cy.get("#main_heading").should('have.attr', 'id', 'main_heading')
  
  
      // 'have.length' chainer validates how many web elements our locator returns
      cy.get('[data-identifier="Paragraphs"] > p').should('have.length', 2)
      cy.get('#main_heading').should('have.length', 1)
  
      // be.enabled checks if the web eement is interactable
      cy.get('#checkbox_1').should('be.enabled')
  
      // be.checked checks if the web element is checked
      cy.get('#checkbox_1').should('not.be.checked').check().should('be.checked')
  
      cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')
      cy.get('#main_heading').should('have.css', 'padding', '0px')
  
      /**
       * 1. Navigate to "https://techglobal-training.com/frontend/project-4"
       * 2. Click on Add Product Button > Model Opens
       * 3. Close the model and validate model is not visible
       */
  
      cy.visit('https://techglobal-training.com/frontend/project-4')
  
      cy.get('#add_product_btn').click()
      cy.get('.delete').click()
  
      cy.get('.modal-card')
      // do not use this if you want to validate its not visible anymroe
      // .should('not.be.visible')
      // ** instead, use this **
      .should('not.exist')
    });
  
  
    it('Explicit Assertons', () => {
  
      // This is explicit assertion
      expect(true).equal(true)
  
      // this is a failure
      // expect(cy.url()).equal(cy.url())
  
      cy.get('#main_heading').should('have.text', 'Html Elements')
  
      const el = cy.get('#main_heading')
  
      el.should('have.text', 'Html Elements')
  
  
  
      cy.get('#main_heading').invoke('text').then((element) => {
          const el = element
          cy.log(el.toUpperCase() + ' retrieved element')
  
          expect(el).equal('Html Elements')
      })
  
  
      cy.get('#main_heading').then(($ele) => {
          const el = $ele.text()
          cy.log(el.toUpperCase())
          expect(el).to.equal('Html Elements')
          expect(el).to.include('Html Elements')
          expect(el).to.exist
      })
  
  
      cy.get('#main_heading').invoke('attr', 'id').then((attr) => {
          expect(attr).to.equal('main_heading')
      })
  
      cy.get('#main_heading').then(($el) => {
          const attr = $el.attr('id')
          expect(attr).to.equal('main_heading')
      })
  
  
      cy.get('[data-identifier="Paragraphs"] > p').then(($el) => {
          // cy.log($el.length)
  
          expect($el).to.have.length(2)
      })
  
      cy.get('#checkbox_1').then(($el) => {
          expect($el).to.be.enabled
          expect($el).to.be.visible
          expect($el).not.to.be.checked
      })
  
      // cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')
  
  
      cy.get('#main_heading').then(($el) => {
          expect($el.css('color')).to.equal('rgb(105, 105, 105)')
      })
    })
  
    it('Validate Multiple Elements', () => {
  
      cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
      cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')
  
      cy.get('[data-identifier="Paragraphs"] > p').as('paragraps')
  
      const arr = ['Hello World!', 'I like automation testing!']
  
      for(let i = 0; i < arr.length; i++){
          cy.get('@paragraps').eq(i).should('have.text', arr[i])
      }
  
      cy.get('@paragraps').each(($el, index) => {
          // cy.log($el.text() + `${index}. of the web element`)
          expect($el.text()).to.equal(arr[index])
          expect($el).to.be.visible
      })
    })
  });