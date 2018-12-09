import React from 'react';
import {Row,Form ,Button,Col} from 'react-bootstrap';
class LoginForm extends React.Component{
  render(){
    return (
      <Row>
        <Col md={{ span: 3, offset: 4 }} >
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Col>
      </Row>
    )
  }
}
export default LoginForm;