import React from 'react';
import {
  Card,CardBody,
  CardTitle, CardSubtitle,Container,Row
} from 'reactstrap';
import classes from './Cards.css';

const Cards = (props) => {
  return (
    <div>
      <Container className={classes.container}>
        <Row>
            <Card className={classes.Card} onClick={() =>{props.clicked(props.id, props.title, props.body)}}>
              <CardBody>
                <CardTitle>{props.id}</CardTitle>
                <CardSubtitle>{props.title}</CardSubtitle>
                </CardBody>
            </Card>
        </Row>
      </Container>
    </div>    
  );
};

export default Cards;