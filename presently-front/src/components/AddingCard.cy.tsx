import React from 'react';
import AddingCard from './AddingCard';

describe('<AddingCard />', () => {
  beforeEach(() => {
    cy.mount(<AddingCard />);
  });

  it('renders the form with the necessary fields', () => {
    cy.get('input[placeholder="Введіть назву бажання"]').should('exist');
    cy.get('textarea[placeholder="Введіть опис..."]').should('exist');
    cy.get('input[placeholder="Введіть посилання..."]').should('exist');
    cy.get('button').contains('Підтвердити').should('exist');
  });

  it('allows typing into the wish name, description, and link fields', () => {
    cy.get('input[placeholder="Введіть назву бажання"]').type('Нове бажання').should('have.value', 'Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').type('Це опис бажання').should('have.value', 'Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').type('https://example.com').should('have.value', 'https://example.com');
  });

  it('clears the input fields after successful submission', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/wishes/', {
      statusCode: 200,
      body: {},
    }).as('addWish');

    cy.get('input[placeholder="Введіть назву бажання"]').type('Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').type('Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').type('https://example.com');
    cy.get('button').contains('Підтвердити').click();

    cy.wait('@addWish').then(() => {
      cy.get('input[placeholder="Введіть назву бажання"]').should('have.value', '');
      cy.get('textarea[placeholder="Введіть опис..."]').should('have.value', '');
      cy.get('input[placeholder="Введіть посилання..."]').should('have.value', '');
    });
  });
});
