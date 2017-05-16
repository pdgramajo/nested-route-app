import React, { Component } from 'react';
import goApi from '../Api';
import { Link } from 'react-router-dom';

export default class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = { usuario: null, repositorios: [], repositoriosSelected:[] , searchTerm: '' }
         this._handleChange = this._handleChange.bind(this);
    }
    componentWillMount() {
        new goApi().getGitHubUserById(this.props.match.params.id).then(data => {
            new goApi().getData(data.url).then(response => {
                this.setState({ usuario: response });
                new goApi().getData(response.repos_url).then(repos => {
                    this.setState({ repositorios: repos });
                    this.setState({ repositoriosSelected: repos });
                });
            })
        })
    }
    _handleChange(e){
         this.setState({searchTerm: e.target.value});
         var  selected = this.state.repositorios.filter(repo => {
           // console.log(repo.name.indexOf(this.state.searchTerm));
            return repo.name.indexOf(this.state.searchTerm) !== -1;
            });
         this.setState({repositoriosSelected :selected});
    }
    render() {
        if (this.state.usuario != null) {
            return (
                <div>                                          
                    <div className="panel ">
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-xs-12 col-sm-8 col-md-6'>
                                    <img src={this.state.usuario.avatar_url} height='250' width='250' alt={this.state.usuario.id} />
                                    <h2> {this.state.usuario.name} </h2>
                                    <h2> {this.state.usuario.bio} </h2>
                                    <h2> <a href={this.state.usuario.blog} > {this.state.usuario.blog} </a> </h2>
                                    <h2>GitHub:<a href={this.state.usuario.html_url} > {this.state.usuario.html_url} </a></h2>
                                    <hr />
                                    <Link to="/usuarios" className="btn btn-primary" >
                                        Volver
                                    </Link>  
                                </div>
                                <div className='col-xs-12 col-sm-4 col-md-6'>
                                    <h2 className='text-center'> {this.state.usuario.public_repos} Repositorios </h2>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={this.state.searchTerm} onChange={this._handleChange} placeholder="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">Go!</button>
                                        </span>
                                    </div> <br/>
                                    <ul className='list-group'>
                                    {
                                        this.state.repositoriosSelected.map(repo=> 
                                            <li key={repo.id} className='list-group-item'>
                                                <a href={repo.html_url} > {repo.name} </a>
                                                <p>{repo.description}</p>
                                                <p> {repo.language} </p>
                                            </li>
                                        )
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<h2 className='text-center'> Cargando ...</h2>);
        }
    }
}