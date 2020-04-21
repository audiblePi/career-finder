import React from 'react';
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
    },
    // shortDescription: {
    //     minHeight: 50,
    // },
});

function CareerCard(props) {
    const classes = useStyles();

    let { cluster } = useParams()

    return (
        <Card className={classes.root}>
            <CardActionArea
                href={"/Cluster/" + cluster + "/Career/" + props.career._id}
            >
                <CardMedia
                    component="img"
                    alt="Placeholder"
                    height="140"
                    image="/assets/placeholder-image.png"
                    title="Placeholder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        {props.career.name}
                    </Typography>
                    <Typography variant="body2" className={classes.shortDescription} color="textSecondary" component="p">
                        {props.career.shortDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Share
                </Button> */}
                <Button size="small" color="primary" href={"/Cluster/" + cluster + "/Career/" + props.career._id}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default CareerCard;













// import React from 'react';
// import { useParams } from 'react-router-dom'
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

// function CareerCard() {
//     //const classes = useStyles();

//     let { id } = useParams()

//     return (
//         <div>
//             <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//                  Cluster {id}
//              </Typography>

//             <Link color="inherit" href={"/Cluster/" + id + "/Career/1"}>
//                 Career 1
//             </Link>
//             <Link color="inherit" href={"/Cluster/" + id + "/Career/2"}>
//                 Career 2
//             </Link>
//             <Link color="inherit" href={"/Cluster/" + id + "/Career/3"}>
//                 Career 3
//             </Link>
//         </div>
//     );
// }

// export default CareerCard;





















// import React from 'react';

// import { useParams } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';

// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       overflow: 'hidden',
//       padding: theme.spacing(0, 3),
//     },
//     paper: {
//       maxWidth: '100%',
//       margin: `${theme.spacing(1)}px auto`,
//       padding: theme.spacing(2),
//     },
// }));

// function CareerCard(props) {
//     const classes = useStyles();

//     let { cluster } = useParams()

//     return (
//         <div>
//             {/* <Paper className={classes.paper}>
//                 <Grid container wrap="nowrap" spacing={2}>
//                     <Grid item>
//                         <Avatar>{props.career.name.charAt(0)}</Avatar>
//                     </Grid>
//                     <Grid item xs>
//                         <Link color="inherit" href={"/Cluster/" + cluster + "/Career/" + props.career._id}>
//                             <Typography variant="h4">{props.career.name}</Typography>
//                         </Link>
//                         <p>{props.career.shortDescription}</p>
//                     </Grid>
//                 </Grid>
//             </Paper> */}

//             <Card className={classes.root}>
//                 <CardActionArea>
//                     <CardMedia
//                     className={classes.mediaMain}
//                     image="/assets/placeholder-image.png"
//                     title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             {props.career.name}
//                         </Typography>
                       
//                         <Typography variant="body2" color="textSecondary" component="div">
//                             <p>{props.career.shortDescription}</p>
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//                 {/* <CardActions>
//                     <Button size="small" color="primary">
//                         Share
//                     </Button>
//                     <Button size="small" color="primary">
//                         Learn More
//                     </Button>
//                 </CardActions> */}
//             </Card>


//         </div>
//     );
// }

// export default CareerCard;