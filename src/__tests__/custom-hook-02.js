import {render, waitFor} from '@testing-library/react'
import {useCounter} from '../use-counter'

function setup({initialProps} = {}) {
  const result = {}
  // console.log('first setup', result)
  function TestComponent(props) {
    result.current = useCounter(props)

    // console.log('setup', result)
    return null
  }

  render(<TestComponent {...initialProps} />)
  return result
}

//## i don't understand current till now 😥
//### what i understand is current is for refrence to access the same state of changed variable
//## This can be useful https://reactjs.org/docs/refs-and-the-dom.html

// test('exposes the count and use increment/decrement functions', async () => {
//   let result = setup()

//   console.log('first test', result)
//   expect(result.count).toBe(0)
//   //update the state is async
//   await waitFor(() => result.increment())

//   console.log('increment test', result)
//   expect(result.count).toBe(1)

//   await waitFor(() => result.decrement())

//   expect(result.count).toBe(0)
// })

test('exposes the count and use increment/decrement functions', async () => {
  const result = setup()

  expect(result.current.count).toBe(0)
  //update the state is async
  await waitFor(() => result.current.increment())

  expect(result.current.count).toBe(1)

  await waitFor(() => result.current.decrement())

  expect(result.current.count).toBe(0)
})

test('allow custimization of the inital count', async () => {
  const result = setup({initialProps: {initialCount: 3}})

  expect(result.current.count).toBe(3)
  //update the state is async
  await waitFor(() => result.current.increment())

  expect(result.current.count).toBe(4)

  await waitFor(() => result.current.decrement())

  expect(result.current.count).toBe(3)
})

test('allow custimization of step', async () => {
  const result = setup({initialProps: {step: 2}})

  expect(result.current.count).toBe(0)
  //update the state is async
  await waitFor(() => result.current.increment())

  expect(result.current.count).toBe(2)

  await waitFor(() => result.current.decrement())

  expect(result.current.count).toBe(0)
})
