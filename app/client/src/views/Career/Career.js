import React, { useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Keyword from "../../components/Keyword/Keyword";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttongroup: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

function Career(props) {
    const classes = useStyles();

    let { cluster, id } = useParams()

    const getCurrentCareer = async (id, set) => {
        const res = await axios.get('/_career/' + id);
        set(res.data)
    }

    useEffect(() => {
        getCurrentCareer(id, props.setCurrentCareer)
    }, [id, props.setCurrentCareer]);

    //console.log("currentCareer", props.currentCareer)

    const career = (career) => {
        return (
            <div>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {career.name}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                    ${career.salary} / year
                </Typography>
                <div>
                    <Keyword/>
                    <Keyword/>
                    <Keyword/>
                </div>
                <p>
                    {career.shortDescription}
                </p>
                <p>
                    {career.description}
                </p>
                <div className={classes.buttongroup}>
                    <Button variant="contained" color="primary" href={"/Cluster/" + cluster + "/Career/" + id + "/DITL/"}>
                        A Day in the Life
                    </Button>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical outlined primary button group"
                        >
                        <Button color="primary" href={"/Cluster/" + cluster + "/Career/" + id + "/Celebrity"}>Celebrity</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }

    return (    
        <div>
            {props.currentCareer === "" ? "" : career(props.currentCareer)}
        </div>
    );
}

export default Career;