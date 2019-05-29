import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload
  };
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload
  };
}