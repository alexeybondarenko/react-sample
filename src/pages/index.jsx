var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function () {
        return <div>
            <h2>Pages</h2>
            <ul className="list list--decimal">
                <li><Link to="/">Index</Link></li>
                <li><Link to="/books/1">Book Detail</Link></li>
                <li><Link to="/books/1/sections/1">Book Section Detail</Link></li>
            </ul>
        </div>;
    }
});