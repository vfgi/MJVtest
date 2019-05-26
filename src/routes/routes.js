import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const Product = React.lazy(() => import('../pages/product'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:category/:id" component={Product} />
    </Switch>
  </Suspense>
)

export default Routes
