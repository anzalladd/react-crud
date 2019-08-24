import React from 'react';
import { Form, Button} from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom'

class CreateEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee : {
                name: '',
                salary: '',
                age: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Input on change
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                [name] : value
            }
        }))
    }

    // Submit form
    handleSubmit(event) {
        event.preventDefault()
        let employee = {
            ...this.state.employee
        }
        const baseURL = 'http://dummy.restapiexample.com/api/v1'
        Axios.post(`${baseURL}/create`, employee)
        .then(response => {
            this.props.history.push('/')
        })
    }

  render() {
    return(
      <div>
        <Form className="mt-5" onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" placeholder="Salary" name="salary" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateEmployee);
