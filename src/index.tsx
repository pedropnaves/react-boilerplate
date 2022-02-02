import * as React from 'react'
import * as ReactDOM from 'react-dom'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(mswModule => mswModule.worker.start())
    .catch(err => console.error(`Failed to start MSW module ${err}`))
}

ReactDOM.render(
  <div>
    <h1>React and TypeScript boilerplate</h1>
  </div>,
  document.getElementById('root')
)
