import { useLocation } from 'react-router-dom';

// Redirect to Spotify login page
// Then returns back to our App

export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = '52aad497fbe148959953aab970641767';

// Scopes for users activities
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

export const GetTokenFromUrl = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search)
	const clientId = queryParams.get('client_id')
	console.log(clientId)
	return clientId;
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
