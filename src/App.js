import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sort: 'all',
      posts: []
    }
  }

  render(){
    return (
    <div >
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
