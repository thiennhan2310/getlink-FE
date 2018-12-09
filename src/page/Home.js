import React from 'react';
import Logo from '../components/Logo'
import Banner from '../widgets/Banner'
import ArticleList  from '../widgets/ArticleList/ArticleList'
import Footer  from '../widgets/Footer'
import {Container,Row} from 'react-bootstrap';


class Home extends React.Component{
  render(){
    return (
      <Container>
      <Row>
        <Logo/>
        <Banner/>
        <ArticleList list={[1,2,3,4,5,6]}/>
        <Footer/>
        </Row>
      </Container>
    )
  }
}
export default Home;