import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../../src/components/NavigationBar';

describe('NavigationBar.cy.tsx', () => {
  it('renders NavigationBar with all elements', () => {
    cy.mount(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    );

    cy.get('input[type="search"]').should('exist');
    cy.get('input[type="search"]').should('have.value', '');

    cy.get('button').find('svg').should('have.length', 2);
  });

  it('navigates correctly when search is submitted', () => {
    cy.mount(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    );

    cy.intercept('GET', '/profilepage/searchTerm').as('profilePage');

    cy.get('input[type="search"]').type('searchTerm');

    cy.get('form').submit();

    cy.url().should('include', '/profilepage/searchTerm');
  });
});
