import React, { useState } from 'react';

const CreatePost = (props) => {
    
    const [fullName, setFullName] = useState('')
    const [post, setPost] =useState('')

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        console.log(formEvent)
        let newEntry = {
            fullName : fullName,
            post : post
        };
        console.log(newEntry)
    }
    
    return ( 
        <form>
            <label for = 'fullName'>Full Name:</label>
            <input type = 'text' name = 'fullName'/><br/>
            <label>Post</label>
            <input type = 'text' name = 'post'/>
            <button type = 'submit' className = 'btn btn-primary'>POST</button>
        </form>
        
     );
}
 
export default CreatePost;