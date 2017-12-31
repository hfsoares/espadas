import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import io from 'socket.io-client';

import NewGameForm from "./modules/novo-jogo/NovoJogoForm";

const socket = io.connect();


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {hora: 'calculando'};
    }

    componentDidMount() {
        let component = this;
        socket.on('connect', function(data) {
            socket.emit('join', 'hi');
        });
        socket.on('time', function(data) {
            component.setState(data);
        });
    };

    render() {

        return (
            <MuiThemeProvider>
                <div className="App">
                    <div>
                        {this.state.hora}
                    </div>
                    <NewGameForm/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;