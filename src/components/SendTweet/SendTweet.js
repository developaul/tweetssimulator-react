import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';

import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';
import { TWEETS_STORAGE } from '../../utils/constans';

import './SendTweet.scss';

const SendTweet = ({ setToastProps, allTweets }) => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );

    const openModal = () => setIsOpenModal( true );

    const closeModal = () => setIsOpenModal( false );

    const sendTweet = ( event, formValue ) => {
        event.preventDefault();

        const { name, tweet } = formValue;

        let allTweetsArray = [];
        
        if( allTweets ) { allTweetsArray = allTweets; }

        if( !name || !tweet ) {
            setToastProps({
                open: true,
                text: 'WARNING: Todos los campos son obligatorios'
            });

            return;
        }

        formValue.time = moment();
        allTweetsArray.push( formValue );

        localStorage.setItem( TWEETS_STORAGE, JSON.stringify( allTweetsArray ) );

        allTweetsArray = [];

        setToastProps({
            open: true,
            text: 'Tweet envidado correctamente'
        });

        closeModal();
    }

    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="add"
                onClick={ openModal }
            >
                <AddIcon />
            </Fab>

            <ModalContainer
                isOpenModal={ isOpenModal }
                closeModal={ closeModal }
            >
                <FormSendTweet
                    sendTweet={ sendTweet }
                />
            </ModalContainer>
        </div>
    );
};

SendTweet.propTypes = {
    setToastProps: PropTypes.func.isRequired,
    allTweets: PropTypes.array.isRequired
}

export default SendTweet;