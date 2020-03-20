import React from 'react';
import { useLocation } from "react-router-dom";

import Home from "../../views/Home/Home";
import Career from "../../views/Career/Career";
import DITL from "../../views/DITL/DITL";
import Celebrity from "../../views/Celebrity/Celebrity";
import Cluster from "../../views/Cluster/Cluster";

//import Typography from '@material-ui/core/Typography';
import BREADCRUMBS from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const routes = [
    { 
        path: "/", 
        name: "Home", 
        Component: Home 
    },
    { 
        path: "/Cluster/:id/Career/:id", 
        name: "Cluster", 
        Component: Cluster 
    },
    { 
        path: "/Cluster/:id/Career/:id", 
        name: "Career", 
        Component: Career 
    },
    {
        path: "/Cluster/:id/Career/:id/DITL",
        name: "DITL",
        Component: DITL
    },
    { 
        path: "/Cluster/:id/Career/:id/Celebrity/:id",
        name: "Celebrity", 
        Component: Celebrity 
    }
];

export default function Breadcrumbs(props) {
    const classes = useStyles();

    let location = useLocation()
    let paths = location.pathname.split("/")

    return (
        <BREADCRUMBS aria-label="breadcrumb" className={classes.root}>
            {/* <Link color="inherit" href="/Login">
                Login
            </Link> */}
            {/* <Link color="inherit" href="/">
                Home
            </Link>
            <Link color="inherit" href="/Career/1">
                Career
            </Link>
            <Link color="inherit" href="/Career/1/DITL">
                Day In The Life
            </Link>
            <Link color="inherit" href="/Career/1/Celebrity/1">
                Celebrity
            </Link>
            <Typography color="textPrimary">
                Current
            </Typography> */}
            <Link color="inherit" href="/">
                Home
            </Link>
            {
                routes.map( ({ path, name, Component }, key) => {
                    let idx = paths.indexOf(name)

                    if (idx > 0){
                        let href = "/"

                        paths.forEach( (element, index) => {
                            if (index <= idx && index > 0)
                                href += (element + "/") 
                        });

                        if (paths[idx+1] !== "")
                            href += (paths[idx+1] + "/")

                        return <Link key={key} color="inherit" href={href}>{name}</Link>
                    }
                })
            }
            {/* <Typography color="textPrimary">
                Current
            </Typography> */}
        </BREADCRUMBS>
    );
}