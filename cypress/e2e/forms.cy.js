describe('forms tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test subscribe form', () => {
    cy.contains(/Testing form/i)
    cy.get('[data-test="subscribe-form"]').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('igor@igor.com')
    cy.contains(/Successfully subbed: igor@igor.com!/i).should('not.exist')
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/Successfully subbed: igor@igor.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: igor@igor.com!/i).should('not.exist')
    
    cy.get('@subscribe-input').type('igor@igor.io')
    cy.contains(/invalid email: igor@igor.io!/i).should('not.exist')
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/invalid email: igor@igor.io!/i).should('exist')
    cy.wait(3000)
    cy.contains(/invalid email: igor@igor.io!/i).should('not.exist')
    
    cy.contains(/fail!/i).should('not.exist')
    cy.get('[data-test="subscribe-button"]').click()
    cy.contains(/fail!/i).should('exist')
    cy.wait(3000)
    cy.contains(/fail!/i).should('not.exist')
  })
})