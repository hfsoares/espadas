import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
    const errors = {}
    if (!values.nomeJogador) errors.nomeJogador = 'Obrigatório';
    if (values.nomeJogador && values.nomeJogador.length>10) errors.nomeJogador = 'Máximo de 10 letras'
    return errors
};

const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                         }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);


const EntrarJogoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name = "nomeJogador" component={renderTextField} label="Seu nome" /></div>
            <div>
                <RaisedButton label="Entrar no Jogo" primary={true} type="submit" disabled={submitting}>
                </RaisedButton>
            </div>
        </form>
    );
}

// Decorate with redux-form
export default reduxForm({
    form: 'entrarJogoForm',
    validate
})(EntrarJogoForm);
