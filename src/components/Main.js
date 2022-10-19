import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        let animals = this.props.data.map((element, index) => {
            return <HornedBeast
                title={element.title}
                imageUrl={element.image_url}
                description={element.description}
                key={element._id}
                handleOpenModal={this.props.handleOpenModal}
            />
        });


        return (
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