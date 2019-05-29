import React, { Component } from 'react';
import ItemContainer from '../container/ItemContainer';
import CartTotalContainer from '../container/CartTotalContainer';

class ShoppingList extends Component {

  render() {
    const { products } = this.props

    return (
      <div className='container'>
        <CartTotalContainer />
        {Object.keys(products).map(key => {
          let item = products[key]
          item.id = key
          return <ItemContainer key={key} {...item} />
        })}
      </div>
    );
  }
}

export default ShoppingList;