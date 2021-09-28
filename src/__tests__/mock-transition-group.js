// import { render, fireEvent, waitFor } from '@testing-library/react'
import {render, fireEvent} from '@testing-library/react'
import {HiddenMessage} from '../hidden-messages'

//we mock react transition-group to make our test fast not to wait for timeout
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null),
  }
})

// # without mocking you nead aync await
// test('shows hidden message when toggle is clicked', async () => {
test('shows hidden message when toggle is clicked', () => {
  const myMessage = 'hello world'
  const {getByText, queryByText} = render(
    <HiddenMessage>{myMessage}</HiddenMessage>,
  )

  const toggleButton = getByText(/toggle/i)

  expect(queryByText(myMessage)).not.toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(getByText(myMessage)).toBeInTheDocument()
  fireEvent.click(toggleButton)
  // # without mocking you nead aync await
  // waitFor(() => expect(queryByText(myMessage)).not.toBeInTheDocument())
  expect(queryByText(myMessage)).not.toBeInTheDocument()
})
