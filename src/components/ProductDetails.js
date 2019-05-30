import React, { Component } from 'react'
import { Card, CardTitle, CardBody, CardLink, CardSubtitle } from 'reactstrap'

export default class ProductDetails extends Component {
  render() {
    const { name, description, image_url, price, id } = this.props.item
    const { addItem, removeItem } = this.props
    let item = {...this.props.item}
    item[id] = this.props.match.params.id

    if (!name) {
      this.props.history.push('/')
    }

    return (
      <Card>
        <CardBody>
          <CardTitle><h1>{name}</h1> ${price}</CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
        </CardBody>
        <img className='m-auto' width="50%" src={image_url} alt={name} />
        <CardBody className='text-center'>
          <CardLink onClick={() => addItem(item)}><i style={{ fontSize: '40px' }} className="text-success fas fa-cart-plus"></i></CardLink>
          <CardLink onClick={() => removeItem(this.props.match.params.id)}><i style={{ fontSize: '40px' }} className="text-danger fas fa-cart-arrow-down"></i></CardLink>
        </CardBody>
      </Card>
    )
  }
}

