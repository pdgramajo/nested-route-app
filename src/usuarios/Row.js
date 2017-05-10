import React from 'react';
import { Link } from 'react-router-dom';

const row = (params) => {
    return(
             <Link to={`/usuarios/${params.usuario.id}`} className="list-group-item" >  {/* {`${match.url}/:topicId`}   {"/EmpleadoDetails/" + this.props.Id} */}
                <img src={params.usuario.avatar_url} height='100' width='100' alt={params.usuario.login} />
               <span>  {params.usuario.login} </span>
             </Link>
    );
}

export default row;