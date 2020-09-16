import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
        <Router>
              <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ListEmployee}></Route>
                        <Route exact path="/employees" component={ListEmployee}></Route>
                        <Route exact path="/employees/create" component={CreateEmployee}></Route>
                        <Route path="/employees/edit/:id" component={EditEmployee}></Route>
                        <Route path="/employees/view/:id" component={ViewEmployee}></Route>
                    </Switch>
                </div>
              <Footer/>
        </Router>
    </div>
  );
}

export default App;
