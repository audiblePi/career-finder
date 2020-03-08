import React from 'react';
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

function Career() {
    const classes = useStyles();

    return (
        <div>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                A Career
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
                Salary
            </Typography>
            <div>
                <Keyword/>
                <Keyword/>
                <Keyword/>
            </div>
            <p>
                The Agriculture, Food & Natural Resources career cluster is for people interested in the production, processing, marketing, distribution, financing, and development of agricultural commodities and resources. Their interests in the field might include food, fuel, fiber, wood products, natural resources,horticulture, and other plant and animal products/resources.
            </p>
            <p>
                Curabitur mollis urna velit, non pellentesque ante dapibus vitae. Nulla tempus finibus purus, eget molestie libero ornare at. Mauris semper ligula id nisl semper, vitae bibendum dui viverra. Nulla facilisi. Etiam consequat nisi cursus nisi luctus sollicitudin. Nunc sed orci in sem feugiat blandit at sed ligula. Aliquam eleifend ipsum at lectus sodales, id gravida nisl viverra. Aenean viverra turpis vel libero rhoncus mattis. Duis vel velit vel augue vehicula dictum at vitae tortor. Suspendisse blandit non ex ac vulputate. Cras eu tempus odio. Nullam tempus tellus dui, non viverra ipsum ornare at. Nullam vel dolor condimentum leo mattis fringilla. Maecenas efficitur ex id ipsum luctus, nec tincidunt nulla scelerisque.
            </p>
            <div className={classes.buttongroup}>
                <Button variant="contained" color="primary" href="/Career/DITL/">
                    A Day in the Life
                </Button>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                    
                >
                    <Button color="primary" href="/Career/Celebrity/">Celebrity Link 1</Button>
                    <Button color="primary" href="/Career/Celebrity/">Celebrity Link 2</Button>
                    <Button color="primary" href="/Career/Celebrity/">Celebrity Link 3</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Career;