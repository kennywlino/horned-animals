import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favCount: 0,
        }
    }

    handleFavCount = () => { 
        this.setState({
            favCount: this.state.favCount + 1,
        });
    }

    render() {
        return (
            <Card style={{ width: '20rem'}}>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleFavCount} />
            <ListGroup>
                <ListGroup.Item className="text-center">{this.state.favCount} favorites 💗</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>
        </Card> 
        )
    }
}

export default HornedBeast;