import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet';

import { Grid } from '@material-ui/core';

import './ListTweets.scss';

const ListTweets = ({ allTweets }) => {

    if( allTweets.length === 0 ) {
        return (
            <div className="list-tweets-empty">
                <h2>No hay Tweets...</h2>
            </div>
        );
    }

    return (
        <Grid
            className="list-tweets"
            container
            spacing={ 3 }
        >
            {
                allTweets.map( ( tweet, index ) => (
                    <Grid
                        key={ index }
                        item xs={ 4 }
                    >
                        <Tweet
                            { ...tweet }
                            index={ index }
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

ListTweets.propTypes = {
    allTweets: PropTypes.array.isRequired
};

export default ListTweets;