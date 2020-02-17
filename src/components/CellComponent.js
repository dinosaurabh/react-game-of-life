import React from 'react';
import ReactDOM from 'react-dom';

class CellComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    selectCell = () => {
        this.props.selectCell(this.props.row, this.props.col)
    }
    render() {
        // console.log(this.props);
        return (
            <div 
                className = {this.props.cellState}
                onClick = {this.selectCell}
            />
        )
    }
}

export default CellComponent;