import { mount } from 'cypress/react';
import RegisterForm from '../../src/components/RegisterForm';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('RegisterForm', () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );
  });

  it('should display validation errors for invalid inputs', () => {
    cy.get('input[type="email"]').type('testuser.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="cpassword"]').type('password23');
    cy.get('form').submit();

    cy.contains('Неправильний формат електронної пошти').should('exist');
    cy.contains('Паролі не співпадають').should('not.exist');
  });

  it('should display error message for registration failure', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/auth/users/', {
      statusCode: 400,
      body: { detail: 'Email already exists' }
    }).as('registerRequest');

    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="cpassword"]').type('password123');

    cy.get('form').submit();

    cy.wait('@registerRequest');
    cy.contains('Email already exists').should('exist');
  });

  it('should display success message for successful registration', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/auth/users/', {
      statusCode: 201,
      body: {}
    }).as('registerRequest');

    cy.get('input[name="username"]').type('newuser');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="cpassword"]').type('password123');

    cy.get('form').submit();

    cy.wait('@registerRequest');
    cy.contains('Реєстрація успішна! Тепер ви можете увійти.').should('exist');
  });

  it('should validate password length', () => {
    cy.get('input[name="username"]').type('newuser');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="cpassword"]').type('123');

    cy.get('form').submit();

    cy.contains('Пароль має бути довшим за 6 символів').should('exist');
  });

  it('should allow form submission if all fields are valid', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/auth/users/', {
      statusCode: 201,
      body: {}
    }).as('registerRequest');

    cy.get('input[name="username"]').type('validuser');
    cy.get('input[name="email"]').type('validuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="cpassword"]').type('password123');

    cy.get('form').submit();

    cy.wait('@registerRequest');
    cy.contains('Реєстрація успішна! Тепер ви можете увійти.').should('exist');
  });
});
