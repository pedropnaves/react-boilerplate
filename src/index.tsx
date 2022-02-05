import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(mswModule => mswModule.worker.start())
    .catch(err => console.error(`Failed to start MSW module ${err}`))
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
