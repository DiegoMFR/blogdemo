import React from 'react';
import './styles/App.scss';
import Header from './modules/header'
import Body from './modules/body'
import Footer from './modules/footer'
import AddNewPost from './components/blogpost/newPost';

function App(props) {
 
    const { postList } = props;
    return (
      <div className="blog">
        <Header/>
        <AddNewPost />
        <Body data={postList}/>
        <Footer/>
      </div>
    )
}

export default App;
