var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BookDetailPage = require('./pages/book-detail');
var IndexPage = require('./pages/index');

var App = React.createClass({
  render: function () {
    return <div>
      {this.props.children}
    </div>
  }
});

ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="books">
          <Route path=":bookId" component={BookDetailPage} />
        </Route>
      </Route>
    </Router>
), document.querySelector('.container'));
