import { React, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ApiService from '../../../helpers/ApiServices';
import Sidebar from '../../UI/organisms/Sidebar';
import Titlebar from '../../UI/organisms/Titlebar';
import Topbar from '../../UI/organisms/Topbar';
import AppContent from '../../UI/templates/AppContent';
import AppHeader from '../../UI/templates/AppHeader';
import './employeeList.css';

const employees = [
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    },
    {
        initials: "RN",
        firstName: "Rehan",
        lastName: "Nawaz",
        email: "rnawaz@paapri.com",
        supervisor: "Piyas Bandyopadhyay",
        jobTitle: "Senior Consultant",
        subsidiary: "PBTI",
        location: "Kolkata",
        department: "TCOE"
    }
]

export default function EmployeeList() {
    return (
        <div className="employeeList">
            <AppHeader>
                <Topbar />
            </AppHeader>
            <AppContent>
                <Titlebar />
                <EmployeeListForm />
            </AppContent>

        </div>
    )
}


const EmployeeListForm = () => {
    const [state, setState] = useState(employees)
    const getCustomerList = async () => {
        try {
            var response = await ApiService.get('employee');
            console.log(response)
            if (response.status === 200) {

                if (response.data.isSuccess) {
                    const documents = response.data.documents;
                    setState(documents)

                } else {

                }

            } else {

            }
        } catch (error) {

        }



    }

    useEffect(() => {
        getCustomerList();
    }, [])



    return (
        <div className="employeeListForm">
            <Sidebar />
            <div className="employeeLists">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th style={{ width: "120px" }}>#</th>
                            <th>Initials</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Supervisor</th>
                            <th>Job Title</th>
                            <th>Subsidiary</th>
                            <th>Location</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(record => {
                                return <tr>
                                    <td style={{ width: "120px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Button style={{ minWidth: "50px" }} as={Link} to={`employee/${record.id}?mode=view`} size="sm">View</Button>
                                        <Button style={{ minWidth: "50px" }} as={Link} to={`employee/${record.id}?mode=edit`} size="sm">Edit </Button>
                                    </td>
                                    <td>{record.initials}</td>
                                    <td style={{ minWidth: '120px' }}>{record.firstName}</td>
                                    <td style={{ minWidth: '120px' }}>{record.lastName}</td>
                                    <td>{record.email}</td>
                                    <td>{record.supervisor}</td>
                                    <td>{record.jobTitle}</td>
                                    <td>{record.subsidiary}</td>
                                    <td>{record.location}</td>
                                    <td>{record.department}</td>
                                </tr>
                            })
                        }



                    </tbody>
                </Table>

            </div>


        </div>
    )
}


