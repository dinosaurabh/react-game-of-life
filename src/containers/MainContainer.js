import React from 'react';
import ReactDOM from 'react-dom';
import GridComponent from "../components/GridComponent";
import CellComponent from "../components/CellComponent";
import ButtonComponent from "../components/ButtonComponent";


class MainContainer extends React.Component {

    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation : 0,
            gridState: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    selectCell = (row, col) => {
        console.log("in select cell");
        let gridCopy = arrayClone(this.state.gridState);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState(
            {
                gridState : gridCopy
            }
        )
    }

    render() {
        return (
            <div>
                <GridComponent
                    gridState = {this.state.gridState}
                    selectCell = {this.selectCell}
                />
                <div>
                    <h1> Generation : {this.state.generation} </h1>
                </div>
            </div>
        )
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

export default MainContainer