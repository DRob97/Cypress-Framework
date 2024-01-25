import BasePage from "./BasePage"

class Tables extends BasePage{
    // Locators
        getTableHeaders(){
            return cy.get('tr > .header')
        }
        
    // Methods
}

export default Tables