import {
  Home,
  ListingsIndex,
  ListingsShow
} from '../containers'

export const paths = {
  HOME: '/',
  LISTINGS: '/listings'
}

const routes = [
  {
    exact: true,
    path: paths.HOME,
    component: Home
  }, {
    exact: true,
    path: paths.LISTINGS,
    component: ListingsIndex
  }, {
    path: `${paths.LISTINGS}/:address`,
    component: ListingsShow
  }
]

export const listingPath = address => `${paths.LISTINGS}/${address}`

export default routes
