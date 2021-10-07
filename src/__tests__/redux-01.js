import {Counter} from '../redux-counter'
import {store} from '../redux-store'
import {Provider} from 'react-redux'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )

  userEvent.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})
