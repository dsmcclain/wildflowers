import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Index.css";

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
      <div className='dashboard-container'>
        <h2>All Flowers</h2>
        <div className='flowercard-rows'>
          {flowers.map(flower => 
            <div className='flower-card'>
              <Link className='flower-link' 
                    to={{pathname: `/show/${flower.id}`, state: { flower: flower } }}>
                {flower.name}
              </Link>
              <p><strong>Description:</strong> {flower.description}</p>
            </div>)}
        </div>
      </div>
    )
  }
}

export default Index;