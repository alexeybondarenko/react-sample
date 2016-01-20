var React = require('react');

module.exports = React.createClass({
    getStyle: function () {
        return {
            width: (this.props.value || 0)* 100 + '%'
        };
    },
    render: function () {
        return <div className="progress">
            <div className="progress__in" style={this.getStyle()}></div>
        </div>
    }
});