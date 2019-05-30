import { connect } from 'react-redux'
import { addItem, removeItem } from '../redux/actions';
import ProductDetails from '../components/ProductDetails';

function mapStateToProps(state, props) {
  return ({
    item: state.products[props.match.params.id], 
    cart: state.items
  }
  )
}


export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(ProductDetails);