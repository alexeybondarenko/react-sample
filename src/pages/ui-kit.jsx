var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div>
            <h1>UI Kit</h1>
            <h2>Buttons</h2>
            <div>
                <button className="btn">.btn</button>
                <div className="btn btn--default">.btn .btn--default</div>
                <a className="btn btn--primary">.btn .btn--primary</a>
            </div>
            <h3>Buttons with icons</h3>
            <div>
                <div className="btn btn--default">
                    <i className="icon lnr lnr-cross" />
                    Close
                </div>
                <div className="btn btn--primary">
                    Save
                    <i className="icon lnr lnr-star" />
                </div>
            </div>
            <h3>Button group (.btn-group)</h3>
            <p>Button group adds space between buttons</p>
            <div className="btn-group">
                <div className="btn btn--default">Read book</div>
                <div className="btn btn--primary">Buy book</div>
            </div>
        </div>;
    }
});