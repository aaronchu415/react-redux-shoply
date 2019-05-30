import { connect } from 'react-redux'
import ItemInCart from '../components/ItemInCart';
import { addItem, removeItem } from '../redux/actions';

function mapStateToProps(state) {

  return {
    cart: state.items, 
  };
}


export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(ItemInCart);