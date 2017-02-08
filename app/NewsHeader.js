// NewsHeader.js

import React from 'react';

import imageLogo from "../img/y18.gif";
import "../style/NewsHeader.css";

export default class NewsHeader extends React.Component {
  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          {this.getTitle()}
          {this.getNav()}
          {this.getLogin()}
        </div>
        );
  }

  getLogo() {
  	return (
		<div className="newsHeader-logo">
			<a href="https://news.ycombinator.com/">
				<img src={imageLogo} alt="" />
			</a>
		</div>
  	);
  }

  getTitle() {
  	return (
		<div className="newsHeader-title">
			<a href="https://news.ycombinator.com/" className="newsHeader-titleLink">Hacker News</a>
		</div>
  	);
  }

  getNav() {
  	let navLinks = [
		{
			name: "new",
			url: "newest"
		},
		{
			name: "comments",
			url: "newComments"
		},
		{
			name: "show",
			url: "show"
		},
		{
			name: "ask",
			url: "ask"
		},
		{
			name: "jobs",
			url: "jobs"
		},
		{
			name: "submit",
			url: "submit"
		},
  	];
  	return (
		<div className="newsHeader-nav">
			{
				navLinks.map(function(navLink) {
					return (
						<a key={navLink.name} className="newsHeader-navLink" href={"https://news.ycombinator.com/" + navLink.url}>{navLink.name}</a>
					);
				})
			}
		</div>
  	);
  }

  getLogin() {
  	return (
		<div className="newsHeader-login">
			<a href="https://news.ycombinator.com/login?goto=news" className="newsHeader-loginLink">login</a>
		</div>
  	);
  }
}
