
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
                        <tc key = {entry}>
                            <tr>{entry.fullName}</tr>
                            <tr>{entry.post}</tr>
                        </tc>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;