import React from 'react';
import {SpringGrid} from 'react-stonecutter';
import NomeJogador from "../nome-jogador/NomeJogador";
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

const columnSize = 90;

const iconStyles = {
    marginRight: 24,
};

const CenterDoubleArrow = (props) => (
    <SvgIcon {...props}>
        <path d="M0,10l5,5 v-3 h14 v3 l5,-5 l-5,-5 v3 h-14 v-3  z"/>
    </SvgIcon>
);

const LeftDoubleArrow = (props) => (
    <SvgIcon {...props}>
        <path d="M8,0 l-5,5 h3 v12 h12 v3 l5,-5 l-5,-5 v3 h-8 v-8 h3  z"/>
    </SvgIcon>
);

const RightDoubleArrow = (props) => (
    <SvgIcon {...props}>
        <path d="M15,0 l-5,5 h3 v8 h-8 v-3 l-5,5 l5,5 v-3 h12 v-12 h3  z"/>
    </SvgIcon>
);


const DefinindoPosicoesForm = props => {
    let {norte, sul, leste, oeste, jogador, carteador, comBotoes} = props;
    if (jogador.id == norte.id) {
        let tmp = sul;
        sul = norte;
        norte = tmp;
        tmp = leste;
        leste = oeste;
        oeste = tmp;
    } else {
        if (jogador.id == leste.id) {
            let tmp = sul;
            sul = leste;
            leste = norte;
            norte = oeste;
            oeste = tmp;
        } else {
            if (jogador.id == oeste.id) {
                let tmp = sul;
                sul = oeste;
                oeste = norte;
                norte = leste;
                leste = tmp;
            }
        }
    }
    const btnStyle = {
        position: 'absolute',
        margin: 'auto',
        top: 35,
        bottom: 0,
        left: 0,
        right: 0,
    }

    const imgStyle = {
        position: 'absolute',
        margin: 'auto',
        top: 35,
        bottom: 0,
        left: 0,
        right: 0,
    }

    return (
        <SpringGrid
            component="div"
            columns={3}
            columnWidth={columnSize}
            gutterWidth={5}
            gutterHeight={5}
            itemHeight={40}
            springConfig={{stiffness: 170, damping: 26}}
        >
            <div key="noroeste" style={{width: columnSize}}>
            </div>
            <div key={norte.id}><NomeJogador jogador={norte} columnSize = {columnSize} ativo = {carteador && (carteador.id == norte.id) } /></div>
            <div key="nordeste">
                <div></div>
            </div>

            <div key={oeste.id}><NomeJogador jogador={oeste} columnSize = {columnSize} ativo = {carteador && (carteador.id == oeste.id) }/></div>
            <div key="centro" style={{width: columnSize}}>
                {comBotoes &&
                <IconButton style={btnStyle}>
                    <CenterDoubleArrow style={iconStyles}/>
                </IconButton>
                }
            </div>
            <div key={leste.id}><NomeJogador jogador={leste} columnSize = {columnSize} ativo = {carteador && (carteador.id == leste.id) }/></div>

            <div key="sudoeste" style={{width: columnSize}}>
                {comBotoes &&
                <IconButton style={btnStyle}>
                    <LeftDoubleArrow style={iconStyles}/>
                </IconButton>
                }
            </div>
            <div key={sul.id}><NomeJogador jogador={sul} columnSize = {columnSize} ativo = {carteador && (carteador.id == sul.id) }/></div>
            <div key="sudeste" style={{width: columnSize}}>
                {comBotoes &&
                <IconButton style={btnStyle}>
                    <RightDoubleArrow style={iconStyles}/>
                </IconButton>
                }
            </div>
        </SpringGrid>

    )
}

export default DefinindoPosicoesForm;