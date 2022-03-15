import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: process.env.REACT_APP_PRIMARY_COLOR || "#888888"
		}
	}
});

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Route exact path="/" component={App}></Route>
			</Router>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);