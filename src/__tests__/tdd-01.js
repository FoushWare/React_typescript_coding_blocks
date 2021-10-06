import {Editor} from '../post-editor-01'
import {render, screen} from '@testing-library/react'

test('renders a from with title,content,tags, and submit button', () => {
  render(<Editor />)
  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  screen.getByText(/submit/i)
})
