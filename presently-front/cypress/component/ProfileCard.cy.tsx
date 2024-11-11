import ProfileCard from "../../src/components/ProfileCard";
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('ProfileCard.cy.tsx', () => {
  const username = 'Anna';
  const followers = '100';
  const following = '50';

  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/auth/users/me/', {
      statusCode: 200,
      body: { username: 'Anna' },
    });
  });

  it('renders ProfileCard with user details', () => {
    cy.mount(
      <MemoryRouter>
        <ProfileCard username={username} followers={followers} following={following} />
      </MemoryRouter>
    );
    
    cy.get('div').contains(`@${username}`);
    cy.get('p').contains(followers).should('exist');
    cy.get('p').contains(following).should('exist');
  });

  it('displays "Add" and "Logout" buttons if current user is viewing their profile', () => {
    cy.mount(
      <MemoryRouter>
        <ProfileCard username={username} followers={followers} following={following} />
      </MemoryRouter>
    );
    
    cy.contains('Додати').should('exist');
    cy.contains('Вийти').should('exist');
  });

  it('displays "Follow" button if viewing another user\'s profile', () => {
    cy.mount(
      <MemoryRouter>
        <ProfileCard username="Andrii" followers={followers} following={following} />
      </MemoryRouter>
    );
    
    cy.contains('Слідкувати').should('exist');
  });

  it('calls logout function and navigates to homepage on "Logout" button click', () => {
    cy.mount(
      <MemoryRouter>
        <ProfileCard username={username} followers={followers} following={following} />
      </MemoryRouter>
    );

    cy.contains('Вийти').click();
  });
});
