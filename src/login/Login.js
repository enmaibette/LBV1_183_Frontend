import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Login.css"
class Login extends React.Component {

    handleButtonClick = () => {
        alert(">>> Clicked");
    }

  render() {
    return (
    <div id="login">
    <h1>Login</h1>
        <Form>

            <Form.Group as={Row} controlId="formMail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </Form>
          <Button variant="primary">Register</Button>

        </div>
    );
  }
}
export default Login;
