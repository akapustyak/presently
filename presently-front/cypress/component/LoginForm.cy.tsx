import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../../src/components/LoginForm';

describe('LoginForm.cy.tsx', () => {
  it('renders LoginForm component with all fields and elements', () => {
    cy.mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    cy.get('h2').should('have.text', 'Вхід');

    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="password"]').should('exist');

    cy.get('button[type="submit"]').should('have.text', 'Увійти');

    cy.get('a').should('have.attr', 'href', '/signup').contains('Реєстрація');
  });

  it('displays error message on invalid login', () => {
    cy.mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    cy.intercept('POST', 'http://127.0.0.1:8000/auth/jwt/create/', {
      statusCode: 400,
      body: { detail: 'Invalid credentials' },
    });

    cy.get('input[type="email"]').type('invalid@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.get('p').should('contain', 'Неправильний логін або пароль');
  });
});
