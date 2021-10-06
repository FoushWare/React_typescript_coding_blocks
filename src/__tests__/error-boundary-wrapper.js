import {render, screen} from '@testing-library/react'
import {ErrorBoundary} from '../error-boundary'
import {reportError as mockReportError} from '../api'
import userEvent from '@testing-library/user-event'

//### Mock api reportError
jest.mock('../api')

//### after Each test reset ⚙️
afterEach(() => {
  jest.clearAllMocks()
  console.error.mockRestore()
})

//## component to throw error
function Bomb({shouldThrow}) {
  if (shouldThrow) {
    throw new Error('💣')
  } else {
    return null
  }
}

test('call reportError and render that there is an Error', () => {
  //Resolve with ok status like the actual implementation
  mockReportError.mockResolvedValueOnce({sucess: true})

  const {rerender} = render(<Bomb />, {wrapper: ErrorBoundary})

  rerender(<Bomb shouldThrow={true} />)

  const error = expect.any(Error)
  const info = {componentStack: expect.stringContaining('Bomb')}
  //Check the mocked func called proparly
  expect(mockReportError).toHaveBeenCalledWith(error, info)
  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"There was a problem."`,
  )
  expect(console.error).toHaveBeenCalledTimes(2)

  console.error.mockClear()
  mockReportError.mockClear()

  rerender(<Bomb />)
  //### important : if i didn't do this the state of error not changing so still render error and try agin still in the dom
  userEvent.click(screen.getByText(/try again/i))
  expect(mockReportError).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  expect(screen.queryByText(/try again/i)).not.toBeInTheDocument()
})

// this is only here to make the error output not appear in the project's output
// even though in the course we don't include this bit and leave it in it's incomplete state.
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

// afterEach(() => {
//   console.error.mockRestore()
// })
