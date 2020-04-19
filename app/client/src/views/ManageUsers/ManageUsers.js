import React from 'react';

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import crypto from 'crypto';
import axios from 'axios';

// const users2 = [

// ];

// function getUsers() {
//     axios.get('/_user')
//         .then(res => {
//             return res.data;
//         });
// }

// const retrieve = () => {
//     return users2;
// }


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
            { title: 'Username', field: 'user', filtering: false },
            { title: 'FName', field: 'fname', filtering: false  },
            { title: 'LName', field: 'lname', filtering: false  },
            { title: 'Class', field: 'group', filtering: false },
            { title: 'Password', field: 'pass', filtering: false },
            { title: 'Role', field: 'role', lookup: { 'student': 'Student', 'admin': 'Admin'}, },
        ]
    });
    
    const refresh = () => {
        axios.get('/_user')
        .then(res => {
            setUsers({data: res.data});
        });
    }

    const createUser = (user) => {
        let url = '/_user';
        if(user.pass) {
            user.password = crypto.createHash('md5').update(user.pass).digest('hex');
            user.pass = "";
        }
        if(user.user) {
            user.username = user.user;
        }
        axios.post(url, user)
        .then(res => {
            setTimeout(function() {
                refresh();
            }, 100);
        });
    }

    const updateUser = (user) => {
        let url = '/_user';
        if(user.pass) {
            user.password = crypto.createHash('md5').update(user.pass).digest('hex');
            user.pass = "";
        }
        if(user.user) {
            user.username = user.user;
        }
        axios.put(url, user)
        .then(res => {
            setTimeout(function() {
                refresh();
            }, 100);
        });
    }
    
    const deleteUser = (user) => {
        let url = '/_user';
        if(user.user) {
            user.username = user.user;
        }
        axios.delete(url, {data: user})
        .then(res => {
            setTimeout(function() {
                refresh();
            }, 100);
        });
    }
    
    return (
        
        <div>
            <Typography component="h1" variant="h4" color="primary" gutterBottom>
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
                            //refresh();
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
                            //refresh();
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
                            //refresh();
                            }, 600);
                        }),
                }}
            />

        </div>
    );
}

export default ManageUsers;