import React from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Spinner, Row } from 'react-bootstrap'
class ListItem extends React.Component {
  state = {
      lists: [],
      isLoading: true,
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
          { this.state.isLoading === true ? 
            <Row className="justify-content-center my-5">
                <Spinner animation="grow"/>
            </Row>
          : 
          <div>
            <ListGroup>
                { this.state.lists.map((list, index) => 
                    <ListGroupItem key={index} variant={index % 2 === 0 ? "primary" : ""}>{list.employee_name}</ListGroupItem>
                    )}
                </ListGroup>
            </div>
          }
       </div>
    )
  }
}

export default ListItem;
