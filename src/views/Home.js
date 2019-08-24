import React from 'react';
import '../App.css'
import ListItem from '../component/List-item'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <div>
        <Link to="/create">
          <Button variant="primary" className="my-5">Add Employee</Button>
        </Link>
        <ListItem/>
      </div>
    )
  }
}

export default Home;
