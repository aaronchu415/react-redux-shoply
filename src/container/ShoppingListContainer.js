import { connect } from 'react-redux'
import ShoppingList from '../components/ShoppingList';


function mapStateToProps(state) {
  return {
    products: state.products
  };
}


export default connect(
  mapStateToProps
)(ShoppingList);