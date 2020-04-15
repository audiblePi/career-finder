import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from "../components/Nav/NavBar";
// import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
// import Chat from "../components/Chat/Chat";
import Home from "../views/Home/Home";
import Cluster from "../views/Cluster/Cluster";
import Career from "../views/Career/Career";
import DITL from "../views/DITL/DITL";
import Celebrity from "../views/Celebrity/Celebrity";
import ManageUsers from "../views/ManageUsers/ManageUsers";
import NotFound from "../views/NotFound";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 30,
        paddingBottom: 30,
    },
}));

const Main = (props) => {  
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />
			<NavBar onLogOut={props.onLogOut} role={props.role} />
			<Container maxWidth="md" className={classes.root}>      
				{/* <Breadcrumbs/> */}
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route exact path="/" render={(routeProps) => <Home {...routeProps} {...props}/>}  />
					<Route exact path="/Cluster/:cluster" render={(routeProps) => <Cluster {...routeProps} {...props}/>} />
					<Route exact path="/Cluster/:cluster/Career/:id" render={(routeProps) => <Career {...routeProps} {...props}/>} />
					<Route exact path="/Cluster/:cluster/Career/:id/DITL" render={(routeProps) => <DITL {...routeProps} {...props}/>} />
					<Route exact path="/Cluster/:cluster/Career/:id/Celebrity" render={(routeProps) => <Celebrity {...routeProps} {...props}/>} />
					<Route exact path="/ManageUsers" component={ManageUsers}/>
					<Route component={NotFound}/>
				</Switch>
			</Container>
			{/* <Chat {...props}/> */}
		</div>
	)
}

export default Main;