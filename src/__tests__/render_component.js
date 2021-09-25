// import React to use JSX
import React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from '@testing-library/dom'
// import  The thing i wanna test
import {FavoriteNumber} from '../favorite-number'
test('renders a [number] input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  //####React-dome
  // expect(div.querySelector('input').type).toBe('number')
  // expect(div.querySelector('label').textContent).toBe('Favorite Number')
  // const input = queries.getByLabelText(div, 'Favorite Number')
  //####Jest-Dom
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText('Favorite Number')
  expect(input).toHaveAttribute('type', 'number')
})
