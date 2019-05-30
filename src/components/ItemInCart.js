import React, { Component } from 'react'
import { Card, CardTitle, CardBody, CardLink, CardSubtitle } from 'reactstrap'


export default class ItemInCart extends Component {
  render() {
    const { removeItem, addItem, name, quantity } = this.props
    let item = this.props.cart.filter(item => item.name === name)
    return (
      <div className='CartItem'>
        <Card>
          <CardTitle><h1>{name}</h1></CardTitle>
          <CardSubtitle>Quantity: {quantity}</CardSubtitle>
          <CardBody className='text-center'>
            <CardLink onClick={() => addItem(item[0])}><i style={{ fontSize: '40px' }} className="text-success fas fa-cart-plus"></i></CardLink>
            <CardLink onClick={() => removeItem(item[0].id)}><i style={{ fontSize: '40px' }} className="text-danger fas fa-cart-arrow-down"></i></CardLink>
          </CardBody>
        </Card>
      </div>
    )
  }
}