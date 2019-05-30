import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductDetailsContainer from '../container/ProductDetailsContainer'
import ShoppingListContainer from '../container/ShoppingListContainer'
import CartContainer from '../container/CartContainer'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <ShoppingListContainer />} />
          <Route exact path='/cart' render={() => <CartContainer />} />
          <Route exact path='/:id' render={(rtProps) => <ProductDetailsContainer {...rtProps} />} />
        </Switch>
      </div>
    )
  }
}
