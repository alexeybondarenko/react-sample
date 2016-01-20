var React = require('react');
var ReactDOM = require('react-dom');

var Book = require('./components/book');

var Hello = React.createClass({
  render: function() {
    return <div>
      <Book />
      <Book />
      <Book />
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
