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



export function getTokenFromUrl() {

	return window.location.hash.substring(1).split('&')
	.reduce((acc, item) => {
		let split = item.split('=');
		acc[split[0]] = decodeURIComponent(split[1]);
		return acc;
	}, {})
};


export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
