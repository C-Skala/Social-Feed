import React, { useState } from 'react';
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Navbar from './Components/Navbar/Navbar';

function App() {
  
  const [entries, setEntries] = useState([{fullName: 'test test', post: 'this is a test post'}])
  
  function addNewPost(entry){
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div>
      <Navbar/>
      <CreatePost addNewPostProperty = {addNewPost}/>
      <DisplayPosts parentEntries = {entries}/>
    </div>
  );
}

export default App;
