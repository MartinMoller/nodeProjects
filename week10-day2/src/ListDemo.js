import React, { Component } from 'react';

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
            value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function TableData(props) {
    return <tr><td>{props.value}</td></tr>
}

class NumberTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.numbers.map((num, index) =>
            <TableData key={index} value={num} />
        )

        return <table>
            <tbody>
                <tr>
                    <th>Number</th>
                </tr>

                {listItems}

            </tbody>
        </table>
    }
}
class ListDemo extends Component {
    constructor() {
        super();
        this.state = { numbers: [1, 5, 6] };
    }
    render() {
        return <NumberList numbers={this.state.numbers} />
    }
}

//export default ListDemo;
export default NumberTable;