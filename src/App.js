import React, { useState } from 'react';
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Navbar from './Components/Navbar/Navbar';
import './Components/DisplayPosts/LikeDislikeButton.css';
import './Components/Navbar/Navbar.css';
import './app.css'

function App() {
  
  const [entries, setEntries] = useState([{fullName: 'test test', post: 'this is a test post'}])
  
  function addNewPost(entry){
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div>
    <div >
      <Navbar/>
    </div>
    <div className='border-box, body'>
      <CreatePost addNewPostProperty = {addNewPost}/>
    </div>
    <div className=' body'>
      <DisplayPosts parentEntries = {entries}/>
    </div>
    </div>
  );
}

export default App;
