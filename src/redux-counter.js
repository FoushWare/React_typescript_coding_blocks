import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Counter() {
  //###useSelector: Allows you to extract data from the Redux store state, using a selector function.
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increment = () => dispatch({type: 'INCREMENT'})
  const decrement = () => dispatch({type: 'DECREMENT'})
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span aria-label="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export {Counter}
