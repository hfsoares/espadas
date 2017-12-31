import React from 'react';
import './NomeJogador.css';
import muiThemeable from 'material-ui/styles/muiThemeable';

const NomeJogador = (props) => {
    let {columnSize, jogador, muiTheme, ativo} = props;
    return (
        <div style={{
            fontFamily: muiTheme.fontFamily,
            background: ativo ? muiTheme.palette.accent1Color : muiTheme.palette.primary1Color,
            color: muiTheme.palette.alternateTextColor,
            width: columnSize,
            textAlign: 'center',
            padding: 5,
            borderRadius: 3,
        }}>
            {jogador.nome}
        </div>
    );
}

export default muiThemeable()(NomeJogador);