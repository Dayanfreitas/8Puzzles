/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class Page {
    acessarJogo() {
        cy.visit(url)
    }
}

export default Page;