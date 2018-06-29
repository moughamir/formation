const React = require('react');
const ReactDOM = require('react-dom')

const GroceryItemsList = require('./components/GroceryItemsList.jsx')

const initial = [{
  name: "Ice Cream"
}, {
  name: "Waffles"
}, {
  name: "Candy",
  purchased: true
}, {
  name: "Soda Drink"
}];

ReactDOM.render(<GroceryItemsList items={initial}/>, app);
