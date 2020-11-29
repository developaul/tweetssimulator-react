import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import moment from 'moment';

import './Tweet.scss';

const Tweet = ({ name, tweet, time , index, deleteTweet }) => (
    <Card className="tweet">
        <CardContent>
            <div className="tweet__header">
                <h5>{ name }</h5>
                
                <DeleteTwoToneIcon
                    onClick={ () => deleteTweet( index ) }
                />
            </div>
            
            <p>{ tweet }</p>
            
            <div className="tweet__date-add-tweet">
                { moment( time ).format( 'DD/MM/YYYY HH:mm' ) }
            </div>
        </CardContent>
    </Card>
);

Tweet.propTypes = {
    name: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteTweet: PropTypes.func.isRequired
}

export default Tweet;