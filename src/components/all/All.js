import React from 'react';
import PostCard from '../post-card/PostCard'
class All extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/post/')
        .then(res => res.json())
        .then(data => this.setState({post: data}))
      }
    
    handleUpVote(url){
        let upvote = new XMLHttpRequest()
        upvote.open("POST", url, false)
        upvote.send()
        fetch('http://127.0.0.1:8000/api/post/')
        .then(res => res.json())
        .then(data => this.setState({post: data}))
    }

    handleDownVote(url){
        let downvote = new XMLHttpRequest()
        downvote.open("POST", url, false)
        downvote.send()
        fetch('http://127.0.0.1:8000/api/post/')
        .then(res => res.json())
        .then(data => this.setState({post: data}))
    }

    render(){
        return(
            <div>
                {this.state.post.map(p =>
                    <div>
                        <br/>
                <li>{p.id}</li>
                        <li>{p.sentiment}</li>
                        <li>{p.body}</li>
                        <li>Total Votes: {p.total_votes}</li>
                        <li>Posted: {p.created}</li>
                        <li>Updated: {p.update}</li>
                        <button onClick={() => this.handleUpVote(`http://127.0.0.1:8000/api/post/${p.id}/up_vote/`)}>Up Vote</button>
                        <button onClick={() => this.handleUpVote(`http://127.0.0.1:8000/api/post/${p.id}/down_vote/`)}>Down Vote</button>
                        <br/>
                    </div>)}
            </div>
        )
    }
}

export default All