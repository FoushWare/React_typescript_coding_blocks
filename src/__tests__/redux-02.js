/* eslint-disable react/prop-types */
import {Counter} from '../redux-counter'
import {Provider} from 'react-redux'
import userEvent from '@testing-library/user-event'
import {render as rtlRender, screen} from '@testing-library/react'

import {createStore} from 'redux'
import {reducer} from '../redux-reducer'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}> {children} </Provider>
  }

  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...renderOptions}),
    store,
  }
}

test('can render with redux with defaults', () => {
  render(<Counter />)

  userEvent.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom intial state ', () => {
  //We can depend on our store

  render(<Counter />, {
    initialState: {count: 3},
  })

  userEvent.click(screen.getByText('-'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2')
})
