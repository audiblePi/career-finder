import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const displayMembers = (member) => {
    for (const data in member) {
        return console.log(`${data}: ${member[data]}`);
    }
    return (
        <p key={member.id}>{member.title}</p>
    )
}

export default function EditModal(props) {
    const classes = useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);
  
    //console.log(props.data)

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Edit</h2>
                {
                    props.data.map( (d) => {
                        return displayMembers(d)
                    })
                }
            </div>
        </Modal>
    );
}