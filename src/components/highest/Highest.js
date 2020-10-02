import React from 'react';

class Highest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/post/highest_rated/')
        .then(res => res.json())
        .then(data => this.setState({post: data}))
      }
    
    render(){
        return(
            <div>
                {this.state.post.map(p =>
                    <div>
                        <br/>
                        <li>{p.sentiment}</li>
                        <li>{p.body}</li>
                        <li>Total Votes: {p.total_votes}</li>
                        <li>Posted: {p.created}</li>
                        <li>Updated: {p.update}</li>
                        <br/>
                    </div>)}
            </div>
        )
    }
}

export default Highest