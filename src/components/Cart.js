import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ItemInCartContainer from '../container/ItemInCartContainer'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



export default class Cart extends Component {
  render() {
    console.log(this.props)
    let { cart, uniqueItems } = this.props
    const total = cart.map(item => item.price).reduce((acc, v) => acc + v, 0)

    return (
      <div>
        {Object.keys(uniqueItems).map(key => <ItemInCartContainer name={key} quantity={uniqueItems[key]} /> )}
        <p>Total: ${total}</p>
      </div>
    ) 
  }
}
