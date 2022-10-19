import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
 
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

    handleImgClick = () => {
        this.props.handleOpenModal(this.props)
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '20rem'}}>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.handleImgClick} />
                    <ListGroup>
                        <ListGroup.Item className="text-center">
                            <Button variant="primary" onClick={this.handleFavCount}>Show me some love!</Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-center">{this.state.favCount} favorites 💗 </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Col>
        )
    }
}

export default HornedBeast;