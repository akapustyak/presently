import React from 'react';
import AddingCard from "../../src/components/AddingCard";
import { MemoryRouter } from 'react-router-dom';

describe('AddingCard.cy.tsx', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://127.0.0.1:8000/wishes/', {
      statusCode: 200,
      body: { message: 'Wish added successfully' },
    }).as('addWish');
  });

  it('renders AddingCard and allows entering wish details', () => {
    cy.mount(
      <MemoryRouter>
        <AddingCard />
      </MemoryRouter>
    );

    cy.get('input[placeholder="Введіть назву бажання"]').type('Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').type('Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').type('https://example.com');

    cy.get('input[placeholder="Введіть назву бажання"]').should('have.value', 'Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').should('have.value', 'Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').should('have.value', 'https://example.com');
  });

  it('submits the wish and resets fields on success', () => {
    cy.mount(
      <MemoryRouter>
        <AddingCard />
      </MemoryRouter>
    );

    cy.get('input[placeholder="Введіть назву бажання"]').type('Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').type('Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').type('https://example.com');

    cy.get('button').contains('Підтвердити').click();

    cy.wait('@addWish').then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
    });

    cy.get('input[placeholder="Введіть назву бажання"]').should('have.value', '');
    cy.get('textarea[placeholder="Введіть опис..."]').should('have.value', '');
    cy.get('input[placeholder="Введіть посилання..."]').should('have.value', '');

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Бажання додано успішно!');
    });
  });

  it('displays an error if the request fails', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/wishes/', {
      statusCode: 500,
      body: { message: 'Failed to add wish' },
    }).as('addWishFailure');

    cy.mount(
      <MemoryRouter>
        <AddingCard />
      </MemoryRouter>
    );

    cy.get('input[placeholder="Введіть назву бажання"]').type('Нове бажання');
    cy.get('textarea[placeholder="Введіть опис..."]').type('Це опис бажання');
    cy.get('input[placeholder="Введіть посилання..."]').type('https://example.com');
    cy.get('button').contains('Підтвердити').click();

    cy.wait('@addWishFailure').then((interception) => {
      expect(interception.response?.statusCode).to.equal(500);
    });

    cy.on('window:alert', (text) => {
      throw new Error('Alert should not be displayed on error');
    });
  });
});
