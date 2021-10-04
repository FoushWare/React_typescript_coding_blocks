/* eslint-disable react/prop-types */ //TODO:

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre
        style={{
          color: 'red',
          background: 'navajowhite',
          padding: '20px',
        }}
      >
        !!! {error.message}
      </pre>
      <button
        style={{
          background: 'green',
          fontSize: '1.5rem',
          color: 'wheat',
          padding: '9px',
          borderRadius: '5px',
        }}
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}
