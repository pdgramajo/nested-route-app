import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmpleadoRow extends Component {
    
    render() {
        return (          
             <Link to={`/empleados/${this.props.Id}`} className="list-group-item" >  {/* {`${match.url}/:topicId`}   {"/EmpleadoDetails/" + this.props.Id} */}
                 {this.props.FirstName} {this.props.LastName}
             </Link>
        );
    }
}