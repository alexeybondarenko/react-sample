var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <a className="book-item">
            <div className="book-item__poster">
                <img src={this.props.posterUrl} alt=""/>
            </div>
            <div className="book-item__title" href="#">
                {this.props.title}
            </div>
        </a>
    }
});