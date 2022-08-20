import React from 'react';
import LikeDislikeButton from './LikeDislikeButton';

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
                            <td className = 'table-content'>{entry.fullName}</td>
                            <td className = 'table-content' >{entry.post}</td>
                            <td><LikeDislikeButton message = 'Like'/></td>
                            <td><LikeDislikeButton message = 'Dislike'/></td>
                        </tr> 
                        
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;