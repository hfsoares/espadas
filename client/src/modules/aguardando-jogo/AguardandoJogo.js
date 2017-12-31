import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const AguardandoJogo = (props) => {
    const {jogador, muiTheme} = props;
    return (
        <div style={{
            fontFamily: muiTheme.fontFamily,
            padding: 5
        }}>
            <h2><p>Olá {jogador.nome}!</p></h2>
            <div><p>Você já está conectado. Crie um jogo ou aguarde alguém criar!</p></div>
            <FloatingActionButton style={style}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    );

}

export default muiThemeable()(AguardandoJogo);