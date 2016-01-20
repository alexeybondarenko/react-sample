var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            title: 'Самонаблюдение, иcходя из того, что однократно.',
            in_progress: 1,
            author: 'А. Майерc.',
            year: 2015,
            description: 'Предсознательное, например, отталкивает закон, следовательно основной закон психофизики: ощущение изменяется пропорционально логарифму раздражителя . Но так как книга Фридмана адресована руководителям и работникам образования, то есть идентификация начинает комплекс. ',
            readers: 320,
            posterUrl: 'http://book.ua/i/41/50/Den_Senor_Sol_Singer_Naciya_umnih_ludey_w2.jpg'
        }
    },
    addToReads: function () {
        console.log('book:addToReads');
    },
    buySubscription: function () {
        console.log('book:buySubscription')
    },
    renderProgress: function () {
        return this.state.in_progress ? <span className="badge">в процессе</span> : null
    },
    render: function () {
        return <div className="book">
            {
                <div className="book__poster">
                    <img src={this.state.posterUrl} alt=""/>
                </div>
            }
            <div className="book__info">
                <h1 className="book__title">
                    <span>{this.state.title}</span>
                    <span>{this.renderProgress()}</span>
                </h1>
                <h3 className="book__author">{this.state.author} {this.state.year}</h3>
                <p>{this.state.description}</p>
                <div className="book__actions">
                    <div className="btns-group book__btns">
                        <button className="btn" onClick={this.addToReads} >Добавить в читаемое</button>
                        <button className="btn btn--primary" onClick={this.buySubscription}>Купить подписку</button>
                    </div>
                    <p className="book__readers text-center text-small">&nbsp;&nbsp;{this.state.readers} уже купили</p>
                </div>
            </div>
        </div>
    }
});