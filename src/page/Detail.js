import React from 'react';
import Logo from '../components/Logo'
import {Image,Container,Col,Row} from 'react-bootstrap';
import Title from '../components/Title'
class Detail extends React.Component{
  constructor(props){
    super(props);
    this.fetchArticleDetail = this.fetchArticleDetail.bind(this);
    this.state={
      id:this.props.match.params.id,
      title:'',
      content:'',
      thumbnail:''
    }
  }
  componentDidMount(){
    this.fetchArticleDetail(this.state.id)
  }

  fetchArticleDetail (id){
    this.setState({
      title:id,
      content:"content",
      thumbnail:"https://phanquanghung.com/wp-content/uploads/2017/11/thumbnail-video-youtube.jpg",
    })
  }
render(){
  return (
    <Container>
        <Logo/>
        <Row>
          <Col md="12"><Image src={this.state.thumbnail} fluid={true} /></Col>
          <Col md="12"><Title title={this.state.title} size="4"/></Col>
          <Col md="12">{this.state.content}</Col>
        </Row>
      </Container>
  )
}
}
export default Detail;