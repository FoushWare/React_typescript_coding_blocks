//Use whatwg-fetch because we are using node env and  --- fetch only works in window mode so [whatwg-fetch will polyfill this for us]
import 'whatwg-fetch'
import * as React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
//mocking GET,POST requests
import {rest} from 'msw'
//mocking creating servers
import {setupServer} from 'msw/node'
import {GreetingLoader} from '../greeting-loader-01-mocking'

const server = setupServer(
  rest.post('/greeting', (req, res, ctx) => {
    return res(ctx.json({data: {greeting: `Hello ${req.body.subject}`}}))
  }),
)

beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('loads greetings on click', async () => {
  render(<GreetingLoader />)
  const nameInput = screen.getByLabelText(/name/i)
  const loadButton = screen.getByText(/load/i)
  userEvent.type(nameInput, 'Mary')
  userEvent.click(loadButton)
  await waitFor(() =>
    expect(screen.getByLabelText(/greeting/i)).toHaveTextContent('Hello Mary'),
  )
})
