import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HornedBeast from './HornedBeast.js';
import data from '../assets/data.json';

class Main extends React.Component {
    render() {
        let animals = data.map((element, index) => {
            return <HornedBeast
                title={element.title}
                imageUrl={element.image_url}
                description={element.description}
                key={index}
            />
        });

        return(
            <>
                <Container fluid>
                    <Row>
                    {animals}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;