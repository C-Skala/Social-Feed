import React, { useState } from 'react';
import "./LikeDislikeButton.css";

const LikeDislikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive')
    function handleClick(){
        if (buttonClass === 'inactive'){
            setButtonClass('active');
        }
        else{
            setButtonClass('inactive');
        }
    }  
        return ( 
        <div>
            <button classname = {buttonClass} onClick ={handleClick}>{props.message}</button> 
        </div>
     );
    
    
    
}
 
export default LikeDislikeButton;