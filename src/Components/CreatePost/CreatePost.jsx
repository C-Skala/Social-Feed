import React, { useState } from 'react';

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
        <form onSubmit = {handleSubmit}>
            <label>Full Name:</label>
            <input type = 'text' value = {fullName} onChange ={(formEvent) =>setFullName(formEvent.target.value)}/><br/>
            <label>Post</label>
            <input type = 'text' value = {post} onChange ={(formEvent) =>setPost(formEvent.target.value)}/>
            <button type = 'submit' className = 'btn btn-primary'>POST</button>
        </form>
        
     );
}
 
export default CreatePost;