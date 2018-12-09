import React from 'react';
import ArticleItem from './ArticleItem';
import {fetchArticles} from '../../actions/article';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class ArticleList extends React.Component {
  componentDidMount(){
    this.props.fetchArticles();
  }
  render(){
    return (
      <Row style={{marginTop:"35px",marginBottom:"35px"}}>
        {this.props.articles.map((item,idx)=><ArticleItem key={idx} id={idx} title={item.title} content={item.content} thumbnail={item.thumbnail}/>)}
       </Row>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles : ()=>{
      dispatch(fetchArticles())
    }
  }
}
const mapStateToProps = (state) => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);