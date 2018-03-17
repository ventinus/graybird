import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import client from './.config/apollo'

import App from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.querySelector('#app')
)
