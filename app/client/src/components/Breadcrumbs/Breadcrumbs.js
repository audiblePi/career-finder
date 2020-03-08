import React from 'react';
import Typography from '@material-ui/core/Typography';
import BREADCRUMBS from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function Breadcrumbs() {
    const classes = useStyles();

    return (
        <BREADCRUMBS aria-label="breadcrumb" className={classes.root}>
            <Link color="inherit" href="/Login">
                Login
            </Link>
            <Link color="inherit" href="/Home">
                Home
            </Link>
            <Link color="inherit" href="/Career">
                Career
            </Link>
            <Link color="inherit" href="/Career/DITL">
                Day In The Life
            </Link>
            <Link color="inherit" href="/Career/Celebrity">
                Celebrity
            </Link>
            <Typography color="textPrimary">
                Current
            </Typography>
        </BREADCRUMBS>
    );
}