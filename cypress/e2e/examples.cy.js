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

  it('intercepts', () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      // like mocked data in fixtures foulder
      fixture: "example.json",
    })

    cy.get('[data-test="post-button"]').click()
  })

  it.only('grudge list', () => {
    cy.get('[data-test="grudge-list-title"]').should('contain.text', 'Add Some Grudges')
    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').should('have.length', 0)
    })

    cy.get('[data-test="clear-button"]').should('not.exist')
    cy.get('[data-test="grudge-input"]').within(() => {
      cy.get('input').type('first grudge')
    })
    cy.get('[data-test="add-grudge-button"]').click()
    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').should('have.length', 1)
    })
    cy.get('[data-test="grudge-list-title"]').should('contain.text', 'Grudges')
    cy.get('[data-test="grudge-input"]').within(() => {
      cy.get('input').type('second grudge')
    })
    cy.get('[data-test="add-grudge-button"]').click()

    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').should('have.length', 2)
      cy.get('li').its(0).should('contain.text', 'first grudge')
    })
    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').its(0).within(() => {
        cy.get('button').click()
      })
    })
    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').should('have.length', 1)
      cy.get('li').its(0).should('contain.text', 'second grudge')
    })

    cy.get('[data-test="clear-button"]').click()
    cy.get('[data-test="grudge-list"]').within(() => {
      cy.get('li').should('have.length', 0)
    })
  })
})