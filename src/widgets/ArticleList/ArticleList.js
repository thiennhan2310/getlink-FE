import React from 'react';
import ArticleItem from './ArticleItem';
import { Row } from 'react-bootstrap';
const ArticleList = (list=[])=>{
  return (
  <Row>
   {list.map(item=><ArticleItem/>)}
   </Row>
  )
}
export default ArticleList;