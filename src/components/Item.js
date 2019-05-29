import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

class Item extends Component {

  render() {
    const { id, name, price, description, image_url, addItem, removeItem } = this.props

    let productToAdd = { id, name, price, description, image_url }

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><h1>{name}</h1> ${price}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
          </CardBody>
          <img className='m-auto' width="50%" src={image_url} alt={name} />
          <CardBody className='text-center'>
            <CardLink onClick={() => addItem(productToAdd)}><i style={{ fontSize: '40px' }} className="text-success fas fa-cart-plus"></i></CardLink>
            <CardLink onClick={() => removeItem(id)}><i style={{ fontSize: '40px' }} className="text-danger fas fa-cart-arrow-down"></i></CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Item;