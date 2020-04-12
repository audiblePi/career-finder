import React, { useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';

function DITL(props) {

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

    console.log("career", props.career)

    const ditl = (career) => {
        return (
            <div>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {career.name}: A Day In the Life
                </Typography>
                <p>
                    {career.ditl}
                </p>
            </div>
        );
    }

    return (    
        <div>
            {props.career === "" ? "" : ditl(props.career)}
        </div>
    );
}

export default DITL;