import React from 'react';
import './styles/App.scss';
import Blog from './views/blog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FullArticle from './views/fullArticle'


function App(props) {

  const { postList } = props;
  const getPost = (postId) => {
    const pepe = postList.find(post => (post.id === Number(postId)));
    return pepe;
  }

  return (
    <Router>
      <div className="main">
        <Route exact path="/" render={() => (
          <Blog postList={postList} />
        )} />
        <Route path="/read/:postId" render={({ match }) => (
          <FullArticle post={getPost(match.params.postId)} />
        )} />
        <Route path="/edit/:postId" render={({ match }) => (
          <FullArticle post={getPost(match.params.postId)} editMode />
        )} />
        <Route path="/add" render={() => (
          <FullArticle post={{
              id: Date.now(),
              title: 'New Post',
              dateCreated: ' 14 Dec 2018',
              readTime: '7 min',
              body: 'start typing here...',
              imageName: 'post.png',
            }} editMode />
        )} />
      </div>
    </Router>
  )
}

export default App;
