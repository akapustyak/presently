import { mount } from 'cypress/react';
import WishCard from '../../src/components/WishCard';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('WishCard', () => {
  const mockData = {
    title: 'My Wish',
    description: 'This is a description of my wish.',
    link: 'https://www.example.com'
  };

  beforeEach(() => {
    mount(
      <MemoryRouter>
        <WishCard {...mockData} />
      </MemoryRouter>
    );
  });

  it('should render the card with correct title and description', () => {
    cy.get('h5').contains(mockData.title);
    cy.get('p').contains(mockData.description);
  });
});
