var React = require('react');

var BookItem = require('../components/book-item');
var Profile = require('../components/profile');

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

module.exports = React.createClass({
    render: function () {
        return <div>
            <Profile />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,</p>
            <h3>Читаемые книги</h3>
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
        </div>
    }
});