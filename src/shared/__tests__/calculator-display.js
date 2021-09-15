import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position:'relative',color:'white',background:'#1c191c',lineHeight:'130px',fontSize:'6em',flex: '1',;
    }

    <div
      class="emotion-0"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
