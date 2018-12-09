import React from 'react';
import Logo from '../components/Logo'
import {Container,Col,Row} from 'react-bootstrap';
import Title from '../components/Title'
class Detail extends React.Component{
render(){
  const articleId = this.props.match.params.id
  return (
    <Container>
        <Logo/>
        <Row>
          <Col md="12"><Title title={articleId} size="4"/></Col>
          <Col md="12">content</Col>
        </Row>
      </Container>
  )
}
}
export default Detail;