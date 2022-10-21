import React from 'react';

import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
    render() {
        let numOptions = [1, 2, 3, 100];
        let options = numOptions.map(element => {
            return <option value={element}>{element}</option>
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