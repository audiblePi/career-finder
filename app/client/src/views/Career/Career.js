import React, { useEffect } from 'react';

//import axios from 'axios';
import { useParams } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Keyword from "../../components/Keyword/Keyword";
import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';

import EditCareerModal from '../../components/EditModal/EditCareerModal';

const useStyles = makeStyles(theme => ({
    buttongroup: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    media: {
        height: 140,
    },
    mediaMain: {
        height: 350,
    },
    editWrapper: {
        display: 'flex',
        paddingBottom: 20,
        justifyContent: 'flex-end',
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

    const backButton = () => {
        return (
            <Button 
                color="primary"
                startIcon={<ArrowBackIcon />}
                size="large"
                href={"/Cluster/" + cluster}
                >
                Back
            </Button>
        )
    }

    const editCareer = () => {
        return (
            <div className={classes.editWrapper}>
                <Button 
                    className={classes.editButton} 
                    startIcon={<EditIcon />}
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={handleOpen}>
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
        let thisCelebrity = career && career.celebrity ? career.celebrity.name : null;
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {backButton()}
                    </Grid>
                    <Grid item xs={6}>
                        { props.role === 'admin' ? editCareer() : ''}
                    </Grid>
                </Grid>
                
                <div>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {career.name}
                    </Typography>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={7}>

                        <Card className={classes.root}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                className={classes.mediaMain}
                                image={career.image}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="h2">
                                        A Day In the Life
                                    </Typography> */}
                                    <Typography variant="h5" color="inherit" paragraph>
                                        ${career.salary} / year
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="div">
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
                                    </Typography>
                                </CardContent>
                            {/* </CardActionArea> */}
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    
                    </Grid>
                
                    <Grid item xs={5}>

                        <Card className={classes.root}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                    className={classes.media}
                                    image={career.ditlImage}
                                    title="Contemplative Reptile"
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        A Day In the Life
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {career.ditl}
                                    </Typography>
                                </CardContent>
                            {/* </CardActionArea> */}
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    
                        <br/>

                        { (thisCelebrity != null) &&
                            <Card className={classes.root}>
                                {/* <CardActionArea> */}
                                    <CardMedia
                                        className={classes.media}
                                        image={career.celebrity.photo}
                                        title="Contemplative Reptile"
                                        />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {career.celebrity.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {career.celebrity.article}
                                        </Typography>
                                    </CardContent>
                                {/* </CardActionArea> */}
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        }

                    </Grid>
                </Grid>

                <EditCareerModal 
                    open={open} 
                    handleClose={onClose} 
                    data={props.career}
                    updateCareer={props.updateCareer}
                    ignoreKeys={[]}/>

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