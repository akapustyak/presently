import React from 'react'
import PresentlyDescription from './InfoCard'

describe('<PresentlyDescription />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PresentlyDescription />)
  })
})