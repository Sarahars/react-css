import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App2'
import App2 from './App/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* pour avoir la page App2 on écrit <App2/> au lieu <App/>*/ }
  </React.StrictMode>,
  document.getElementById('root')
)
