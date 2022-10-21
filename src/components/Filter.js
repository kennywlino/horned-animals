import React from 'react';

import Form from 'react-bootstrap/Form';
    
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVal: '',
        }
    }

    handleSelect = (event) => {
        let selectedVal = Number(event.target.value);
        this.setState({
            selectedVal 
        })
        this.props.setSelectedNumOfHorns(selectedVal);
    }

    render() {
        let possibleOptions = [-1, 1, 2, 3, 100];
        let options = possibleOptions.map((element, index)=> {
            return <option value={element} key={index}>{element}</option>
            });
        return (
            <Form>
                <Form.Label>Filter by # of Horns
                    <Form.Select name="num-of-horns" onChange={this.handleSelect}>
                        {options}
                    </Form.Select>
                </Form.Label>
            </Form>
        )
    }
}

export default Filter;