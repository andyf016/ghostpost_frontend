import React from 'react'



class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          sentiment: 'b',
          body: '',
      };
      
      this.handleSentiment =  this.handleSentiment.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    


    handleChange(event) {

      this.setState({body: event.target.value});
    }
  
    handleSentiment(event) {

        this.setState({sentiment: event.target.value})
    }

    handleSubmit(event) {
        console.log(JSON.stringify(this.state))
        console.log(event)
      fetch('http://127.0.0.1:8000/api/post/',{
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(this.state)})
          .then(function(response){
              console.log(response)
              return response.json()
          })
          .then(function(response){
              this.setState({body:''})
          })
    this.setState({body: ''})
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        <input type='submit'></input>
        <select value={this.state.value} onChange={this.handleSentiment}>
        <option value="b">Boast</option>
        <option value="r">Roast</option>
        </select>
        </form>
      );
    }
  }

  export default PostForm