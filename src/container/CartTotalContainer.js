import { connect } from 'react-redux'
import CartTotal from '../components/CartTotal';


function mapStateToProps(state) {
  return {
    cart: state.items
  };
}


export default connect(
  mapStateToProps
)(CartTotal);