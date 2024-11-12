describe('User Profile Creating Page Access After Login', () => {
  it('should navigate to user profile page after successful login', () => {
    cy.visit('http://localhost:3000/login');
    
    cy.get('input[name="email"]').type('example@gmail.com');
    cy.get('input[name="password"]').type('APassword');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/homepage');

    cy.get('a[href="/profilepage"]').click();
    
    cy.url().should('include', '/profilepage');
    
    cy.contains('Додати').click();
    cy.url().should('include', '/CreatingPage');
    cy.get('input[placeholder="Введіть назву бажання"]').should('exist');
  });
});
