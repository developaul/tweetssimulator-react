import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';

import './FormSendTweet.scss';

const FormSendTweet = ({ sendTweet }) => {

    const [ formValue, setFormValue ] = useState({
        name: '',
        tweet: ''
    });

    const onFormChange = event => setFormValue({
        ...formValue,
        [event.target.name]: event.target.value.trim()
    });

    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviar Tweet</h2>
            <form
                className="form-send-tweet__form"
                onSubmit={ event => sendTweet( event, formValue ) }
            >
                <FormControl>
                    <FormGroup>
                        <TextField 
                            className="form-send-tweet__form-name"
                            type="text"
                            name="name"
                            placeholder="Nombre del usuario"
                            margin="normal"
                            onChange={ onFormChange }
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-textarea"
                            name="tweet"
                            multiline
                            rows="6"
                            placeholder="Escribe tu tweet..."
                            margin="normal"
                            onChange={ onFormChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button
                            type="submit"
                        >Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

FormSendTweet.propTypes = {
    sendTweet: PropTypes.func.isRequired
};

export default FormSendTweet;