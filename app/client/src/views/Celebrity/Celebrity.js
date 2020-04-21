import React, { useEffect } from 'react';

//import axios from 'axios';

import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    img: {
        borderRadius: '50%',
        height: 'auto',
        maxWidth: '100%',
    },
    title: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    flex: {
        display: 'flex',
    },
}));

function Celebrity(props) {
    const classes = useStyles();

    let { id } = useParams()

    // const getCurrentCareer = async (id, set) => {
    //     const res = await axios.get('/_career/' + id);
    //     console.log(res)
    //     set(res.data)
    // }

    // useEffect(() => {
    //     getCurrentCareer(id, props.setCurrentCareer)
    // }, [id, props.setCurrentCareer]);

    const getCareer = () => {
        props.readCareer(id)
    }

    useEffect(() => {
        getCareer()
    }, []);

    const celebrity = (celebrity) => {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src={celebrity.photo} alt="" className={classes.img}/>
                    </Grid>
                    <Grid item xs={9} className={classes.flex}>
                        <div className={classes.title}>
                            <Typography component="h1" variant="h2" color="inherit">
                                {celebrity.name}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <p>
                            {celebrity.article}
                        </p>
                    </Grid>
                </Grid>
            </div>
        );
    }

    return (    
        <div>
            {props.career === "" ? "" : celebrity(props.career.celebrity)}
        </div>
    );
}

export default Celebrity;