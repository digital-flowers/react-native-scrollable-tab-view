const React = require('react');
const {TouchableOpacity} = require('react-native');

const Button = props => (
  <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>
);

module.exports = Button;
