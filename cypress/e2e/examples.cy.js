describe('Various examples', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })
  it('multi-page testing', () => {
    cy.get('[data-test="nav-why-cypress"]').click()
    cy.location('pathname').should('eq', '/')
    cy.get('[data-test="nav-overview"]').click()
    cy.location('pathname').should('eq', '/overview')
    cy.get('[data-test="nav-fundamentals"]').click()
    cy.location('pathname').should('eq', '/fundamentals')
    cy.get('[data-test="nav-forms"]').click()
    cy.location('pathname').should('eq', '/forms')
    cy.get('[data-test="nav-examples"]').click()
    cy.location('pathname').should('eq', '/examples')
    cy.get('[data-test="nav-component"]').click()
    cy.location('pathname').should('eq', '/component')
    cy.get('[data-test="nav-best-practices"]').click()
    cy.location('pathname').should('eq', '/best-practices')
  })

  it.only('intercepts', () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      // like mocked data in fixtures foulder
      fixture: "example.json",
    })

    cy.get('[data-test="post-button"]').click()
  })
})