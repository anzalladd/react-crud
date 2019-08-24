import React from 'react';
import Axios from 'axios';
import Card from '../component/Card-employee'

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        employee: ''
    }
  }
  componentDidMount(){
    const { id } = this.props.match.params
    const BaseURL = 'http://dummy.restapiexample.com/api/v1'
    Axios.get(`${BaseURL}/employee/${id}`)
    .then(response => {
        this.setState({
            employee: response.data
        })
    })
  }
  render() {
    return(
      <div>
        <Card data={this.state.employee}/>
      </div>
    )
  }
}

export default Detail;
