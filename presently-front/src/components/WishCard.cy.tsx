import React from 'react'
import WishCard from './WishCard'

describe('<WishCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WishCard />)
  })
})