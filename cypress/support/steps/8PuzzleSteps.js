/* global Given, Then, When */

import Page from '../pageObjects/Page'
const page = new Page

    Given("I go to", () => {
        page.acessarJogo();
    })

    When('I type {string} in {string}',
    (text, field) => {
        cy.get(`input[name=${field}]`)
            .type(text, { force: true })
    })

    When('I wait for {int} second', (seconds) => {
        cy.wait(seconds * 1000)
    })

    When('I click on {string}', (button) => {
        cy.get(`button[name=${button}]`).click({ force: true })
    })

    When('I click on text {string}', (text) => {
        cy.contains(text).click()
    })

    Then('I should see {string}', (text) => {
        cy.contains(text).should('exist')
    })
    
    Then('I shouldn\'t see {string}', (text) => {
        cy.contains(text).should('not.exist')
    })