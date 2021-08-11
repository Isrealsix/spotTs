import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './assets/spotify';

function App() {
	const [token, setToken] = useState('')
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		if(_token) setToken(_token)

		console.log('real toke is ', token);
	}, [token])
	
	return (
		<div className="App">
			{token ? <h1>Ready to Play</h1> : <Login />}
		</div>
	);
}

export default App;
