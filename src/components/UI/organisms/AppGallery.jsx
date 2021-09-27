import { React, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ApiService from '../../../helpers/ApiServices';
import './appGallery.css';

const apps = [
    {
        linkTo: "crm",
        icon: "CRMICON.png",
        description: "CRM App",
        name: "CRM"
    },
    {
        linkTo: "customers",
        icon: "CUSTOMER.png",
        description: "Customer App",
        name: "Customers"
    },
    {
        linkTo: "employees",
        icon: "EMPICON.png",
        description: "Employee App",
        name: "Employees"
    },
    {
        linkTo: "Expenses",
        icon: "EXPENSESICON.png",
        description: "Expense app",
        name: "Expense"
    },
    {
        linkTo: "inventory",
        icon: "INVENTORYICON.png",
        description: "Inventory app",
        name: "Inventory"
    },
    {
        linkTo: "invoices",
        icon: "INVOICINGICON.png",
        description: "Invoice app",
        name: "Invoices"
    },
    {
        linkTo: "notes",
        icon: "NOTESICON.png",
        description: "Notes app",
        name: "Notes"
    },
    {
        linkTo: "pos",
        icon: "POSICON.png",
        description: "POS app",
        name: "POS"
    },
    {
        linkTo: "purchases",
        icon: "PURCHASEICON.png",
        description: "Purchase app",
        name: "Purchases"
    }
]

export default function AppGallery() {
    const [appList, setAppList] = useState(apps);

    const getApps = async () => {
        const response = await ApiService.get('dashboard');
        if (response.data.status === 'success') {
            console.log(response.data.data.apps)
            setAppList(response.data.data.apps);
        }
    }
    useEffect(() => {

        getApps();

    }, [])


    return (
        <div className="appGallery">
            <Container>
                <Row className="justify-content-md-center justify-content-center">

                    <Col className="appBoxes" xs={12} sm={12} md={11} lg={11} xl={10}>

                        {appList.map(app => {
                            return <Link to={`/${app.linkTo}`} className="link">
                                <div className="appBox">
                                    <div className="appBoxLogo">
                                        <img src={`/static/img/${app.icon}`} alt={app.description} />
                                    </div>
                                    <div className="appBoxName">{app.name}</div>
                                </div>
                            </Link>

                        })}

                    </Col>

                </Row>

            </Container>
        </div>
        // <div className="appGallery">
        //     <div className="appBoxes">

        //         {appList.map(app => {

        //             return <Link to={`/${app.linkTo}`} className="link">
        //                 <div className="appBox">
        //                     <div className="appBoxLogo">
        //                         <img src={`/static/img/${app.icon}`} alt={app.description} />
        //                     </div>
        //                     <div className="appBoxName">{app.name}</div>
        //                 </div>
        //             </Link>

        //         })}
        //     </div>
        // </div>
    )
}
