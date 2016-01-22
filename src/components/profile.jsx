var React = require('react');

module.exports = React.createClass({
   render: function () {
       return <div className="profile">
           <div className="profile__image">
               <img src="http://unsplash.it/200/400" alt="" />
           </div>
           <div className="profile__content">
               <h2>Виктор Пелевин</h2>
               <div className="link-group">
                   <a className="link">16 подписчиков</a> <a className="link">76 подписок</a>
               </div>
           </div>
       </div>;
   }
});