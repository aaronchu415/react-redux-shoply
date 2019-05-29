import { connect } from 'react-redux'
import Item from '../components/Item';
import { addItem, removeItem } from '../redux/actions';

function mapStateToProps(state) {

  return {
    cart: state.items
  };
}


export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(Item);