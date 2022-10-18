import React from 'react';

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
            <>
            <h2>{this.props.title}</h2>
            <p>{this.state.favCount} favorites 💗</p>
            <img 
                src={this.props.imageUrl} 
                alt={this.props.title} 
                onClick={this.handleFavCount}
            />
            <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;