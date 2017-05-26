import React, {Component} from 'react';
import UsuarioRow from './Row';
import PropTypes from 'prop-types';
import * as usuariosActions from './usuariosActions'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Lista extends Component {
 
    componentWillMount() {
        this.props.actions.loadUsers()
    }
    render() {
        if(this.props.usuarios.length > 0){
        return (
            <div>
                {
                    this.props.usuarios.map(u => <UsuarioRow key={u.id} usuario={u}/>)
                }
            </div>
        );
    }else{
        return(<h2 className='text-center'> Cargando ...</h2>);
    }
    }
}

Lista.propTypes = {
    usuarios: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => { return { usuarios: state.usuarios } }

const mapDispatchToProps = dispatch => { return { actions: bindActionCreators(usuariosActions, dispatch) } }




export default connect(mapStateToProps, mapDispatchToProps)(Lista);