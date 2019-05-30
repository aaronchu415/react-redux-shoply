import React, { Component } from 'react';
import ItemContainer from '../container/ItemContainer';

class ShoppingList extends Component {

  render() {
    const { products } = this.props

    return (
      <div>
        <div>
          {Object.keys(products).map(key => {
            let item = products[key]
            item.id = key
            return <ItemContainer key={key} {...item} />
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingList;