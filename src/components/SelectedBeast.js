import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal 
                show={this.props.showModal}
                onHide={this.props.handleCloseModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.beast.imageUrl} fluid />
                </Modal.Body>
                <Modal.Footer>
                    {this.props.beast.description}
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;