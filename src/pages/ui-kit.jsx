var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div>
            <h1>UI Kit</h1>

            <h1>Atoms</h1>
            <hr/>
            <h2>Button</h2>
            <div>
                <button className="btn">.btn</button>
                <div className="btn btn--default">.btn .btn--default</div>
                <a className="btn btn--primary">.btn .btn--primary</a>
                <a className="btn btn--primary" />
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
            <div className="badge-group">
                <div className="badge">default</div>
                <span className="badge badge--primary">.badge--primary</span>
            </div>
            <h2>Input (.input)</h2>
            <div>
                <input type="text" className="input" placeholder="Placeholder"/>
                <p>also support <i>contenteditable</i> div</p>
                <div className="input" contentEditable>Input with div</div>
            </div>
            <h3>Input with buttons</h3>
            <h4>Default</h4>
            <div>
                <p>
                    <input type="text" className="input"/>
                    <button className="btn btn--primary">Save</button>
                </p>
            </div>
            <h4>Input group (.input-group)</h4>
            <p>Input group wrap button and input in single block with single border.</p>
            <div>
                <div>
                    <div className="input-group">
                        <button className="btn"><i className="icon lnr lnr-calendar-full" /></button>
                        <input type="text" className="input"/>
                    </div>
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" className="input"/>
                        <button className="btn"><i className="icon lnr lnr-user" /></button>
                    </div>
                </div>
            </div>
            <h2>Textarea</h2>
            <div>
                <textarea className="textarea">Placeholder text</textarea>
            </div>
            <h2>Tooltip</h2>
            <p>Tooltip is using for context menus of button or some helpful info</p>
            <div>
                <p>Default</p>
                <div className="tooltip-wrap">
                    <div>
                        Some block that have tooltip
                    </div>
                    <div className="tooltip">
                        Some content
                    </div>
                </div>
                <p>Right arrow</p>
                <div className="tooltip-wrap">
                    <div>
                        Some block that have tooltip--right
                    </div>
                    <div className="tooltip tooltip--right">
                        Some content
                    </div>
                </div>
            </div>
            <h3>Tooltip Hover</h3>
            <div>
                <div className="tooltip-wrap tooltip-wrap--hover">
                    <button className="btn btn--default">
                        Hover me (CLEAR CSS)
                    </button>
                    <div className="tooltip">
                        Some content
                    </div>
                </div>
            </div>
            <h2>Link</h2>
            <div>
                <a className="link">example.com</a>
            </div>
            <h1>Molecules</h1>
            <hr/>
            <h2>List</h2>
            <div>
                <p>Default width div</p>
                <div className="list">
                    <div className="list__item">Item 1</div>
                    <div className="list__item">Item 2</div>
                    <div className="list__item">Item 3</div>
                    <div className="list__item">Item 4</div>
                    <div className="list__item">Item 5</div>
                </div>
                <p>Default with ul</p>
                <ul className="list">
                    <li>
                        <a href="#">Item 1</a>
                    </li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            <h3>List decimal (.list--decimal)</h3>
            <div>
                <div className="list list--decimal">
                    <div className="list__item">Item 1</div>
                    <div className="list__item">Item 2</div>
                    <div className="list__item">Item 3</div>
                    <div className="list__item">Item 4</div>
                    <div className="list__item">Item 5</div>
                </div>
            </div>
            <h3>List scroll (.list--scroll)</h3>
            <div>
                <div className="list list--scroll">
                    {
                        new Array(45).join('a').split('a').map(function (item, i) {
                            return <div className="list__item" key={i}>
                                <img src="http://unsplash.it/200/200" alt=""/>
                            </div>
                        })
                    }
                </div>
            </div>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>

        </div>;
    }
});