import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class CardEmployee extends React.Component {
  handleDelete(id){
    const BaseURL = 'http://dummy.restapiexample.com/api/v1'
    Axios.delete(`${BaseURL}/delete/${id}`)
    .then(response => {
        this.props.history.push('/')
    })
  }
  render() {
    return(
      <Card className="mt-5">
        <Card.Body>
            <Card.Title>{ this.props.data.employee_name }</Card.Title>
            <Card.Text className="mb-2">Salary : { this.props.data.employee_salary }</Card.Text>
            <Card.Text>Age : { this.props.data.employee_age }</Card.Text>
            <Button variant="danger" className="font-weight-bold mr-4" onClick={() => this.handleDelete(this.props.data.id)}>Delete</Button>
            <Link to={`/update/${this.props.data.id}`}>Update</Link>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(CardEmployee);
