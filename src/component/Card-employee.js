import React from 'react';

class CardEmployee extends React.Component {
  render() {
    return(
      <div>
        { JSON.stringify(this.props.data) }           
       </div>
    )
  }
}

export default CardEmployee;
