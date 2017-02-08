import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import NewsList from "./NewsList.js"
import "../style/app.css";

function get(url) {
  return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
  return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
	console.log(items);
  ReactDOM.render(
  	<NewsList items={items}/>,
  	document.getElementById("content")
  );
}).catch(function(err) {
  console.log('error occur', err);
});