import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
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
