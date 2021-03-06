import React, {PureComponent} from 'react'
import {
  Route,
  withRouter
} from 'react-router-dom'

import {
  Nav,
  Footer
} from './components'

import {parseParams} from './helpers'
import routes, {paths} from './.config/routes'

class App extends PureComponent {
  render() {
    return (
      <div>
        <Nav />
        <div className={`page-wrapper page-wrapper--${this.props.location.pathname.slice(1)}`}>
          {routes.map((props, i) =>
            <Route {...props} key={i} />
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
