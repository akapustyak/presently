import React from 'react';
import Logo from '../../src/components/Logo';

describe('Logo.cy.tsx', () => {
  it('renders Logo component with correct font size and colors', () => {
    const fontSize = '2rem';

    cy.mount(<Logo fontSize={fontSize} />);

    cy.get('span').contains('Present')
      .should('have.css', 'color', 'rgb(166, 3, 33)')
      .should('have.css', 'font-weight', '700');

    cy.get('span').contains('ly')
      .should('have.css', 'color', 'rgb(166, 124, 99)')
      .should('have.css', 'font-weight', '700');
  });
});
