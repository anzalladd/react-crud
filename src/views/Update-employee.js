import React from 'react';
import { Form, Button} from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom'

class UpdateEmployee extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employee: '',
            isLoading: true,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      componentDidMount(){
        const { id } = this.props.match.params
        const BaseURL = 'http://dummy.restapiexample.com/api/v1'
        Axios.get(`${BaseURL}/employee/${id}`)
        .then(response => {
            this.setState({
                employee: response.data,
                isLoading: false
            })
        })
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
            name: this.state.employee.employee_name,
            age: this.state.employee.employee_age,
            salary: this.state.employee.employee_salary,
        }
        const { id } = this.props.match.params
        const baseURL = 'http://dummy.restapiexample.com/api/v1'
        Axios.put(`${baseURL}/update/${id}`, employee)
        .then(response => {
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
    return(
      <div>
        <Form className="mt-5" onSubmit={this.handleSubmit}>
            { JSON.stringify(this.state.employee) }
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={this.state.employee.employee_name} name="employee_name" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" placeholder="Salary" value={this.state.employee.employee_salary} name="employee_salary" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" value={this.state.employee.employee_age} name="employee_age" onChange={this.handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(UpdateEmployee);
