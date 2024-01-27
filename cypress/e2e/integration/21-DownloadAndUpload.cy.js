/// <reference types="cypress"/>

describe('File Upload & File Download', () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.reload()
    cy.clickCard('File Download & Upload')
  })

  let fileName

  it('File Upload', () => {
    cy.get('#file_upload').selectFile('cypress/downloads/SampleText.txt')

    // Way to upload more than 1 file for the websites allowing you to upload multiple files at a time.
    // cy.get('#file_upload').selectFile([`cypress/downloads/${fileName}`, `cypress/downloads/${fileName}2`])

    // { action: 'drag-drop'} will give you option to drag the file into upload area
    // cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`, { action: 'drag-drop'})

    cy.get('#file_submit').realClick()

    // cy.get('.is-success').should('have.text', `You uploaded ${fileName}`)
  })

  it('File Download', () => {
    cy.get('#file_download').click()

    fileName = 'SampleText.txt'

    cy.readFile(`cypress/downloads/${fileName}`)

  })

 
})
