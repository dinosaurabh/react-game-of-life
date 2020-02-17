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
        let gridCopy = arrayClone(this.state.gridState);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState(
            {
                gridState : gridCopy
            }
        )
    }

    seed = () => {
        let gridCopy = arrayClone(this.state.gridState);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState(
            {
                gridState : gridCopy
            }
        )
    }

    componentDidMount() {
        this.seed();
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