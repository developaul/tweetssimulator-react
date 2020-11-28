import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';

import { TWEETS_STORAGE } from './utils/constans';

function App() {

	const [ toastProps, setToastProps ] = useState({
		open: false,
		text: null
	});

	const { open, text } = toastProps;

	const [ allTweets, setAllTweets ] = useState( [] );

	useEffect( () => {

		const allTweetsStorage = JSON.parse( localStorage.getItem( TWEETS_STORAGE ) ) || [];
		setAllTweets( allTweetsStorage );

	}, [] );

	return (
		<Container className="tweets-simulator" maxWidth={ false }>
			<Header />

			<SendTweet
				setToastProps={ setToastProps }
				allTweets={ allTweets }
			/>

			<ListTweets
				allTweets={ allTweets }
			/>

			<Snackbar
				anchorOrigin={{ 
					vertical:'top',
					horizontal: 'right'
				}}
				open={ open }
				autoHideDuration={ 1000 }
				message={ <span id="message-id" >{ text }</span> }
			/>
		</Container>
	);
};

export default App;