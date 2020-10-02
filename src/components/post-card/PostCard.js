import React from 'react'

function PostCard(props){
    return(
        <div>
        {props.post.map(p =>
            <div>
                <br/>
        <li>{p.id}</li>
                <li>{p.sentiment}</li>
                <li>{p.body}</li>
                <li>Total Votes: {p.total_votes}</li>
                <li>Posted: {p.created}</li>
                <li>Updated: {p.update}</li>
                <button onClick={() => this.handleUpVote(`http://127.0.0.1:8000/api/post/${p.id}/up_vote/`)}>Up Vote</button>
                <br/>
            </div>)}</div>
    )
}

export default PostCard