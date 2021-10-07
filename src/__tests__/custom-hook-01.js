import {render, waitFor} from '@testing-library/react'
import {useCounter} from '../use-counter'

test('exposes the count and use increment/decrement functions', async () => {
  let result
  function TestComponent() {
    result = useCounter()
    return null
  }

  render(<TestComponent />)

  expect(result.count).toBe(0)
  //update the state is async
  await waitFor(() => result.increment())

  expect(result.count).toBe(1)

  await waitFor(() => result.decrement())

  expect(result.count).toBe(0)
})
