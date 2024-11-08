import React from 'react'
import GiftCard from './GiftCard'

describe('<GiftCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GiftCard />)
  })
})