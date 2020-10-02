import React from 'react';

class Roasts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/post/list_roasts/')
        .then(res => res.json())
        .then(data => this.setState({post: data}))
      }
    
    render(){
        return(
            <div>
                {this.state.post.map(p =>
                    <div>
                        <li>{p.sentiment}</li>
                        <li>{p.body}</li>
                    </div>)}
            </div>
        )
    }
}

export default Roasts