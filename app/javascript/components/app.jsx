import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Index from "./Index.jsx";
import Show from "./Show.jsx";
import "../styles/app.css";

const Home = () => {
  return(
  <div>
    <h2>The Wildflowers of Mt. Hood</h2>
    <Index />
  </div>
  )
}

class New extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postFlower = this.postFlower.bind(this);
  }

  handleInput(event){
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(){
    alert('You have sumbitted a flower: ' 
          + this.state.name + ' ' + this.state.description);
    this.postFlower();
  }

  postFlower(){
    let body = JSON.stringify({flower: {name: this.state.name, description: this.state.description} })
    let token = document.getElementsByName('csrf-token')[0].content;
    fetch('/flowers.json', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error){
      console.log('Request failure: ', error);
    })
  }

  render(){
    return(
      <div>
        <h2>Add Flower</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleInput}
              value={this.state.name}
            />
          </label>
          <br/>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              value={this.state.description}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const Edit = () => {
  return(
  <div>
    <h2>Edit Flowers</h2>
  </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="canvas">
          <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to='/index'>Index</Link></li>
            <li><Link to='/new'>New</Link></li>
            <li><Link to='/edit'>Edit</Link></li>
          </ul>

          <br />
          <Route exact path='/' component={Home} />
          <Route path='/index' component={Index} />
          <Route path='/show' component={Show} />
          <Route path='/new' component={New} />
          <Route path='/edit' component={Edit} />
        </div>
      </Router>
    )
  }
}

export default App;