/// <reference types="cypress"/>
import Tables from '../../pages/TablesPage.js'

describe('Static Tables', () => {

    beforeEach(() => {
        cy.fixture('tables').then(function(data) {
            this.headers = data.headers
        })
        
        cy.clickCard('Tables')
    })

    const tables = new Tables()

    /**
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * 
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */

    it('Verify the headers of the table',function() {
        tables.getTableHeaders().each(($el, index) => {
            cy.wrap($el).should('have.text', this.headers[index])
        })
    })
})
