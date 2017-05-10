import React, {Component} from 'react';
import goApi from '../Api';
import UsuarioRow from './Row';

export default class Lista extends Component {
    constructor(props){
        super(props);
        this.state={usuarios:[]};
    }    
    componentWillMount() {
        new goApi().getGitHubUsers().then( data => {
            this.setState({usuarios : data});
        });
    }
    render() {
        if(this.state.usuarios.length > 0){
        return (
            <div>
                {
                    this.state.usuarios.map(u => <UsuarioRow key={u.id} usuario={u}/>)
                }
            </div>
        );
    }else{
        return(<h2 className='text-center'> Cargando ...</h2>);
    }
    }
}