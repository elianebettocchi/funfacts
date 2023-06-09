import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Brazil from '../brazil.png';
import {connect} from 'react-redux';
class Home extends Component {
  
  
  render() {
    console.log(this.props)
    const {posts} = this.props;
    const postList = posts.length ? (
      posts.map(post =>{
      return (
        <div className="post card"
        key={post.id}>
        <img src={Brazil} alt="Brazil" />
          <div className="card-content">
          <Link to={'/' + post.id}>
            <span className='card-title green-text'>
              {post.title}
            </span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })
   ) : (   <div>No posts to show</div>)
 
    return (
      <div className="container home">
      <h4 className="center">Home</h4>
      <p>
         {postList}
      </p>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    posts: state.posts
  }
}

export default  connect(mapStateToProps)(Home)