Cypress.Commands.add('preencheCamposObrigatorios', function (fieldVals = {}) {
  const {
    document = Cypress.env('cpf'),
    whatsapp = Cypress.env('whatsapp'),
    user_email = Cypress.env('user_email'),
    postal_code = Cypress.env('cep'),
    user_name = Cypress.env('user')

  } = fieldVals

  cy.visit('/deliver')
  cy.get('input[name="name"]')
    .type(user_name, { log: false })
  cy.get('input[name="cpf"]')
    .type(document, { log: false })
  cy.get('input[name="email"]')
    .type(user_email, { log: false })
  cy.get('input[name="whatsapp"]')
    .type(whatsapp, { log: false })
  cy.get('input[name="postalcode"]')
    .type(postal_code, { log: false })
  cy.get('input[type="button"]')
    .should('be.visible')
    .click()
  cy.get('input[name="address-number"]')
    .type('400')  
  cy.get('input[name="address-details"]')
    .type('Apto 101')
})
Cypress.Commands.add('verificaEnderecoCorreto', () => {
  cy.get('input[value="Rua Joaquim Muniz Neto"]')
    .should('be.visible')
  cy.get('input[value="Ouro Verde"]')
    .should('be.visible')
  cy.get('input[value="Teixeira de Freitas/BA"]')
    .should('be.visible')  
  
})
