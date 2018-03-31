import React, {PureComponent} from 'react'
import {Nav} from '.';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from '../.config/apollo'

//   highest app component, contains ApolloProvider and ReduxProvider (if necessary), has the nav, opens router adn inserts children. handles authentication
export default class Admin extends PureComponent {
  constructor(props) {
    super(props)
    this._resources = Array.isArray(props.children)
      ? props.children.map(ch => ch.props.name)
      : [props.children.props.name]
  }

  render() {

    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Nav resources={this._resources} />
            {this.props.children}
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
