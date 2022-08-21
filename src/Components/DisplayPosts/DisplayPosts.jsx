import React from 'react';
import LikeDislikeButton from './LikeDislikeButton';
import './displayPosts.css'

const DisplayPosts = (props) => {
    return ( 
        <table className = 'table-container'>
            <thead>
                <tr>
                    <th>NEW POSTS!!!</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                    return(
                        <tr className = 'row' key = {entry}>
                            <td className='hrheadder'></td>
                            <td className='boldName'>{entry.fullName}</td>
                            <td >{entry.post}</td>
                            <td><LikeDislikeButton message = 'Like'/></td>
                            <td><LikeDislikeButton message = 'Dislike'/></td>
                            <td className='date-info'>{Date()}</td>
                        </tr> 
                        
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;