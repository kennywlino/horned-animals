import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
 
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favCount: 0,
        }
    }

    // move into a button instead
    handleFavCount = () => { 
        this.setState({
            favCount: this.state.favCount + 1,
        });
    }

    handleImgClick = () => {
        this.props.handleOpenModal()
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '20rem'}}>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.handleImgClick} />
                    <ListGroup>
                        <ListGroup.Item className="text-center">{this.state.favCount} favorites 💗</ListGroup.Item>
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