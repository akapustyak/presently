import React from 'react';
import GiftCard from './GiftCard';

describe('<GiftCard />', () => {
  const giftProps = {
    title: 'Example Gift',
    description: 'This is a description of the gift.',
    link: 'https://example.com',
  };

  beforeEach(() => {
    cy.mount(<GiftCard {...giftProps} />);
  });

  it('renders the GiftCard with correct title, description, and link', () => {
    cy.contains(giftProps.title).should('exist');
    cy.contains(giftProps.description).should('exist');
    cy.get('a').should('have.attr', 'href', giftProps.link);
  });

  it('displays a link that opens in a new tab', () => {
    cy.get('a').should('have.attr', 'target', '_blank');
  });
});
