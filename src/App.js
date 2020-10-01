import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/') // TODO: complete url
    .then((res) => res.json())
    .then((data) => this.setState({posts: data.results}))
  }

  render(){
    return (
    <div className="App">
      <ul>
     {this.state.posts.map(p => (
       <li>{p.body}</li>
       // TODO: add more post info
     ))}
     </ul>
    </div>
  );
  }
  
}

export default App;
