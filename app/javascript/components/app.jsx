import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
  <div>
    <h2>Hello</h2>
  </div>
}

const Index = () => {
  <div>
    <h2>All Flowers</h2>
  </div>
}

const Show = () => {
  <div>
    <h2>Show Flower</h2>
  </div>
}

const New = () => {
  <div>
    <h2>Add Flower</h2>
  </div>
}

const Edit = () => {
  <div>
    <h2>Edit Flowers</h2>
  </div>
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/index'>Index</Link></li>
            <li><Link to='/show'>Show</Link></li>
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