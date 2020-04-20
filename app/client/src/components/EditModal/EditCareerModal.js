import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';

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

const processData = (data, ignoreKeys) => {    
    let rows = []

    for (const member in data) {
        if (ignoreKeys.includes(member))
            continue

        if (member === "_id")
            continue

        if (member === "__v")
            continue

        if (member === "celebrity"){
            let celebrity = data[member]
            
            for (const key in celebrity) {
                let row = {
                    key: "celebrity." + key,
                    value: celebrity[key],
                }

                rows.push(row)
            }

            continue
        }

        let row = {
            key: member,
            value: data[member],          
        }

        rows.push(row)
    }

    return rows
}

export default function EditModal(props) {
    const classes = useStyles();
  
    const [columns] = useState([
        { title: 'Key', field: 'key', editable: 'never' },
        { title: 'Value',
          field: 'value',
          editComponent: props => (
            <TextField
            id="standard-multiline-flexible"
            multiline
            fullWidth={true}
            rowsMax={2}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />)   },
    ]);
    const [state, setState] = useState({});
    const [modalStyle] = useState(getModalStyle);

    const updateData = (d) => {
        let newCareer = {...props.data}

        if (d.key.includes("celebrity")) {
            let key = d.key.split(".")[1] //does exist
            newCareer["celebrity"][key] = d.value
        }
        else {
            newCareer[d.key] = d.value
        }
  
        props.updateCareer(newCareer)
    }
  
    useEffect(() => { 
        let data = processData(props.data, props.ignoreKeys)
        setState({data:data});
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
                    options={{
                        tableLayout: "fixed",
                    }}
                    editable={{
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
                    }}
                />
            </div>
        </Modal>
    );
}