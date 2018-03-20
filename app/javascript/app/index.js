import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import 'velocity-animate'

import client from './.config/apollo'
import history from './.config/history'

import App from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.querySelector('#app')
)
