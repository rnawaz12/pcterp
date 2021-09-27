import { React, useState } from 'react';
import './newEmployee.css';
import { Col, Container, Form, Row, Tabs, Tab } from 'react-bootstrap'
import Titlebar from '../../UI/organisms/Titlebar'
import Topbar from '../../UI/organisms/Topbar'
import AppContent from '../../UI/templates/AppContent'
import AppHeader from '../../UI/templates/AppHeader'
import LogInfo from '../../UI/organisms/LogInfo';

const jobTitleList = [{ id: 1, value: 'Associate Consultant' }, { id: 2, value: 'Junior Consultant' }, { id: 3, value: 'Senior Consultant' }, { id: 3, value: 'Lead Consultant' }];
const departmentList = [{ id: 1, value: 'Administration' }, { id: 1, value: 'Sales' }];
const supervisorList = [{ id: 1, value: 'Parent Company' }];
const locationList = [{ id: 1, value: 'Parent Company' }];
const workLocationList = [{ id: 1, value: 'Parent Company' }];

const employeeInit = {
    hireDate: "2021-09-13T17:02:55.347Z",
    gender: "male",
    salutation: "Mr.",
    firstName: "Rehan",
    lastName: "Nawaz",
    initials: "RN",
    jobTitle: 2,
    notes: "",
    currency: "Rupee",
    email: "rnawaz@paapri.com",
    password: "$2a$08$vTwB3mkD0aSqdamlqT.JduJBWsq1xBab0YnsGMK0J1c4F7DQnr312",
    officePhone: "+918282822924",
    phone: "+918282822924",
    emergencyContact: "",
    subsidiary: "PBTI",
    class: "TCOE",
    location: "Kolkata - Sector V",
    department: "TCOE",
    address: [
        {
            "_id": "613f8519256fac4d24f6d739",
            "country": "India",
            "attention": "",
            "addressee": "Rehan Nawaz",
            "phone": "+918282822924",
            "address1": "26, Rai Charan Ghosh Lane, Topsia - kolkata-700039",
            "address2": "",
            "city": "Kolkata",
            "state": "West Bengal",
            "zip": 700039
        }
    ],
    supervisor: "Piyas \"P\" Bandyopadhyay",
    salesRep: false,
    giveAccess: true,
    createdAt: "2021-09-13T17:06:33.639Z",
    updatedAt: "2021-09-13T17:06:33.639Z",
};


export default function NewEmployee() {
    return (
        <div className="newEmployee">
            <AppHeader>
                <Topbar />
            </AppHeader>
            <AppContent>
                <NewEmployeeForm />

            </AppContent>
        </div>
    )
}

const NewEmployeeForm = () => {
    const [key, setKey] = useState('workinformation');
    const [systemInfo, setSystemInfo] = useState('loginfo');
    const [employee, setEmployee] = useState(employeeInit)
    return (
        <div className="newEmployeeForm">
            <Form>
                <Titlebar />
                <Container fluid>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row xs={12} md={12} lg={12}>
                        <Col xs={12} md={12} lg={8} xl={8}>
                            <Row className="mb-1">
                                <Form.Group style={{ padding: "0 20px", marginTop: "45px" }} as={Col} xs={10} md={4} lg={4} controlId="formGridCity">
                                    <Form.Label className="mb-0">First Name</Form.Label>
                                    <Form.Control size="sm" value={employee ? employee.firstName : ""} name="firstName" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>
                                <Form.Group style={{ padding: "0 20px", marginTop: "45px" }} as={Col} xs={10} md={4} lg={4} controlId="formGridCity">
                                    <Form.Label className="mb-0">Last Name</Form.Label>
                                    <Form.Control size="sm" value={employee ? employee.lastName : ""} name="lastName" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>

                                <Form.Group className="employeeProfileContainer" as={Col} xs={2} md={4} lg={4} controlId="formGridState">
                                    <div className="employeeProfile">
                                        <div className="initials">{employee ? employee.initials : ""}</div>
                                    </div>
                                </Form.Group>

                            </Row>
                            <Row className="mb-1">
                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                    <Form.Label className="mb-0">Job Title</Form.Label>
                                    <Form.Control size="sm" as="select" defaultValue={1} value={employee ? employee.jobTitle : 1} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} >
                                        {
                                            jobTitleList.map(value => (<option key={value.id} value={value.id}>{value.value}</option>))
                                        }

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                    <Form.Label className="mb-0">Department</Form.Label>
                                    <Form.Control size="sm" as="select" defaultValue={1} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} >
                                        {
                                            departmentList.map(value => (<option key={value.id} value={value.id}>{value.value}</option>))
                                        }

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                    <Form.Label className="mb-0">Supervisor</Form.Label>
                                    <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>

                            </Row>
                            <Row className="mb-1">
                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                    <Form.Label className="mb-0">Phone</Form.Label>
                                    <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>

                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                    <Form.Label className="mb-0">Email</Form.Label>
                                    <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>

                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                    <Form.Label className="mb-0">Notes</Form.Label>
                                    <Form.Control size="sm" as="textarea" rows={2} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>


                            </Row>
                            <Row className="mb-1">
                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                    <Form.Label className="mb-0">Home Phone</Form.Label>
                                    <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>

                                <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                    <Form.Label className="mb-0">Address</Form.Label>
                                    <Form.Control size="sm" as="textarea" rows={2} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                </Form.Group>




                            </Row>


                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab style={{ padding: "10px" }} eventKey="workinformation" title="Work Information">
                                    <Row className="mb-1">
                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                            <Form.Label className="mb-0">Work Location</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Work Address</Form.Label>
                                            <Form.Control size="sm" as="textarea" rows={2} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Employee Status</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                    </Row>
                                    <Row className="mb-1">
                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                            <Form.Label className="mb-0">Hire Date</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0"></Form.Label>
                                            <Form.Check type="checkbox" label="Sales Rep" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0"></Form.Label>
                                            <Form.Check type="checkbox" label="Support Rep" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                    </Row>
                                </Tab>
                                <Tab eventKey="privateinformation" title="Private Information">
                                    <Row className="mb-1">
                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                            <Form.Label className="mb-0">Marital Status</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Date of Birth</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Gender</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                    </Row>
                                </Tab>
                                <Tab eventKey="access" title="Access" >
                                    <Row className="mb-1">
                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridCity">
                                            <Form.Label className="mb-0">Work Location</Form.Label>
                                            <Form.Control size="sm" name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Work Address</Form.Label>
                                            <Form.Control size="sm" as="textarea" rows={2} name="jobTitle" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                        <Form.Group style={{ padding: "0 20px" }} as={Col} xs={12} md={4} lg={4} controlId="formGridState">
                                            <Form.Label className="mb-0">Employee Status</Form.Label>
                                            <Form.Control size="sm" name="employeeStatus" onChange={(e) => { setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value })) }} />
                                        </Form.Group>

                                    </Row>
                                </Tab>
                            </Tabs>





                        </Col>
                        <Col style={{ borderLeft: "1px solid gray" }} xs={12} md={12} lg={4} xl={4}>

                            <Tabs
                                id="controlled-tab-example"
                                activeKey={systemInfo}
                                onSelect={(k) => setSystemInfo(k)}
                                className="mb-3" style={{ width: "400px" }}
                            >
                                <Tab eventKey="loginfo" title="Log Information">

                                    <LogInfo />
                                </Tab>
                                <Tab eventKey="scheduledactivity" title="Scheduled Activity">
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                    Stack the columns on mobile by making one full-width and the other half-width
                                </Tab>

                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </Form>

        </div>
    )
}
