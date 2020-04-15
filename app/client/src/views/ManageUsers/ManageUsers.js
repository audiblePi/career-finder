import React from 'react';

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import crypto from 'crypto';
import axios from 'axios';

const users2 = [

];

function getUsers() {
    axios.get('/_user')
        .then(res => {
            return res.data;
        });
}

const retrieve = () => {
    return users2;
}


function ManageUsers() {
    
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('/_user')
        .then((data) => {
            setUsers(data);
        });
    }, []);
    
    const [state, setState] = React.useState({
        columns: [
            { title: 'Username', field: 'username', filtering: false },
            { title: 'FName', field: 'fname', filtering: false  },
            { title: 'LName', field: 'lname', filtering: false  },
            { title: 'Class', field: 'group', filtering: false },
            { title: 'Password', field: 'password', filtering: false },
            { title: 'Points', field: 'points', filtering: false  },
            { title: 'Role', field: 'role', lookup: { 'student': 'Student', 'admin': 'Admin'}, },
        ]
    });
    
    const refresh = () => {
        axios.get('/_user')
        .then(res => {
            setUsers({data: res.data});
        });
        //refreshLookupTable();
    }

    const createUser = (user) => {
        let url = '/_user';
        if(user.password) {
            user.password = crypto.createHash('md5').update(user.password).digest('hex');
        }
        axios.post(url, user);
    }

    const updateUser = (user) => {
        let url = '/_user';
        if(user.password) {
            user.password = crypto.createHash('md5').update(user.password).digest('hex');
        }
        axios.put(url, user);
    }
    
    const deleteUser = (user) => {
        let url = '/_user';
        axios.delete(url, {data: user});
    }
    
    return (
        
        <div>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Manage Users
            </Typography>
            
            <MaterialTable
                
                title=""
                columns={state.columns}
                data={users.data}
                options={{
                    filtering: true,
                    loadingType: "linear"
                }}
                actions={[
                    {
                        icon: 'refresh',
                        tooltip: 'Refresh Data',
                        isFreeAction: true,
                        //onClick: () => tableRef.current && tableRef.current.onQueryChange(),
                        //onClick: () => refreshLookupTable()
                        onClick: () => refresh()
                    }
                ]}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            setUsers(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);

                                createUser(newData)

                                return { ...prevState, data };
                            });
                            refresh();
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setUsers(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;

                                    updateUser(newData)

                                    return { ...prevState, data };
                                });
                            }
                            refresh();
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            setUsers(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);

                                deleteUser(oldData)

                                return { ...prevState, data };
                            });
                            refresh();
                            }, 600);
                        }),
                }}
            />

        </div>
    );
}

export default ManageUsers;