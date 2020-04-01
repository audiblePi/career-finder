import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '100%',
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

const getColumns = (data, ignoreKeys) => {    
    let columns = []

    for (const member in data[0]) {
        if (ignoreKeys.includes(member))
            continue

        if (member === "_id")
            continue

        if (member === "__v")
            continue
        
        let column = {
            title: member,
            field: member,
        }
        columns.push(column)
    }

    return columns
}

export default function EditModal(props) {
    const classes = useStyles();
  
    const [columns, setColumns] = useState([]);
    const [state, setState] = useState({});
    const [modalStyle] = useState(getModalStyle);

    const createData = (d) => {
        props.onCreate(d)
    }

    const updateData = (d) => {
        props.onUpdate(d)
    }
    
    const deleteData = (d) => {
        props.onDelete(null, d._id)
    }
  
    useEffect(() => { 
        setState({data:props.data});
        setColumns(getColumns(props.data, props.ignoreKeys));
    }, [props.data]);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.handleClose}>

            <div style={modalStyle} className={classes.paper}>
                <MaterialTable
                    title="Edit"
                    columns={columns}
                    data={state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);

                                    createData(newData)

                                    return { ...prevState, data };
                                });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;

                                        updateData(newData)

                                        return { ...prevState, data };
                                    });
                                }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);

                                    deleteData(oldData)

                                    return { ...prevState, data };
                                });
                                }, 600);
                            }),
                    }}
                />
            </div>
        </Modal>
    );
}