var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div>
            <h1>UI Kit</h1>
            <h2>Button</h2>
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
            <h2>Avatar</h2>
            <div>
                <p>
                    <i>default  </i>
                    <img src="https://unsplash.it/100/100" className="avatar"/>
                    <i>  small  </i>
                    <img src="https://unsplash.it/100/100" className="avatar avatar--small"/>
                    <i>  medium  </i>
                    <img src="https://unsplash.it/100/100" className="avatar avatar--medium"/>
                    <i>  big  </i>
                    <img src="https://unsplash.it/100/100" className="avatar avatar--big"/>
                </p>
            </div>
            <h2>Badge</h2>
            <div>
                some text <div className="badge">badge</div>
            </div>
            <h3>Badge group (.badge-group)</h3>
            <div  className="badge-group">
                <div className="badge">default</div>
                <span className="badge badge--primary">.badge--primary</span>
            </div>
        </div>;
    }
});