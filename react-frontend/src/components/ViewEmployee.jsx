import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }

        this.goBackListEmployees = this.goBackListEmployees.bind(this);
    }

    goBackListEmployees() {
        this.props.history.push('/employees');
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( (response) => {
            this.setState({employee: response.data});
        });
    }
    
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details </h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label style={{fontSize: "16px", fontWeight: "bold"}}> First Name: </label>
                                <div> {this.state.employee.firstName} </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label style={{fontSize: "16px", fontWeight: "bold"}}> Last Name: </label>
                                <div> {this.state.employee.lastName} </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label style={{fontSize: "16px", fontWeight: "bold"}}> Email: </label>
                                <div> {this.state.employee.email} </div>
                            </div>
                        </div>

                        <button onClick={this.goBackListEmployees} className="btn btn-info">Employees List</button>
                    </div>
                </div>
            </div>
        )
    }
}
