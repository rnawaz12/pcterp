import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './titlebar.css';

export default function Titlebar() {
    return (
        <div className="titlebar">
            <div className="titlebarTop">
                <div className="pageTitle">Employees</div>
                <div className="pageSearch">
                    <Form className="d-flex">
                        <FormControl
                            size="sm"
                            type="search"
                            placeholder="Search..."
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button size="sm" variant="outline-primary">Search</Button>
                    </Form>
                </div>
            </div>
            <div className="titlebarBottom">
                <div className="pageTitle">
                    <Button style={{ margin: "0 5px" }} as={Link} to="/employee/add" variant="primary" size="sm">Create</Button>
                    <Button style={{ margin: "0 5px" }} as={Link} to="/employee/add" variant="secondary" size="sm">Cancel</Button>
                </div>
                <div className="pageSearch">
                    Total: 50
                </div>
            </div>
        </div>
    )
}
