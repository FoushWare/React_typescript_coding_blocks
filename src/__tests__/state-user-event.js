// import { fireEvent, render } from '@testing-library/react'
import {render} from '@testing-library/react'
// import  The thing i wanna test
import {FavoriteNumber} from '../favorite-number'
import user from '@testing-library/user-event'

test('enter an invalid value shows an error message', () => {
  const {getByLabelText, getByRole} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  //#### Hey user type 10 to input :)
  user.type(input, '10')
  // fireEvent.change(input, { target: { value: '10' } })
  expect(getByRole('alert')).toHaveTextContent(/The number is invalid/i)
})
