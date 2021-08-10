import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './assets/spotify';

function App() {
	// const token = getTokenFromUrl();

	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
