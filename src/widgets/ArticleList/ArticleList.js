import React from 'react';
import ArticleItem from './ArticleItem';
import { Row } from 'react-bootstrap';
const ArticleList = ({list})=>{
  return (
  <Row style={{marginTop:"35px",marginBottom:"35px"}}>
    {list.map((item,idx)=><ArticleItem key={idx}/>)}
   </Row>
  )
}
export default ArticleList;