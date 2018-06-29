const React = require('react');
const createClass = require('create-react-class');

module.exports = createClass({
  render: function() {
    return (<li>{this.props.item.name}</li>);
  }
});
