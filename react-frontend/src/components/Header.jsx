import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-inverse navbar-dark bg-dark">
                       <div>
                           <a href="http://localhost:3000" className="navbar-brand">Employee Management App</a>
                       </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header;