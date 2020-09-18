import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {

    constructor() {
        super();
        this.state = {
            lista: [

            ]
        }

        this.onClickAtualizar = this.onClickAtualizar.bind(this);
    }

    onClickAtualizar(){
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        lista: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        return (
            <div className="App">
                <h4>Users</h4>

                <button onClick={this.onClickAtualizar}
                        type="button">
                    Atualizar Lista
                </button>


                <table className="table">
                    {
                        this.state.lista.map(function (p) {
                                return (
                                    <tr>
                                        <td> {p.id} </td>
                                        <td> {p.nome} </td>
                                        <td> {p.senha} </td>
                                        <td> {p.email} </td>
                                        <td> {p.celular} </td>
                                    </tr>
                                );

                            }

                        )

                    }
                </table>
            </div>
        );
    }
}

export default App;
