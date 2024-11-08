import React from 'react'
import CreatingPage from './CreatingPage'

describe('<CreatingPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreatingPage />)
  })
})