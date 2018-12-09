import React from 'react';
import Logo from '../components/Logo'
import LoginForm  from '../widgets/LoginForm/LoginForm'
import {Container} from 'react-bootstrap';


class Home extends React.Component{
  render(){
    return (
      <Container>
        <Logo/>
        <LoginForm/>
      </Container>
    )
  }
}
export default Home;