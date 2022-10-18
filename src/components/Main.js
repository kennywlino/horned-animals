import React from 'react';
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
                {animals}
            </>
        )
    }
}

export default Main;