import * as React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {loadGreeting as mockLoadGreeting} from '../api'
import {GreetingLoader} from '../greeting-loader-01-mocking'

jest.mock('../api')

test('loads greetings on click', async () => {
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: 'TEST_GREETING'}})
  render(<GreetingLoader />)
  const nameInput = screen.getByLabelText(/name/i)
  const loadButton = screen.getByText(/load/i)

  userEvent.type(nameInput, 'foush')
  userEvent.click(loadButton)

  expect(mockLoadGreeting).toBeCalledWith('foush')
  expect(mockLoadGreeting).toBeCalledTimes(1)

  waitFor(() =>
    expect(screen.getByLabelText(/greeting/i)).toHaveTextContent(
      'TEST_GREETING',
    ),
  )
})
