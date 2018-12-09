import React from 'react';
import {connect} from 'react-redux';
import { Row, Form, Button, Col } from 'react-bootstrap';
import {login} from '../../actions/auth';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName:'',password:''};
    this.inputUserName = this.inputUserName.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  inputUserName(userName){
    this.setState({userName});
  }
  inputPassword(password){
    this.setState({password});
  }
  submit(){
    return this.props.login(this.state.userName,this.state.password)
  }
  render() {
    return (
      <Row>
        <Col md={{ span: 3, offset: 4 }} >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>this.inputUserName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>this.inputPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={this.submit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    login:(userName,password) =>{
      dispatch(login(userName,password))
    }
  }
}

export default connect(null,mapDispatchToProps)(LoginForm);