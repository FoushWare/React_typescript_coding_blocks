import {ErrorBoundary} from 'react-error-boundary'
import ClickCounter from './components/ClickCounter'
import ErrorFallback from './shared/ErrorFallback'

//### function to test ErrorBounday
function Bomb({username}) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥')
  }
  return `Hi ${username}`
}

function App() {
  const [username, setUsername] = React.useState('')
  const usernameRef = React.useRef(null)
  return (
    <div>
      <h1> 🗼Bienvenue par Ahmed fouad [foushware]🇫🇷 </h1>
      <pre style={{marginTop: '30px'}}> ⬇️⬇️ Testing Error Boundary ⬇️⬇️</pre>

      {/* ### Test ErrorBoundary */}
      <label style={{fontSize: '1.5rem'}}>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={e => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('')
            usernameRef.current.focus()
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
          <hr />
          <pre> ⬇️⬇️ Testing Error useErrorHandler() For ⬇️⬇️</pre>
          <ul>
            <li>Event handlers</li>
            <li>
              Asynchronous code (e.g. setTimeout or requestAnimationFrame
              callbacks)
            </li>
            <li>Server side rendering</li>
          </ul>

          <ClickCounter />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
