
const DisplayPosts = (props) => {
    return ( 
        <table className = 'table'>
            <thead>
                <tr>
                    <th>NEW POSTS!!!</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                    return(
                        <tr key = {entry}>
                            <td>{entry.fullName}</td>
                            <td>{entry.post}</td>
                        </tr> 
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;