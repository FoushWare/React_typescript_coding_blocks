import React from 'react'
import {Editor} from '../post-editor-03-api'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {savePost as mockSavePost} from '../api'

jest.mock('../api')

afterEach(() => {
  jest.clearAllMocks()
})

test('renders a from with title,content,tags, and submit button ,when submition button clicked it disable the submition button', () => {
  //i don't know what it the value returned after resolving the promise
  mockSavePost.mockResolvedValueOnce()
  const fakePost = {
    title: 'test post title',
    content: 'test content',
    tags: ['tag1', 'tage2'],
  }
  render(<Editor />)
  screen.getByLabelText(/title/i).value = fakePost.title
  screen.getByLabelText(/content/i).value = fakePost.content
  screen.getByLabelText(/tags/i).value = fakePost.tags.join(', ')
  const sumbitButtton = screen.getByText(/submit/i)
  userEvent.click(sumbitButtton)
  expect(sumbitButtton).toBeDisabled()
  expect(mockSavePost).toHaveBeenCalledTimes(1)
  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
  })
})
