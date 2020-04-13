import React from 'react';

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import axios from 'axios';

class RemoteData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    const createUser = (user) => {
        console.log("creating user", user)
    }

    const updateUser = (user) => {
        console.log("update user", user)
    }
    
    const deleteUser = (user) => {
        console.log("delete user", user)
    }
    render() {
        return (<MaterialTable
            title=""
            columns={[
                { title: 'Username', field: 'user', filtering: false },
                { title: 'FName', field: 'fname', filtering: false  },
                { title: 'LName', field: 'lname', filtering: false  },
                { title: 'Class', field: 'class', lookup: { 'MSL': 'MSL', 'MER': 'MER' , 'SOJ': 'SOJ'}, },
                { title: 'Points', field: 'points', filtering: false  },
                { title: 'Role', field: 'role', lookup: { 'student': 'S', 'admin': 'A'}, },
            ]}
            options={{
                filtering: true
            }}
            data={query =>
                new Promise((resolve, reject) => {
                    axios.get('/_user')
                        .then(res => {
                            resolve({
                                data: res.data
                            })
                        })
                })
            }
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        setState(prevState => {
                            const data = [...prevState.data];
                            data.push(newData);

                            createUser(newData)

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

                                updateUser(newData)

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

                            deleteUser(oldData)

                            return { ...prevState, data };
                        });
                        }, 600);
                    }),
                }}
                
        />)
    }
}
export default RemoteData