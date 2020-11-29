import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import Tweet from '../Tweet';

import './ListTweets.scss';


const ListTweets = ({ allTweets, deleteTweet }) => {

    if( allTweets.length === 0 ) {
        return (
            <div className="list-tweets-empty">
                <h2>No hay Tweets...</h2>
            </div>
        );
    }

    return (
        <div
            className="list-tweets"
        >
            {
                allTweets.map( ( tweet, index ) => (
                    <div
                        className="list-tweets__tweet"
                        key={ index }
                    >
                        <Tweet
                            { ...tweet }
                            index={ index }
                            deleteTweet={ deleteTweet }
                        />
                    </div>
                ))
            }
        </div>
    );
};

ListTweets.propTypes = {
    allTweets: PropTypes.array.isRequired,
    deleteTweet: PropTypes.func.isRequired
};

export default ListTweets;