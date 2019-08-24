import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class ListItem extends React.Component {
  render() {
    return(
      <div>
          <div>
            <ListGroup>
                { this.props.lists.map((list, index) =>
                    <Link to={`/employee/${list.id}`} key={index}> 
                        <ListGroupItem variant={index % 2 === 0 ? "primary" : ""}>{list.employee_name}</ListGroupItem>
                    </Link>
                    )}
                </ListGroup>
            </div>
       </div>
    )
  }
}

export default ListItem;
