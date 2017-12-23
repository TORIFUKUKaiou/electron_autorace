import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { createStore } from 'redux'

import { reducer } from './reducer/reducer'
const store = createStore(reducer)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)