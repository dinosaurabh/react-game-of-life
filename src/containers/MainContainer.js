import React from 'react';
import ReactDOM from 'react-dom';
import GridComponent from "../components/GridComponent";
import CellComponent from "../components/CellComponent";
import ButtonsComponent from "../components/ButtonsComponent";


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

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    }

    play = () => {
        let grid = this.state.gridState;
        let gridCopy = arrayClone(this.state.gridState);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let aliveNeighbours = numberOfAliveNeighbours(grid, i, j)
                // if the current cell is alive
                if (gridCopy[i][j]) {
                    // the cell dies of underpopulation
                    if (aliveNeighbours < 2) {
                        gridCopy[i][j] = false;
                    }
                    // the cell dies of overpopulation
                    if (aliveNeighbours > 3) {
                        gridCopy[i][j] = false;
                    }
                }
                // if the current cell is dead
                else {
                    // the cell comes to life
                    if (aliveNeighbours === 3) {
                        gridCopy[i][j] = true;
                    }
                }
            }
        }
        this.setState(
            {
                gridState : gridCopy,
                generation : this.state.generation + 1
            }
        )
        
    }

    pauseButton = () => {
        clearInterval(this.intervalId);
    }


    componentDidMount() {
        this.seed();
    }

    render() {
        return (
            <div>
                <ButtonsComponent
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                />
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

function numberOfAliveNeighbours(grid, i, j) {
    let count = 0;
    let offset = [0, 1, -1];
    // generate neighbour indices
    for (let r = 0; r < offset.length; r++) {
        for (let c = 0; c < offset.length; c++) {
            let rowIndex = i + offset[r];
            let colIndex = j + offset[c];
            if (isValidIndex(grid,rowIndex, colIndex) && grid[rowIndex][colIndex]) {
                count++;
            }
        }
    }
    return count;
}

function isValidIndex(grid, i, j) {
    return ((i >= 0) && (i < grid.length) && (j >= 0) && (j < grid[0].length));
}

export default MainContainer