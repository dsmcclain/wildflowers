import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
  return(
  <div>
    <h2>The Wildflowers of Mt. Hood</h2>
  </div>
  )
}

class Index extends Component{
  constructor(props) {
    super(props);
    this.state ={
      flowers: [],
    }
  }
  componentDidMount() {
    fetch('/flowers.json')
      .then(response => response.json())
      .then(flowers => this.setState({flowers: flowers}))
  }
  render() {
    const { flowers } = this.state;
    return(
      <div>
        <h2>All Flowers</h2>
        <ul>
          {flowers.map(flower => 
            <li><Link to={{
                  pathname: `/show/${flower.id}`,
                  state: { flower: flower }
                }}>{flower.name}</Link>
            </li>)}
        </ul>
      </div>
    )
  }
}

class Show extends Component{
  render(){
    const { flower } = this.props.location.state
    return(
    <div>
      <p>
        <strong>Flower:</strong>
        {flower.name}
      </p>
      <p>
        <strong>Description:</strong>
        {flower.description}
      </p>

      <p>Sightings</p>
      <p>Add a Sighting:</p>

      <Link to='/edit'>Edit</Link>
      <Link to='/index'>Back</Link>
    </div>
    )
  }
}

const New = () => {
  return(
  <div>
    <h2>Add Flower</h2>
  </div>
  )
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
        <div>
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