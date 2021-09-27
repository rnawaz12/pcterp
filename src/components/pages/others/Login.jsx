import { React, useContext, useState } from 'react';
import './login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { UserContext } from '../../states/contexts/UserContext';
import ApiService from '../../../helpers/ApiServices';
import { TokenService } from '../../../helpers/StorageServices';


export default function Login() {
    const [show, setShow] = useState(false);

    const { dispatch, isFetching } = useContext(UserContext)


    const loginFormSubmitHandler = async (e) => {
        e.preventDefault();
        const dataArr = [...new FormData(e.currentTarget)];
        const data = Object.fromEntries(dataArr);
        console.log(data)
        try {
            dispatch({ type: "LOGIN_START" });
            const response = await ApiService.post('employee/login', data);
            console.log(response)
            if (response.data.status == "success") {

                TokenService.saveToken(response.data.token)
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data.document });

            } else {
                dispatch({ type: "LOGIN_FAILURE" });

            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });

        }

    }
    return (
        <div className="loginPage">
            <Card className="shadow" style={{ width: '24rem', padding: '10px', marginTop: "5%" }}>
                <div className="companyLogo">
                    <Card.Img variant="top" style={{ width: '100px' }} src="/static/img/companyLogo.png" />
                    <h1>PCTeRP</h1>
                </div>
                <Form className="p-3" onSubmit={loginFormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Alert show={show} variant="danger">
                        Your email or password is incorrect! Please try again.
                    </Alert>
                    <Button style={{ width: '100%' }} variant="primary" type="submit">
                        SIGN IN
                    </Button>
                    <div className="loginFormFooter">
                        <span>Don't have an account?</span>
                        <span>Reset password</span>
                    </div>
                </Form>


            </Card>
        </div>
    )
}
