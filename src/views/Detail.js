import React from 'react';
import Axios from 'axios';
import Card from '../component/Card-employee'
import { Spinner, Row } from 'react-bootstrap'

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        employee: '',
        isLoading: true,
    }
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
  render() {
    return(
      <div>
        { this.state.isLoading ? 
            <Row className="justify-content-center mt-5">
                <Spinner animation="grow" />
            </Row>
            :
            <Card data={this.state.employee}/>
        }        
      </div>
    )
  }
}

export default Detail;
