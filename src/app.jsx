var React = require('react');
var ReactDOM = require('react-dom');

// React Router
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;

// Pages
var IndexPage = require('./pages/index');
var BookDetailPage = require('./pages/book-detail');
var SectionDetailPage = require('./pages/section-detail');
var UIKitPage = require('./pages/ui-kit');

// App layout
var App = React.createClass({
  render: function () {
    return <div>
      <header className="header">
        <Link to="/" className="logo">
            <span className="logo__text">
                Service
            </span>
        </Link>
      </header>
      <div className="container">
        {this.props.children}
      </div>
    </div>
  }
});

ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="ui-kit" component={UIKitPage} />
        <Route path="books">
          <Route path=":bookId">
            <IndexRoute component={BookDetailPage} />
            <Route path="sections/:sectionId" component={SectionDetailPage} />
          </Route>
        </Route>
      </Route>
    </Router>
), document.querySelector('#app'));
