import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Provider} from 'react-redux'
import store from '../store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NovoJogoForm from "../modules/novo-jogo/NovoJogoForm";
import EntrarJogoForm from "../modules/entrar-jogo/EntrarJogoForm";
import DefinindoPosicoesForm from "../modules/definindo-posicoes/DefinindoPosicoesForm";
import AguardandoJogo from "../modules/aguardando-jogo/AguardandoJogo";

function baseDecorattor() {
    return (getStory) => (
        <MuiThemeProvider>
            <Provider store={store}>
                {getStory()}
            </Provider>
        </MuiThemeProvider>);
}

storiesOf('Entrando', module)
    .addDecorator(baseDecorattor())
    .add('Entrar no Jogo', () => <EntrarJogoForm/>)
    .add('Aguardando Jogo', () => <AguardandoJogo jogador = { { id: 1, nome: 'Malandro'} }/>)
    .add('Novo Jogo', () => <NovoJogoForm/>)

storiesOf('Definindo Posições', module)
    .addDecorator(baseDecorattor())
    .add('Oeste', () => definindoPosicoesForm('oeste'))
    .add('Leste', () => definindoPosicoesForm('leste'))
    .add('Norte', () => definindoPosicoesForm('norte'))
    .add('Sul', () => definindoPosicoesForm('sul'))
    .add('Nomes Grandes', () => definindoPosicoesForm('sul', true, null,  'Alexandre', 'Adalberto', 'Lohandus', 'Miklainvonis'))

storiesOf('Definindo Carteador', module)
    .addDecorator(baseDecorattor())
    .add('Testando sem botões', () => definindoPosicoesForm('sul', false))
    .add('Norte', () => definindoPosicoesForm('sul', false, 'norte'))
    .add('Leste', () => definindoPosicoesForm('sul', false, 'leste'))
    .add('Oeste', () => definindoPosicoesForm('sul', false, 'oeste'))
    .add('Sul', () => definindoPosicoesForm('sul', false, 'sul'))



function definindoPosicoesForm(jogador, comBotoes = true, carteador = null, norte = 'Norte', sul = 'Sul', leste = 'Leste', oeste = 'Oeste') {
    let jogadores =
        {
            norte: {id: 1, nome: norte},
            leste: {id: 2, nome: leste},
            oeste: {id: 3, nome: oeste},
            sul: {id: 4, nome: sul}
        };
    return <DefinindoPosicoesForm norte={jogadores.norte}
                                  leste={jogadores.leste}
                                  oeste={jogadores.oeste}
                                  sul={jogadores.sul}
                                  comBotoes = {comBotoes}
                                  jogador={jogadores[jogador]}
                                  carteador={jogadores[carteador]}/>;
}