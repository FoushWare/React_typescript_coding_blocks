import React from 'react'
import {Editor} from '../post-editor-06-generate-data'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {savePost as mockSavePost} from '../api'
import {Redirect as mockRedirect} from 'react-router'
import {build, fake, sequence} from 'test-data-bot'

jest.mock('../api')

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

// jest.spyOn(console, 'warn').mockImplementation();

afterEach(() => {
  jest.clearAllMocks()
})

test('renders a from with title,content,tags, and submit button ,when submition button clicked it disable the submition button', async () => {
  // ### Date before creating post
  const preDate = new Date().getTime()
  //i don't know what it the value returned after resolving the promise
  mockSavePost.mockResolvedValueOnce()
  // const fakeUser = { id: '1' }
  // const fakePost = {
  // 	title: 'test post title',
  // 	content: 'test content',
  // 	tags: ['tag1', 'tage2'],
  // }
  const postBuilder = build('Post').fields({
    title: fake(f => f.lorem.words()),
    content: fake(f => f.lorem.paragraphs().replace(/\r/g, '')),
    tags: fake(f => [f.lorem.words(), f.lorem.words(), f.lorem.words()]),
  })
  const userBuilder = build('User').fields({
    id: sequence(s => `user-${s}`),
  })
  const fakeUser = userBuilder()
  const fakePost = postBuilder()
  render(<Editor user={fakeUser} />)
  screen.getByLabelText(/title/i).value = fakePost.title
  screen.getByLabelText(/content/i).value = fakePost.content
  screen.getByLabelText(/tags/i).value = fakePost.tags.join(', ')
  const sumbitButtton = screen.getByText(/submit/i)
  userEvent.click(sumbitButtton)

  expect(sumbitButtton).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledTimes(1)
  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    authorId: fakeUser.id,
    date: expect.any(String),
    // date: new Date().toISOString()
  })

  //###Date of creating the post
  // console.log(mockSavePost.mock.calls[0][0].date)

  // ### Date After  creating post
  const postDate = new Date().getTime()
  const date = new Date(mockSavePost.mock.calls[0][0].date).getTime()
  expect(date).toBeGreaterThanOrEqual(preDate)
  expect(date).toBeLessThanOrEqual(postDate)

  waitFor(() => expect(mockRedirect).toHaveBeenCalledWith({to: '/'}, {}))
})
