import { connect } from 'react-redux'
import Cart from '../components/Cart';
import { addItem, removeItem } from '../redux/actions';

function mapStateToProps(state) {
  let distinctItems = {}
  let cart = state.items

  for(let i=0; i<cart.length; i++){
    if(distinctItems[cart[i].name]){
      distinctItems[cart[i].name]++
    } else {
      distinctItems[cart[i].name]=1
    }
  }


  return {
    cart: state.items, 
    uniqueItems: distinctItems
  };
}


export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(Cart);