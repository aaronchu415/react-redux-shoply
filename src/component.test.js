import React from 'react';
import CartTotal from './components/CartTotal';
import ShoppingList from './components/ShoppingList';
import ShoppingListContainer from './container/ShoppingListContainer';
import { mount, shallow } from 'enzyme'
import data from './data'
import rootReducer from "./redux/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);


// const DEFAULT_STATE = data


it('renders CartTotal without crashing', () => {
  shallow(<CartTotal cart={[]}/>)
});


it('renders total', () => {
  let wrapper = mount(<CartTotal cart={[{price: 20}, {price: 10}, {price: 5}]}/>)
  
  expect(wrapper.html()).toContain(35)
})

it('renders ShoppingList without crashing', () => {
  shallow(<ShoppingList products={[]}/>)
});

it("adds to the cart successfully ", function() {
  let wrapper = mount(
    <Provider store = {store}>
      <ShoppingListContainer products={data}/>
    </Provider>
  )
  let button = wrapper.find('a').first();  
  button.simulate('click');

  expect(wrapper.html()).toContain('Total:  <span class=\"badge badge-light\">$219.99</span>')
  
});

it("removes from the cart successfully ", function() {
  let wrapper = mount(
    <Provider store = {store}>
      <ShoppingListContainer products={data}/>
    </Provider>
  )
  let addButton = wrapper.find('a').first();  
  addButton.simulate('click');
  addButton.simulate('click');

  let removeButton = wrapper.find('a').last();
  removeButton.simulate('click');
  
  expect(wrapper.html()).toContain('Total:  <span class=\"badge badge-light\">$659.97</span>'); 
});