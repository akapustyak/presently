import React from 'react';
import GiftCard from '../../src/components/GiftCard';

describe('GiftCard.cy.tsx', () => {
  it('renders GiftCard component with an image', () => {
    cy.mount(<GiftCard />);

    cy.get('img').should('have.attr', 'src', '/gifts.jpg').and('have.attr', 'alt', 'Gift boxes');

    cy.get('img').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].naturalHeight).to.be.greaterThan(0);
    });
  });
});
