var React = require('react');

module.exports = React.createClass({
    addToReads: function () {
        console.log('book:addToReads');
    },
    buySubscription: function () {
        console.log('book:buySubscription')
    },
    renderProgress: function () {
        if (!this.props.in_progress) return null;
        return <span className="badge">в процессе</span>;
    },
    renderPoster: function () {
        if (!this.props.posterUrl) return null;
        return <div className="book__poster">
            <img src={this.props.posterUrl} alt={this.props.title}/>
        </div>

    },
    render: function () {
        return <div className="book">
            { this.renderPoster() }
            <div className="book__info">
                <h1 className="book__title">
                    <span>{this.props.title}</span>
                    <span>{this.renderProgress()}</span>
                </h1>
                <h3 className="book__author">{this.props.author} {this.props.year}</h3>
                <p>{this.props.description}</p>
                <div className="book__actions">
                    <div className="btns-group book__btns">
                        <button className="btn" onClick={this.addToReads} >Добавить в читаемое</button>
                        <button className="btn btn--primary" onClick={this.buySubscription}>Купить подписку</button>
                    </div>
                    <p className="book__readers text-center text-small">&nbsp;&nbsp;{this.props.readers} уже купили</p>
                </div>
            </div>
        </div>
    }
});