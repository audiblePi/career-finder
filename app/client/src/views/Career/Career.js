import React, { useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Keyword from "../../components/Keyword/Keyword";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import EditModal from '../../components/EditModal/EditModal';

const useStyles = makeStyles(theme => ({
    buttongroup: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    editWrapper: {
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
    },
}));

function Career(props) {
    const classes = useStyles();

    let { cluster, id } = useParams()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const editCareer = () => {
        return (
            <div className={classes.editWrapper}>
                <Button className={classes.editButton} color="inherit" onClick={handleOpen}>
                    Edit Career
                </Button>
            </div>
        )
    }

    const getCareer = () => {
        props.readCareer(id)
    }

    useEffect(() => {
        getCareer()
    }, []);

    const career = (career) => {
        return (
            <div>
                
                { props.role === 'admin' ? editCareer() : ''}

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
                        <Button variant="contained" color="primary" href={"/Cluster/" + cluster + "/Career/" + id + "/DITL"}>
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

                <EditModal 
                    open={open} 
                    handleClose={onClose} 
                    data={props.careers}
                    onCreate={props.createCareer}
                    onUpdate={props.updateCareer}
                    onDelete={props.deleteCareer}
                    ignoreKeys={["celebrity"]}/>

            </div>
        );
    }

    return (    
        <div>
            {props.career === "" ? "" : career(props.career)}
        </div>
    );
}

export default Career;