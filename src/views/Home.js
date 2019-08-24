import React from 'react';
import ListItem from '../component/List-item'
import { Button, Spinner, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isLoading: true,
    }
  }
  componentDidMount() {
    const BaseUrl = 'http://dummy.restapiexample.com/api/v1'
    axios.get(`${BaseUrl}/employees`)
    .then(res => {
        const response = res.data
        this.setState({
            lists: response,
            isLoading: false,
        })
    })
  }
  render() {
    return(
      <div>
        { 
          
        this.state.isLoading ? 
        <Row className="justify-content-center my-5">
          <Spinner animation="grow"/>
        </Row> 
        :
        <div>
          <Link to="/create">
            <Button variant="primary" className="my-5">Add Employee</Button>
          </Link>
          <ListItem lists={this.state.lists}/>
        </div>
        }
      </div>
    )
  }
}

export default Home;
