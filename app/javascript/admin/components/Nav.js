import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler,
  Collapse, NavItem, NavLink, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'mdbreact'
import {capitalize} from 'lodash'

class Nav extends PureComponent {
  static defaultProps = {
    resources: []
  }

  state = {
    collapseSidebar: false,
    isWideEnough: false
  }

  render() {
    const {isWideEnough, collapseSidebar} = this.state

    return (
      <Navbar color="indigo" dark expand="md" scrolling>
        <NavbarBrand href="/admin">
          <strong>Graybird</strong>
        </NavbarBrand>
        {!isWideEnough && <NavbarToggler onClick={this._toggleSidebar} />}
        <Collapse isOpen={ collapseSidebar } navbar>
          <NavbarNav left>
            {this.props.resources.map(name =>
              <NavItem key={name} active={this.props.location.pathname.includes(name)}>
                <NavLink className="nav-link" to={`/admin/${name}`}>{capitalize(name)}</NavLink>
              </NavItem>
            )}
          </NavbarNav>
          {/*<NavbarNav right>
            <NavItem><FontAwesome name="user" /></NavItem>
          </NavbarNav>*/}
        </Collapse>
      </Navbar>
    )
  }

  _toggleSidebar = () => this.setState({collapseSidebar: !this.state.collapseSidebar})
}

export default withRouter(Nav)
