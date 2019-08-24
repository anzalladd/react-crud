import React from 'react';
import { Card } from 'react-bootstrap';

class CardEmployee extends React.Component {
  render() {
    return(
      <Card className="mt-5">
        <Card.Body>
            <Card.Title>{ this.props.data.employee_name }</Card.Title>
            <Card.Text className="mb-2">Salary : { this.props.data.employee_salary }</Card.Text>
            <Card.Text>Age : { this.props.data.employee_age }</Card.Text>
            <Card.Link href="#" className="text-danger font-weight-bold">Delete</Card.Link>
            <Card.Link href="#">Update</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default CardEmployee;
