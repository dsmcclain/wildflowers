import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Show.css";

class Show extends Component{
  constructor(props){
    super(props);
    this.state = {
      hiker: '',
      day: '',
      comment: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(){
    let id = this.props.location.state.flower.id
    let body = JSON.stringify({sighting: {
                                  hiker: this.state.hiker,
                                  day: this.state.day,
                                  comment: this.state.comment
                                  } 
                              })
    let token = document.getElementsByName('csrf-token')[0].content;
    fetch(`/flowers/${id}/sightings.json`, {
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
    const { flower } = this.props.location.state
    return(
    <div className="show-flower-card">
      <h2 className="flower-name">{flower.name}</h2>
      <br/>
      <br/>
      <h3>Photograph Here</h3>
      <br/>
      <p>
        <strong>Description: </strong>
        {flower.description}
      </p>

      <p>
        <strong>Sightings:</strong>
        {!Object.keys(flower.sightings).length ? <p> None yet!</p> : 
          flower.sightings.map(sighting =>
            <ul>
              <strong>Hiker: </strong>
              {sighting.hiker}<br/>
              <strong>Day: </strong>
              {sighting.day} <br/>
              <strong>Comment: </strong>
              {sighting.comment}<br/>
            </ul>
        )}
      </p>

      <div className="add-sighting-form">
        <h2>Add a Sighting:</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Hiker:
                <input
                  type="text"
                  name="hiker"
                  onChange={this.handleInput}
                  value={this.state.hiker}
                />
              </label>
              <br/>
              <label>
                Day:
                <input
                  type="text"
                  name="day"
                  onChange={this.handleInput}
                  value={this.state.day}
                />
              </label>
              <br/>
              <label>
                Comment:
                <input
                  type="text"
                  name="comment"
                  onChange={this.handleInput}
                  value={this.state.comment}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>

      <Link to='/edit'>Edit</Link>
      <Link to='/index'>Back</Link>
    </div>
    )
  }
}

export default Show;