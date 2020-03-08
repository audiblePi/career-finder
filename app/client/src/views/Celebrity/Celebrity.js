import React from 'react';
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

function Celebrity() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img src="/assets/astronaut.png" alt="" className={classes.img}/>
                </Grid>
                <Grid item xs={9} className={classes.flex}>
                    <div className={classes.title}>
                        <Typography component="h1" variant="h2" color="inherit">
                            Celebrity Name
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero non mi congue, ac tristique tortor consectetur. Ut efficitur ligula ipsum, in vehicula sem congue non. Aliquam posuere nisi elit, at molestie velit viverra ut. Suspendisse imperdiet lectus sed ante dignissim, eu blandit nisl imperdiet. Aenean neque mi, pellentesque non venenatis et, pretium a erat. Aenean sollicitudin, justo quis volutpat viverra, neque justo tincidunt nibh, nec faucibus augue dolor vitae risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean pulvinar interdum leo, at porttitor libero venenatis sit amet. Duis aliquet turpis sit amet diam feugiat interdum. Donec sit amet posuere neque. Mauris consequat odio et viverra varius.
                    </p>
                    <p>
                        Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Nulla tempus finibus purus, eget molestie libero ornare at. Mauris semper ligula id nisl semper, vitae bibendum dui viverra. Nulla facilisi. Etiam consequat nisi cursus nisi luctus sollicitudin. Nunc sed orci in sem feugiat blandit at sed ligula. Aliquam eleifend ipsum at lectus sodales, id gravida nisl viverra. Aenean viverra turpis vel libero rhoncus mattis. Duis vel velit vel augue vehicula dictum at vitae tortor. Suspendisse blandit non ex ac vulputate. Cras eu tempus odio. Nullam tempus tellus dui, non viverra ipsum ornare at. Nullam vel dolor condimentum leo mattis fringilla. Maecenas efficitur ex id ipsum luctus, nec tincidunt nulla scelerisque.
                    </p>
                    <p>
                        Aenean quis ante id odio dictum laoreet sit amet nec urna. Vestibulum dapibus mi et mauris suscipit, quis lobortis felis porttitor. Ut nec orci eu massa pretium ultricies. Fusce id ullamcorper quam. Quisque sit amet commodo metus. Proin convallis vulputate orci, eu dapibus diam iaculis in. Aliquam ultrices vehicula erat, eget volutpat dolor. Maecenas hendrerit leo vitae tincidunt porta. Fusce vestibulum ligula ut sapien vulputate, in tristique tellus rhoncus. Pellentesque maximus ac purus congue maximus. Pellentesque elementum velit massa, id pellentesque felis venenatis eget. Etiam dapibus nibh vitae tincidunt feugiat. Cras at tortor ut erat porta commodo.
                    </p>
                    <p>
                        Pellentesque fringilla placerat elit a vulputate. Duis at purus vitae lacus blandit tempor in eget est. Cras sollicitudin rutrum pulvinar. Aliquam in accumsan ex. Quisque dapibus augue vitae dolor sagittis pharetra. Praesent elit nisl, placerat eu leo sed, pharetra egestas libero. Donec ultricies leo vitae leo tempus, non mollis velit laoreet. In malesuada nulla sed dapibus ornare. Phasellus tincidunt metus ut tortor ullamcorper iaculis. Maecenas nisi nisl, aliquet sollicitudin dolor ut, consequat eleifend ligula. Suspendisse pulvinar imperdiet erat.
                    </p>
                    <p>
                        Fusce suscipit condimentum urna ut pretium. Nulla sit amet eleifend urna, nec fermentum turpis. Phasellus sapien massa, blandit sed ante in, suscipit volutpat ex. Morbi venenatis sapien orci, eget faucibus quam hendrerit a. Vestibulum fermentum ligula turpis. Nullam a nisi pulvinar neque laoreet luctus. Vivamus ligula erat, tincidunt et tempor ut, vehicula eget lacus. Sed eu dolor nisi. Vivamus eu dignissim lectus. Integer sapien enim, placerat ac odio ut, dictum dapibus enim. Nulla dictum nulla in lacinia aliquet.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Celebrity;