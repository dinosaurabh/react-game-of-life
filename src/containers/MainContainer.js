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

    render() {
        return (
            <div>
                <GridComponent
                    gridState = {this.state.gridState}
                />
                <div>
                    <h1> Generation : {this.state.generation} </h1>
                </div>
            </div>
        )
    }
}

export default MainContainer