import React, { Component } from 'react';
import axios from 'axios';


export default class Apicall extends Component {

  getReddit() {
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      var posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }

  componentWillMount() {
    this.getReddit();
  }

  constructor() {
    super();

    this.state = {
      posts: [],
      subr: 'space'
    }

    this.getReddit = this.getReddit.bind(this);
  }
  render() {
    return(
      <div style={{textAlign: 'left'}}>
        <h1>I am Apicall</h1>
        {this.state.posts.map(post =>
          <span key={post.id}><a href={post.url}>
            {post.title}</a> by  <b style={{color: 'green'}}>{post.author}</b><br />
          <p>{post.selftext}</p> <hr />
          </span>
        )}
      </div>
    )
  }
}
