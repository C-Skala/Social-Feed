import React, { useState } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {
    
    const [fullName, setFullName] = useState('')
    const [post, setPost] =useState('')

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newEntry = {
            fullName : fullName,
            post : post
        };
        console.log(newEntry)
        props.addNewPostProperty(newEntry);
    }
    
    return ( 
        <form onSubmit = {handleSubmit} className = 'form-grid'>
            
            <label>Full Name:</label>
            <input type = 'text' value = {fullName} onChange ={(formEvent) =>setFullName(formEvent.target.value)}/><br/>
            <label>Post</label>
            <input type = 'text' className = 'postbox' value = {post} onChange ={(formEvent) =>setPost(formEvent.target.value)}/>
            <button type = 'submit' className = 'btn btn-primary'>POST</button>
        </form>
        
     );
}
 
export default CreatePost;