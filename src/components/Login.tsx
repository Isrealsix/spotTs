import React from 'react';
import { loginUrl } from '../assets/spotify';
import classes from './Login.module.css';

const Login: React.FC<{}> = (props) => {
	return (
		<div className={classes.login}>
			<img
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
