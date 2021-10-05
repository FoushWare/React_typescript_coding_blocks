import {render} from '@testing-library/react'
import {ErrorBoundary} from '../error-boundary'
import {reportError as mockReportError} from '../api'

//### Mock api reportError
jest.mock('../api')

//### after Each test reset ⚙️
afterEach(() => {
  jest.clearAllMocks()
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

  const {rerender} = render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>,
  )

  rerender(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>,
  )

  const error = expect.any(Error)
  const info = {componentStack: expect.stringContaining('Bomb')}
  //Check the mocked func called proparly
  expect(mockReportError).toHaveBeenCalledWith(error, info)

  //once for jsdom and once for react-dom
  expect(console.error).toHaveBeenCalledTimes(2)
})

// this is only here to make the error output not appear in the project's output
// even though in the course we don't include this bit and leave it in it's incomplete state.
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
})
