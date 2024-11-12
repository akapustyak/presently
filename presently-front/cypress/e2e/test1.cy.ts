describe('Link Access', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/homepage')
    cy.visit('http://localhost:3000/profilepage')
    cy.visit('http://localhost:3000/signup')
    cy.visit('http://localhost:3000/CreatingPage')
  })
})