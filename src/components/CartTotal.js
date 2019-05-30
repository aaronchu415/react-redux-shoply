import React, { Component } from 'react';

class CartTotal extends Component {

  render() {
    const { cart } = this.props
    const total = cart.map(item => item.price).reduce((acc, v) => acc + v, 0)

    return (
      <button type="button" className="btn btn-primary">
        Total:  <span className="badge badge-light">${Math.round(100*total)/100}</span>
      </button>
    );
  }
}

export default CartTotal;