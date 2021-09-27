import { React, useContext } from 'react';
import './routes.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/pages/others/Login';
import Dashboard from '../components/pages/others/Dashboard';
import EmployeeList from '../components/pages/entities/EmployeeList';
import NewEmployee from '../components/pages/entities/NewEmployee';
import { UserContext } from '../components/states/contexts/UserContext';
import Employee from '../components/pages/entities/Employee';

export default function Routes() {
    const { user } = useContext(UserContext)
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Dashboard /> : <Login />}
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/employees">

                    {user ? <EmployeeList /> : <Login />}
                </Route>
                <Route exact path="/employee/add">

                    {user ? <NewEmployee /> : <Login />}
                </Route>
                <Route exact path="/employee">

                    {user ? <Employee /> : <Login />}
                </Route>
            </Switch>

        </Router>
    )
}
