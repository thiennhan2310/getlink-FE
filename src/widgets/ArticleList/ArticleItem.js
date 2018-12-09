import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';

const ArticleItem = ()=>{
  return (
    <Col md={3}>
      <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>;
    </Col>
  )
}
export default ArticleItem;