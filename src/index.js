import './global.css'
import App from './app'

if (module.hot) {
  module.hot.accept()
}
ReactDOM.render(<App />, document.getElementById('app'))
