var React = require('react');
var ReactDOM = require('react-dom');

var Book = require('./components/book');
var BookItem = require('./components/book-item');
var Progress = require('./components/progress');

var book = {
  title: 'Самонаблюдение, иcходя из того, что однократно.',
  in_progress: 1,
  author: 'А. Майерc.',
  year: 2015,
  description: 'Предсознательное, например, отталкивает закон, следовательно основной закон психофизики: ощущение изменяется пропорционально логарифму раздражителя . Но так как книга Фридмана адресована руководителям и работникам образования, то есть идентификация начинает комплекс. ',
  readers: 320,
  posterUrl: 'http://book.ua/i/41/50/Den_Senor_Sol_Singer_Naciya_umnih_ludey_w2.jpg',
  sections: [
    {
      id: 0,
      name: 'Трансцендентальный интеллект: основные моменты',
      progress: .8
    },
    {
      id: 1,
      name: 'Филосовский филогенез: основные моменты',
      progress: 1
    },
    {
      id: 2,
      name: 'Сенсибельный закон исключённого третьего: основные моменты',
      progress: .1
    }
  ]
};


var Hello = React.createClass({
  renderBookSectionItem: function (section) {
    var progressBar =  (section.progress < 1) ? (<Progress value={section.progress}/>) : null;
    return <div className="list__item" key={section.id}>
      {section.name}
      {progressBar}
    </div>
  },
  render: function() {
    return <div id="book-page">
      <Book {...book}/>
      <h2>Содержание</h2>
      <div className="list list--decimal">
        {
          book.sections.map(function (section) {
            return this.renderBookSectionItem(section);
          }.bind(this))
        }
      </div>
      <h3>Другие книги автора (Д.Майерс)</h3>
      <div className="list list--scroll">
        <div className="list__item">
          <BookItem {...book} />
        </div>
        <div className="list__item">
          <BookItem {...book} />
        </div>
        <div className="list__item">
          <BookItem {...book} />
        </div>
        <div className="list__item">
          <BookItem {...book} />
        </div>
      </div>
      <h3>Читатели также выбирают</h3>
      <div className="list list--scroll">
        <div className="list__item">
          <BookItem {...book} />
        </div>
        <div className="list__item">
          <BookItem {...book} />
        </div>
      </div>
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
