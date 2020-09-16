import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export class ListEmployee extends Component {
    constructor(props) {
       super(props);
       
       this.state = {
           employees: []
       }

       this.addEmployee = this.addEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
       this.viewEmployee = this.viewEmployee.bind(this);
    }

    viewEmployee(employeeId) {
        this.props.history.push(`/employees/view/${employeeId}`);
    }

    deleteEmployee(employeeId) {
      EmployeeService.deleteEmployee(employeeId).then( (response) => {
          this.setState({employees: this.state.employees.filter(employee => employee.id != employeeId)});
      });
    }

    editEmployee(employeeId) {
      this.props.history.push(`/employees/edit/${employeeId}`);
    }
    
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/employees/create');
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row mb-2">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Edit</button>
                                            <button style={{marginLeft : "10px"}} onClick={ () => this.deleteEmployee(employee.id) } className="btn btn-danger">Delete</button>  
                                            <button style={{marginLeft : "10px"}} onClick={ () => this.viewEmployee(employee.id) } className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployee;