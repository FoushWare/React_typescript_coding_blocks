// import React to use JSX
import React from 'react'
import ReactDOM from 'react-dom'
// import  The thing i wanna test
import {FavoriteNumber} from '../favorite-number'
test('renders a [number] input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  expect(div.querySelector('input').type).toBe('number')
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})
