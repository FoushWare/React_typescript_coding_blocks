/* eslint-disable react/prop-types */
import {render as rtlRender, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {Main} from '../main'

function render(ui, {route = '/', ...renderOptions} = {}) {
  window.history.pushState({}, 'Test page', route)

  function Wrapper({children}) {
    return <BrowserRouter>{children}</BrowserRouter>
  }

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  })
}

test('main renders about and home and I can naviage to those pages', () => {
  render(<Main />)

  expect(screen.getByRole('heading')).toHaveTextContent(/home/i)
  userEvent.click(screen.getByText(/about/i))
  expect(screen.getByRole('heading')).toHaveTextContent(/about/i)
})

test('landing on a bad page shows no match component', () => {
  render(<Main />, {
    route: '/something-that-does-not-match',
  })

  expect(screen.getByRole('heading')).toHaveTextContent(/404/i)
})
