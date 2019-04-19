import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'
import { BroswerRouter as Router, Route} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route exact path='/' component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
