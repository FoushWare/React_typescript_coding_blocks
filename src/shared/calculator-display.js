import PropTypes from 'prop-types'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'

function CalculatorDisplay({value, ...props}) {
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  return (
    <div
      {...props}
      css={css`
        position: relative;
        color: white;
        background: #1c191c;
        line-height: 130px;
        font-size: 6em;
        flex: 1;
      `}
    >
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  )
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CalculatorDisplay
