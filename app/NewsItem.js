// NewsItem.js

import React from 'react';
import URL from "url";
import Moment from "moment";
import "../style/NewsItem.css";
import ImageGrayArray from "../img/grayarrow.gif";

export default class NewsItem extends React.Component {
	getDomain() {
		return URL.parse(this.props.item.url).hostname;
	}
	getTitle() {
		return (
			<div className="newItem-title">
				<a className="newItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        		{
        			this.props.item.url && <span className="newItem-titleDomain">
				<a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}> ({this.getDomain()})</a>
        		</span>
        		}
			</div>
		);
	}

	getCommentLink() {
		var commentText = "discuss";
		if(this.props.item.kids && this.props.item.kids.length)
			commentText = this.props.item.kids.length + " comments";
		return (
			<a href={"https://news.ycombinator.com/item?id=" + this.props.item.id}>{commentText}</a>
		);
	}

	getSubtext() {
		return (
			<div className="newsItem-subtext">
				{this.props.item.score} points by <a href={"https://news.ycombinator.com/user?id=" + this.props.item.by}>{this.props.item.by} {Moment.utc(this.props.item.time * 1000).fromNow()} </a> | {this.getCommentLink()}
			</div>
		);
	}

	getVote() {
		return (
			<div className="newsItem-vote">
				<a href={"https://news.ycombinator.com/vote?id=" + this.props.item.id + "&how=up&goto=news"}>
					<img src={ImageGrayArray} width="10" />
				</a>
			</div>
		);
	}

	getRank() {
		return (
			<div className="newsItem-rank">
				{this.props.rank}.
			</div>
		);
	}

  	render() {
	    return (
	        <div className="newsItem">
	        	{this.getRank()}
	        	{this.getVote()}
	        	<div className="newsItem-itemText">
	        		{this.getTitle()}
	        		{this.getSubtext()}
	        	</div>
	        </div>
	    );
	}
}