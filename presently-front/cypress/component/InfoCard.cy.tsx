import React from 'react';
import PresentlyDescription from '../../src/components/InfoCard';

describe('PresentlyDescription.cy.tsx', () => {
  it('renders PresentlyDescription component with all sections', () => {
    cy.mount(<PresentlyDescription />);

    cy.get('h3').should('have.text', 'Presently – платформа для втілення ваших бажань і створення незабутніх подарунків!');

    cy.get('p').first().should('contain', 'Проблема вибору подарунка вже не буде головним болем завдяки');

    cy.get('ul li').should('have.length', 4);
    cy.get('ul li').each(($el, index) => {
      const expectedTexts = [
        'Індивідуальний профіль',
        'Анонімність сюрпризу',
        'Зручний пошук',
        'Уникнення повторів'
      ];
      cy.wrap($el).should('contain', expectedTexts[index]);
    });

    cy.get('ol li').should('have.length', 4);
    cy.get('ol li').eq(0).should('contain', 'Створіть профіль та додайте свої побажання.');
    cy.get('ol li').eq(1).should('contain', 'Переглядайте побажання друзів або родичів.');
    cy.get('ol li').eq(2).should('contain', 'Обирайте і бронюйте подарунки');
    cy.get('ol li').eq(3).should('contain', 'Зберігайте елемент сюрпризу');

    cy.get('p').last().should('contain', 'ваші подарунки завжди будуть влучними та приємно несподіваними');
  });
});
