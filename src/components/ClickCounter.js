import {useErrorHandler} from 'react-error-boundary'
const MAX_COUNT_ALLOWED = 5
export default function ClickCounter() {
  const [count, setCount] = React.useState(0)
  const handleError = useErrorHandler()
  const handleClick = () => {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error('count limit reached')
      } else {
        setCount(c => c + 1)
      }
    } catch (error) {
      handleError(error)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Counter is ⏲ {count} </h2>
      <button
        style={{
          background: 'orange',
          fontSize: '1.5rem',
          padding: '10px',
          borderRadius: '50%',
          fontFamily: 'sans-serif',
        }}
        onClick={() => handleClick()}
      >
        +
      </button>
    </div>
  )
}
