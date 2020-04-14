import React from 'react';

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import axios from 'axios'

const users = [
    { 
        id: 1,
        role: "admin",
        username: "mars2020",
        fname: "Perseverance",
        lname: "Rover",
        class: "MSL",
        points: 2020,
    },
    { 
        id: 2,
        role: "student",
        username: "msl",
        fname: "Curiosity",
        lname: "Rover",
        class: "MSL",
        points: 2011,
    },
    { 
        id: 3,
        role: "student",
        username: "merB",
        fname: "Opportunity",
        lname: "Rover",
        class: "MER",
        points: 2003,
    },
    { 
        id: 4,
        role: "student",
        username: "merA",
        fname: "Sprit",
        lname: "Rover",
        class: "MER",
        points: 2003,
    },
    { 
        id: 5,
        role: "student",
        username: "pathfinder",
        fname: "Sojourner",
        lname: "Rover",
        class: "SOJ",
        points: 1997,
    },
];

const retrieveUsers = () => {
    return users;
}

function ManageUsers() {
    const [state, setState] = React.useState({
        // columns: [
        //     { title: 'Name', field: 'name' },
        //     { title: 'Surname', field: 'surname' },
        //     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        //     { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }, },
        // ],
        // data: [
        //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, },
        // ],
        columns: [
            { title: 'Username', field: 'username', filtering: false },
            { title: 'FName', field: 'fname', filtering: false  },
            { title: 'LName', field: 'lname', filtering: false  },
            { title: 'Class', field: 'group', lookup: { 'MSL': 'MSL', 'MER': 'MER' , 'SOJ': 'SOJ'}, },
            { title: 'Points', field: 'points', filtering: false  },
            { title: 'Role', field: 'role', lookup: { 'student': 'S', 'admin': 'A'}, },
        ],
        data: retrieveUsers()
    });

    const createUser = (user) => {
        let url = '/_user'
        axios.post('/_user', user)
    }

    const updateUser = (user) => {
        let url = '/_user'
        axios.put(url, user)
    }
    
    const deleteUser = (user) => {
        let url = '/_user'
        axios.delete('/_user', {data: user})
    }
    
    //console.log(state)

    return (
        <div>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Manage Users
            </Typography>
            
            <MaterialTable
                title=""
                columns={state.columns}
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
                options={{
                    filtering: true,
                    loadingType: "linear"
                }}
                actions={[
                    {
                        icon: 'refresh',
                        tooltip: 'Refresh Data',
                        isFreeAction: true,
                        onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
                    }
                ]}
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
            />

        </div>
    );
}

export default ManageUsers;