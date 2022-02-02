import * as React from 'react'
import * as ReactDOM from 'react-dom'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <div>
    <h1>React and TypeScript boilerplate</h1>
  </div>,
  document.getElementById('root')
)