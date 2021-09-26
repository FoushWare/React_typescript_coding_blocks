// import React to use JSX
import React from 'react'
import {render} from '@testing-library/react'
// import  The thing i wanna test
import {FavoriteNumber} from '../favorite-number'

//#### Custom Render ... We will replace it with @testing-library/react render
// function render(ui) {
// 	const div = document.createElement('div')
// 	ReactDOM.render(ui, div)
// 	const queries = getQueriesForElement(div)
// 	return { ...queries }

// }

test('renders a [number] input with a label "Favorite Number"', () => {
  //render
  const {getByLabelText, debug} = render(<FavoriteNumber />)

  const input = getByLabelText('Favorite Number')
  expect(input).toHaveAttribute('type', 'number')
  debug()
  debug(input)
})
