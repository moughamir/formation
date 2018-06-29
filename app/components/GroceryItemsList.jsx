const React = require('react');
const createClass = require('create-react-class');

const Item = require('./GroceryItem.jsx');

module.exports = createClass({
  render: function() {
    return (
      <div>
        <h1>Grocery Items</h1>
        <div>
        {
          this.props.items.map((item, index) => <Item key={index} item={item}/> )
        }
        </div>
      </div>
    )
  }
});
