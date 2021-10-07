import {Counter} from '../redux-counter'
import {store as appStore} from '../redux-store'
import {Provider} from 'react-redux'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

import {createStore} from 'redux'
import {reducer} from '../redux-reducer'
test('can render with redux with defaults', () => {
  render(
    <Provider store={appStore}>
      <Counter />
    </Provider>,
  )

  userEvent.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom intial state ', () => {
  //We can depend on our store
  const store = createStore(reducer, {count: 3})

  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )

  userEvent.click(screen.getByText('-'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2')
})
