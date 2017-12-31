import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'nomeDoJogo',
        'pontosFimDoJogo',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.pontosFimDoJogo &&
        isNaN(Number(values.pontosFimDoJogo))
    ) {
        errors.pontosFimDoJogo = 'Pontos do Fim do Jogo precisa ser um número'
    }
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


const NovoJogoForm = props => {
    const { handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div><Field name = "nomeDoJogo" component={renderTextField} label="Nome do Jogo" /></div>
            <div><Field name = "pontosFimDoJogo" component={renderTextField} label="Pontos para terminar"/></div>
            <div>
                <RaisedButton label="Novo Jogo" primary={true} type="submit" disabled={submitting}>
                </RaisedButton>
            </div>
        </form>
    );
}

// Decorate with redux-form
export default reduxForm({
    form: 'nogoJogoForm',
    validate
})(NovoJogoForm);
