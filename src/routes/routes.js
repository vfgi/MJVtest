import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const Product = React.lazy(() => import('../pages/product'))
const Category = React.lazy(() => import('../pages/category') )

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:category/:id" component={Product} />
      <Route path="/:category/:subCategory" component={Category}/>
      <Route path="/:search" component={Category}/>
    </Switch>
  </Suspense>
)

export default Routes
