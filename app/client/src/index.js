import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme.js";
import CssBaseline from "@material-ui/core/CssBaseline";


//<link href='https://fonts.googleapis.com/css?family=Quicksand:700:bold|Montserrat:400' rel='stylesheet' type='text/css'></link>
//<link href='https://fonts.googleapis.com/css?family=Alice|Montserrat:400' rel='stylesheet' type='text/css'></link>
//<link href='https://fonts.googleapis.com/css?family=Quando|Montserrat:400' rel='stylesheet' type='text/css'></link>
//<link href='https://fonts.googleapis.com/css?family=Montserrat+Alternatives:700:Bold|Montserrat:400' rel='stylesheet' type='text/css'></link>
ReactDOM.render(
    <Router>
        <link href='https://fonts.googleapis.com/css?family=Comic+Neue:400|Montserrat:bold:700' rel='stylesheet' type='text/css'></link>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <App />
        </MuiThemeProvider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
