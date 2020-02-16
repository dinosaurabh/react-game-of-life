import React from 'react';
import ReactDOM from 'react-dom';
import CellComponent from "./CellComponent";

class GridComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.gridState = this.props.gridState;
        this.rows = this.props.gridState.length;
        this.cols = this.props.gridState[0].length;
    }

    render() {
        const width = this.cols * 16;
        const rowsArray = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const cellId = i + "_" + j;
                const cellState = this.props.gridState[i][j] ? "cell alive" : "cell dead";
                rowsArray.push(
                    <CellComponent
                        key = {cellId}
                        cellState = {cellState}
                    />

                )
            }
        }
        return (
            <div className = "grid" style = {{width : width}}>
                {rowsArray}
            </div>

        )
    }
}

export default GridComponent;