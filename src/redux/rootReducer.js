import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import data from '../data'

const INITIAL_STATE = { products: data.products, items: [] }

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_ITEM:
      const idToRemove = action.payload

      let first = true
      const items = state.items.filter(item => {
        if (item.id === idToRemove && first) {
          first = false
          return false
        } else {
          return true
        }
      })
      return { ...state, items };

    default:
      return state;
  }
}

export default rootReducer;