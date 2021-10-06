import React from 'react'
import {Editor} from '../post-editor-02-state'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders a from with title,content,tags, and submit button ,when submition button clicked it disable the submition button', () => {
  render(<Editor />)
  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  const sumbitButtton = screen.getByText(/submit/i)
  userEvent.click(sumbitButtton)
  expect(sumbitButtton).toBeDisabled()
})
