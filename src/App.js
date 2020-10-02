import React from 'react';
import SortBy from './components/sort-by/SortBy'
import './App.css';
import PostForm from './components/post-form/PostForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sort: '',
      //posts: []
    }
  }

  handleRoast(){
    this.setState({sort: 'roast'})
  }

  handleBoast(){
    this.setState({sort: 'boast'})
  }

  handleHighest(){
    this.setState({sort: 'highest'})
  }

  handleAll(){
    this.setState({sort: 'all'})
  }

  

  render(){
    return (
    <div >
      <button onClick={() => this.handleAll()}>All Posts</button>
      <button onClick={() => this.handleRoast()}>Roasts</button>
      <button onClick={() => this.handleBoast()}>Boasts</button>
      <button onClick={() => this.handleHighest()}>Highest Rated</button>
      <PostForm />
      <SortBy sort={this.state.sort} />
    </div>
  );
  }  
}



export default App;
