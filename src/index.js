import React from 'react';
import ReactDOM from 'react-dom';

const kLove = React.createElement('a',{href:'https://www.klove.com/'},'www.klove.com');
const bTech = React.createElement('a',{href:'https://betheltech.net/'},'betheltech.net');
const bing = React.createElement('a',{href:'https://www.bing.com/'},'www.bing.com');
const wKlove = React.createElement('li',{},kLove);
const wBtech = React.createElement('li',{},bTech);
const wBing = React.createElement('li',{},bing);

ReactDOM.render(
    React.createElement(
        'ul',
         {},
         React.createElement('li',{className:'Favorite Colors'},'Favorite Colors',React.createElement('ol',{},React.createElement('li',{},'Blue'),React.createElement('li',{},'Red'),React.createElement('li',{},'Black'))),
         React.createElement('li',{className:'Favorite Music'},'Favorite Music',React.createElement('ol',{},React.createElement('li',{},'Micheal W Smith'),React.createElement('li',{},'Amy Grant'),React.createElement('li',{},'NewsBoys'))),
         React.createElement('li',{className:'Favorite Food'},'Favorite Food',React.createElement('ol',{},React.createElement('li',{},'Lasagna'),React.createElement('li',{},'Pizza'),React.createElement('li',{},'Chocolate'))),
         React.createElement('li',{className:'Favorite Websites'},'Favorite Websites',React.createElement('ol',{},wKlove,wBtech,wBing))
         ),
    document.getElementById('root')
);