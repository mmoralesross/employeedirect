import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Employees from '../../db/employees.json'

class Body extends Component {
    state = { Employees }

    sortByLastName = () => {
        //const data = { ...this.state.Employees }
        const newData = this.state.Employees.sort((a, b) => {

            if (a.lastName < b.lastName) {
                return -1
            }
            if (a.lastName > b.lastName) {
                return 1
            }
            return 0
        })
        this.setState({newData})
    }

    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th onClick={() => this.sortByLastName()}>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>
                                        {employee.id}
                                    </td>
                                    <td>
                                        {employee.firstName}
                                    </td>
                                    <td>
                                        {employee.lastName}
                                    </td>
                                    <td>
                                        {employee.userName}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Body